import Header from './components/UI/Header';
import TodoForm from './components/Todos/TodoForm/TodoForm';
import TodoList from './components/Todos/TodoList/TodoList';

function App() {
  return ( 
  <div>
    <Header />
    <main>
      <TodoForm/>
      <TodoList/>
    </main>
  </div>
  );
}

export default App;
