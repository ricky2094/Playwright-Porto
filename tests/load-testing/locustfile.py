from locust import task, between, HttpUser
from playwright_script import run_playwright_script

class PlaywrightUser(HttpUser):
    wait_time = between(1, 6)

    @task
    def perform_ui_actions(self):
        self.client.get("/")
        # run_playwright_script()