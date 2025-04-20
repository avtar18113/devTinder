import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./component/navBar"
import Home from "./component/Home"
import Footer from "./component/Footer"
import Login from "./component/Login"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"

function App() {
  
  return (
    <>
<Provider store={appStore}>
<BrowserRouter  basename="/">

<NavBar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login/>} />

 
</Routes>
<Footer/>
</BrowserRouter>
</Provider>

    </>
  )
}
export default App
