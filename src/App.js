import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CollectClinicals from './components/CollectClinicals';
import AddPatient from './components/AddPatient';
import { ToastContainer } from 'react-toastify';
import AnalyzeData from './components/AnalyzeData';
// import AnalyzeData from './components/AnalyzeData';
// import ChartGenerator from './components/ChartGenerator';
function App() {
  return (
 
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="patientDetails/:patientId" element={<CollectClinicals/>}/>
          <Route path="analyze/:patientId" element={<AnalyzeData/>}/>
          <Route path="/addPatient" element={<AddPatient/>}/>
        </Routes>

        <ToastContainer />
      </div>
   
  );
}

export default App;
