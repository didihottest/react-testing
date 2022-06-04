import React, { useState } from 'react'

function TodoList() {
  const defaultItems = [
    { name: "Name 1" },
    { name: "Name 2" },
    { name: "Name 3" },
  ]
  const [items, setItems] = useState(defaultItems)
  const [name, setName] = useState('')

  const addItem = () => {
    setItems(prev => {
      return [
        ...prev, { name }
      ]
    })
  }
  return (
    <div>
      <label>
        Insert Item : {" "}
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <button onClick={addItem}>Add</button>
      {items.map((item, index) => {
        return <div key={index}>{item.name}</div>
      })}
    </div>
  )
}

export default TodoList