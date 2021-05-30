import React, {useState} from 'react';
import data from './data';
import List from './List';
import './App.css';

function App(){
  const [friends,setFriends]= useState(data);
  return(
    <main>
    <section>
    <List friends= {friends}/>
    </section>
    <button className="button" onClick={()=>setFriends([])}> Clear All</button>
    </main>    
  )
}

export default App;