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

  	//var form = new formidable.IncomingForm();

    //form.parse(req, function (err, fields) {

    	var jsonPayload = "{\"roles\":[{\"locked\":false,\"emailMessage\":{\"content\":\"\"},\"attachmentRequirements\":[],\"reassign\":false,\"specialTypes\":[],\"id\":\"Sender\",\"data\":null,\"type\":\"SIGNER\",\"index\":0,\"signers\":[{\"auth\":{\"challenges\":[],\"scheme\":\"NONE\"},\"company\":\"Silanis\",\"firstName\":\"yourFirst\",\"lastName\":\"yourLast\",\"phone\":\"\",\"email\":\"wenrui@berkeley.edu\",\"knowledgeBasedAuthentication\":null,\"language\":\"en\",\"title\":\"Silanis\",\"external\":null,\"professionalIdentityFields\":[],\"userCustomFields\":[],\"delivery\":{\"email\":true,\"provider\":false,\"download\":true},\"group\":null,\"signature\":null,\"address\":null,\"data\":null,\"name\":\"\",\"specialTypes\":[]}],\"name\":\"Sender\"},{\"locked\":false,\"emailMessage\":{\"content\":\"\"},\"attachmentRequirements\":[],\"reassign\":false,\"specialTypes\":[],\"id\":\"Signer\",\"data\":null,\"type\":\"SIGNER\",\"index\":0,\"signers\":[{\"auth\":{\"challenges\":[],\"scheme\":\"NONE\"},\"company\":\"\",\"firstName\":\"signerFirst\",\"lastName\":\"signerLast\",\"phone\":\"\",\"email\":\"smellysocks12314@gmail.com\",\"knowledgeBasedAuthentication\":null,\"language\":\"en\",\"title\":\"\",\"external\":null,\"professionalIdentityFields\":[],\"userCustomFields\":[],\"delivery\":{\"email\":false,\"provider\":false,\"download\":false},\"group\":null,\"id\":\"Signer\",\"signature\":null,\"address\":null,\"data\":null,\"name\":\"\",\"specialTypes\":[]}],\"name\":\"Signer\"}],\"documents\": [{\"approvals\":[{\"role\":\"Signer\",\"signed\":null,\"accepted\":null,\"data\":null,\"fields\":[{\"page\":0,\"subtype\":\"FULLNAME\",\"width\":200,\"binding\":null,\"extract\":false,\"extractAnchor\":null,\"left\":175,\"top\":165,\"validation\":null,\"height\":50,\"data\":null,\"type\":\"SIGNATURE\",\"value\":\"\"}],\"name\":\"\"},{\"role\":\"Sender\",\"signed\":null,\"accepted\":null,\"data\":null,\"fields\":[{\"page\":0,\"subtype\":\"FULLNAME\",\"width\":200,\"binding\":null,\"extract\":false,\"extractAnchor\":null,\"left\":550,\"top\":165,\"validation\":null,\"height\":50,\"data\":null,\"type\":\"SIGNATURE\",\"value\":\"\"}],\"name\":\"\"}],\"name\": \"sampleAgreement\"}],\"name\": \"Test Package REST\", \"type\":\"PACKAGE\", \"language\":\"en\", \"emailMessage\":\"\", \"description\":\"New Package\",\"autoComplete\":true,\"status\":\"SENT\"}";


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
			        options: { filename:  '0', contentType: null } },
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

