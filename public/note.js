// add React Router
  // npx create-react-app demo-app
 
// ♥️

// pkg.lock.json & package.json idea: 
  // "react-router-dom": "^6.4.2", // ^5.3.4

// UI idea(s)
  // https://mui.com/
  // https://mui.com/material-ui/customization/dark-mode/#main-content

    // import * as React from 'react';
    // import useMediaQuery from '@mui/material/useMediaQuery';
    // import { createTheme, ThemeProvider } from '@mui/material/styles';
    // import CssBaseline from '@mui/material/CssBaseline';

    // function App() {
    //   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    //   const theme = React.useMemo(
    //     () =>
    //       createTheme({
    //         palette: {
    //           mode: prefersDarkMode ? 'dark' : 'light',
    //         },
    //       }),
    //     [prefersDarkMode],
    //   );

    //   return (
    //     0
    //     // <ThemeProvider theme={theme}>
    //     //   <CssBaseline />
    //     //   <Routes />
    //     // </ThemeProvider>
    //   );
    // }


// App.js boiler code
  // import logo from './logo.svg';
  // import './App.css';

  // function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }

// export default App;

// from index.js
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>
  // );

// from index.js boilerplate code
    // import React from 'react';
    // import ReactDOM from 'react-dom/client';
    // import './index.css';
    // import App from './components/App';
    // import reportWebVitals from './reportWebVitals';
    // import {BrowserRouter} from 'react-router-dom'
    
    // const root = ReactDOM.createRoot(document.getElementById('root'));
    // root.render(
    //   <BrowserRouter>
    //     <App />
    //   </BrowserRouter>
    // );
    
    // // If you want to start measuring performance in your app, pass a function
    // // to log results (for example: reportWebVitals(console.log))
    // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    // reportWebVitals();
  


    //////////////////////////////
    // db.json
    [
      {
        id: 1,
        title: Learning,
        todo: React UI,// action,
        inProgress: FlatIron Bootcamp,
        completed: LearnEnough Rails Tutorial,
        idea: Digital Ocean,
      },
      {
        id: 2,
        title: Grocery List,
        todo: apples,
        todo: bananas,
        completed: milk,
        idea: cake, 
      },
      {
        id: 3,
        title: Reading List,
        todo: Eloquent Ruby,
        todo: Content Design,
        inProgress: Eloquent JavaScript,
        completed: Web Technology - Theory and Practice,
        idea: Book Club!,
      },
      {
        id: 4,
        title: Wellness,
        todo: fitness regime,
        inProgress: practice meditation,
        idea: sleep schedule,
      },
      {
        id: 5,
        title: Chores, 
        todo: tidy kitchen, 
        todo: mow lawn, 
        todo: laundry, 
        todo: sweep,
        todo: sort mail,
      },
      {
        id: 6,
        title: Finances,
        todo: electric - enroll in autoPay,
        todo: pay car tax,
        idea: invest in stock market,
        completed: child care,
      }
    ]

    ////////// boilerplate db.json
    // {
    //   "posts": [
    //     {
    //       "id": 1,
    //       "title": "json-server",
    //       "author": "typicode"
    //     }
    //   ],
    //   "comments": [
    //     {
    //       "id": 1,
    //       "body": "some comment",
    //       "postId": 1
    //     }
    //   ],
    //   "profile": {
    //     "name": "typicode"
    //   }
    // }


    ////////// Revised db.json
  //   {
  //     "lists": [
  //      {
  //        "id": 1,
  //        "title": "Learning",
  //        "todo": "React UI",
  //        "inProgress": "FlatIron Bootcamp",
  //        "completed": "LearnEnough Rails Tutorial",
  //        "idea": "Digital Ocean"
  //      },
  //      {
  //        "id": 2,
  //        "title": "Grocery List",
  //        "todo": "apples, bananas",
  //        "completed": "milk",
  //        "idea": "cake" 
  //      },
  //      {
  //        "id": 3,
  //        "title": "Reading List",
  //        "todo": "Eloquent Ruby, Content Design",
  //        "inProgress": "Eloquent JavaScript",
  //        "completed": "Web Technology - Theory and Practice",
  //        "idea": "Book Club!"
  //      },
  //      {
  //        "id": 4,
  //        "title": "Wellness",
  //        "todo": "fitness regime",
  //        "inProgress": "practice meditation",
  //        "idea": "sleep schedule"
  //      },
  //      {
  //        "id": 5,
  //        "title": "Chores", 
  //        "todo": "tidy kitchen, , laundry, sweep, sort mail" 
  //      },
  //      {
  //        "id": 6,
  //        "title": "Finances",
  //        "todo": "electric - enroll in autoPay, pay car tax",
  //        "idea": "invest in stock market",
  //        "completed": "child care"
  //      }
  //    ]
  //  }