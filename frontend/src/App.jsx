import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Button ,useColorModeValue} from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import { useProductStore } from './store/product'
function App() {

  const { product } = useProductStore()
  return (
    <Box minH={'100vh'} bg={useColorModeValue("gray.100", "gray.900")}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/create' element={<CreatePage/>}/>
        </Routes>
    </Box>
  )
}

export default App
