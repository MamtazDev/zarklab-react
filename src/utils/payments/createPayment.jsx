// const stripe = require("stripe")("sk_test_pggpOl1FECwCoLsgXDTQjtjF00An8mKwrj");

import Stripe from "stripe";

export const createPaymentIntent = async (amountInCents, currency) => {
  const stripe = Stripe("sk_test_pggpOl1FECwCoLsgXDTQjtjF00An8mKwrj");
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: currency,
    });

    return paymentIntent.client_secret;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create PaymentIntent");
  }
};
