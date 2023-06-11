import {BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom"
import HomePage from "../pages/HomePage"

const AppRouter = () => {
  return (
    <>
        <Router>
        <div className="container">
        <Routes>
                <Route path="/" element={<HomePage />} />
               
                <Route path="/*" element={<Navigate to="/" />}/>

            </Routes>

        </div>       
        </Router>
    </>
  
  )
}

export default AppRouter