import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'


// loader to be used/ learned later on when needed 
// could creater router in different file better approach
// another way of making exist using nesting also will use later
const router= createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Home/>,
        index:true,
      },
      {
        path:'/about',
        element:<About/>,
        children:[
          {
            path:'hey', // cannot use /hey must use hey or /about/hey
            element:<Home/>
          },
            
        ]
      },
      {
        path:'/Yo/:useid?',
        element:<About/>,
      },
      {
        path:'/hello',
        element:<About/>,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
