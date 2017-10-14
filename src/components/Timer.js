import React from 'react';
import '../styles/Timer.css';
/**
 * The `defaultValue` property sets the initial position of the slider.
 * The slider appearance changes when not at the starting position.
 */

export default class LinearProgressExampleDeterminate extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: 100,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(95), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed < 0) {
      this.setState({completed: 0});
    } else {
      this.setState({completed});
      this.timer = setTimeout(() => this.progress(completed - 5), 1000);
    }
  }

  render() {
    return (
    <div id="slidecontainer">
        <input type="range" value={this.state.completed} class="slider" id="myRange"></input>
    </div>
    );
  }
}

