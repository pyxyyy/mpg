import dwollav2
import sys

#data = sys.argv
#source = data[1]
#dest = data[2]
#amount = data[3]

source = '5582faeb-423d-4965-bd6f-8c650f868fd9'
dest = '5eaa7d0a-c1d9-45fe-88ed-4b715246aab5'
amount = '100.00'

client = dwollav2.Client(
  id =  'PkAsSdVJyZbUZSB7RkCd636M1CsgF6KKeZrt6ilq8xSMw9uMXc',
  secret = '8Lo1LatM1cVAhEmpPEZ9Es0btxiZFF6PVAUl4xp14LTOsccHBl',
  environment = 'sandbox'
)

app_token = client.Token(access_token = 'fswTS5QVRapWXXXUuBnb1PyWbPMZyHT3zvDEFwIse434q4baMb')

request_body = {
  '_links': {
    'source': {
      'href': 'https://api-sandbox.dwolla.com/funding-sources/' + source
    },
    'destination': {
      'href': 'https://api-sandbox.dwolla.com/funding-sources/' + dest
    }
  },
  'amount': {
    'currency': 'USD',
    'value': amount
  }
}

transfer = app_token.post('transfers', request_body)
transfer.headers['location'] # => 'https://api-sandbox.dwolla.com/transfers/74c9129b-d14a-e511-80da-0aa34a9b2388'
print "Transaction Successful!"
