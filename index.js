import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './navbar';
import Body from './allmeets';
import Mymeet from './mymeet';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Addmeet from './addmeet';
const AppLayout=()=>{
  return <div>
    <Navbar/>
    <Outlet/>
  </div>
}
const ways=createBrowserRouter(
  [
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Body/>
    
        },
        
        {
          path:"/mymeet",
          element:<Mymeet/>
    
        },
        {
          path:"/addmeet",
          element:<Addmeet/>
    
        }

      ]

    },
    
  ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={ways}/>);

