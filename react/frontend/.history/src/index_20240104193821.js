
import React from "react";
import { ReactDOM } from "react";


var HelloDada = React.creatClass({
    getInitialState:function(){
        return {
            backgroundColor:'#FFFFFF'
        }
    },
    handleWheel:function(e){
        var newColor = (parseInt(this.state.backgroundColor.substr(1),16)+e.deltaY*997).tiString(16);
        this.setState({
            backgroundColor:newColor
        })
    },
    render:function(){
        return <div onWheel={this.handleWheel} style={this.state}>
        <p>Dada Shuaige</p> 
        </div>
    }
});

ReactDOM.render(<HelloDada />,document.body)
// const container = document.getElementById('root');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<onClick />);
