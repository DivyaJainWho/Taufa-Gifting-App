import './App.css';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Cakes from './components/Cakes/Cakes';
import Plants from './components/Plants/Plants';
import Sweets from './components/Sweets/Sweets';
import Flowers from './components/Flowers/Flowers';
import Personalised from './components/Personalised/Personalised';
import Electronics from './components/Electronics/Electronics';
import Gifts from './components/Gifts/Gifts';
import WishList from './components/WishList/WishList';
import Cart from './components/Cart/Cart';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes className='main'>
          <Route path="/" exact element={<Landing/>}></Route>
          <Route path="/cakes" exact element={<Cakes/>}></Route>
          <Route path="/plants" exact element={<Plants/>}></Route>
          <Route path="/sweets" exact element={<Sweets/>}></Route>
          <Route path="/gifts" exact element={<Gifts/>}></Route>
          <Route path="/electronics" exact element={<Electronics/>}></Route>
          <Route path="/flowers" exact element={<Flowers/>}></Route>
          <Route path="/personalised" exact element={<Personalised/>}></Route>
          <Route path="/wishlist" exact element={<WishList/>}></Route>
          <Route path="/cart" exact element={<Cart/>}></Route>
          <Route>404 not found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
