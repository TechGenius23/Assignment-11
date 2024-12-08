/* eslint-disable no-unused-vars */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Route from './Component/Route';
import Home from './Component/Home';
import Rooms from './Component/Rooms';
import MyRoom from './Component/MyRoom';
import UserReview from './Component/UserReview';
import FeatureRoom from './Component/FeatureRoom';
import Contract from './Component/Contract';
import Login from './Component/Login';
import Register from './Component/Register';
import Roomsmap from './Component/Roomsmap';
import FirebaseProvider from './Component/FirebaseProvider'
import Error from './Component/Error';
import View from './Component/View';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/home',
        element: <Home></Home>,
        loader: async () => {
          const dataresponse = await fetch('rooms.json');
          const datas = await dataresponse.json();
          console.log(datas);
          return { datas };

        }

      },
      {
        path: '/rooms',
        element: <Roomsmap></Roomsmap>,
        loader: async () => {
          const dataresponse = await fetch('rooms.json');
          const datas = await dataresponse.json();
          console.log(datas);
          return { datas };

        }

      },
      {
        path: '/rooms/:id',
        element:<View></View>,
        loader:()=>fetch('rooms.json')
      },
      {
        path: '/booked',
        element: <MyRoom></MyRoom>
      },
      {
        path: '/review',
        element: <UserReview></UserReview>
      },
      {
        path: '/feature',
        element: <FeatureRoom></FeatureRoom>
      },
      {
        path: '/contract',
        element: <Contract></Contract>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </StrictMode>
);
