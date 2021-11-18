import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import AmplifyInput from "./AmplifyInput";
import "tailwindcss/tailwind.css"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const LogIn = () => {
  let history = useHistory();
  const [user, setUser] = useState({ username: '', password: '' });

  const handleInputChange = (event, keyName) => {
    event.persist();
    setUser((user) => {
      return { ...user, [keyName]: event.target.value }
    })
  }

  const logIn = async () => {
    try {
      await Auth.signIn({
        username: user.username,
        password: user.password,
      });
      toast.success("Success!");
      setTimeout(() => history.push('./form'), 2000);
    } catch (error) {
      toast.error(error.message);
      console.error('error', error);
    }
  }
  return (
    <>
    <ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover
			/>
    <div className="container w-4/12 w-medium ">
      <div className="bg-white shadow-xl rounded px-12 pt-6 pb-8 mb-4">
        <h3 className="text-lg text-gray-800 mb-2">Log In</h3>
        <AmplifyInput
          labelName='Email:'
          value={user.username}
          handleInputChange={(e) => handleInputChange(e, 'username')}
        />
        <AmplifyInput
          labelName='Password:'
          type="password"
          value={user.password}
          handleInputChange={(e) => handleInputChange(e, 'password')}
        />
        <div className="flex items-center justify-between">
          <button
            onClick={() => logIn()}
            className="mt-4 mb-4 w-full sm:w-auto border border-transparent px-6 py-3 text-base font-semibold leading-snug bg-gray-900 text-white rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800 transition ease-in-out duration-150 hover:bg-gray-600"
          >
            Log in
          </button>
        </div>
        <div className="w-full">
          <hr />
          <p className="text-gray-700 pb-2 pt-2 text-sm">Don't have an account?</p>
          <Link
            to={{
              pathname: '/register'
            }}
            className="pt-2 text-sm text-blue-500 hover:text-blue-600"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default LogIn;