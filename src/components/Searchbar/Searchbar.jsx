import { Component } from "react";


class Searchbar extends Component  {
    state = {
    value: ""
    }
    
    handleChange = ({ target: {value}}) => {
    this.setState({value})
    }

    handleSubmitSearch = (event) => {
        event.preventDefault()
       this.props.onSubmit(this.state.value.toLowerCase())
    
}

    render() {
 return (
            <header className="searchbar">
         <form className="form"
             onSubmit={this.handleSubmitSearch }
         >
    <button type="submit" className="button">
      Search
    </button>

    <input
      className="input"
      type="text"
      onChange={this.handleChange}
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    )
    }
}
    export default Searchbar
