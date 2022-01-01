import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employees-list.css'

const EmployeesList = ({date}) => {

    const element = date.map(item =>{
        const {id, ...propsItem} = item
        return(
            <EmployeesListItem key={id} {...propsItem} />
        )
    })
    return(
        <ul className="app-list list-group">
            {element}

        </ul>
    )
}

export default EmployeesList;