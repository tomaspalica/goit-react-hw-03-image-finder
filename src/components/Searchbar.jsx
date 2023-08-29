import { Component } from "react";
import css from '../css/Searchbar.module.css'

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
    
   }
  
  render(){
  return (
<header className={css.searchbar}>
  <form className={css.form} onSubmit={this.handleSubmit} >
    <button type="submit" className={css.searchButton}>
      <span className="button-label">Search</span>
    </button>

    <input
      className={css.inputSearch}
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