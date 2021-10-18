import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import AmplifyInput from "./AmplifyInput";
import { Link, useHistory } from "react-router-dom";

const ConfirmRegister = () => {
  let history = useHistory();
  const [user, setUser] = useState({ username: '', authenticationCode: '', });

  const handleInputChange = (event, keyName) => {
    event.persist();
    setUser((user) => {
      return { ...user, [keyName]: event.target.value }
    })
  }

  const confirmSignUp = async () => {
    try {
      await Auth.confirmSignUp(user.username, user.authenticationCode);
      console.log('success confirm sign up');
      history.push('./log-in')
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <div className="container w-4/12 w-medium">
      <div className="bg-white shadow-xl rounded px-12 pt-6 pb-8 mb-4">
        <h3 className="text-lg text-gray-700">Confirm your account</h3>
        <AmplifyInput
          labelName='Email:'
          value={user.username}
          handleInputChange={(e) => handleInputChange(e, 'username')}
        />
        <AmplifyInput
          labelName='Code:'
          value={user.authenticationCode}
          handleInputChange={(e) => handleInputChange(e, 'authenticationCode')}
        />
        <button
          onClick={() => confirmSignUp()}
          className="mt-4 mb-4 w-full sm:w-auto border border-transparent px-6 py-3 text-base font-semibold leading-snug bg-gray-900 text-white rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800 transition ease-in-out duration-150 hover:bg-gray-600"
        >
          Confirm
        </button>
        <div>
          <Link
            to={{
              pathname: '/register'
            }}
            className="pt-2 text-sm text-blue-500 hover:text-blue-600"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ConfirmRegister;

