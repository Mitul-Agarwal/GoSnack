import './App.css';
import { CartProvider } from './components/ContextReducer';
import Home from './screens/Home';
import Login from './screens/Login';
// import '../node_modules/bootstrap'
import Signup from './screens/Signup';
import Cart from './screens/Cart';
import MyOrder from './screens/MyOrder';

// since we do not want the page to reload and make a single page app so we can't use <a/> tag and href
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/createuser" element={<Signup />} />
            <Route exact path="/myOrder" element={<MyOrder />} />

          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
