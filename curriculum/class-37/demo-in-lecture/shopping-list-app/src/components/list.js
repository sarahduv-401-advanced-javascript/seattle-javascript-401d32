import React from 'react';
import './list.css';
import useArray from '../hooks/useArray.js';

const List = (props) => {
  const { storenName } = props
  // const shoppingList = ['eggs', 'milk', 'butter', 'ramen']
  const shoppingList = useArray([
    {
      {text: 'eggs', id: Math.random()},
      {text: 'milk', id: Math.random()},
      {text: 'butter', id: Math.random()},
      {text: 'ramen', id: Math.random()}
    }
  ])

  return (
    <>
      <h3>{storeName</h3>
      <button onClick={() => shoppingList.add(text: Math.random(), id: Math.random())>Add Item</button>
      <ul className='List'>
        {shoppingList.array.map((item, idx) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => shoppingList.removeById(id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => shoppingList.clear}>Clear</button>
    </>
  )
}

export default List;