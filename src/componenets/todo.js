import React, { useState, useEffect } from "react";
import "./style.css";


const Todo = () => {
    const [inputdata, setInputdata]=useState("");
    const [items, setItems]=useState([]);
    const addItem=()=>{
        if(inputdata){
        setItems([...items,inputdata])
        setInputdata("")
        }
        else{
            alert("Pls enter a Note")
        }
    }

   
    const deleteItem = (index) => {
      setItems([
                 ...items.slice(0, index),
                 ...items.slice(index + 1)
               ]);
    
    }
    return(
  <>
     <div>
        <h1 id="hed">Note making App</h1>
        <input placeholder="✍ Add Item" className="form-control"
         value={inputdata} onChange={(event)=>setInputdata(event.target.value)}
        />
        
        <i className="fa fa-plus add-btn" onClick={addItem}></i>           
        
     </div>
     <div className="showItems">
            {items.map((curElem, index) => {
              return (
                
                <div className="eachItem" key={curElem.id}>
                  <h3>{curElem}</h3>
                  <div className="todo-btn">
                    
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(index)}></i>
                  </div>
                </div>
              );
            })}
          </div>
  </>
    )
};

export default Todo;