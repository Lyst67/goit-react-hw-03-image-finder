import { Component } from "react"
import css from "./Modal.module.css"

 class Modal extends Component {
  
   componentDidMount() {
     window.addEventListener("keydown", this.handleKeydown)
   }
   componentWillUnmount(){
     window.removeEventListener("keydown", this.handleKeydown)
   }

   handleKeydown = (event) => {
     if (event.code === "Escape")
       this.props.toggleModal()
   }

  //  handleOvarlayClick = (event) => {
  //    if (event.target === event.currentTarget) {
  //      this.props.toggleModal()
  //    }
  //  }
   
   
   render() {
     const {largImg, tags, toggleModal} = this.props
     return (
        <div className={css.overlay} onClick={this.handleOvarlayClick}>
  <div className={css.modal}>
    <img src={largImg} alt={tags} />
        </div>
        <button type="button" className={css.modal_btn} onClick={toggleModal}>X</button>
</div>
    )
}
  }
   

export default Modal