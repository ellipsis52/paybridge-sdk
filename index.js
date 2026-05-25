export class PayBridge {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.paybridge.buzz";
  }

  async createPayment(data) {
    const response = await fetch(`${this.baseUrl}/payments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`
      },
      body: JSON.stringify(data)
    });

    return response.json();
  }
}

export default PayBridge;
