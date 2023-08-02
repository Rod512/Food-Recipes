import React from 'react';
import Navbar from './components/Navbar';
import bg from './Img/background.webp'
import Item from './components/Item';

const App = () => {
  return (
    <>
      <Navbar/>
      <div style={{
        background: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3)),url(${bg})`,
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display:"flex",
        justifyContent:'center',
        alignItems: 'center',
        color: 'white',
        textAlign:'center',
        fontSize:'4rem'
      }}>
       <h1 >Search your favourite food <br /> you want</h1>
      </div>
      <Item></Item>
      
    </>
  );
};

export default App;