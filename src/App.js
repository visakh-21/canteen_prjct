
import './App.css';
import Login from './components/Login';
import Cart from './components/Cart';
import Productdetails from './components/Productdetails';
import Productpage from './components/Productpage';
import {Route,Routes} from 'react-router-dom'



function App() {
  return (
    <div className="App">

<Routes>


<Route path='/'  element={<Login/>}></Route>
<Route path='product'  element={<Productpage/>}> </Route>
<Route  path='prdctdetail/:id'  element={<Productdetails/>}> </Route>
<Route  path='cart'  element={<Cart></Cart>}> </Route>
</Routes>
      
      
    </div>
  );
}

export default App;
