package stepdefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;

public class ProductAdd {
	
	WebDriver driver;
	@And("^User Add Product to the cart\"([^\"]*)\"$")
    public void user_add_product_to_the_cartsomething() throws Throwable {
		WebElement CartButton1 = driver.findElement(By.xpath("//*[text()='Add to cart']"));
		CartButton1.click();
        
    }
	
	@Then("^User see product is added to the cart$")
    public void user_see_product_is_added_to_the_cart() throws Throwable {
		WebElement CartButtonCheck = driver.findElement(By.xpath("//*[@class='shopping_cart_badge']"));
		Assert.assertEquals("1",CartButtonCheck.getText());
        
    }


}
