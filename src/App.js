import React from 'react'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
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
      <Router>
        <Layout >
          <Routes>
              <Route index element={<Home/>} />
              <Route path="destination" element={<Destination data = {data} />} />
              <Route path="crew" element={<Crew data = {data} /> } />
              <Route path="technology" element={<Technology data = {data} />} />
              {/* <Route exact path="*" element={<NotFound/>} /> */}
          </Routes>
        </Layout>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
