import { BrowserRouter, Routes , Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import LandingPage from './pages/LandingPage'
function App(){
  return(
<BrowserRouter>
<Routes>
  <Route path="/" element={<LandingPage/>}></Route>
  <Route path="/shelf" element={<HomePage/>}></Route>
  <Route path="/login" element={<LoginPage/>}></Route>
  <Route path="/register" element={<RegisterPage/>}></Route>
</Routes>
</BrowserRouter>
  )
}

export default App