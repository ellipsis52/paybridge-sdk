import { PayFlowSDK } from "@payflow/sdk";

const sdk = new PayFlowSDK("sk_live_xxx");

const payment = await sdk.createPayment({
  amount: 5000,
  currency: "USD",
  customer_email: "client@example.com"
});

console.log(payment);
