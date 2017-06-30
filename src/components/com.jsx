import React, { Component } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {category: [], count: 1, value: []};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(i, event) {
     let category = this.state.category.slice();
     category[i] = event.target.category;
     this.setState({category});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.category);
    event.preventDefault();
  }


  handleClick(i, event) {
       let value = this.state.value.slice();
       value[i] = event.target.value;
       this.setState({value: value+1});
    }

  addClick(){
    this.setState({count: this.state.count+1})
  }

  removeClick(i){
     let category = this.state.category.slice();
     category.splice(i,1);
     this.setState({
        count: this.state.count - 1,
        category
     })
  }

  createUI(){
     let uiItems = [];
     for(let i = 0; i < this.state.count; i++){
           uiItems.push(
               <div key={i}>
                   <input type="text" value={this.state.category[i] || ''} onChange={this.handleChange.bind(this,i)} />
                   <input type="text" value={this.state.value[i] || ''} onChange={this.handleChange.bind(this,i)} />
                   <input type='button' value='+' onClick={this.handleClick.bind(this,i)}/>
                   <input type="text" value={this.state.value[i] || ''} onChange={this.handleChange.bind(this,i)} />
                   <input type='button' value='-' onClick={this.removeClick.bind(this,i)}/>
                   <input type='button' value='remove' onClick={this.removeClick.bind(this,i)}/>
               </div>
            )
     }
     return uiItems || null;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      PhysicalBalance: <input
        type="text"
        value={this.state.name}
        onChange={this.handleNameChange}
      />

      VirtualBalance: <input
        type="text"
        value={this.state.name}
        onChange={this.handleNameChange}
      />

          {this.createUI()}
          <input type='button' value='add category' onClick={this.addClick.bind(this)}/>
          <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default App;
