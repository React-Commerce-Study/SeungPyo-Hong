import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  ${reset}

  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`;

function Index() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Slider />
      <Main />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
