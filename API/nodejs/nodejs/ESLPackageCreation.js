var request = require('request');
var formidable = require('formidable');
var fs = require('fs');
var http = require('http');


var document = fs.readFileSync('sample_contract2.pdf');
var token;
var packageid;
var api_key = 'c2I2dnN0RTRCZnNZOjF4UGozMmtIVUg0Sg==';

var eslFunctions = module.exports = 
{

  processForm: function (req, res) 
  {

  	var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields) {

    	var jsonPayload = '{ "roles": [ { "id": "Signer1", "type": "SIGNER", "signers": [ { "firstName": "' + fields.firstName + '", "lastName": "' + fields.lastName+ '", "email": "' + fields.emailAddress + '", "id": "Signer1" } ] }, { "id": "Sender1", "type": "SIGNER", "signers": [ { "firstName": "Haris", "lastName": "Haidary", "email": "sender@example.com", "id": "Sender1" } ] } ], "documents": [ { "fields": [ { "value": "' + fields.firstName + '", "name": "first_name" }, { "value": "' + fields.lastName + '", "name": "last_name" }, { "value": "' + fields.address + '", "name": "address" }, { "value": "' + fields.city + '", "name": "city" }, { "value": "' + fields.zip + '", "name": "zip" }, { "value": "' + fields.state + '", "name": "state" }, { "value": "' + fields.country + '", "name": "country" }, { "value": "' + fields.phoneNumber + '", "name": "phone_number" }, { "value": "' + fields.emailAddress + '", "name": "email" }, { "value": "' + fields.company + '", "name": "company" }, { "value": "' + fields.policyNumber + '", "name": "policy_number" } ], "name": "Sample Contract", "id" : "contract", "extract": true } ], "name": "NodeJS Example", "type": "PACKAGE", "status": "SENT" }';

		var options = 
		{ 
			method: 'POST',
			url: 'https://sandbox.esignlive.com/api/packages',
			headers: 
			{ 
			    accept: 'application/json',
			    authorization: 'Basic ' + api_key,
			    'content-type': 'multipart/form-data; boundary=---011000010111000001101001' },
			  formData: 
			   { file: 
			      { value: document,
			        options: { filename: '0', contentType: null }},
			     payload: jsonPayload } 
		};

		request(options, function (error, response, body) 
		{
			if (error) throw new Error(error);

			var tmp = JSON.parse(body);
			packageid = tmp['id'];
			console.log("The package id is: " + packageid);
			eslFunctions.getSignerToken(res);
					  
		});
		        
    });

  },

  getSignerToken: function (res) 
  {
 	
  	var options = 
  	{ 
  		method: 'POST',
		url: 'https://sandbox.esignlive.com/api/signerAuthenticationTokens',
		headers: 
		{ 	
		    'content-type': 'application/json',
		    accept: 'application/json',
		    authorization: 'Basic ' + api_key},
		  	body: { 
		  		packageId: packageid,
		     	signerId: 'Signer1' 
		    },
		  	json: true 
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		token = body['value'];
		console.log("The session token is: " + token);
		eslFunctions.complete(res);
		   
	});
		
  },

  complete: function(res) {

		res.writeHead(200, {
	            'content-type': 'text/html'
	        });
	    res.write('<html>');
	    res.write('<head>');
	    res.write('<title>Form Processing</title>');
	    res.write('</head>');
	    res.write('<body><h3>Thank you for completing the form! Please sign the document below:</h3>');
	    res.write('<iframe src="https://sandbox.esignlive.com/access?sessionToken=' + token + '" width="1000" height="800"></iframe>');
	    res.write('</body>');
	    res.write('</html>');
	    res.end();
	}

};

