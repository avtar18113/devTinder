import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./navBar"
import Home from "./Home"
import Footer from "./Footer"
import Login from "./Login"

function App() {
  
  return (
    <>

<BrowserRouter  basename="/">
<NavBar/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/login" element={<Login/>} />

 
</Routes>
<Footer/>
</BrowserRouter>


    </>
  )
}
export default App
