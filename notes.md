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


## ToDos
- Add arrow to drop down lists
- Favicon
- Google analytics
- Leaderborad/backend
- 
- Div around home content: background: transparent + shadow
- Add shadow to buttons (and answer choices?) + shrink on click
- Answers slide in from left each with slightly longer delay (use nth-child)
- Things slide in on Home page
- Try using inner shadow on button or links
- Clean up: Remove fonts, images, etc that you don't use. Delete console.logs and commented code.

## Done
- About section styling: shadow to section headings
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
- Add link to personal page.
