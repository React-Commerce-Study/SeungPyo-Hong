import React from 'react';
import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

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

  button {
    background: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
`;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
