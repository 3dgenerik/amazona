import React from 'react';
import { Home } from './screen/Home';
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  Link,
  NavLink,
  createRoutesFromElements,
} from 'react-router-dom';

import { MainLayout } from './layout/MainLayout';
import { ProductScreen } from './screen/ProductScreen';

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    //in this wrapper is Header and footer, and inbetween is main
    <Route path = '/' element={<MainLayout/>}>
        <Route index element={<Home />}/>
        <Route path = 'products/:slug' element={<ProductScreen/>} />
    </Route>
  ));

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;
