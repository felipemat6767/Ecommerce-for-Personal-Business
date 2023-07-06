import './App.css';
import FrontPage from './Pages/FrontPage';
import Navbar from './Pages/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from './Pages/Shop';
import Provider from './Provider/Provider';
import ProdPage from './Pages/ProdPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Provider>
          <Navbar></Navbar>
          <Routes>
            <Route element={<FrontPage />} path='/' />
            <Route element={<Shop />} path='/Shop' />
            <Route element={<ProdPage />} path='/ProdPage' />
          </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
