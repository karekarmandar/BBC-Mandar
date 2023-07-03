package runners;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/features", 
	glue = { "StepDefinitions" }, 
			plugin = { "pretty", "html:test-output", "json:target/cucumber.json",
	"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"}, 	
	dryRun = false, 
	monochrome = true
	
	)


public class Runner  extends AbstractTestNGCucumberTests
{
	
}
