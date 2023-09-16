import { Component } from "react";
import css from "./Searchbar.module.css"


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
            <header className={css.searchbar}>
         <form className={css.form}
             onSubmit={this.handleSubmitSearch }
         >
    <button type="submit" className={css.search_button}></button>

    <input
      className={css.input}
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
