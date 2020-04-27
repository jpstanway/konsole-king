const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const stripe = require("stripe")("sk_test_qfpFcLmY2nnB6TYAhv2ScnHk00yRKMBges");

// middleware
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// create payment intent object for client side
app.get("/secret/:total", async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.params.total,
    currency: "cad",
  });

  res.json({ client_secret: paymentIntent.client_secret });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
