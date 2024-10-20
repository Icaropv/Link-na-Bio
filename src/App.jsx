import Bio from "./pages/Bio"
import {register} from 'swiper/element/bundle'
register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Editar from "./pages/Editar"


function App() {

  return (
    
   <div className="" >
    <Router>
      <Routes>
        <Route path="/" element={<Bio/>}></Route>
        <Route path="/editar" element={<Editar/>}></Route>
      </Routes>
    </Router>
   </div>
   
  )
}

export default App
