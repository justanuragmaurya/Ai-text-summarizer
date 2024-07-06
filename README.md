# AI Text Summarizer

This project implements an AI-powered text summarizer using React and the Groq AI API. The application allows users to input text, which is then summarized using artificial intelligence to provide a concise summary. The summarization is performed using a pre-trained language model (`llama3-8b-8192`) provided by Groq AI.

## Demo

Check out the live demo [here](https://ai-text-summarizer-anurag.vercel.app/).

## Features

- **Text Input**: Users can enter text into a textarea.
- **Summarization**: On clicking the "Convert" button, the application sends the entered text to the Groq AI API for summarization.
- **Dynamic Theme**: Supports both light and dark themes.
- **Responsive Design**: Designed to work seamlessly across devices.

## Technologies Used

- **React**: Frontend framework for building user interfaces.
- **Groq SDK**: SDK used to interact with the Groq AI API for text summarization.
- **Vercel**: Platform used for deployment.

## Setup Instructions

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/justanuragmaurya/text-summarizer.git`
2. Install dependencies: `npm install`
3. Set up your API key in `MainContent.js` (replace `"YOUR API KEY HERE"` with your actual API key).
4. Start the development server: `npm start`

## Usage

1. Enter text into the textarea provided.
2. Click on the "Convert" button to generate a summary.
3. View the summarized text displayed below the textarea.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your improvements.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
