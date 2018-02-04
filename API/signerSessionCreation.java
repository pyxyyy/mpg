package example.codes;

import com.silanis.esl.sdk.*;
import com.silanis.esl.sdk.builder.*;

public class signerSessionCreation {
	
	private static final String api_key = "c2I2dnN0RTRCZnNZOjF4UGozMmtIVUg0Sg==";
	private static final String api_url = "https://sandbox.esignlive.com/api";

	public static void main(String[] args) {
		
		EslClient eslClient = new EslClient(api_key, api_url);


		//insert document name, first name, last name, transaction name, generic file,
		DocumentPackage testPackage = PackageBuilder.newPackageNamed("Example Package")
				.withSigner(SignerBuilder.newSignerWithEmail("smellysocks12314@gmail.com")
						.withFirstName("John")
						.withLastName("Smith")
						.withCustomId("Signer1"))
				.withDocument(DocumentBuilder.newDocumentWithName("Test Document")
						.fromFile("C:/Users/Wen Rui/Google Drive/Berkeley/DevHacks/mpg/API/dummyDoc.pdf")
						.withSignature(SignatureBuilder.signatureFor("wenrui@berkeley.edu")
								.atPosition(100, 100)
								.onPage(0)))
				.build();
		
		PackageId packageId = eslClient.createAndSendPackage(testPackage);
		
		String signerAuthenticationToken = eslClient.getAuthenticationTokensService().createSignerAuthenticationToken(packageId.toString(), "Signer1");
		
		AuthenticationClient authClient = new AuthenticationClient("https://sandbox.esignlive.com");
		
		String url = authClient.buildRedirectToSigningForSigner(signerAuthenticationToken, packageId.getId());
		
		System.out.println(url);

	}

}
