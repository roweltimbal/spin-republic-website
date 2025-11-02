import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home'
import { UserProvider } from './context/User.context';
import {OpenPlayScheduleProvider} from './context/OpenPlaySchedule.context.jsx'


function App() {
  return (
    <BrowserRouter>
      <OpenPlayScheduleProvider>
      <UserProvider>
      <Home/>
      </UserProvider>
      </OpenPlayScheduleProvider>
    </BrowserRouter>
  );
}

export default App;
