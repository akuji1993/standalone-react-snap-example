import App from './App';
import React from 'react';
import {hydrate, render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');

if (root.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
    root
  )
} else {
  render (
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
    root
  )
}
