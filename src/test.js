import { Builder, By, Key, until } from "selenium-webdriver";

let driver;
describe("Test the application", () => {
  beforeEach(() => {
    driver = new Builder()
      .forBrowser("chrome") // Replace with your desired browser
      .build();
  });

  afterEach(() => {
    driver.quit();
  });

  it("should navigate to the application and perform a test", async () => {
    await driver.get("http://localhost:5173"); // Replace with your application's URL

    // Add more assertions and interactions as needed
  });
});
