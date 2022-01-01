
import AppInfo from '../app-info/app-info';
import './app.css';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {

  const date = [
    {name: 'John S.', salary: 800, increase: false, id: 1},
    {name: 'Alex K.', salary: 1000, increase: true, id: 2},
    {name: 'Bob T.', salary: 700, increase: false, id: 3}
  ]
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />

      </div>
      <EmployeesList date={date} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
