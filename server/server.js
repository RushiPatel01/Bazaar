const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT;
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Connect to MongoDB       
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bazar_hhh', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

// Define Schema and Model
const PaymentSchema = new mongoose.Schema({
  tokenId: String,
  amount: Number,
  currency: String,
  createdAt: { type: Date, default: Date.now },
});

const Payment = mongoose.model("Payment", PaymentSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/pay", async (req, res) => {
  console.log(req.body.token);
  try {
    const payment = await Stripe.charges.create({
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "usd",
    });
    // Store payment data in MongoDB
    await Payment.create({
      tokenId: req.body.token.id,
      amount: req.body.amount,
      currency: "usd",
    });
    res.send("Payment successful");
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).send("Error processing payment");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
