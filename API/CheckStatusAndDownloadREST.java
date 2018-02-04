package API;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
 
public class CheckStatusAndDownloadREST {
 
    public static void main(String[] args) throws MalformedURLException, IOException, JSONException {
 
        String API_KEY = "c2I2dnN0RTRCZnNZOjF4UGozMmtIVUg0Sg==";
        String url = "https://sandbox.esignlive.com/api/packages";
 
        URL client = new URL(url + "/1edd9f11-9bcc-4587-94e8-aa6478bbda4d/");
        HttpURLConnection conn = (HttpURLConnection) client.openConnection();
        conn.setRequestProperty("Content-Type", "application/json");
        conn.setRequestProperty("Authorization", "Basic " + API_KEY);
        conn.setRequestProperty("Accept", "application/json");
 
        int responseCode = ((HttpURLConnection) conn).getResponseCode();
         
        if (responseCode == 200) {
            System.out.println(responseCode + " OK!");
            BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();
 
            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
 
            in.close();
            conn.disconnect();
             
            JSONObject json = new JSONObject(response.toString());
            System.out.println(json.getString("status"));
             
        } else {
            System.out.println("Request did not succeed.");
        }  
 
        URL client2 = new URL(url + "/1edd9f11-9bcc-4587-94e8-aa6478bbda4d/signingStatus");
        HttpURLConnection conn2 = (HttpURLConnection) client2.openConnection();
        conn2.setRequestProperty("Content-Type", "application/json");
        conn2.setRequestProperty("Authorization", "Basic " + API_KEY);
        conn2.setRequestProperty("Accept", "application/json");
 
        int responseCode2 = ((HttpURLConnection) conn2).getResponseCode();
         
        if (responseCode2 == 200) {
            System.out.println(responseCode2 + " OK!");
     
            BufferedReader in2 = new BufferedReader(new InputStreamReader(conn2.getInputStream()));
            String inputLine2;
            StringBuffer response2 = new StringBuffer();
     
            while ((inputLine2 = in2.readLine()) != null) {
                response2.append(inputLine2);
            }
     
            in2.close();
            conn2.disconnect();
             
            JSONObject json2 = new JSONObject(response2.toString());
            System.out.println(json2.getString("status")); 
     
            if (json2.getString("status").equals("COMPLETED")) {
     
                URL client3 = new URL(url + "/1edd9f11-9bcc-4587-94e8-aa6478bbda4d/documents/zip");
                HttpURLConnection conn3 = (HttpURLConnection) client3.openConnection();
                conn3.setRequestProperty("Content-Type", "application/json");
                conn3.setRequestProperty("Authorization", "Basic " + API_KEY);
                conn3.setRequestProperty("Accept", "application/zip");
     
                int responseCode3 = ((HttpURLConnection) conn3).getResponseCode();
                System.out.println(responseCode3 + " OK!");
                System.out.println("Downloading zip files....");
         
                InputStream inputStream = conn3.getInputStream();
                String saveFilePath = "C:/Users/your_account/Desktop/yourFiles.zip";
     
                FileOutputStream outputStream = new FileOutputStream(saveFilePath);
     
                int bytesRead = -1;
                byte[] buffer = new byte[4096];
                 
                while ((bytesRead = inputStream.read(buffer)) != -1) {
                    outputStream.write(buffer, 0, bytesRead);
                }
                 
                System.out.println("Zip files downloaded!");
                outputStream.close();
                inputStream.close();
                conn3.disconnect();
                 
                URL client4 = new URL(url + "/1edd9f11-9bcc-4587-94e8-aa6478bbda4d/evidence/summary");
                HttpURLConnection conn4 = (HttpURLConnection) client4.openConnection();
                conn4.setRequestProperty("Content-Type", "application/json");
                conn4.setRequestProperty("Authorization", "Basic " + API_KEY);
                conn4.setRequestProperty("Accept", "application/pdf");
     
                int responseCode4 = ((HttpURLConnection) conn4).getResponseCode();
                System.out.println(responseCode4 + " OK!");
                System.out.println("Downloading evidence summary....");
                 
                inputStream = conn4.getInputStream();
                saveFilePath = "C:/Users/your_account/Desktop/evidenceSummary.pdf";
     
                outputStream = new FileOutputStream(saveFilePath);
     
                bytesRead = -1;
                buffer = new byte[4096];
                while ((bytesRead = inputStream.read(buffer)) != -1) {
                    outputStream.write(buffer, 0, bytesRead);
                }
                 
                System.out.println("Evidence summary downloaded!");
                outputStream.close();
                inputStream.close();
                conn4.disconnect();
                 
            } else {
                System.out.println("The package has not been signed yet!");
            }
        } else {
            System.out.println("Request did not succeed!");
        }
    }
}