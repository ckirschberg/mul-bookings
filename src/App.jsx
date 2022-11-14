import logo from './logo.svg';
import './App.css';
import StateExample from './StateExample';
import BookingForm from './BookingForm';
import Name from './Name';

function App() {

  const names = ['Anne', 'Julian', 'Sebastian'];
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <StateExample />
        <BookingForm />

        { names.map(myName => (
         <Name name={myName} /> 
        ))}
        

        <p>
          We want coffee - Julian pays for us all -
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
