import React, { Component } from "react";
import { createRoot } from 'react-dom/client';


class Navbar extends Component {
  render() {
    return (
      <div>
        Navbar
      </div>
    );
  }
}


function SwiperItem(){
  return <div>SwiperItem</div>
}

function Swiper(){
  return <div>
  `Swiper -- <SwiperItem></SwiperItem> 
  </div>
}

const Tabbar = ()=>{
  return <div>Tabbar</div>
}

const Footer = ()=>  <div>Footer</div>

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Swiper></Swiper> 
        <Tabbar></Tabbar> 
        <Footer></Footer> 
      </div>
    )
  }
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
