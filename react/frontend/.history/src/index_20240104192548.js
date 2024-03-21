import React, { Component } from "react";
import { createRoot } from 'react-dom/client';



const styles = {
    item: {border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 #ccc'},
    user: {fontSize: '14px'},
    content: {fontSize: '12px'}
}

export default function App(props) {

    return (
      <div>
        <div style = {styles.item}>
        <h1 style = {styles.user}>评论人：{props.user}</h1>
        <p style = {styles.content}>评论内容：{props.content}</p>
    </div>
      </div>
    )
  }

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
