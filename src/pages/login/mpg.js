const dwolla = require('dwolla-v2');

// Navigate to https://www.dwolla.com/applications (production) or https://dashboard-sandbox.dwolla.com/applications (Sandbox) for your application key and secret.
const appKey = "PkAsSdVJyZbUZSB7RkCd636M1CsgF6KKeZrt6ilq8xSMw9uMXc";
const appSecret = "8Lo1LatM1cVAhEmpPEZ9Es0btxiZFF6PVAUl4xp14LTOsccHBl";
const client = new dwolla.Client({
  key: appKey,
  secret: appSecret,
  environment: 'sandbox' // optional - defaults to production
});

// create a token
client.auth.client()

export default function mpg() {
}




