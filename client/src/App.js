import { Route, Routes } from 'react-router-dom';
import './App.css';
import TasksPage from './pages/TasksPage.js';
import TasksForm from './pages/TaskForm.js';
import NotFound from './pages/NotFound.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <TasksPage/> }/>
        <Route path="/new" element={ <TasksForm/> }/>
        <Route path="*" element={ <NotFound/> }/>
      </Routes>
      </>
  );
}

export default App;
