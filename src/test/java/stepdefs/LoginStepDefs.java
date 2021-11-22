package stepdefs;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDefs {
	
	WebDriver driver = Baseclass.driver;
	@Given("^User Opened Swag Lab Application$")
    public void user_opened_swag_lab_application() throws Throwable {
       
		System.setProperty("webdriver.chrome.driver", "chromedriver");
        
        
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(4000, TimeUnit.MILLISECONDS);
        
    }

    @When("^User Enters username \"([^\"]*)\"$")
    public void user_enters_username_something(String UserNameVal) throws Throwable {
    	WebElement UserName = driver.findElement(By.id("user-name"));
		UserName.sendKeys(UserNameVal);
        
    }
    
    @And("^User Enter Password \"([^\"]*)\"$")
    public void user_enter_password_something(String PasswordVal) throws Throwable {
    	WebElement password = driver.findElement(By.id("password"));
		password.sendKeys(PasswordVal);
       
    }

    @And("^Clicks on Login Button$")
    public void clicks_on_login_button() throws Throwable {
    	WebElement LoginButton = driver.findElement(By.id("login-button"));
		LoginButton.click();
        
    }

    @Then("^User Should be on the Products Page$")
    public void user_should_be_on_the_products_page() throws Throwable {
    	String Product="PRODUCTS";
    	WebElement search = driver.findElement(By.xpath("//*[text()='Products']"));
    	Assert.assertEquals(Product,search.getText());
    	
    	
       
    }

    @Then("^User Should Get \"([^\"]*)\"$")
    public void user_should_get_something(String error) throws Throwable {
    	WebElement search2 = driver.findElement(By.xpath("//*[text()='Epic sadface: Username and password do not match any user in this service']"));
    	Assert.assertEquals(error,search2.getText());
    }

    

}
