import './App.css';
import { Greeting } from './Greeting/Greeting'

function App() {
  return (
    <div className="App">
      <Greeting isLoggedIn={false} unreadMessages={[1, 1, 1]} />
    </div>
  );
}

export default App;
