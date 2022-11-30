import Box from './box/box';
import './App.css';
import Next from './next';
import { BrowserRouter , Routes, Route } from "react-router-dom";
// import { BrowserRouter  } from "react-router-dom";

function App() {
  return (
   
    <div className="App">
       <BrowserRouter>
      <Routes>
    <Route exact path ='/' element={<Box/>} />
    <Route exact path ='/next' element={<Next/>} />
        
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
