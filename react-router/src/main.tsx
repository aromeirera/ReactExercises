import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Link,Routes } from 'react-router-dom'
import './index.css'
import {About,Home,Contact} from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <nav>
      <Link to="/Home">Home</Link>
      
      <Link to="/Contact">Contact</Link>

      <Link to="/About">About</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
