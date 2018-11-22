import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Input } from 'antd'
// import search action
import { searchAction } from '../actions/index'

const Search = Input.Search;

class SearchBar extends Component {

  constructor(props) {

    super(props)

    this.state = {
      search_term: ''
    }
  }
  // life cycle
  //
  // event handlers/helpers
  onInputChange = (e) => {
    //    console.log("term changed" , e.target.value)
    this.setState({ search_term: e.target.value })
  }

  onSearchSubmit = (e) => {
    //    e.preventDefault()

    console.log('search submited', this.props)
    this.props.dispatch(searchAction(e));

    this.setState({ search_term: '' })
  }

  render() {
    return (
      <div className="searchContainer">
        <Search
          placeholder="input search text"
          onSearch={this.onSearchSubmit}
          onChange={this.onInputChange}
          value={this.state.search_term}
        />
      </div>
    )
  }


}

export default connect()(SearchBar)

/*<form onSubmit={this.onSearchSubmit}>
          <input
            placeholder="search the entries"
            value={this.state.search_term}
            onChange={this.onInputChange}
          />
          <span>
            
          </span>
          </form>*/
