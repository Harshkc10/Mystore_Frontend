import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from './app/routes';
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Slider from "./features/home/components/slider/Slider";

function AppRoutes(){
  return useRoutes(routes);
}

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRoutes/>
      <Slider/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
