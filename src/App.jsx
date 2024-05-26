import Form from './pages/Form';
import TodoList from './pages/TodoList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/todolist" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
