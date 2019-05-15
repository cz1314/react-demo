import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000)
  }

  componentWillMount() {
    clearInterval(this.timer)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    return (
      <div>
        <h1>hell0, world!</h1>
        <h2>时间 {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}


export default Clock;
