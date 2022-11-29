import React from 'react';
import { render } from "react-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);