import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios'; //WE ALSO CAN USE FETCH
import ImageResults from '../image-results/ImageResults';







class Search extends Component {

  //INITIAL STATE
  state = {
    searchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api/',
    apiKey: '11379278-05ba25c96a2de9c23475aae31',
    images: []
  }

  onTextChange = (e) => {
    const val = e.target.value;
    //ONCE THE ONCHANGE LOAD THIS WILL BE SET IN STATE
    this.setState({ [e.target.name]: val }, () => {
      //WHEN SEARCH BOX IS EMPTY IT WILL NOT SHOW ANYTHING
      if (val === '') {
        this.setState({ images: [] })
      } else {
        // GETTING THE DATA FROM API
        axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
          .then(res => this.setState({ images: res.data.hits })) // SETTING IN STATE
          .catch(err => console.log(err));
      }
    });
  }



  //BY THIS METHOD WE ARE GETTING THE VALUE FROM OUR DROPDOWN
  onAmountChange = (e, index, value) => this.setState({ amount: value });


  render() {
    // console.log(this.state);
    console.log(this.state.images);
    return (
      <div>
        {/* TEXT FIELD FOR GETTING THE SEARCH VALUE */}
        <TextField name="searchText" value={this.state.searchText} onChange={this.onTextChange} floatingLabelText="Search For Images..." fullWidth={true}></TextField>
        <br />
        {/* THIS IS OUR DROP DOWN */}
        <SelectField name="amount" floatingLabelText="Amount" value={this.state.amount} onChange={this.onAmountChange}>
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        <br />

        {/* HERE WE ARE USING TARNARY OPERATOR OR LOOP */}
        {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) : null}
      </div>
    )
  }
}

export default Search;
