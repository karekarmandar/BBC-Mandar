package utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Properties;

public class PropertyReader {
	public static String readApplicationFile(String key) {
		String value = "";
		try {
			String propertyFilePath = System.getProperty("user.dir") + "/src/test/java/config/application.properties";
			Properties prop = new Properties();
			File f = new File(propertyFilePath);
				prop.load(new FileInputStream(f));
				value = prop.getProperty(key);

		}
		catch (FileNotFoundException ex) {
            System.out.println("FileNotFoundException Occured while loading properties file");
        }
		catch (Exception e) {
			System.out.println("Failed to read from application.properties file.");
		}
		return value;
	}


}