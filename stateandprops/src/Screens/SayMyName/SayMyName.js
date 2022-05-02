import React, { Component } from "react";

class SayMyName extends Component {
  state = {
    name: "abc",
  };

  ChangeState() {
    this.setState(
      {
        name: Math.random(),
      },
      () => console.log(this.state.name)
    );
  }

  componentDidMount() {
    alert("mount");
  }

  componentDidUpdate() {
    alert("update");
  }

  componentWillUnmount() {
    alert("bye bye");
  }

  render() {
    return (
      <div className="name">
        {" "}
        {this.state.name}
        <br />
        <button onClick={() => this.ChangeState()}>update name </button>{" "}
      </div>
    );
  }
}

export default SayMyName;
