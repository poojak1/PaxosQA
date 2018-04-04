package stepDefinition;

import java.io.File;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
	private WebDriver webDriver;
	private File chromeDriverFile, firefoxDriverFile;
	private static String CHROME_DRIVER_FILE_PATH_OS = "src/test/resources/chromedriver";
	private static String CHROME_DRIVER_FILE_PATH_OTHER = CHROME_DRIVER_FILE_PATH_OS + ".exe";
	private static String FIREFOX_DRIVER_FILE_PATH_OS = "src/test/resources//geckodriver";
	private static String FIREFOX_DRIVER_FILE_PATH_OTHER = FIREFOX_DRIVER_FILE_PATH_OS + ".exe";
	private String os = System.getProperty("os.name");
	
	@Given("^chrome a web browser is at Google home page$")
	public void chrome_a_web_browser_is_at_Google_home_page() throws Throwable {
		if(os.equals("Mac OS X")) {
			chromeDriverFile = new File(CHROME_DRIVER_FILE_PATH_OS);
		}else {
			chromeDriverFile = new File(CHROME_DRIVER_FILE_PATH_OTHER);
		}
		System.setProperty("webdriver.chrome.driver", chromeDriverFile.getAbsolutePath());
		ChromeOptions chromeOptions = new ChromeOptions();
		chromeOptions.addArguments("disable-infobars");
		webDriver = new ChromeDriver(chromeOptions);

		webDriver.manage().deleteAllCookies();
		webDriver.manage().window().maximize();
		webDriver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);	
		webDriver.get("https://www.google.com/");  
	}
   
	@Given("^firefox a web browser is at Google home page$")
	public void firefox_a_web_browser_is_at_Google_home_page() throws Throwable {
		if(os.equals("Mac OS X")) {
			firefoxDriverFile = new File(FIREFOX_DRIVER_FILE_PATH_OS);
		}else {
			firefoxDriverFile = new File(FIREFOX_DRIVER_FILE_PATH_OTHER);
		}
		System.setProperty("webdriver.gecko.driver", firefoxDriverFile.getAbsolutePath());
		webDriver = new FirefoxDriver();

		webDriver.manage().deleteAllCookies();
		webDriver.manage().window().maximize();
		webDriver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);	
		webDriver.get("https://www.google.com/");  
	}
   

	@When("^the user enters \"([^\"]*)\" into the search bar$")
     public void the_user_enters_into_the_search_bar(String searchText) throws Throwable {
		WebElement element  = webDriver.findElement(By.name("q"));
		element.sendKeys(searchText);
		element.submit();
   	}
	
	@Then("^links related to \"([^\"]*)\" are shown on the result page.$")
	public void links_related_to_are_shown_on_the_result_page(String searchText) throws Throwable {
		
		String[] splitSearchText = searchText.split("[^a-zA-Z]+");
		
		List<WebElement> linksWebElementList = webDriver.findElements(By.xpath("//*[@id='rso']//h3/a"));
		for (WebElement webElement : linksWebElementList)
	    {
	        System.out.println(webElement.getAttribute("href"));
	    }
		  
		String searchUrl = webDriver.getCurrentUrl().toLowerCase();
		assert(searchUrl).contains(splitSearchText[0].toLowerCase());
		assert(searchUrl).contains(splitSearchText[1].toLowerCase());
		
		List<WebElement> searchResults = webDriver.findElements(By.className("g"));
		for (WebElement searchResult : searchResults){
		    String searchResultText = searchResult.getText().toLowerCase();
		    assert(searchResultText.contains(splitSearchText[0].toLowerCase()));
		    assert(searchResultText.contains(splitSearchText[1].toLowerCase()));
		}
	
	}

	@Then("^application should closed$")
	public void application_should_closed() throws Throwable {
		webDriver.quit();
	}

}
