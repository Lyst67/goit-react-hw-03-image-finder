import { Component } from "react";
import  Searchbar  from "./Searchbar/Searchbar";
import  ImageGallery  from "./ImageGallery/ImageGallery";
import css from "./App.module.css"

class App extends Component {
  state = {searchQuery: "" }
    
  handleSetSearchQuery = (value) => {
    this.setState({ searchQuery: value })
   }

  render() {
     return (
       <div className={css.app}>
         <Searchbar onSubmit={this.handleSetSearchQuery } />
         <ImageGallery query={this.state.searchQuery } />
    </div>
  );
  }
 
};

export default App