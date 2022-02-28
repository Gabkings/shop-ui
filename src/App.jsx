import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import ProductsList from "./pages/ProductsList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from './pages/Home';

function App() {

    const user = true;
    return ( < Router >
            <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/products/:cat" element={<ProductsList/>}/>
            <Route exact path="/product/:id" element={<ProductDetails/>}/>
            <Route exact path="/carts" element={<Cart/>}/>
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
            <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}/>
            
           
               
              
                {/* <Route exact path="/">
                    <Home />
                </Route>
                
                <Route exact path="/">
                    <Home />
                </Route> */}
            </Routes>
        </Router>);
    }

    export default App;