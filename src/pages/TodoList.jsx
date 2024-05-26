import React, { useState } from 'react';
import { TextField, Button, Checkbox } from '@mui/material';
import styled from '@emotion/styled';

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [todoText, setTodoText] = useState('');
  const [filter, setFilter] = useState('all');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!todoText.trim()) return;
    setTodoText('');
  };

  const addTodo = () => {
    if (todoText !== '') {
      const newTodo = {
        text: todoText,
        id: Math.random(),
        isCompleted: false,
      };
      setTodo([...todo, newTodo]);
    } else {
      alert('Напишите текст');
    }
  };

  const toggleTodoCompletion = (id) => {
    const updatedTodoList = todo.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        };
      }
      return item;
    });
    setTodo(updatedTodoList);
  };

  const deleteTodo = (id) => {
    const deleteFilter = todo.filter((item) => item.id !== id);
    setTodo(deleteFilter);
  };

  const deleteAll = () => {
    setTodo([]);
  };

  const filterTodos = todo.filter((item) => {
    if (filter === 'completed') return item.isCompleted;
    if (filter === 'incomplete') return !item.isCompleted;
    return true
  });

  return (
    <>
      <div>
        <form style={{ margin: '100px auto 0 540px ' }} onSubmit={handleSubmit}>
          <TextField
            label="Add Todo"
            variant="outlined"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            fullWidth
            sx={{ marginBottom: 2 }}
            style={{ width: '410px' }}
          />
          <Button
            onClick={addTodo}
            style={{ padding: '15px 25px', marginLeft: 10 }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Add
          </Button>
        </form>
        <StyledDivTop>
          <p onClick={() => setFilter("all")}>Все</p>
          <p onClick={() => setFilter('incomplete')}>Незавершенные</p>
          <p onClick={() => setFilter('completed')}>Завершенные</p>
          <Button onClick={() => deleteAll()}>Удалить все</Button>
        </StyledDivTop>
        {filterTodos.map((item) => (
          <>
            <StyledDiv key={item.id}>
              <div className="throw">
                <Checkbox
                  checked={item.isCompleted}
                  onChange={() => toggleTodoCompletion(item.id)}
                  color="primary"
                />
                <p
                  style={{
                    textDecoration: item.isCompleted ? 'line-through' : 'none',
                  }}
                >
                  {item.text}
                </p>
              </div>
              <span onClick={() => deleteTodo(item.id)}>❎</span>
            </StyledDiv>
          </>
        ))}
      </div>
    </>
  );
};

export default TodoList;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  margin-left: 540px;
  .throw {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  span {
    cursor: pointer;
  }
`;

const StyledDivTop = styled.div`
  display: flex;
  margin-left: 540px;
  justify-content: space-between;
  width: 500px;
  cursor: pointer;
`;
