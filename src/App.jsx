import { Route, Routes } from 'react-router-dom';




import { HomePage } from 'pages/Home';
import { SharedLayout } from 'components/shared-layout/SharedLayout';
import { ContactsPage } from 'pages/ContactsPage';
import { RegisterPage } from 'pages/auth-pages/RegisterPage';
import { LoginPage } from 'pages/auth-pages/LoginPage';

export const App = () => {
    return (
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path='contacts' element={<ContactsPage />} />
          <Route path='register' element={<RegisterPage/>} />
            <Route path='login' element={<LoginPage/>}/>
          </Route>

        
          <Route path="*" element={<HomePage />} />
        </Routes>
    );
}


 
  
  
