import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employees-list.css'

const EmployeesList = ({date, onDelete, onTogleRice, onTogleIncrease}) => {

    const element = date.map(item =>{
        const {id, ...propsItem} = item
        return(
            <EmployeesListItem 
                key={id} 
                {...propsItem}
                onDelete= {() => onDelete(id)}
                onTogleIncrease = { () => onTogleIncrease(id)}
                onTogleRice = { () => onTogleRice(id)}/>
        )
    })
    return(
        <ul className="app-list list-group">
            {element}

        </ul>
    )
}

export default EmployeesList;