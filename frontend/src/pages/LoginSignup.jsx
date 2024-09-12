import { Button } from "@/components/ui/button";
import { useContextProvider } from "@/context/StoreContext";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const LoginSignup = () => {

  const {url, setToken} = useContextProvider();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/user/register`, {
        name: data.name,
        email: data.email,
        password: data.password,
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      })

      if (response.status === 200) {
        toast.success("User created successfully")
        setToken(response.data.data)
      }
    } catch (error) {
      console.log(error);
      toast.error(error)
    }
  }

  return (
    <div>
      <h1>Login/Signup</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" value={data.name} onChange={onChangeHandler} placeholder="Enter your name" required />
        <input type="email" name="email" value={data.email} onChange={onChangeHandler} placeholder="Enter a valid email" required />
        <input type="password" name="password" value={data.password} onChange={onChangeHandler} placeholder="Enter password" required />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default LoginSignup
