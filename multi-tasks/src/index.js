// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./task7/redux/store";
// import { AuthProvider } from "./task7/context/AuthContext";
// import { ThemeProvider } from "./task7/context/ThemeContext";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <AuthProvider>
//         <ThemeProvider>
//           <BrowserRouter>
//             <App />
//           </BrowserRouter>
//         </ThemeProvider>
//       </AuthProvider>
//     </Provider>
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
