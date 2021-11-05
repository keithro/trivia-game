# NOTES

## Deploying
http://www.keithrodriguez.me/trivia-game/

To deploy run: 
```
npm run deploy
```

See [Create React App documentation](https://create-react-app.dev/docs/deployment/#github-pages) or [GitHub docs](https://github.com/gitname/react-gh-pages)

## API

Example:
https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple

Any:
https://opentdb.com/api.php?amount=10

Options:
- &category= * see json file *
- &difficulty= easy, medium, hard
- &type= boolean, multiple

## Back end?
- [serverless database tut](https://www.freecodecamp.org/news/how-to-add-a-serverless-database-to-react-projects-and-web-apps/)
- [using Easybase tut](https://easybase.io/react-database-app-tutorial/)
- [Using Google Sheets](https://git.generalassemb.ly/krodriguez/Google-Sheets-Backend)

## Steps
- Home page renders user prefernce form
- Home page collect user preferences
- Clicking start redirects to game page
- Game page will make ajax call
- Render loader while waiting for response
- Questions data saved as quizData
- Game page renders questions and answers based on quizData
- onClick handler will compare answers and increment or decrement score (points based on difficulty level) and increment counter
- Repeat for .length of quizData array
- Once complete render Results page.
- Results page renders score and has links to home, leaderboard, about and button to play again

## Other Todos
- Add shadow to buttons (and answer choices?) + shrink on click
- Clean up: Remove fonts, images, etc that you don't use. Delete console.logs and commented code.
- Favicon

## Need Help
- Do I need to clear setTimeout in Question component? Doesn't work if I do but logs values multiple times (3 times).

## Done
- How to render html codes (in quizData.question) correctly
- How can you display answer feedback (correct/incorrect)? 
- Spruce up Loader
- Add about and leaderboard (even if it is fake data)
- Fix Home/Nav layout
- Deploy!!!
- Add streak back (use active class? so it only renders for a few seconds)
