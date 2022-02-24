import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AppContext from './Components/AppContext'
import useInitialState from './Components/useInitialState'
import './App.css';
import data from './data.json'


import Home from './Components/Pages/Home'
import Destination from './Components/Pages/Destination'
import Crew from './Components/Pages/Crew'
import Technology from './Components/Pages/Technology'
import Layout from './Components/Templates/Layout';

function App() {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout >
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/destination" element={<Destination data = {data} />} />
            <Route exact path="/crew" element={<Crew data = {data} /> } />
            <Route exact path="/technology" element={<Technology data = {data} />} />
            {/* <Route exact path="*" element={<NotFound/>} /> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
