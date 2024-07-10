
import './App.css';

import Layout from './Layout';
import LoginPage from './LoginPage';
import IndexPage from './pages/IndexPage';

import {Routes,Route} from 'react-router-dom';
import RegisterPage from './RegisterPage';




function App() {
  return (
    
      <Routes>

        <Route path='/' element={<Layout/>}>

        <Route index element={ <main><IndexPage/></main>}/>
        <Route path='/login' element={<LoginPage/>}/>
         <Route path='/register' element={<RegisterPage/>}/>
        
        </Route>
        
      </Routes>
     
  );
}

export default App;
