import React, { Component } from "react";
import MultiSearchSelect from "react-search-multi-select";
 
class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: ["Allison","Arthur","Beryl","Chantal","Cristobal","Danielle","Dennis","Ernesto","Felix","Fay","Grace","Gaston","Gert","Gordon"]
    };
  }
  handleChange = (arr) => {
    console.log(arr);
  }
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <MultiSearchSelect searchable={true} showTags={true} multiSelect={true} width="500px" onSelect={this.handleChange} options={this.state.values}/>
      </div>
    );
  }
}
 
export default MultiSelect;