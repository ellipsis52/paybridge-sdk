export class PayFlowSDK {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = "https://api.payflow.buzz";
  }

  async request(endpoint, method = "GET", body = null) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`
      },
      body: body ? JSON.stringify(body) : null
    });

    return response.json();
  }

  async createPayment(data) {
    return this.request("/payments", "POST", data);
  }

  async getPayment(id) {
    return this.request(`/payments/${id}`);
  }
}
