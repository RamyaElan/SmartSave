import React, { Component } from 'react';

const CloseButton = () => (<button>Close modal</button>);
class Modal extends React.Component {
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
       value[i] = event.target.value++;
       this.setState({value});
    }

    increment() {
      this.setState({
        counter: this.state.counter + 1
      });
    }

    decrement(){
      this.setState({
        counter: this.state.counter - 1
      });
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
               <div style = {{  margin: 10,
               width: 350, height: 150,
               marginBottom: 5,
               padding: "40px",
               justifyContent: 'center',
               backgroundColor: 'lightgray'}}key={i}>
                   Category:<input type="text" onChange={this.handleChange.bind(this,i)} />
                   <input type='button' value='x' onClick={this.removeClick.bind(this,i)}/>
                    Percentage: <input type="number" value={this.state.value[i] || ''} onChange={this.handleClick.bind(this,i)} />
               </div>
            )
     }
     return uiItems || null;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      PhysicalBalance: <input
        style={{display: 'flex', justifyContent: 'center'}}
        type="text"
        value={this.state.name}
        onChange={this.handleNameChange}
      /><br/>

      VirtualBalance: <input
        type="text"
        value={this.state.name}
        onChange={this.handleNameChange}
      />

          {this.createUI()}
          <input type='button' style = {{  margin: 10,
marginBottom: 5,
padding: "10px",
margin: "20px",
alignItems: 'center',
borderRadius: 0.5,
borderWidth: 1,
borderColor: 'black',
shadowColor: '#000',
backgroundColor: 'lightgray'}} value='add category' onClick={this.addClick.bind(this)}/>
          <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Modal;
