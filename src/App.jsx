import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import VideoPlayback from './Components/VideoPlayback';
import Todos from './Components/Todos';

function App() {


  return (
  

    <Router>

      <Routes>
        <Route path='/' element={<Todos/>} />
        <Route path='/video' element={<VideoPlayback/>} />
      </Routes>
    </Router>
  );
}

export default App;
