export default function mpg() {
    const dwolla = require('dwolla-v2');

    const client = new dwolla.Client({id: "PkAsSdVJyZbUZSB7RkCd636M1CsgF6KKeZrt6ilq8xSMw9uMXc", secret: "8Lo1LatM1cVAhEmpPEZ9Es0btxiZFF6PVAUl4xp14LTOsccHBl"});

    const appToken = new client.Token({access_token: "GnlMMOlLLTTwRRC44gGPkjfsVbVtwzkptDVdIB0fwGwLnV481N"});

    const requestBody = {
        _links: {
            source: {
                href: 'https://api-sandbox.dwolla.com/funding-sources/118b08b9-e1eb-48b7-94ad-866989b0764e'
            },
            destination: {
                href: 'https://api-sandbox.dwolla.com/funding-sources/2fa64102-185d-443d-9001-dda9bc37651d'
            }
        },
        amount: {
            currency: 'USD',
            value: '1.00'
        }
    };

    appToken
        .post('transfers', requestBody)
        .then(function(res) {
            res.headers.get('location'); // => 'https://api-sandbox.dwolla.com/transfers/74c9129b-d14a-e511-80da-0aa34a9b2388'
        });

}

