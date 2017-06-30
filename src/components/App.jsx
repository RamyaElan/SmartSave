import React, { Component } from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      category: [{ name: '' }],
    }
  }

  handleNameChange = (evt) => {
    this.setState({ name: evt.target.value });
  }

  handlecategoryNameChange = (idx) => (evt) => {
    const newcategory = this.state.category.map((category, sidx) => {
      if (idx !== sidx) return category;
      return { ...category, name: evt.target.value };
    });

    this.setState({ category: newcategory });
  }

  handleSubmit = (evt) => {
    const { name, category } = this.state;
    alert(`Added: ${name} with ${category.length} category`);
  }

  handleAddcategory = () => {
    this.setState({ category: this.state.category.concat([{ name: '' }]) });
  }

  handleRemovecategory = (idx) => () => {
    this.setState({ category: this.state.category.filter((s, sidx) => idx !== sidx) });
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

        <h4>category</h4>

        {this.state.category.map((category, idx) => (
          <div className="category">
            <input
              type="text"
              placeholder={`category #${idx + 1} name`}
              value={category.name}
              onChange={this.handlecategoryNameChange(idx)}
            />

            
            <button type="button" onClick={this.handleRemovecategory(idx)} className="small">-</button>
          </div>
        ))}
        <button type="button" onClick={this.handleAddcategory} className="small">Add category</button>
        <button>Submit</button>
      </form>
    )
  }
}


export default App;
