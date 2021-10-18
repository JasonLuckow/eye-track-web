import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import AmplifyInput from "./AmplifyInput";
import { Link, useHistory } from 'react-router-dom';
import bg from '../../Images/EyeTracking.jpg'

const Register = () => {
  let history = useHistory();
  const [user, setUser] = useState({ username: '', password: '', });

  const handleInputChange = (event, keyName) => {
    event.persist();
    setUser((user) => {
      return { ...user, [keyName]: event.target.value }
    })
  }

  const signUp = async () => {
    try {
      await Auth.signUp({
        username: user.username,
        password: user.password,
        attributes: {
          email: user.username,
        }
      });
      history.push("/confirm-register");
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <div className="bg-none">

      <div className="container w-4/12 w-medium">
        <div className="bg-white shadow-xl rounded px-12 pt-6 pb-8 mb-4">
          <h3 className="text-lg text-gray-700">Register</h3>
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
              className="mt-4 mb-4 w-full sm:w-auto border border-transparent px-6 py-3 text-base font-semibold leading-snug bg-gray-900 text-white rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800 transition ease-in-out duration-150 hover:bg-gray-600"
              type="button"
              onClick={() => signUp()}
            >
              Send
            </button>
          </div>
          <div className="w-full">
            <hr />
            <p className="text-gray-700 pb-2 pt-2 text-sm">You already have an account?</p>
            <Link
              to={{
                pathname: '/log-in'
              }}
              className="pt-2 text-sm text-blue-500 hover:text-blue-600"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
