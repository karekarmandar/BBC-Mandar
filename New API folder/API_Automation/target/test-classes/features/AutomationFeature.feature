Feature: As a User we are executing ottplatform media API
  and verify the different response data
  
Background: User setup the API base url 
    Given User configure the base URL
  
    
  @automation
  Scenario: User execute the ottplatform media API and verify status code and time
    When I Execute the GET method 
    Then I Verify status code 200
    And  I Verify response time is below 1000 milisecond
      
  @automation
  Scenario: User execute the ottplatform media API, verify ID field is never null or empty and segment_type is music
    When I Execute the GET method 
    Then I Verify ID field is never null or empty
    And  I Verify segment_type field is "music"
      
  @automation
  Scenario: User execute the ottplatform media API, verify primary field in title list is never null or empty
    When I Execute the GET method 
    Then I Verify primary field is never null or empty
   
  @automation
  Scenario: User execute the ottplatform media API, verify only one now_playing field in offset is true
    When I Execute the GET method 
    Then I Verify only one now_playing is true
   
  @automation
  Scenario: User execute the ottplatform media API, verify date value in headers
    When I Execute the GET method 
    Then I Verify Date value in headers
  