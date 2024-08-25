import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Components/Login.tsx';
import { Provider } from 'react-redux';
import {store} from './RTK/store.ts';
import { MainLayOut } from './MainLayOut.tsx';
import LoadingPage from './Components/Childrens/LoadingPage.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayOut/>,

  },
  {
    path: "/loading",
    element: <LoadingPage />,
  }
  ,
  {
    path: "/login",
    element: <Login />,
  }

]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>

    <RouterProvider router={router}/>
    
    </Provider>
  </StrictMode>,
)
