function createJohn() {

var requestBody = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'jdoe@nomail.net',
  type: 'personal',
  address1: '99-99 33rd St',
  city: 'Some City',
  state: 'NY',
  postalCode: '11101',
  dateOfBirth: '1970-01-01',
  // For the first attempt, only the
  // last 4 digits of SSN required
  // If the entire SSN is provided,
  // it will still be accepted
  ssn: '1234'
};

appToken
  .post('customers', requestBody)
  .then(res => res.headers.get('location'));
}