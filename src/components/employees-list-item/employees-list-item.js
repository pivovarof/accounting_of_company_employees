import './employees-list-item.css'

const EmployeesListItem = ({name, salary, increase}) => {

    let classIncrease = 'list-group-item d-flex justify-content-between';
    if (increase){
        classIncrease += ' increase';
    }
    return(
        <li className={classIncrease}>
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
            <div className="d-flex align-items-center justify-content-center">
                <button className="btn-cookie btn-sm"
                        type="button">
                    <i className="fas fa-cookie"></i>
                </button>
                <button className="btn-trash btn-sm"
                        type="button">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;