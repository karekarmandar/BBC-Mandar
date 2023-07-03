$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/AutomationFeature.feature");
formatter.feature({
  "name": "As a User we are executing ottplatform media API",
  "description": "  and verify the different response data",
  "keyword": "Feature"
});
formatter.background({
  "name": "User setup the API base url",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User configure the base URL",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.AutomationStepDefinition.user_configure_the_base_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User execute the ottplatform media API and verify status code and time",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@automation"
    }
  ]
});
formatter.step({
  "name": "I Execute the GET method",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.AutomationStepDefinition.i_execute_the_get_method()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.AutomationStepDefinition.i_verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify response time is below 1000 milisecond",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.AutomationStepDefinition.i_verify_response_time_is_below_milisecond(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected response time was not a value less than \u003c1000L\u003e milliseconds, was 2934 milliseconds (2934 milliseconds).\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:73)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:60)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:86)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:57)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:512)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:139)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:696)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.this$2$validateResponseIfRequired(ResponseSpecificationImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:198)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:62)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:49)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.time(ResponseSpecificationImpl.groovy:127)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.time(ValidatableResponseOptionsImpl.java:409)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.time(ValidatableResponseOptionsImpl.java:405)\r\n\tat StepDefinitions.AutomationStepDefinition.i_verify_response_time_is_below_milisecond(AutomationStepDefinition.java:51)\r\n\tat ✽.I Verify response time is below 1000 milisecond(file:///C:/Users/Imran/eclipse-workspace/API_Automation/src/test/java/features/AutomationFeature.feature:12)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "User setup the API base url",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User configure the base URL",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.AutomationStepDefinition.user_configure_the_base_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User execute the ottplatform media API, verify ID field is never null or empty and segment_type is music",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@automation"
    }
  ]
});
formatter.step({
  "name": "I Execute the GET method",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.AutomationStepDefinition.i_execute_the_get_method()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify ID field is never null or empty",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.AutomationStepDefinition.i_verify_id_field_is_never_null_or_empty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify segment_type field is \"music\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.AutomationStepDefinition.i_verify_segment_type_field_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User setup the API base url",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User configure the base URL",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.AutomationStepDefinition.user_configure_the_base_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User execute the ottplatform media API, verify primary field in title list is never null or empty",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@automation"
    }
  ]
});
formatter.step({
  "name": "I Execute the GET method",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.AutomationStepDefinition.i_execute_the_get_method()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify primary field is never null or empty",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.AutomationStepDefinition.i_verify_primary_field_is_never_null_or_empty()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User setup the API base url",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User configure the base URL",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.AutomationStepDefinition.user_configure_the_base_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User execute the ottplatform media API, verify only one now_playing field in offset is true",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@automation"
    }
  ]
});
formatter.step({
  "name": "I Execute the GET method",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.AutomationStepDefinition.i_execute_the_get_method()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify only one now_playing is true",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.AutomationStepDefinition.i_verify_only_one_now_playing_is_true()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User setup the API base url",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User configure the base URL",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.AutomationStepDefinition.user_configure_the_base_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User execute the ottplatform media API, verify date value in headers",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@automation"
    }
  ]
});
formatter.step({
  "name": "I Execute the GET method",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.AutomationStepDefinition.i_execute_the_get_method()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Date value in headers",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.AutomationStepDefinition.i_verify_date_value_in_headers()"
});
formatter.result({
  "status": "passed"
});
});