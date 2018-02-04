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
				.withSigner(SignerBuilder.newSignerWithEmail("teukgong@dae.com")
						.withFirstName("Wen")
						.withLastName("Rui")
						.withCustomId("Signer1"))
				.withSigner(SignerBuilder.newSignerWithEmail("teukjeon@sa.com")
						.withFirstName("John")
						.withLastName("Smith")
						.withCustomId("Signer2"))
				.withDocument(DocumentBuilder.newDocumentWithName("Test Document")
						.fromFile("/Users/syang2016/devweek/mpg/API/dummyDoc.pdf")
						.withSignature(SignatureBuilder.captureFor("teukgong@dae.com")
                        .atPosition(100, 100)
                        .onPage(0))
                        .withSignature(SignatureBuilder.captureFor("teukjeon@sa.com")
                                .atPosition(500, 100)
                                .onPage(0)))
				.build();
		
		PackageId packageId = eslClient.createAndSendPackage(testPackage);
		
		String signerAuthenticationToken = eslClient.getAuthenticationTokensService().createSignerAuthenticationToken(packageId.toString(), "Signer1");
		
		AuthenticationClient authClient = new AuthenticationClient("https://sandbox.esignlive.com");
		
		String url = authClient.buildRedirectToSigningForSigner(signerAuthenticationToken, packageId.getId());
		
		System.out.println(url);

	}

}
