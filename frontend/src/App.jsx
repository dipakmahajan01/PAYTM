import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './index.css'
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';
function App() {
  console.log ("vkdflkahsdflkhsdk")
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/signin' element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
