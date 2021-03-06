import React, { useState } from 'react';
import List from './List';
import CompletedList from "./CompletedList";
import "./app.css";


const App = () => {

  const [inputList, setInputList] = useState('');
  const [items, setItems] = useState([])  //creating an array in initial
  const [completedItems, setCompletedItems] = useState([])

  const itemEvent = (event) => {
    setInputList(event.target.value)
  }

  const addItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    })
    setInputList("")  //This makes the input column empty once you added the item. 
    //basically when you click on btn input becomes empty.
  }
  const addingItem = (compItem) => {
    setCompletedItems((oldItems) => {
      return [...oldItems, `${compItem} (completed)`]
    })
    setInputList("")
  }

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrE, index) => {
        return index !== id
      })
    })
  }
  const deleteCompletedItems = (id) => {
    setCompletedItems((oldItems) => {
      return oldItems.filter((arrE, index) => {
        return index !== id
      })
    })
  }

  const removeAllItem = () => {
    setItems([]);
    setCompletedItems([]);
  }


  return (
    <>
      <div className='main_container'>
        <div className='inner_container'>
          <button id="resetBtn" onClick={removeAllItem}>Reset</button>
          <h1 id="heading">TO-DO List</h1>
          <input id="input_box" type='text' placeholder="Add an Item" onChange={itemEvent} name="list" value={inputList} />
          <button className="btn" onClick={addItem}> + </button>

          <ul className="list-group list-group-flush">
            {/* <li>{inputList}</li> */}

            {items.map((val, index) => {          //using Array map
              return <List
                key={index}
                id={index}
                text={val}
                onSelect={deleteItems}
                onComplete={addingItem}

              />
            })}
          </ul>
          <ul className="list-group list-group-flush">
            {/* <li>{inputList}</li> */}

            {completedItems.map((val, index) => {          //using Array map
              return <CompletedList
                key={index}
                id={index}
                text={val}
                onSelect={deleteCompletedItems}
                onComplete={addingItem}

              />
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
export default App
