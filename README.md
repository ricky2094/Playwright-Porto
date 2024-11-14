# Playwright POM Automation Portfolio
![Playwright Tests](https://github.com/ricky2094/Playwright-Porto/actions/workflows/playwright.yml/badge.svg)


This project demonstrates how to use Playwright with the Page Object Model (POM) design pattern.

## Project Structure

- `pages/`: Contains Page Object Model files where you define page elements and methods.
- `tests/`: Contains test cases that use the Page Object Model.

## Installation

```bash
npm install
```

## **Load Testing**
- First thing is to install locust using this command 
```bash
pip install locust
```
- after that you can go to directory /tests/load-testing and run 
```bash
locust -f locustfile.py
```
- after the locust run you can go to http://localhost:8089
- you can setup the numbers of user and ramp up on there
- and click start to start do the test
