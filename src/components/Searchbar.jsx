import { Component } from "react";


export class Searchbar extends Component { 
  state = {
    name :""
  }

  handleChange = (e) =>{
    this.setState((state) => {
          
      return {[e.target.name]: e.target.value}
     })
    
  }
   handleSubmit = (e) =>{
    e.preventDefault();
    this.props.onSubmit({...this.state})
    this.setState({name: ""})
   }
  
  render(){
  return (
<header className="searchbar">
  <form className="form" onSubmit={this.handleSubmit} >
    <button type="submit" className="button">
      <span className="button-label">Search</span>
    </button>

    <input
      className="input"
      type="text"
      name="name"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={this.handleChange}
    />
  </form>
</header>
  );}}