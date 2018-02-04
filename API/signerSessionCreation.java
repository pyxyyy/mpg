package example.codes;

import com.silanis.esl.sdk.*;
import com.silanis.esl.sdk.builder.*;

public class signerSessionCreation {
	
	private static final String api_key = "c2I2dnN0RTRCZnNZOjF4UGozMmtIVUg0Sg==";
	private static final String api_url = "https://sandbox.esignlive.com/api";

	public static void main(String[] args) {
		
		EslClient eslClient = new EslClient(api_key, api_url);


		//insert document name, first name, last name, transaction name, generic file,
		DocumentPackage testPackage = PackageBuilder.newPackageNamed("Example hadar")
				.withSigner(SignerBuilder.newSignerWithEmail("wenrui@berkeley.edu")
						.withFirstName("John")
						.withLastName("Doe")
						.withCustomId("Signer1")
						.signingOrder(1))
				.withSigner(SignerBuilder.newSignerWithEmail("smellysocks12314@gmail.com")
						.withFirstName("Ray")
						.withLastName("Liau")
						.withCustomId("Signer2")
						.signingOrder(2))
				.withDocument(DocumentBuilder.newDocumentWithName("Test Document")
						.fromFile("/C:/Users/Wen Rui/Google Drive/Berkeley/DevHacks/mpg/API/LegalAgreement.pdf")
						.withSignature(SignatureBuilder.captureFor("wenrui@berkeley.edu")
                        .atPosition(100, 640)
                        .onPage(0))
                        .withSignature(SignatureBuilder.captureFor("smellysocks12314@gmail.com")
                                .atPosition(100, 740)
                                .onPage(0)))
				.build();
		
		PackageId packageId = eslClient.createAndSendPackage(testPackage);
		
		String signerAuthenticationToken = eslClient.getAuthenticationTokensService().createSignerAuthenticationToken(packageId.toString(), "Signer1");
		
		AuthenticationClient authClient = new AuthenticationClient("https://sandbox.esignlive.com");
		
		String url = authClient.buildRedirectToSigningForSigner(signerAuthenticationToken, packageId.getId());
		
		System.out.println(url);


		String signerAuthenticationToken2 = eslClient.getAuthenticationTokensService().createSignerAuthenticationToken(packageId.toString(), "Signer2");

		String url2 = authClient.buildRedirectToSigningForSigner(signerAuthenticationToken2, packageId.getId());

		System.out.println(url2);

	}

}
