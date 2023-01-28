import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Orders from './components/Orders';
import AddOrder from './components/AddOrder';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
    <Routes>
          <Route  path='/' element={<SignUp />}>
          </Route>
          <Route  path='/Login' element={<SignIn />}>
          </Route>
          <Route  path='/addOrder' element={<AddOrder />}>
          </Route>
          <Route  path='/Orders' element={<Orders />}>
          </Route>
     </Routes> 
    </div>
  </BrowserRouter>
  );
}

export default App;
