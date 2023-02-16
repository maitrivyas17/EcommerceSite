import "bootstrap-icons/font/bootstrap-icons.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { Route,Routes} from "react-router-dom";
import Landing from "./pages/Landing";
import Product from "./pages/Product";
function App() {
  return (
    <>
   <Routes>
      <Route exact path='/' element={<Landing />} />
      <Route exact path="/Register" element={<Register/>} />
      <Route exact path="/Login" element={<Login/>} />
      <Route exact path='/Product' element={<Product />} />
    </Routes>
    </>
  );
}

export default App;
