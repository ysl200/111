import React, { Component } from "react";
import { createRoot } from 'react-dom/client';


const userStyle = { color: 'red', fontWeight: 200 };
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
  return <div style={userStyle}>SwiperItem</div>
}

function Swiper(){
  return <div>
  `Swiper -- <SwiperItem></SwiperItem> 
  </div>
}

const Tabbar = ()=>{
  return <div style={{backgroundColor:"red", fontSize:"14px"}}>Tabbar</div>
}

const Footer = ()=>  <div>Footer</div>

export default function App() {

    return (
      <div>
        <Navbar></Navbar> 
        <Swiper></Swiper>
        <Tabbar></Tabbar> 
        <Footer></Footer> 
      </div>
    )
  }

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
