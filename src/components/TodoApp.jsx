import React, { useState } from "react";
import styles from "../styles/TodoApp.module.css";

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (event) => setInput(event.target.value);

  const storeItems = (event) => {
    event.preventDefault();
    if (input) {
      const newItem = { id: Date.now(), text: input }; 
      setItems([...items, newItem]);
      setInput("");
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id)); 
  };

  return (
    <div className={styles.todoContainer}>
      <h1 className={styles.heading}>TodoList</h1>
      <form onSubmit={storeItems} className={styles.form}>
        <input
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={handleChange}
          className={styles.input}
        />
        <button type="submit" className={styles.addButton}>
          Add
        </button>
      </form>
      <ul className={styles.todoList}>
        {items.map((item) => (
          <li key={item.id} className={styles.todoItem}>
            {item.text}
            <button
  onClick={() => deleteItem(item.id)}
  className={styles.deleteButton}
  data-testid={`delete-button-${item.id}`}  
>
  Delete
</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
