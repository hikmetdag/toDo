import { useState } from 'react';
import './App.css';


function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setImputvalue] = useState();
  const handleChange = (event) => {
    setImputvalue(event.target.value);
  };
  const handleClick = () => {
    if (inputValue) {
      setTodoList(current => [...current, inputValue]);
    }

    setImputvalue('');
  };
  const deleteItem = (index) => {
   const newlist = [...todoList];
    newlist.splice(index, 1);
    setTodoList(newlist);
  };
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" placeholder='Add what you plan' onChange={handleChange} value={inputValue} />
        <button onClick={handleClick} >Add</button>
        {todoList.map((item, index) => <div><p key={index}>{index + 1}-{item}  </p> <span onClick={() => { deleteItem(index); }}>dlt</span></div>)}
        {todoList.length === 0
          && (<p>Make a plan</p>)}
      </header>
    </div>
  );
}

export default App;
