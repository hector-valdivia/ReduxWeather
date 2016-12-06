import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends React.Component{
  constructor(props){
    super(props);

    this.state = {term:''};
    this.oninputChange = this.oninputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  oninputChange(event){
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event){
    event.preventDefault();

    //Necesitamos ir a fetch wather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day"
          className="form-control"
          value={this.state.term}
          onChange={this.oninputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Subtmit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);