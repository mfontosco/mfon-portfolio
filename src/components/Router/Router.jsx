import { Route,Routes } from 'react-router-dom'
import NavBar from '../NavBar'
import Home from '../Home'

const Router = () => {
  return (
    <Routes >
    <Route path="/" element={<NavBar/>}>
    <Route index element={<Home/>}/>
    
    </Route>
    </Routes>
  )
}

export default Router
