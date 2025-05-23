import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import{ToastContainer} from 'react-toastify'
import Home from "./pages/Home"
import Register from './pages/Register'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import AllComplaints from './pages/AllComplaints'
import SingleComplaint from './pages/SingleComplaint'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RaiseComplaint from './pages/raiseComplaint'
import PrivateComponent from './components/PrivateComponent'
import AllUsers from './pages/AllUsers'




const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
       <Route path='/' element={<PrivateComponent/>}>
       <Route path='' element = {<Home/>}/>
        <Route path='admin' element={<AdminDashboard/>}/>
        <Route path='admin/users' element={<AllUsers/>}/>
        <Route path='complaints' element={<AllComplaints/>}/>
       <Route path='raise-complaint' element={<RaiseComplaint/>}/>
        <Route path='complaints/:id' element={<SingleComplaint/>}/>
       </Route>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/login' element = {<Login/>}/>
      </Routes>
      <ToastContainer/>
      <Footer/>
    </Router>
  )
}

export default App
