import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre-nosotros",
        element: <AboutUs />,
      },
      {
        path: "/contactanos",
        element: <ContactUs />,
      },
      {
        path: "/manejo-crisis",
        element: <CrisisManagement />,
      },
      {
        path: "/estrategia-compensacion",
        element: <CompensationStrategy />,
      },
      {
        path: "/cts",
        element: <Cts />,
      },
      {
        path: "/roadmap",
        element: <Roadmap />,
      },
      {
        path: "/estrategia-sindical",
        element: <TradeUnionStrategy />,
      },
      {
        path: "/terms-conditions",
        element: <TermsConditions />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ]
  );


  return (
    <RouterProvider router={router}/>
  )
}

export default App


