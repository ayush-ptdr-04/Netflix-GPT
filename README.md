# Netflix-GPT

- npm create vite@latest netflix-gpt
  - cd netflix-gpt
  - npm install
  - npm run dev
- cleanUp files: App.jsx , .css, image Delete
- install tailwind :
  - npm install tailwindcss @tailwindcss/postcss
  - creat .postcssrc
  - @import "tailwindcss"; in .css file
  - npm run dev
- npm i react-router-dom
- Login Form
- SignIn/SignUp Form
- from Validation(regex.com )
- useRef hook
- firebase setup
- deploying our app to production
- create signup user account
- implement signIn user API
- create redux store with userSlice
- implement signOut API
- implement UpdateProfile API
- BugFIx: signUp user displayName and profile picture update
- BugFIx: if the user is not logged in Redirect /browse to login page and vice-versa
- unsubscribe to the onAuthStateChanged callback
- Add hardecoded values to the constant file

- build main container

  - register TMDB API & create an app & get access tokem
  - Get Data from TMDB now playing movies list API
  - custom hook for now playing movies
  - create movieSlice
  - update store with movies data
  - planning for Maincontainer & secondary container
  - fetch data for trailer video data
  - embedded the youtube video and make it autoplay and mute
  - tailwind classes to make main container look awesome

- build secondary component
  - fetch nowPlaying movies data to the store using useSelectore in secondary container and pass data to secondaryContainer to MoviesList and MoviesCard comonent
  - create addSlice, hooks, and use newAPI for Popular, Trending, Upcoming movies and add in movies store using hooks, and again pass data to secondarContainer =>.....

# Features

- Login/Sign-Up screen
  - signIn/SignUp form
  - redirect to browse page
- Browse page (after authentication)
  - Header
  - Main Movie
    - trailer in background
    - Title and discription
    - movie suggestions
      - movieLists \* n
- NetFlixGPT
  - Search Bar
  - Movie Suggestions
