package stepDefinition;

import java.io.File;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
WebDriver driver;
	
	@Given("^a web browser is at Google home page$")
	public void a_web_browser_is_at_Google_home_page() throws Throwable {
//		File file = new File("/Users/poojakasture/Downloads/geckodriver");  
//		System.setProperty("webdriver.gecko.driver", file.getAbsolutePath());
//		driver = new FirefoxDriver();

		File file = new File("src/test/resources/chromedriver");  		
		System.setProperty("webdriver.chrome.driver", file.getAbsolutePath());
		ChromeOptions option = new ChromeOptions();
		option.addArguments("disable-infobars");
		driver = new ChromeDriver(option);

		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);	
		driver.get("https://www.google.com/");  
	}
   
	@When("^the user enters \"([^\"]*)\" into the search bar$")
     public void the_user_enters_into_the_search_bar(String searchtext) throws Throwable {
		WebElement element  = driver.findElement(By.name("q"));
		element.sendKeys(searchtext);
		element.submit();
   	}
	
	@Then("^links related to \"([^\"]*)\" are shown on the result page.$")
	public void links_related_to_are_shown_on_the_result_page(String searchtext) throws Throwable {
		List<WebElement> linksWebElementList = driver.findElements(By.xpath("//*[@id='rso']//h3/a"));
		for (WebElement webElement : linksWebElementList)
	    {
	        System.out.println(webElement.getAttribute("href"));
	    }
		  
		String searchUrl = driver.getCurrentUrl().toLowerCase();
		assert(searchUrl).contains("paxos");
		
		List<WebElement> searchResults = driver.findElements(By.className("g"));
		for (WebElement searchResult : searchResults){
		    String searchText = searchResult.getText().toLowerCase();
		    assert(searchText.contains("paxos"));
		    assert(searchText.contains("bankchain"));
		}
	}
	
	@Then("^application should closed$")
	public void application_should_closed() throws Throwable {
		driver.quit();
	}

}
