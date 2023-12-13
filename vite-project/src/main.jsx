import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
       <artlicle className ="Strings">
      <div>
        <h1>Strings</h1>
        <h2>Declaring a String</h2>
            <header>Hello World!</header>
            <body>
               <p>Strings in C++ are declared like any other variable in Java: (variableType) Variable Name.</p>
              <p>For example:</p>
              <p>string Hello;</p>
        <h2>String Methods</h2>
            <p>There are a lot of String Methods</p>
            <p>For example:</p>
            <p>String.size()</p>
        </body>
      </div>
      </artlicle>
    </div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
