//Get the order
function send_package() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://sandbox.esignlive.com/api/packages", true);
    xhttp.setRequestHeader('Authorization','Basic ' + 'c2I2dnN0RTRCZnNZOjF4UGozMmtIVUg0Sg==');
    xhttp.send();
    
    /*
    var foodItems = JSON.parse(xhttp.response).lineItems.elements;
    var json = JSON.parse(xhttp.response);

    console.log("test");

    var subtotal_price = 0;
    for (i=0; i<foodItems.length;i++){
    document.getElementById("name").innerHTML = JSON.parse(xhttp.response).lineItems.elements;

    var subtotal_price = 0;
    for (var i=0; i<foodItems.length;i++){
        subtotal_price +=foodItems[i].price;
    }
    var tax_price = 0.081 * subtotal_price;
    var total_price = tax_price + subtotal_price


    json.subtotal = (subtotal_price/100).toFixed(2);
    json.tax = (tax_price/100).toFixed(2);
    json.total =(total_price/100).toFixed(2);

    return json;
    */
}


//Get the order of pepperoni pizza and chocolate eclair
/*
function get_indv_order() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://apisandbox.dev.clover.com:443/v3/merchants/KAHSXBYJW39EJ/orders/90A0MA5SAK13E&access_token=2e0d0bab-2dca-bdaf-fc47-809789b4d60b", false);
    xhttp.send();
    var foodItems = JSON.parse(xhttp.response).lineItems.elements;
    var json = JSON.parse(xhttp.response);
    document.getElementById("name").innerHTML = JSON.parse(xhttp.response).lineItems.elements;

    var subtotal_price = 0;
    for (var i=0; i<foodItems.length;i++) {
        subtotal_price +=foodItems[i].price;
    }
    var tax_price = 0.081 * subtotal_price;
    var total_price = tax_price + subtotal_price


    json.subtotal = (subtotal_price/100).toFixed(2);
    json.tax = (tax_price/100).toFixed(2);
    json.total =(total_price/100).toFixed(2);

    return json;
}

function create_indv_payment() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://sandbox.dev.clover.com/v2/merchant/KAHSXBYJW39EJ/pay?access_token=2e0d0bab-2dca-bdaf-fc47-809789b4d60b", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(
        JSON.stringify({
            orderId: "90A0MA5SAK13E",
            taxAmount: 9,
            zip: "94041",
            expMonth: 1,
            cvv: "111",
            amount: 100,
            currency: "usd",
            last4: "6668",
            expYear: 2015,
            first6: "601136",
            cardEncrypted: "dAgD3puWRzEf3eFWMFDBf6IRhSWjUxAMsja/MsFUrzBcrLFR8OjPK0jCAfXsr0bQMeImGbE5chyao3TP1TUcCJq8TeCqEBXWUTZ48SBZlMjKTW9dDYeLnRERzPvegwlrDb2zTlsj75qqpso6TyzUu/iL8DrlSw0VwGUSInVPz+PJoy4OL6poOeyVZyvZSvqZw+XoXVdLJuxOFiOKlou0D7aK+pfqqvD0kwq+jGR8/qnd56hnyEU8wqXdRUI37LAYd1JLJbxdS8sFOq5XGbH7/gxMTNERfY07rTo9Oohx4Ls6xuPyT4kCWXrYJFyMrN/D2Z0uV3gpxfHL7FaB4oSQSg=="
        }));
    return JSON.parse(xhttp.response);
}
