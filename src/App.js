import Button from '@material-ui/core/Button';
import Navbar from './components/NavBar/navbar';
import {BrowserRouter ,Route} from 'react-router-dom'
import Home from './pages/home'
import Footer from './components/Footer/footer';
import ProductDetails from './pages/productDetails';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home}/>
      <Route exact path="/:id" component={ProductDetails}/>

      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
