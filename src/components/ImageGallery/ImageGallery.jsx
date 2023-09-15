import { Component } from "react"
import  ImageGalleryItem  from "../ImageGalleryItem/ImageGalleryItem"
import { Button } from "components/Button/Button"
import { Loader } from "components/Loader/Loader"
import css from './ImageGallery.module.css'




class ImageGallery extends Component {
    state = {
    gallery:[], isLoading: false, error: null
}

    componentDidUpdate(prevProps, prevStates) {
        if (prevProps.query !== this.props.query) {
            this.setState({ gallery: [], isLoading: true })
            setTimeout(() => {fetch(`https://pixabay.com/api/?q=${this.props.query}&page=1&key=38613829-66758419eaca37922b4e1f24f&image_type=photo&orientation=horizontal&per_page=12`).then(res => res.json()).then(res => this.setState({gallery: res.hits })).catch(error => this.setState({error})).finally(this.setState({isLoading: false}))}, 1000)
            
        }
    }
    handleLoadMore = (event) => {
        this.setState({ isLoading: true })
        setTimeout(() => {
            fetch(`https://pixabay.com/api/?q=${this.props.query}&page=1&key=38613829-66758419eaca37922b4e1f24f&image_type=photo&orientation=horizontal&per_page=24`).then(res => res.json()).then(res => this.setState({ gallery: res.hits})).catch(error => this.setState({error})).finally(this.setState({isLoading: false})) 
        }, 1000)  
    }


  

    render() {
        const { gallery, isLoading, error} = this.state
        return (
            <div > 
                {error && <h1>{ error}</h1>}
                <ul className={css.image_gallery}>
                    {gallery.map((image) => (
                < ImageGalleryItem image={image} key={image.id} />
            ))}
                </ul>
                 {isLoading && ( <Loader/>)}
                {gallery.length > 0 && (<Button handleLoadMore={this.handleLoadMore} />)}  
           </div>
       
    )  
    } 
}

 export default ImageGallery