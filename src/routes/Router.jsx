import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CreateTweetComponent from '../components/CreateTweetComponent';
import Login from '../components/Login';
import LogOut from '../components/LogOut';
import NavBarComponent from '../components/NavBarComponent';
import SingUpComponent from '../components/SingUpComponent';
import UserComponent from '../components/UserComponent';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBarComponent />}>
          <Route path='/' element={<CreateTweetComponent />} />
          <Route path='/user' element={<UserComponent />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Logout' element={<LogOut />} />
          <Route path='/SingUp' element={<SingUpComponent />} />
        </Route>
        <Route path='*' element={<h1>ERROR 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
