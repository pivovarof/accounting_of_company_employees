import './employees-list-item.css'
import {Component} from 'react';

class EmployeesListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            increase: false,
            rise: false
        }        
    }

    onIncrease = () => {
        
        this.setState(({increase}) => ({
            
            increase: !increase            

        }))
    }
    nameStar = () => {
        
        this.setState(({rise}) => ({
            
            rise: !rise           
            
        }))
        
    }

    render(){
        
        const {salary, name, onDelete} = this.props;
        const {increase, rise} = this.state;
        // const {name2} = this.state;
        let classIncrease = 'list-group-item d-flex justify-content-between';
        
    if (increase){
        classIncrease += ' increase';
    }

    if (rise){
        classIncrease += ' like';
    }

    return(
        <li className={classIncrease}>
            <span className="list-group-item-label" onClick={this.nameStar}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
            <div className="d-flex align-items-center justify-content-center">
                <button className="btn-cookie btn-sm"
                        onClick={this.onIncrease}
                        type="button">
                    <i className="fas fa-cookie"></i>
                </button>
                <button className="btn-trash btn-sm"
                        type="button"
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
    }
}

export default EmployeesListItem;