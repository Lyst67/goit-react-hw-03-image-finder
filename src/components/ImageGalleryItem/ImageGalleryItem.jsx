import { Component } from "react";
import Modal from "components/Modal/Modal";
import css from "./ImageGalleryItem.module.css"

class ImageGalleryItem extends Component {
    state = {
      showModal: false
    }

    toggleModal = () => {
        this.setState(({ showModal}) => ({ showModal: !showModal}))
    } 

    render() {
        const {showModal} = this.state
        const {previewURL, largeImageURL, tags, id} = this.props.image
        return (
            <>
                <li key={id} className={css.gallery_item} onClick={this.toggleModal} >
                <img className={css.item_image} src={previewURL}  alt={tags} />
            </li>
              { showModal && (<Modal toggleModal={this.toggleModal} largImg={largeImageURL} tags={tags} />) }
            </>
           
            
        ) 
    }
   
}

export default ImageGalleryItem