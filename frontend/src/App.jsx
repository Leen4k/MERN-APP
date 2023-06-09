import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='p-4 w-[90%] lg:w-[70%] m-auto'>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={}/> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
