export default class PayBridge {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.paybridge.buzz";
  }

  async ping() {
    return {
      success: true,
      provider: "PayBridge"
    };
  }
}
