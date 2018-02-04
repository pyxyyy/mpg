import dwollav2

request_body = {
  'firstName': 'John',
  'lastName': 'Doe',
  'email': 'jdoe@nomail.net',
  'type': 'personal',
  'address1': '99-99 33rd St',
  'city': 'Some City',
  'state': 'NY',
  'postalCode': '11101',
  'dateOfBirth': '1970-01-01',
  # For the first attempt, only the
  # last 4 digits of SSN required
  # If the entire SSN is provided,
  # it will still be accepted
  'ssn': '1234'
}

client = dwollav2.Client(
  id =  'PkAsSdVJyZbUZSB7RkCd636M1CsgF6KKeZrt6ilq8xSMw9uMXc',
  secret = '8Lo1LatM1cVAhEmpPEZ9Es0btxiZFF6PVAUl4xp14LTOsccHBl',
  environment = 'sandbox'
)

app_token = client.Token(access_token = '4qeI39P2AKa6ItlxrvP8nRM3qUjLgcXWdWogqd6EayBuiAE2Cw')

customer = app_token.post('customers', request_body)
customer.headers['location']