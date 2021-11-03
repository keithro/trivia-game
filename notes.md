## API

Example:
https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple

Any:
https://opentdb.com/api.php?amount=10

Options:
- &category= * see json file *
- &difficulty= easy, medium, hard
- &type= boolean, multiple


## Other Todos
- Remove fonts, images, etc that you don't use

## Steps
- Home page renders user prefernce form
- Home page collect user preferences
- Clicking start redirects to game page * ? * Does this need any functionality or could it be a link?
- Game page will make ajax call * ? * Should Game make the ajax call or should Home onClick?
- Loading page * ? * Does this affect decision above?
- Questions data saved as qAndAList
- Game page renders questions and answers based on qAndAList
- onClick handler will compare answers and increment or decrement score
- Repeat for .length of qAndAList array
- Once complete render Results page.
- Results page renders score and has links to home, leaderboard, about and button to play again

## Back end?
- [serverless database tut](https://www.freecodecamp.org/news/how-to-add-a-serverless-database-to-react-projects-and-web-apps/)
- [using Easybase tut](https://easybase.io/react-database-app-tutorial/)
- [Using Google Sheets]()
