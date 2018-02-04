
export function send_(sender, receiver, amount) {
  if (amount < 0) {
    throw "Invalid amount!";
  }
  //checkSignature(ID)
  //runPyScript('5582faeb-423d-4965-bd6f-8c650f868fd9', '5eaa7d0a-c1d9-45fe-88ed-4b715246aab5', '500.00')
}

export function requestFunds(requester, sender, amount) {
  if (amount < 0) {
    throw "Invalid amount!";
  }
  //request(ID);
  //checkSignature(ID);
  //mpg.py(sender, requester)
}

export function request(ID) {

}

export function checkSignature(ID) {
  var SIGNATURE = request(ID);
  if (!SIGNATURE) {
    throw "Invalid Signature!";
  //} else {
    // DO NOTHING
  //}
}

