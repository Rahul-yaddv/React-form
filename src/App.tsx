import './App.css';
import FormF from '../components/Form/Form';
import UsersData from '../components/UserCard/UsersData';
function App() {
  return (
    <>
      <header>
        <h1 className='header'>User Form</h1>
      </header>
      <div className='form-container'>
        <FormF />
      </div>
      <UsersData />
    </>
  );
}

export default App;
