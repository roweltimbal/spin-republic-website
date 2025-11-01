import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home'
import { UserProvider } from './context/User.context';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
      <Home/>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
