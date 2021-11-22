$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login Feature Scenario",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Possitive Login Feature",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Opened Swag Lab Application",
  "keyword": "Given "
});
formatter.step({
  "name": "User Enters username \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Enter Password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User Should be on the Products Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Possitive Login Feature",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Opened Swag Lab Application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_opened_swag_lab_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_enters_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_enter_password_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should be on the Products Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_should_be_on_the_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Negetive Login Feature",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Opened Swag Lab Application",
  "keyword": "Given "
});
formatter.step({
  "name": "User Enters username \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Enter Password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User Should Get \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "password",
        "Error"
      ]
    },
    {
      "cells": [
        "standard",
        "aBC@1234",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Negetive Login Feature",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Opened Swag Lab Application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_opened_swag_lab_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters username \"standard\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_enters_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Password \"aBC@1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_enter_password_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Get \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_should_get_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});