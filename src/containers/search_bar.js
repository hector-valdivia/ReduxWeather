import React from 'react';

export default class SearchBar extends React.Component{
  constructor(props){
    super(props);

    this.state = {term:''};
    this.oninputChange = this.oninputChange.bind(this);
  }

  oninputChange(event){
    console.log(event.target.value);
    this.setState({term:event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();

    
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