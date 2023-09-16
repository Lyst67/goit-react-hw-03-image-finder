import { Component } from "react"
import  ImageGalleryItem  from "../ImageGalleryItem/ImageGalleryItem"
import { Button } from "components/Button/Button"
import { Loader } from "components/Loader/Loader"
import { getImageBySearch } from "api/api"
import css from './ImageGallery.module.css'

class ImageGallery extends Component {
    state = {
    gallery:[], isLoading: false, error: null, page: 1
    }
    
    componentDidUpdate(prevProps, prevStates) {
        if (prevProps.query !== this.props.query) {
            this.setState(({page: 1, gallery:[]}))
            this.fetchImages()
        }
     
     }
        
    
    fetchImages = async () => {
        try {
             this.setState({ isLoading: true })
            const { hits } = await getImageBySearch(this.props.query, this.state.page) 
            this.setState((prev) => ({ gallery: [...prev.gallery, ...hits], page: this.state.page + 1 }))
        } catch (error) { this.setState({ error: error.response.data }) }
        finally {
            this.setState({ isLoading: false})
        }
    }

    handleLoadMore = () => {
        this.fetchImages(this.props.query, this.state.page)
    }

    render() {
        const { gallery, isLoading, error} = this.state
        return (
            <div > 
                {error && <h1>{error}</h1>}
                {isLoading && ( <Loader/>)}
                <ul className={css.image_gallery}>
                    {gallery.map((image) => (
                < ImageGalleryItem image={image} key={image.id} />
            ))}
                </ul>
                {gallery.length > 0 && (<Button handleLoadMore={this.handleLoadMore} />)}  
           </div>
       
    )  
    } 
}

 export default ImageGallery