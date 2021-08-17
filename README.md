## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

## HTML
<hr>

#### Input
1) `input` for number
2) `button` for submitting
3) `button` for play again

#### View
1) `<div>` to display evaluation of whether too high or low
1) `<span>` and `<div>` to display how many guesses remaining
1) `<div>` to display win/loss

## JS
<hr>

#### Functions
1) `compareNumbers` function - parameters `guess` and `correctNumber`, returns `-1, 0, 1` for too low, correct, or too high, respectively
1) `randomNumber` - returns random number as whole integer, assign to `guess`
1) `playAgain` sets `guess` back to 4
1) `disablePlay` sets `guess` to 0

#### Events
1) two `eventListeners`, one for each button
