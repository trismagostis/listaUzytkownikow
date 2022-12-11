import React, { Component } from "react";
import "./Users.css";
import UsersList from "./UsersList";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.myRef = React.createRef();
  }
  addUser = (event) => {
    event.preventDefault();
    let newUser = this.myRef.current.value;
    if(newUser!==""){ 
    this.myRef.current.value = "";
    this.setState((state) => {
      return { users: state.users.concat(newUser) };
    }
    );}
    else {alert("nie jestes chyba noname chinski");}
  };
  deleteUser = (userIndex) => {
    // console.log(userIndex);
    this.setState((state) => {
      return {
        users: state.users.filter((user, index) => index !== userIndex),
      };
    });
  };

  render() {
    return (
      <div className="main">
        <h1>Users List</h1>
        <form onSubmit={this.addUser}>
          <input ref={this.myRef} type="text" placeholder="Enter name" maxLength={30} />
          <button type="submit">Add user</button>
        </form>
        <UsersList
          usersList={this.state.users}
          deleteUserMethod={this.deleteUser}
        />
      </div>
    );
  }
}
export default Users;
