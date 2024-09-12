import { Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home, LoginSignup, Profile } from "./pages";
import { Footer, Navbar } from "./components";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<LoginSignup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App