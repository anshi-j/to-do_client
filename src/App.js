
import './App.css';
//components
import Header from './components/header';
import ToDoForm from './components/ToDoForm';
import Todos from './components/Todos';
function App() {
  return (
    <div>
       <Header />
       <ToDoForm />
       <Todos/>
    </div>
  );
}

export default App;
