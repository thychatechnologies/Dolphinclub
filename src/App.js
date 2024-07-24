// import { Route, Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Navmain from './components/Navmain';
import Home from './pages/Home';

function App() {
  return (

    <div>
      <Navmain />
      <Home />
    </div>
    // <Router> 

    //       <Routes>
    //           <Route/>
    //       </Routes>
    // </Router>

  );
}

export default App;
