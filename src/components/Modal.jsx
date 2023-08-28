import { Component } from "react";
import css from '../css/Modal.module.css'
export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
      }
handleKeyDown = evt => {
    if (evt.keyCode === 27) {
        this.props.onClose()}
}
handleBackdropClick = e => {
    if(e.target === e.curentTarget){
        this.props.onClose()
    }
}
render(){
    return (
    <div className={css.overlay} onClick={this.handleBackdropClick}>
  <div className={css.modalContent}>
    <img className={css.modalImg} src={this.props.modalSrc} alt={this.props.modalAlt} />
  </div>
</div>
)}}