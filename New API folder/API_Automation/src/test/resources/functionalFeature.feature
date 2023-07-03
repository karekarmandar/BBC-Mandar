Feature: As a User we are executing ottplatform media API
  and verify the different response data
  
Background: User setup the API base url 
    Given User configure the base URL
  
    
  @functionalTest
  Scenario: User execute the ottplatform media API and verify status code and number of records
    When I Execute the GET method 
    Then I Verify status code 200
    And  I Verify that total number of records are 14
      
  @functionalTest
  Scenario: User execute the ottplatform media API with incorrect resourse, verify status code is 404
    When I Execute the GET method with incorrect resource "https://testapi.io/api/ottplatform/mediaTest" 
    Then I Verify status code 404
      
  @functionalTest
  Scenario: User execute the ottplatform media API, verify tertiary field is always null in title list
    When I Execute the GET method 
    Then I Verify tertiary field is always null
   
  