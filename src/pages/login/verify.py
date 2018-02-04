import dwollav2
client = dwollav2.Client(
  id =  'PkAsSdVJyZbUZSB7RkCd636M1CsgF6KKeZrt6ilq8xSMw9uMXc',
  secret = '8Lo1LatM1cVAhEmpPEZ9Es0btxiZFF6PVAUl4xp14LTOsccHBl',
  environment = 'sandbox'
)

app_token = client.Token(access_token = '4qeI39P2AKa6ItlxrvP8nRM3qUjLgcXWdWogqd6EayBuiAE2Cw')


funding_source_url = 'https://api-sandbox.dwolla.com/funding-sources/692486f8-29f6-4516-a6a5-c69fd2ce854c'

request_body = {
  "_links": {
    "self": {
      "href": "https://api-sandbox.dwolla.com/sandbox-simulations",
      "type": "application/vnd.dwolla.v1.hal+json",
      "resource-type": "sandbox-simulation"
    }
  },
  "total": 8
}


# Using dwollav2 - https://github.com/Dwolla/dwolla-v2-python (Recommended)
funding_source = app_token.post('funding-sources', request_body)
funding_source.body['name']

print 'Transaction Posted'