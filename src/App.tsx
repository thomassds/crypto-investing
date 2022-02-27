import { createContext, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { AuthContextProvider } from './Contexts/AuthContextProvider';

import { Home } from './Pages/Home';
import Background from './assets/background.jpeg';

import './global.scss';


function App() {
  return (
    <div className='container-app'>
        <img className='image-background' src={Background} />
        <BrowserRouter>
            <AuthContextProvider>
                <Route exact path='/' component={Home}/>
            </AuthContextProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;