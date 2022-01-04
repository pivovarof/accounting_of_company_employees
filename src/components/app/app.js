import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import './app.css';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : [
        {name: 'John S.', salary: 800, increase: true, rice: false, id: 1},
        {name: 'Alex K.', salary: 1000, increase: false, rice: true, id: 2},
        {name: 'Bob T.', salary: 700, increase: false, rice: false, id: 3}
      ],

      term: '',
      filter: ''

    }
    this.maxId = 4;
  }

   deleteItem = (id) => {
     this.setState(({data}) => {
       return {
         data: data.filter(item => item.id !== id)
       }
     }) 
   }

   addItem = (name, salary) => {
     
     const newItem = {
       name,
       salary,
       increase: false,
       rice: false,
       id: this.maxId++
     }

     this.setState(({data}) => {
       const newArr = [...data, newItem]
       return {
         data: newArr
       }
     })
   }

   onTogleIncrease = (id) => {
     this.setState(({data}) => ({
       data: data.map( item => {
          if( item.id === id){
            return {...item, increase: !item.increase}
          }
          return item;
       })
     }))
   }

   onTogleRice = (id) => {
    this.setState(({data}) => ({
      data: data.map( item => {
         if( item.id === id){
           return {...item, rice: !item.rice}
         }
         return item;
      })
    }))
  }

  searchEmp = (arr, term) => {
    if( term.length === 0){
      return arr
    }
    return arr.filter(item => {
      return item.name.indexOf(term) > -1;
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  filterEmp = (arr, filter) => {
    switch(filter){
      case 'rice':
        return arr.filter( item => item.rice);
      case 'moreThen1000':
        return arr.filter( item => item.salary > 1000);
      default:
        return arr;

    }
  }

  onFilterChoose = (filter) => {
    this.setState({filter})
  }
  

  render(){
    const {data, term, filter} = this.state;
    const employees = this.state.data.length;
    const prize = this.state.data.filter(item => item.increase).length;
    const visibleDate = this.filterEmp(this.searchEmp(data, term), filter)

    return (
      <div className="app">
        <AppInfo employees={employees} prize={prize}/>
        <div className="search-panel">
          <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
          <AppFilter 
            filter={filter}
            onFilterChoose={this.onFilterChoose}
            />
  
        </div>
        <EmployeesList 
          date={visibleDate}
          onDelete={this.deleteItem} 
          onTogleIncrease = {this.onTogleIncrease}
          onTogleRice = {this.onTogleRice}/>
        <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
