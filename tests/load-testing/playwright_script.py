from playwright.sync_api import sync_playwright

def run_playwright_script():
    print("Starting Playwright script...")
    with sync_playwright() as p:
            print("Launching browser...")
            browser = p.chromium.launch(headless=False)  # Open in non-headless mode for visibility
            page = browser.new_page()
            print("Opening page...")
            page.goto("https://saucedemo.com")  # Navigate to a simple website
            print("Page Loaded...")
            page.fill("#user-name", "standard_user")
            page.fill("#password", "secret_sauce")
            page.click("#login-button")
            page.wait_for_selector("#shopping_cart_container")
            print("success login...")

            browser.close()
            print("Browser closed")


if __name__ == "__main__":
    run_playwright_script()
