import React from 'react';
import Navbar from './components/Navbar';
import bg from './Img/background.webp'
import Item from './components/Item';

const App = () => {
  return (
    <>
      
      <div style={{
        backgroundImage: `url(${bg})`,
      }} className='w-full h-screen bg-no-repeat bg-cover relative'>
        <Navbar></Navbar>
      </div>
      <Item></Item>
      
    </>
  );
};

export default App;