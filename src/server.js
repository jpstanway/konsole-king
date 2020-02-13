const express = require("express");
const app = express();
const stripe = require("stripe")("sk_test_qfpFcLmY2nnB6TYAhv2ScnHk00yRKMBges");

// create payment intent object for client side
app.get("/secret/:total", async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.params.total,
    currency: "cad"
  });

  res.json({ client_secret: paymentIntent.client_secret });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
