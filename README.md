# Coding Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and has addtional libraries included:

- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React-Router](https://reactrouter.com)
- [tailwindcss](https://tailwindcss.com/)
- [polished](https://polished.js.org/)

Head over to the coding challenge [here](./CHALLENGE.md).

## Why Redux Toolkit, Debounce and Restful API

### Redux Toolkit

Redux toolkit is an officially recommended and SOPE library that stands for Simple, Opinionated, Powerful, and Effective state management library.\
It allows us to write more efficient code, speed up the development process, and automatically apply the best-recommended practices. It was mainly created to solve the THREE MAJOR ISSUES with Redux:

- Configuring a Redux store is too complicated
- Have to add a lot of packages to build a large scale application
- Redux requires too much boilerplate code which makes it cumbersome to write efficient and clean code.

It also provides the automatic support for Redux Dev-tools Extension and for immer.js library which is a great tool to deal with immutable objects. \
You can also use the various predefined functions of Redux Toolkit which not only speeds up the process but also saves time.

Dependencies that comes along with Redux Toolkit:

- immer
- redux
- redux-thunk
- reselect

### Debounce

I used debounce for optimization of searching functionality
This moudle is good to avoid calling the same callback functions repeatly.

### Restful API

I used Node.js and Express for builidng the Restful API in this project.\

## Available Scripts

In the project directory, you can run:

### `npm start`

- Starts the RESTful API server on [http://localhost:5000](http://localhost:5000) and runs the app in development mode on [http://localhost:3000](http://localhost:3000).
- Concurrent module is used to keep on track of different outputs.

#### Notes

- The page will reload if you make edits.
- You will also see any TypeScript or lint errors in the console.
- You can re-run the script to reset/regenerate the data.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## RESTful API

Running on [http://localhost:5000](http://localhost:5000).

### `/homes`

#### GET

Get a list of homes.

### `/homes/:id`

#### GET

Filter the homes by city, price and number of bedrooms

### `/homes/filter?city=&minPrice=&maxPrice=&numberBedrooms=`

#### GET

Filter the homes by city, price and number of bedrooms.
