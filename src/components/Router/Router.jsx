import { Route,Routes } from 'react-router-dom'
import NavBar from '../NavBar'
import Home from '../Home'
import {AboutMe} from './Index'

const Router = () => {
  return (
    <Routes >
    <Route path="/" element={<NavBar/>}>
    <Route index element={<Home/>}/>
    <Route path="/about" element={<AboutMe/>}/>
    </Route>
    </Routes>
  )
}

export default Router
