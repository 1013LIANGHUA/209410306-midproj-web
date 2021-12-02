import { Routes, Route } from 'react-router-dom'
import Midproj_06 from "./pages/Midproj_06";


function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Midproj_06/>} />
       
      </Routes>
    </div>
  );
}

export default App;
