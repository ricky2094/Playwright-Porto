const { Reporter } = require('@playwright/test/reporter');
const axios = require('axios');

// Set your Slack Webhook URL
const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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'; // Replace with your actual webhook URL

class SlackReporter {
    constructor() {
      // Variables to store test results
      this.totalTests = 0;
      this.totalPassed = 0;
      this.totalFailed = 0;
      this.totalSkipped = 0;
    }
  
    // Track individual test results
    onTestEnd(test, result) {
      this.totalTests += 1;
      
      if (result.status === 'passed') {
        this.totalPassed += 1;
      } else if (result.status === 'failed') {
        this.totalFailed += 1;
      } else if (result.status === 'skipped') {
        this.totalSkipped += 1;
      }
    }
  
    // Send a report when all tests finish
    async onEnd(result) {
      const statusEmoji = this.totalFailed > 0 ? ':x:' : ':white_check_mark:';
      const reportMessage = `
        *Test Results*: ${statusEmoji}\n
        *Total Tests*: ${this.totalTests}\n
        *Passed*: ${this.totalPassed}\n
        *Failed*: ${this.totalFailed}\n
        *Skipped*: ${this.totalSkipped}\n
        *Duration*: ${(result.duration / 1000).toFixed(2)} seconds
      `;
  
      try {
        await axios.post(SLACK_WEBHOOK_URL, {
          text: reportMessage,
        });
        console.log('Slack report sent successfully');
      } catch (error) {
        console.error('Failed to send Slack report:', error);
      }
    }
  }
  
  module.exports = SlackReporter;