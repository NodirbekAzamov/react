import React, { Component, useState } from "react";

export class App extends Component {
  state = {
    count: 0,
    users: 1,
    counter: [0],
    userr: {
      address: { country: { city: { street: { title: "Baker Street" } } } },
    },
  };

  // task-3
  Count = () => {
    const { users, count } = this.state;
    this.setState({
      count: count + users,
    });
  };

  user = () => {
    const { users } = this.state;
    this.setState({
      users: users + 1,
    });
  };

  // task-4
  counter = () => {
    let result = this.state.counter;
    let last_item = result[result.length - 1];
    result.push(last_item + 0);
    this.setState({
      counter: result,
    });
  };

  pilus = (index) => {
    this.setState({
      arr: this.state.counter[index]++,
    });
  };

  minus = (index) => {
    this.setState({
      arr: this.state.counter[index]--,
    });
  };

  // task-5
  button = () => {
    this.setState({
      userr: {address: { country: { city: { street: { title: "Wole  Street" } } } }}
    });
  };

  render() {
    const { count, users, userr, counter } = this.state;
    return (
      <div>
        {/* task-3 */}
        <div>
          <h1>Metr {count} </h1>
          <button onClick={this.Count}>yurish</button>

          <h2>Qadam kattakigi: {users} metr </h2>
          <button onClick={this.user}>qadamni kengaytirish</button>
        </div>
        <br />
        {/* task-4 */}
        <div>
          <button onClick={this.counter}>Add counter</button> <br />
          {counter.map((item, index) => {
            return (
              <div>
                <button onClick={() => this.pilus(index)}>+</button>
                <span>{item}</span>
                <button onClick={() => this.minus(index)}>-</button>
              </div>
            );
          })}
        </div>

        {/* task-5 */}
        {/* <h3>{userr.firstName}</h3>
        <h3>{userr.lastName}</h3> */}
        {/* <h3>{userr.address}</h3> */}

        <h1>{userr.address.country.city.street.title}</h1>
        <button onClick={this.button}>button</button>
      </div>
    );
  }
}

