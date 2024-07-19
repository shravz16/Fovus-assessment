import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'

function App() {
  const [text,setText]=useState('');
  const [file,setFile]=useState(null);
  function handleClick(){
    console.log(text);
    console.log(file)
  }
  
  return (
    <div className="App">
        <label htmlFor="input-text" id="input-text">Input text:</label>
        <input id="text-input" name="text-input" type="text" onChange={e=> setText(e.target.value)}></input><br/><br/>
        <label htmlFor="input-text" id="input-text">Input File:</label>
        <input id="file-input" name="file-input" type="file" onChange={e=>setFile(e.target.files[0])}></input><br/><br/>
        <button onClick={handleClick}>Click to send</button>
    </div>
  );
}

export default App;
