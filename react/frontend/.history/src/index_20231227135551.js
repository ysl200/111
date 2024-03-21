import React, { Component } from "react";
import ReactDOM from 'react-dom';

class Navbar extends Component {
    render() {
        return <div>navbar</div>;
    }
}

function Swiper() {
    return <div>swiper</div>;
}

const Tabbar = () => <div>tabbar</div>;

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Swiper></Swiper>
                <Tabbar></Tabbar>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)