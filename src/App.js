import './App.css';
import Display from './Components/Display'

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Display />
    </div>
  );
}

export default App;


//Display Component - storing a list of friends
//Child Component - showing each object in the friends array
//Form - input fields, state for new friends, submit button