## Demo
You can view a quick preview of this application on [Heroku](https://justinmunn-hipcamp-test.herokuapp.com/)

## Installation
- Clone the repository
- Run `npm install` to install dependencies
- To run development build: `npm start`
- To run production build: `npm run build`

- To use Sass during development run `npm run watch-css`


## Features 

- Built with React and Sass
- Indicate whether or not each feature is present at the campground. Clicking on a feature should reveal its sub-features, if they're present or not, and so on.
- The presence or absence of each feature is indicated with an icon
- Each `li` element is has a clickable button that indicates with an icon if there are subfeatures to reveal.
- Subfeatures are displayed in a nested `<ul>`
- Subfeatures nested beyond the first level of subfeatures are displayed in a nested `ul`
- Adding or removing features from camp_features.js will automatically update the DOM when the page is reloaded.

