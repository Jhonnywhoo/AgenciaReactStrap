import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/header.js';
import Main from './components/Main/main.js'
import Section from './components/Section/section';
import Section2 from './components/Section2/section2';
import Footer from './components/Footer/footer';

function App() {
  return (
    <>
    < Header />
    < Main />
    < Section />
    < Section2 />
    < Footer />
    </>
  );
}

export default App;
