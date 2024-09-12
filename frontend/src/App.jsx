import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home, LoginSignup, Profile, Contact } from "./pages";
import { Footer, Navbar } from "./components";
import './index.css'; 

const App = () => {
  return (
    <div className="bg-fixed-custom">
      <ToastContainer />
      <Navbar />
      <div className="content"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<LoginSignup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
