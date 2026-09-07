# iValidate - Email Validator for Your Business

iValidate is a simple email validation tool that verifies the authenticity and deliverability of an email address using an external API. This project ensures that your email inputs are correctly formatted and provides detailed results on email status, domain, and more.

## Features

- **Email Validation**: Validates the email address format and domain.
- **Detailed Results**: Provides information such as deliverability, email state, domain details, and more.
- **API Integration**: Uses the [emailvalidation.io API](https://www.emailvalidation.io/) to fetch real-time email data.

## Technologies Used

- **HTML5**: For the structure of the webpage.
- **CSS3**: For styling and responsive design.
- **JavaScript (ES6)**: For API requests and dynamic content updates.
- **External API**: [emailvalidation.io API](https://www.emailvalidation.io/) for email validation.

## Installation

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/avanishshaw/iValidate.git
    ```

2. Navigate to the project directory:
    ```bash
    cd iValidate
    ```

3. Open the `index.html` file in your preferred browser.

## How to Use

1. Enter the email address you want to validate in the input field.
2. Click the **Submit** button.
3. The results will be displayed below, showing details about the email's deliverability, domain, and more.

## API Key

This project requires an API key from [emailvalidation.io](https://www.emailvalidation.io/). You can get a free API key by signing up on their platform.

Replace the API key in the `index.js` file with your own key:
```javascript
let key = "YOUR_API_KEY";
