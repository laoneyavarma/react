import logo from './logo.svg';
import './App.css';
import Child from './components/Child';
import Parent from './components/Parent';


function App() {
  return (
    <div className='App'>
      
      
      <Child  name="lava" age="27"/>
      <Child  name="suri" age="30"/>
      <Child  name="jay" age="20"/>
      
    <Parent name="lavanya" age="27"/>
    <Parent name="suresh" age="30"/>
    <Parent name="jayanth" age="20"/>
    </div>
      
  );
}

export default App;
