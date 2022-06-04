import './App.css';
import HelloWorld from './components/HelloWorld/HelloWorld';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <HelloWorld /> */}
        <TodoList />
      </header>
    </div>
  );
}

export default App;
