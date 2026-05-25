export default class PayBridge {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.paybridge.website";
  }

  async ping() {
    return {
      success: true,
      provider: "PayBridge"
    };
  }
}
