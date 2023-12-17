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
       <artilcle className ="Variable types">
      <div>
        <body>
        <h1>Strings</h1>
        <h2>What is a string?</h2>
          <p>A string is bascially a block of text you can store in a variable. Strings must be contained in quotation marks, otherwise the computer wont know better and yell at you to fix it.</p>
        <h2>Declaring a String</h2>
              <p>Strings in C++ are declared like any other variable in Java: (variableType) Variable Name.</p>
              <p>For example:</p>
             <center><p>string Hello = "Hello World!";</p></center>
        <h2>String Methods</h2>
            <p>There are a few key of String Methods</p>
            <p>For example:</p>
            <li>String.size()</li>
            <li>String.length()</li>
            <li>String.substring()</li>
        </body>

        <h1>Integers & Double</h1>
        <body>
          <h2>What is an integer</h2>
          <p>An interger is bascially a number but only whole numbers. Doubles can contain numbers with decimals</p>
          <h2>Declaring an Integer or Double</h2>
          <p>Like strings, you first declare the variable type followed by the name of your variable.</p>
          <center><p>int x = 123456789;</p><p>double x = 3.1415</p></center>
        </body>

        <h1>Booleans</h1>
        <body>
          <h2>What is a boolean</h2>
          <p>Boolrans are a data type that return true or false. You can think of them as a on or off switch.</p>
          <h2>Declaring an Boolean</h2>
          <p>Like all other datetypes, you know the drill by now.</p>
          <center><p>bool areYouTheFather = True;</p></center>
        </body>

      </div>
      </artilcle>
      
      <artilcle className ="Arrays">
      <div>
        <h1>Arrays</h1>
        <h2>Declaring an Array</h2>
            <body>
              <p>First you start with what kind of array you want.</p>
              <p>Typically they are either strings or intergers and are declared as such:</p>
             <center><p>string arr[] = {'{"'}Hello World!{'"}'};</p></center>
        <h2>Pointers</h2>
            <p>Sometimes instead of strings and ints, arrays could store pointers</p>
            <p>For example:</p>
            <center><p>new int*[]</p></center>
        </body>
      </div>
      </artilcle>

      <artilcle className ="Vectors">
      <div>
        <h1>Vectors</h1>
        <h2>Creating a Vector</h2>
            <body>
              <p>Array are cool and all, but they pale in comparison to their older brother. Vectors are dynamic meaning it's easier to add or remove items from it.</p>
              <p>Vectors are so cool that you have to include it manually using <hilight>#include {'<'}vectors{'>'}</hilight></p>
              <p>To create a vector do the following:</p>
             <center><p>vector{'<'}int{'>'} = {'{'}{'}'}</p></center>
        <h2>Vector Methods</h2>
            <p>Here is what makes vectors different from arrays</p>
            <p>Functions:</p>
            <li>vector.pushback()</li>
            <li>vector.popback()</li>
            <li>All other array functions</li>
            <p>pushback adds the item at the last index of your vector.</p>
            <p>popback will destory the last index along with its item.</p>
        </body>
      </div>
      </artilcle>

    <artilcle className ="Why">
      <div>
        <h1>Why use C++?</h1>
        <h2>Its popular</h2>
        <p>Many companies, schools, or any CS related business will ask you to use  one of the big three:</p>
        <li>Python</li>
        <li>Java</li>
        <li>C++</li>
        <p>Learning C++ can help you land more oppertunites at work and it will help in learning other languages similar to C++.</p>
        <h2>It helps with your CS skils in general</h2>
        <p>Like Python and Java, C++ helps your understanding of CS in general. Through C++, you learn about how information is stored and used in programs. 
          What C++ differs from Java and Python is it's unique learning curve of memory allocation. In C++ you are introduced with pointers which directly mess with your computer's memory.
          As such, C++ teaches you to be wise with memory allocation and teaches you how to utilze it best.
        </p>
      </div>
    </artilcle>

    <h1>Conclusions</h1>
    <p>Thank you so much for looking at this site. Although I'm pretty sure its just going to be you, Professor Lynch, who will look at it.
      In that case, thank you so much for being my professor, I had a great time in your class and you were always so helpful. I hope you have a wonderful break. 
    </p>

    <p>
      If you are not my professor, then I have no clue how you got onto this site but thank you so much nonetheless. Hope you learned a little more about C++ and I hope you have a fantastic day! 
    </p>

    <p><ps>PS: Don't look too deep at the code for this website. For some reason things would not work at all and I didn't have the time to right my wrongs. I wanted to do a cool side bar on the side for the topics but for some reason it works on a different repo and but not this one despite being the same code. I think my Node.JS is corrupted or my package.json was improperly imported. Anyways this code is the only way this website works so please don't question it. Thanks, :{')'}</ps></p>
    
    </div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
