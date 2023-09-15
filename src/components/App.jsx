import { Component } from "react";
import  Searchbar  from "./Searchbar/Searchbar";
import  ImageGallery  from "./ImageGallery/ImageGallery";
// import { getImageBySearch } from "../api/api"

class App extends Component {
  state = {
    id: "", webformatURL: "", largeImageURL: "", searchQuery: "", error: ""
  }

  handleSetSearchQuery = (value) => {
    this.setState({ searchQuery: value })
   }
    
    
  
  // fetchImages = async () => {
  //   try {
  //     const data = getImageBySearch(this.state.searchQuery)
  //     this.setState({ gallery: data })
  //     console.log(data)
  //   } catch (error) { this.setState({error: error.response.data})}
  // }

  render() {
     return (
       <div>
         <Searchbar onSubmit={this.handleSetSearchQuery } />
         <ImageGallery query={this.state.searchQuery } />
    </div>
  );
  }
 
};

export default App