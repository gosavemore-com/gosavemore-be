const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY_SECRET);
const asyncHandler = require("express-async-handler");

// @desc payment intent stripe
// @route POST /api/payment
// @access Public

const paymentOrder = asyncHandler(async (req, res) => {
  const { money, email } = req.body;
  // Create a PaymentIntent with the order amount and currency

  const calculateOrderAmount = (money) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client

    return money;
  };

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(money),
    currency: "usd",
    payment_method_types: ["card"],
    receipt_email: email,
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

// add product details later once implemented in FE
const checkoutOrder = asyncHandler(async (req, res) => {
  const { priceId, amount, modeOfPayment } = req.body;

  // See https://stripe.com/docs/api/checkout/sessions/create
  // for additional parameters to pass.
  try {
    let line_items_data = [];

    if (modeOfPayment === "payment") {
      line_items_data.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: "Stubborn Attachments",
            images: ["https://i.imgur.com/EHyR2nP.png"],
          },
          unit_amount: amount,
        },
        quantity: 1,
      });
    } else {
      line_items_data.push({
        price: priceId,
        // For metered billing, do not pass quantity
        quantity: 1,
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: line_items_data,
      mode: modeOfPayment,
      success_url: `http://localhost:3000?success=true`,
      cancel_url: `http://localhost:3000?canceled=true`,
    });

    res.json({ id: session.id });
  } catch (e) {
    res.status(400);
    return res.send({
      error: {
        message: e.message,
      },
    });
  }
});

module.exports = { paymentOrder, checkoutOrder };
