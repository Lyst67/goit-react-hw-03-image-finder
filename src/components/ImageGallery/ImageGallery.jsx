import { Component } from "react"
import  ImageGalleryItem  from "../ImageGalleryItem/ImageGalleryItem"
import { Button } from "components/Button/Button"
import { Loader } from "components/Loader/Loader"
import { getImageBySearch } from "api/api"
import css from './ImageGallery.module.css'

class ImageGallery extends Component {
    state = {
    gallery:[], isLoading: false, error: null, page: 1, isButton: false
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.props.query === "") {
            alert("Fill in the field, please!")
            return
        }
        if (prevProps.query !== this.props.query) {
            this.setState({ page: 1, gallery: [] })
            this.fetchImages()
        } else {
            if (prevState.page !== this.state.page && prevProps.query === this.props.query)
            { this.fetchImages() }
        }  
        }
        
    fetchImages = async () => {
        try {
             this.setState({ isLoading: true })
            const data = await getImageBySearch(this.props.query, this.state.page) 
            if (data.hits.length === 0) {
              alert('Opps! There are no images for your request! Please try again!')
           return  
            }

            this.setState((prev) => ({ gallery: [...prev.gallery, ...data.hits], isButton: true })) 
            
            if ([...this.state.gallery, ...data.hits].length >= data.totalHits)
             { this.setState({ isButton: false })
                return
            }   
        } catch (error) { this.setState({ error: error.response.data })} 
        finally {
            this.setState({ isLoading: false})
        }
    }

    handleLoadMore = () => {
          this.setState(prevState => ({
      page: prevState.page + 1,
    }))  
    }

    render() {
        const { gallery, isLoading, error, isButton } = this.state
        return (
            <div > 
                {error && <h1>{error}</h1>}
                {isLoading && ( <Loader/>)}
                <ul className={css.image_gallery}>
                    {gallery.map((image) => (
                < ImageGalleryItem image={image} key={image.id} />
            ))}
                </ul>
                {isButton && (<Button handleLoadMore={this.handleLoadMore} />)}  
           </div> 
    )  
    } 
}

 export default ImageGallery