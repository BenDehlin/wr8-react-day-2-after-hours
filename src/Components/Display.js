import { Component } from "react"
import Friend from "./Friend"

class Display extends Component {
  constructor() {
    super()
    this.state = {
      best_friend: {
        first_name: "Bob 3",
        last_name: "Person 3",
        email: "bob3person3",
      },
      friends: [
        { first_name: "Bob", last_name: "Person", email: "bobperson" },
        { first_name: "Bob 2", last_name: "Person2", email: "bob2person2" },
      ],
    }
  }
  render() {
    return (
      <div>
        <h1>Display</h1>
        {this.state.friends.map((element, index) => {
          return <Friend friend={element} key={index} />
        })}
        <h1>Other cool stuff down here</h1>
        <h1>This is a special zone for my best friend</h1>
        <Friend friend={this.state.best_friend} />
      </div>
    )
  }
}

export default Display
