import './App.css';
// import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import NewsComp from './components/NewsComp';
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const api_key = process.env.REACT_APP_API_KEY
  const [progress, setProgress] = useState(0)

  const set_Progress = (progress) => {
    setProgress({progress : progress })
  }
    return (
      <>
      <Router>
        <Navbar/>
        <LoadingBar color='#f11946' progress={progress}/>
        <Routes>
          
          <Route exact path="/" element={<NewsComp apiKey={api_key} setProgress={set_Progress} key="general" category={"general"}/>}/>
          <Route exact path="/sports" element={<NewsComp apiKey={api_key} setProgress={set_Progress} key="sports" category={"sports"}/>}/>
          <Route exact path="/business" element={<NewsComp apiKey={api_key} setProgress={set_Progress} key="business" category={"business"}/>}/>
          <Route exact path="/entertainment" element={<NewsComp apiKey={api_key} setProgress={set_Progress} key="entertainment" category={"entertainment"}/>}/>
          <Route exact path="/health" element={<NewsComp apiKey={api_key} setProgress={set_Progress} key="health" category={"health"}/>}/>
          <Route exact path="/science" element={<NewsComp apiKey={api_key} setProgress={set_Progress} key="science" category={"science"}/>}/>
          <Route exact path="/technology" element={<NewsComp apiKey={api_key} setProgress={set_Progress} key="technology" category={"technology"}/>}/>
        
        </Routes>
        </Router>
        </>
    )
}

export default App