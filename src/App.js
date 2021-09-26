
import  React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Category from './components/Category';
import Products from './components/Products';

function App() {
  return (
    <>
    {/* <h1>hoooooooooooooooooooo</h1> */}
      <Header />
      <Category />
      <Products />
      <Footer />
    </>

  );
}

export default App;