import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>hello world</div>
    </>
  );
}
export default App;
