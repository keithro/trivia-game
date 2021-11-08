# Project Overview

## Project Links

- [github repo link](https://github.com/keithro/trivia-game)
- [keithrodriguez.me/trivia-game](http://www.keithrodriguez.me/trivia-game/)

## Project Description

Trivia App is a trivia game. Players can choose a category and difficulty level. Game lasts 10 questions and players earn points for correct answers and lose points for incorrect answers.

## API

The application uses the [Open Trivia API](https://opentdb.com/api_config.php). The AJAX request will retreive ten questions of varying types (true/false or multiple choice) based on the users choice of category and difficulty level.


```
{
  response_code: 0,
  results: [
    {
      category: "Entertainment: Board Games",
      type: "multiple",
      difficulty: "hard",
      question: "The board game &quot;Monopoly&quot; is a variation of what board game?",
      correct_answer: "The Landlord&#039;s Game",
      incorrect_answers: [
        "Territorial Dispute",
        "Property Feud",
        "The Monopolist&#039;s Game"
      ]
    },
    ...
  ]
}
```


## Wireframes

Below are the wireframe/design and React architecture.

- [wireframes](trivia-game.JPG)
- [React Architecture](https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=trivia.drawio#R7Vxdm5o4FP41XnYeIIB4qc5HuzvbbXe2O52rPhEyyorEhjhqf%2F0m8k0QQVRwhxsfcggxyXnPez6C9sB4sXkgcDn7A1vI6SmStemB256i9A3APrlg6wt0RfUFU2JbvkiOBU%2F2LxQIpUC6si3kpTpSjB1qL9NCE7suMmlKBgnB63S3V%2Bykv3UJp0gQPJnQEaXPtkVnvtRQ%2BrH8I7Kns%2FCbZX3g31nAsHOwEm8GLbxOiMBdD4wJxtS%2FWmzGyOF7F%2B7L86fts%2FM41x9%2B%2B%2Br9hN9Gv%2F%2F9%2BZ8P%2FmD3VR6JlkCQS48e2h3e%2FljMf2ADqvff1i9%2Fff%2B5ph8U3R%2F7DTqrYMOCxdJtuIPIYhsaNDGhMzzFLnTuYunImyNq8s2SWCPu8ojxkgllJvwXUboNwAFXFDPRjC6c4K4DJ8gZQXM%2BJXjlWmPsYMJuudjlo79il4aingJUXR1ot%2FxbKcFzlLjD7qmaxZ%2BwHSchn0DTsACT%2B0vj68lg48DGBv08vCImKugXYIpCMkW0aNe1CD7M7BBeIEq27EGCHEjtt%2FTsYGAA06hfrGR2Eei5Apz6gso%2FspHZUM%2FsYXN3qTts%2BqMJYVdTGm1cAhPrmU3R0xLutmPNiCOtUK6yQNsyW%2Bho6kDPC%2FDhqy20Rd47MiypQHf7tb3DDLJKYamawt8QoWiT0IaosvCuGpDENtNex5wjh0QyS%2FBN2K%2BOlnMxJhsttmwLvcLVDmOnM27kWkPuL2JlM8m9zXdtN%2Fuaxp806v1mVcOmg0e%2FYJtNJwKWKqWBNcjgxeek4KEYMmwn4DbRbck7eOW%2FRpYyziTTXynuzy78GcT4jbbkeEgDrYP0uSCd76feFaZVvQlMtzkAOw%2Bm2YZ951O90cLmSzDzXeN2k2pto1aztgDAZWwBtMIW9Cb4XZWvCfqHAHnx9OQwhAfvic77oAEISwKbD5dLAdWHsqeaKVASsTGOe%2FkpTVl87U19QCb1UZrOfBRBB5%2FhWzt0UCY5Pb2G5IwhNJ6bKqKZXBPzXzDo2dg08RhrvQST59fxQ7xxoUApWQQrosDDyUWbnJE4Tn%2BP0YQD%2Beu7vFdrIkcRGbU95trmInFB8fcS2XctjtYGhToOtj12etIJVBzRpFyWJOWITr8gYrOVIxL0KQ%2BXmPAT1GnyirVtpthTzsNT3zCGQyDiaaSMB8NRm%2FCk1g3%2F6%2Fl8sXg3%2FPKJCUy4e3gCPYYjRcIu3xwHbpkm2c0Ztk3kCVAkM7yYrNgcRwfiuBQkBeVJyJAMI4cMJASQ3uqgTjGynqB%2Fo4lxnZQT18mSdiYlA7XzFCe07LLnibVrU%2FUsWzxQfMTQ4varwwW3R3fiLXvVTxGLbfegetpru0LQ13hGpp6kDJ3e8WbM%2BCp9OCibNKmXenOgcJpJH%2B56a0REB%2F1eTVvLVsOaN%2B0rzt5aV2M%2FbMmgrM%2BW8nF0GUtWQQMYOLYK1mEn29GoiZ2jSlXZM8Gwrlz2PD3T%2F0y1KiCw3QPkr7R1%2FinXPzUfegLxRbVb2%2BMVADbc1xXyqM1rAp3%2BclOH5uMLMBD0d28zt8BETyYmnelF%2FLnvSKG50LB%2FRBRw2iRvX0wQ3asWE1R6beN68kO1bI239ise9c4MivHUkjMDTbnpTg1KI0qtG2vWQ5RxeUR1GBC00GyuKp4cjfGC70LypAjuClF8NbjHf01GCP81WSw%2F9gCpwN1VP05qUziiaelwBMg54Uj%2B8dG54hFNfAH0TM4i8ghdrJFP%2BK0%2FddKKq5jnjTXOB59rdymlwdNooKqKNYf8XNWbwSW%2FNLeOzYBEwGGHMfEh9ziJBJHq%2F1xRNgwKtRf8QFKr6GU0XZP7SFSyJZkIKXvxdC4%2FkslqFV10I3qOFzHO5kSKS9sdMTRDDIOyxNBsrCkWs4b5AWTHDFWZAWhNM4PWJDPcyHI%2FxQ43sqIdYIgqNYr%2FJW2EkGk5bYTTTKaoK7LbA0V6ogTBeYk%2FVegopSqlqDkl9BNRCmvGf%2B3in07G%2F48D7v4D)


### MVP/PostMVP

The functionality will is divided into two separate lists: MPV and PostMVP. 

#### MVP
- Find and use external api 
- Render data on page 
- Allow user to choose game difficuly and category
- Render questions on page
- Allow user to select an answer
- Answer feedback: indicate correct answer
- Keep user score
- After end of ten questions, display score/results

#### Post MVP
- Loading screen
- Current correct answer streak
- Add score leaderboard
- More animations

## Components

| Component | Description | 
| --- | :---: |  
| App | This store state for question/answers, score and current streak and include React Router| 
| Nav | This will render the navigation links | 
| Home | This will render the home/welcome page and input fields where users can select game options and click a button to begin the game | 
| Game | This will render trivia questions and display the answers | 
| Question | Display current question | 
| Answer | These will diplay the answers and have the onClick listeners that will compare the users answer to the correct answer | 
| Restuls | Display users score and number of correct answers | 
| Loader | Loading animation | 
| Leaderboard | Display top ten user scores in order | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Initial discovery and research | H | 4hrs| 5hrs | 5hrs |
| Planning and wireframing | H | 4hrs| 6hrs | 6hrs |
| Project Worksheet | H | 2hrs| 2.5hrs | 2.5hrs |
| Adding Home component and inputs | H | 3hrs| 2.5hrs | 2.5hrs |
| Working with API | H | 3hrs| 3.5hrs | 3.5hrs |
| Game component and rendering Question and Ansers | H | 3hrs| 6hrs | 6hrs |
| Game logic: comparing user answer to correct answer and incrementing/decrementing score | H | 4hrs| 3hrs | 3hrs |
| Displaying correct answer | H | 2hrs| 5hrs | 5hrs |
| Rendering final game results (score, number of correct answers) | H | 2hrs| 3hrs | 3hrs |
| Style and make responsive | H | 6hrs| 8hrs | 8hrs |
| Total | H | 33hrs| 44.5hrs | 44.5hrs |

#### Post MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Loading screen | H | 3hrs| 4hrs | 4hrs |
| User correct answer streak | L | 3hrs| 2hrs | 2hrs |
| Score Leaderboard | H | 6hrs| 1hrs | hrs |
| Make Favicon | H | 3hrs| hrs | hrs |
| More animations | H | 3hrs| 1hrs | hrs |
| Total | H | 18hrs| 8hrs | hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 


The Durstenfeld shuffle I found on Stack Overflow to shuffle my answers array.
```
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
```
