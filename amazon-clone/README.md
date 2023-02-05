# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# firebase sdk snippet

const firebaseConfig = {
apiKey: "AIzaSyA0nsRyV62C9mMfPMqz1Ee2BiUVW_frIVs",
authDomain: "clone-1c8b4.firebaseapp.com",
projectId: "clone-1c8b4",
storageBucket: "clone-1c8b4.appspot.com",
messagingSenderId: "508599254934",
appId: "1:508599254934:web:3ca03baf9e7bd766ba67b7"
};

# packages installed

- react-currency-format

# links to resources that helped me out

- firebase v9 import issue: https://stackoverflow.com/a/69063168
- Firebase App named 'DEFAULT' already exists issue : https://github.com/vercel/next.js/issues/1999#issuecomment-302244429

# firebase hosting steps

- firebase login
- firebase init
- after command firebase init select hosting ( configure and deploy firebase hosting sites)
- select existing project
- what do you want to use as your public directory? build
- configure as a single-page app (rewrite all urls to /index.html)? Yes
- in case i wrote the above commands in a wrong folder i will delete the firebaserc & firebase.json files
- next i write npm run build to make a new build folder
- after the npm run build i will write (firebase deploy)

# see it live on firebase hosting

<!-- add link  -->

- https://clone-1c8b4.web.app/
