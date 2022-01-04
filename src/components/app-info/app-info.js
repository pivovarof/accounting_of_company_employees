

import './app-info.css';

const AppInfo = ({employees, prize}) =>{
    return(
        <div className="app-info">
            <h1>Учет сотрудников компании</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {prize}</h2>
        </div>
    )
}

export default AppInfo;