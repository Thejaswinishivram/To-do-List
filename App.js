import logo from './logo.svg';
import './App.css';
import Input from './components/input/input.components';
import List from './components/list.components';
import { useState } from 'react';

function App() {
const [tasks,setTasks]=useState([]);

  return (
    <div className="App">
      <div className='list-container'>
        <List tasks={tasks}/>
      </div>

      <div className='Input-container'>
          <Input setTasks={setTasks} tasks={tasks}/>
      </div>
    </div>
  );
}

export default App;
