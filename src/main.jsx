import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import HomePage from './routes/homePage/Homepage.jsx'
import DeshboardPage from './routes/deshboardPage/DeshboardPage.jsx';
import ChatPage from './routes/chatPage/ChatPage.jsx';
import RootLayout from './layouts/rootLayout/RootLayout.jsx';
import DeshboardLayout from './layouts/deshboardLayout/deshboardLayout.jsx';
import SignInPage from './routes/signinPage/signInPage.jsx';
import SignUpPage from './routes/signUpPage/signUpPage.jsx';



const router = createBrowserRouter([
 {
   element: <RootLayout/>,
   children: [
    {
      path: '/', element: <HomePage/>
    },
    {
      path: '/sign-in/*', element: <SignInPage/>
    },
    {
      path: '/sign-up/*', element: <SignUpPage/>
    },
    {
      element: <DeshboardLayout/>,
      children: [
        {
          path: "/deshboard",
          element: <DeshboardPage/>
        },
        {
          path: "/deshboard/chats/:id",
          element: <ChatPage/>
        }
      ]
    }
   ]
 }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
