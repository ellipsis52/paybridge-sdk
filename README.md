# paybridge-sdk

A JavaScript/Node.js SDK for integrating with the PayBridge payment gateway.

## Features

- Easy integration with the PayBridge API
- Supports common payment operations (charges, refunds, subscriptions)
- Promise-based async API

## Installation

```bash
npm install paybridge-sdk
```

## Usage

```js
const PayBridge = require('paybridge-sdk');

const client = new PayBridge({ apiKey: 'YOUR_API_KEY' });

// Create a charge
const charge = await client.charges.create({
  amount: 1000,  // amount in cents
  currency: 'USD',
  source: 'tok_visa',
  description: 'Example charge',
});
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
