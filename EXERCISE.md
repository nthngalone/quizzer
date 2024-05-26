# Exercise

Create a web application that allows users to take multiple choice quizzes, with the ability to resume in the event they cannot complete the quiz in one sitting. After answering all questions, a page is shown summarizing the user's answers for each question.

## Navigation

- The user will be able to start a quiz by navigating to its unique URL.
- Once the user has answered the first question, the URL will update to include a token, allowing the user to resume the quiz using the new URL.
- When resuming a quiz, the user should be taken to the first unanswered question, or the summary if all questions have been answered.

## UI

- A button should be used to advance from one question to the next.
- The user cannot advance to the next question without answering the current question.
- Once a question has been answered the user cannot revisit it.
- After answering all questions, a summary should display all questions and their respective answers in one view.

## Architecture

- Single Page Application + JSON API Backend
- Use Vue for the SPA framework.
- Use a backend language of your choice.
- All data persistence should occur in the backend.
- The application does not have to be deployed to a hosted environment, localhost is sufficient.
- At least two quizzes should be available.

## Assumptions You Can Make

- Someone else will be responsible for perfecting the UI design.
- This solution is part of a larger, production application and will be subjected to a code review and QA process prior to integration.
- The application uses a document database abstraction which supports getting, creating, and updating documents based on an identifier. For this exercise, you should implement a simple, in-memory version of this abstraction.