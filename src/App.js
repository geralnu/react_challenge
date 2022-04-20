import Main from './components/Layout/Main';
import Header from './components/UI/Header';
import TodosProvider from './store/TodosProvider';

function App() {

  return (
    <TodosProvider>
      <Header />
      <Main/>
    </TodosProvider>
  );
}

export default App;
