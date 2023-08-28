import axios from "axios";
import { Searchbar } from "./Searchbar";
import { Component } from "react";
import { ImageGallery } from "./ImageGallery";
import { Button } from "./Button";
import { Modal } from "./Modal";
const MY_KEY = "38099797-78dca8015a0d6056d487ea901"

export class App extends Component{
  state = {
    search : "",
    data : [],
   page : 1,
   modalSrc : "",
   modalAlt : "",
   showModal : false,
  }
 
componentDidUpdate(prevProps, prevState) {
    if(prevState.search !== this.state.search){
      fetch(`https://pixabay.com/api/?key=${MY_KEY}&q=${this.state.search}&image_type=photo&page=${this.state.page}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(imgData => {
       return this.setState({data: imgData.hits})
    
      })
      
    } else  if(prevState.page !== this.state.page){
      fetch(`https://pixabay.com/api/?key=${MY_KEY}&q=${this.state.search}&image_type=photo&page=${this.state.page}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(imgData => {
       return this.setState((prevState) => {
        
        return {data: [...prevState.data, ...imgData.hits]}})
    
      })
    } else {
      return false
    }
    
    
    
}
openModal =({imgSrc, imgAlt}) => {
  this.setState({
    showModal: true,
  modalSrc : imgSrc,
  modalAlt : imgAlt,
  })
console.log(this.state)
}
closeModal = () => {
  this.setState({
    showModal: false,
  modalSrc : "",
  modalAlt : "",
  })
}

handleLoadMore = () =>{
this.setState((prevState) => {
  
  return {page: prevState.page + 1}
})


}
searchPicture =({name}) =>{
  this.setState ({search : name}) 
  console.log(this.state)
 
}
  render(){
  return (
    <div >
     <Searchbar onSubmit={this.searchPicture}></Searchbar>
    <ImageGallery data={this.state.data} openModal={this.openModal}/>
    {this.state.data.length > 0 && <Button onClick={this.handleLoadMore}/> }
    {this.state.showModal && (
      <Modal onClose ={ this.closeModal}
      modalSrc={this.state.modalSrc}
      modalAlt={this.state.modalAlt}
      />
    )}
    </div>
  );}
};
