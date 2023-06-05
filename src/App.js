import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/main/productdetail/ProductDetail';

function Index() {
  return (
    <>
      <Slider />
      <Main />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/products/:product_id' element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
