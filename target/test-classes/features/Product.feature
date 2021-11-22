@Product
Feature: Product Add Scenario

  Scenario Outline: Possitive Login Feature
    Given User Opened Swag Lab Application
    When User Enters username "<UserName>"
    And User Enter Password "<password>"
    And Clicks on Login Button
    And User Add Product to the cart"<Products>"
    Then User see product is added to the cart

    Examples: 
      | UserName      | password     | Products            |
      | standard_user | secret_sauce | Sauce Labs Backpack |
