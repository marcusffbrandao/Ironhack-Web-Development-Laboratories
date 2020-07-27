import React, { Component } from 'react';

class FormAdd extends Component {
  state = {
    data: {
      name: '',
      calories: '',
      image: '',
      quantity: 0
    },
    showForm: false
  }

  addNewForm() {
    this.setState({ showForm: true })
  }

  closeForm() {
    this.setState({ showForm: false })
  }

  saveFood() {
    const { funcAddFood } = this.props;
    funcAddFood(this.state.data);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const { data } = this.state;
    data[name] = value;
    console.log(data);
    this.setState({ data });
  };

  render(){
    const { name, calories, image } = this.state.data;

    return (
      <div>
      <button type="button" onClick={() => this.addNewForm()}>Adicionar</button>
      {this.state.showForm &&
      (
        <form>
          <input type="text" name="name" placeholder="Food Name" value={name} onChange={(e) => this.handleChange(e)}></input>
          <input type="number" name="calories" placeholder="Calories" value={calories} onChange={(e) => this.handleChange(e)}></input>
          <input type="text" name="image" value={image} onChange={(e) => this.handleChange(e)}></input>
          <button type="button" onClick={() => this.saveFood()}>Criar Produto</button>
          <button type="button" onClick={() => this.closeForm()}>Cancelar</button>
       </form>        
      )
      }
      </div>
    )
  }
}

export default FormAdd;