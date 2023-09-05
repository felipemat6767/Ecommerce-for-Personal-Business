import './App.css';
import FrontPage from './Pages/FrontPage';
import Navbar from './Pages/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from './Pages/Shop';
import Provider from './Provider/Provider';
import ProdPage from './Pages/ProdPage';
import Pictures from './Pages/Pictures';
import ProdSearched from './Pages/ProdSearched';
import Footer from './Pages/footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Provider>
          <Navbar></Navbar>
          <Routes>
            <Route element={<FrontPage />} path='/' />
            <Route element={<Shop />} path='/Shop' />
            <Route element={<ProdPage />} path='/ProdPage'/>
            <Route element={<Pictures />} path='/Pictures'/>
            <Route element={<ProdSearched />} path='/ProdSearched'/>
          </Routes>
          <Footer></Footer>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
