import React from 'react';
import axios from 'axios';


class Form extends React.Component {
  // in the state object we define an element to handle the input value of the userName field
state={ userName: '' };
handleSubmit = async (event) => {
  event.preventDefault();
  const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
  console.log(resp.data);
  this.props.onSubmit(resp.data);
  this.setState({userName: ''});
}
render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Github username"
          value={this.state.userName}
          onChange={event => this.setState({userName: event.target.value})}
          required/>
        <button>Add card</button>
      </form>
    )
}
}


export default Form;
