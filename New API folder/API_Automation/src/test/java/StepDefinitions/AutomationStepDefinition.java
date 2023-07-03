package StepDefinitions;

import static org.testng.Assert.*;

import java.util.List;
import org.hamcrest.Matchers;
import org.testng.Assert;
import org.testng.asserts.Assertion;

import static io.restassured.RestAssured.given;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import utils.PropertyReader;

public class AutomationStepDefinition {
	protected Response response;
    protected ValidatableResponse json;
    protected RequestSpecification requestSpecification;
	
	@Given("User configure the base URL")
	public void user_configure_the_base_url() {
		RestAssured.baseURI = PropertyReader.readApplicationFile("BaseURL");
	}

	@When("I Execute the GET method")
	public void i_execute_the_get_method() {
		response = given()
				   .contentType(ContentType.JSON)
					//.log().all()
					 .when().get();
		//System.out.println("Response is: " + response.body().asString());

	}

	@Then("I Verify status code {int}")
	public void i_verify_status_code(int statusCode) {
		Assert.assertEquals(response.statusCode(), statusCode, "Status code should be displayed 200");
	}

	@Then("I Verify response time is below {int} milisecond")
	public void i_verify_response_time_is_below_milisecond(int responseTime) {
		Long responseTimeInLong= (long) responseTime;
		ValidatableResponse validatableResponse = response.then();
		validatableResponse.time(Matchers.lessThan(responseTimeInLong));
	   
	}

	@Then("I Verify ID field is never null or empty")
	public void i_verify_id_field_is_never_null_or_empty() {
		JsonPath js= new JsonPath(response.asString());
		List<String> ids = js.get("data.id");
			for(String id:ids) {
				if(id==null || id.isEmpty()) {
					Assert.assertTrue(false, "id is never null or empty");
				}
			}
	}

	@Then("I Verify segment_type field is {string}")
	public void i_verify_segment_type_field_is(String segmentValue) {
		JsonPath js= new JsonPath(response.asString());
		List<String> segments = js.get("data.segment_type");
			for(String segment:segments) {
				if(!(segment.equalsIgnoreCase(segmentValue))) {
					System.out.println("Yes I am in");
					Assert.assertTrue(false, "all segment type always music");
				}
			}
	
	}

	@Then("I Verify primary field is never null or empty")
	public void i_verify_primary_field_is_never_null_or_empty() {
		JsonPath js= new JsonPath(response.asString());
		List<String> primaries = js.get("data.title_list.primary");
			for(String primary:primaries) {
					if(primary==null || primary.isEmpty()) {
						Assert.assertTrue(false, "primary is never null or empty");
					}
				}
	}

	@Then("I Verify only one now_playing is true")
	public void i_verify_only_one_now_playing_is_true() {
		JsonPath js = new JsonPath(response.asString());
		List<Boolean> nowPlayingList = js.get("data.offset.now_playing");
		int count=0;
		for (Boolean nowplaying : nowPlayingList) {
			if (nowplaying==true) {
				count++;
			}
		}
		System.out.println("Total number of time now playing is true " + count);
		Assert.assertTrue(count==1, "Now playing field should be true once only");

	}

	@Then("I Verify Date value in headers")
	public void i_verify_date_value_in_headers() {
		System.out.println("Date value" + response.header("Date"));
		Assert.assertEquals("Fri, 21 May", response.header("Date"), "Date header should be display value");

		
		
	}



}
