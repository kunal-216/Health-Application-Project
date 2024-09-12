import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useContextProvider } from "@/context/StoreContext";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import vector from "../../public/vector.png";

const LoginSignup = () => {
  const { url, setToken } = useContextProvider();
  const [currState, setCurrState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(currState);
    let newUrl = url;
    if (currState === 'Login') {
      newUrl += '/api/user/login';
    } else {
      newUrl += '/api/user/register';
    }

    try {
      let response;
      if (currState === "Login") {
        response = await axios.post(newUrl, {
          email: data.email,
          password: data.password,
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      } else {
        response = await axios.post(newUrl, {
          name: data.name,
          email: data.email,
          password: data.password,
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }

      if (response.status === 200) {
        toast.success("User created successfully");
        setToken(response.data.data);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-20">
      <div className="md:flex-1 hidden md:block">
        <img
          src={vector}
          alt="Decorative"
          className="w-full h-full object-cover rounded-l-lg md:w-3/4 md:pr-4 ml-20"
        />
      </div>
      <div className="md:flex-1 bg-white p-8 rounded-lg shadow-lg md:w-3/4 lg:w-[35%]">
        <Tabs defaultValue="signup" className="w-full">
          <TabsList className="mb-4 flex border-b border-gray-300">
            <TabsTrigger
              onClick={() => setCurrState("Sign Up")}
              value="signup"
              className={`flex-1 py-2 text-center border-b-2 transition duration-200 ${currState === "Sign Up" ? "border-black" : "border-transparent"} hover:border-black focus:outline-none`}>
              Sign Up
            </TabsTrigger>
            <TabsTrigger
              onClick={() => setCurrState("Login")}
              value="login"
              className={`flex-1 py-2 text-center border-b-2 transition duration-200 ${currState === "Login" ? "border-black" : "border-transparent"} hover:border-black focus:outline-none`}>
              Login
            </TabsTrigger>
          </TabsList>
          <TabsContent value="signup">
            <div className="space-y-4">
              <h1 className="text-3xl text-center font-bold text-blue-500 mb-6">Sign Up</h1>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={onChangeHandler}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={onChangeHandler}
                    placeholder="Enter a valid email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={onChangeHandler}
                    placeholder="Enter password"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  />
                </div>
                <div className="mb-6 flex items-start ml-1">
                  <input
                    type="checkbox"
                    className="mr-2 mt-1 leading-tight"
                    required />
                  <p className="text-sm text-gray-600">
                    By continuing, I agree to the{' '}
                    <a href="#" className="text-blue-500 hover:underline">terms of use</a>{' '}and{' '}
                    <a href="#" className="text-blue-500 hover:underline">privacy policy</a>.
                  </p>
                </div>
                <Button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                >
                  Sign Up
                </Button>
              </form>
            </div>
          </TabsContent>
          <TabsContent value="login">
            <div className="space-y-4">
              <h1 className="text-3xl text-center font-bold text-blue-500 mb-6">Login</h1>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={onChangeHandler}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={onChangeHandler}
                    placeholder="Enter password"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  />
                </div>
                <div className="mb-6 flex items-start ml-1">
                  <input
                    type="checkbox"
                    className="mr-2 mt-1 leading-tight"
                    required />
                  <p className="text-sm text-gray-600">
                    By continuing, I agree to the{' '}
                    <a href="#" className="text-blue-500 hover:underline">terms of use</a>{' '}and{' '}
                    <a href="#" className="text-blue-500 hover:underline">privacy policy</a>.
                  </p>
                </div>
                <Button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                >
                  Login
                </Button>
              </form>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LoginSignup;
