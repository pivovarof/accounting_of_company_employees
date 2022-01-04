
import './app-filter.css'

const AppFilter = (props) =>{

    const buttonsFilter = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rice', label: 'На повышение'},
        {name: 'moreThen1000', label: 'ЗП больше 1000$'}
    ]

    
    const buttonFilt = buttonsFilter.map( ({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return(
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterChoose(name)}>
                {label}
            </button>
        )
    })

    
    return(
        <div className="btn-group">
            {buttonFilt}          
        </div>
    )
}

export default AppFilter;