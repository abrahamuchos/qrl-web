import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import './App.css'

import Home from './pages/Home'
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import CrisisManagement from "./pages/CrisisManagement.jsx";
import CompensationStrategy from "./pages/CompensationStrategy.jsx";
import Cts from "./pages/Cts.jsx";
import Roadmap from "./pages/Roadmap.jsx";
import TradeUnionStrategy from "./pages/TradeUnionStrategy.jsx";
import NotFound from "./pages/NotFound.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";
import BaseLayout from "./layouts/BaseLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout/>}>
      <Route index element={<Home />}/>
      <Route path='/sobre-nosotros' element={<AboutUs />}/>
      <Route path='/contactanos' element={<ContactUs />}/>
      <Route path='/manejo-crisis' element={<CrisisManagement />}/>
      <Route path='/estrategia-compensacion' element={<CompensationStrategy />}/>
      <Route path='/cts' element={<Cts />}/>
      <Route path='/roadmap' element={<Roadmap />}/>
      <Route path='/estrategia-sindical' element={<TradeUnionStrategy />}/>
      <Route path='/terminos-condiciones' element={<TermsConditions />}/>
      <Route path='*' element={<NotFound />}/>
    </Route>
  )
);

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App


