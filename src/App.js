import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/App.css'
import {Routes, Route} from "react-router-dom";
import Home from './routes/Home';
import Portfolio from './routes/Portfolio';
import NavBar from './NavBar';
import Project from './routes/Project';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Portfolio/>}/>
        <Route path="/project" element={<Project/>}/>
      </Routes>
    </>
  );
}

export default App;
