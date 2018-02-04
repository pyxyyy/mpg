export default function mpg() {
var ws;
 
        function onLoad() {
            ws = new WebSocket("ws://localhost:5000/websocket");
 
            ws.onmessage = function(e) {
               alert(e.data);
            };
        }
 
        function sendMsg() {
            ws.send(document.getElementById('msg').value);
        }
}
/*
export function send(sender, receiver, amount) {
  if (amount < 0) {
    throw "Invalid amount!";
  }
  sign(sender, receiver, amount);
  checkSignature(sender);
}

export function openSend(sender, receiver, amount) {
  if (amount < 0) {
    throw "Invalid amount!";
  }
  sign(sender, receiver, amount);
  checkSignature(receiver);
  //runPyScript(sender = '5582faeb-423d-4965-bd6f-8c650f868fd9', receiver = '5eaa7d0a-c1d9-45fe-88ed-4b715246aab5', amount = '500.00');
}


export function requestFunds(requester, sender, amount) {
  if (amount < 0) {
    throw "Invalid amount!";
  }
  sign(requester, sender, amount);
  checkSignature(requester);
}

export function openRequest(requester, sender, amount) {
  if (amount < 0) {
    throw "Invalid amount!";
  }
  sign(requester, sender, amount);
  checkSignature(sender);
  //runPyScript(sender = '5eaa7d0a-c1d9-45fe-88ed-4b715246aab5', requester = '5582faeb-423d-4965-bd6f-8c650f868fd9', amount = '500.00');
}

export function sign(sender, receiver, amount) {
  //signing WEN RUI
}

export function check(sender, receiver, amount) {
  return true; 
}

export function checkSignature(ID) {
  var SIGNATURE = check(ID);
  if (!SIGNATURE) {
    throw "Invalid Signature!";
  //} else {
    // DO NOTHING
  }
}
*/

