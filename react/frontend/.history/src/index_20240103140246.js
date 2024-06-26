import React, { Component } from "react";
import { createRoot } from 'react-dom/client';

class App extends Component {
  constructor() {
    super();
    this.state = {
      filmList: [],
      info: "",
    };
  }

  componentDidMount() {
    this.setState({
      filmList: res.data.data.films,
    });
  }

  render() {
    return (
      <div>
        {/* {this.state.info} */}
        {this.state.filmList.map((item) => (
          <FilmItem
            key={item.filmId}
            {...item}
            onEvent={(value) => {
              // console.log("父组件接受",value)

              this.setState({
                info: value,
              });
            }}
          ></FilmItem>
        ))}

        <FilmDetail info={this.state.info}></FilmDetail>
      </div>
    );
  }
}

/*受控组件*/
class FilmItem extends Component {
  render() {
    // console.log(this.props)
    let { name, poster, grade, synopsis } = this.props;
    return (
      <div
        className="filmitem"
        onClick={() => {
          // console.log(synopsis)
          this.props.onEvent(synopsis);
        }}
      >
        <img src={poster} alt={name} />
        <h4>{name}</h4>
        <div>观众评分：{grade}</div>
      </div>
    );
  }
}

class FilmDetail extends Component {
  render() {
    return <div className="filmdetail">{this.props.info}</div>;
  }
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
