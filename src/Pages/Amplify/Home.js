import React from 'react'
import Auth from '@aws-amplify/auth';
import { Link } from "react-router-dom";

const Home = () => {
  let signOut = async() => {
    await Auth.signOut();
    console.log("Sign out succesfully")
  }
  return (
    <div>
      <h2 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-lg text-gray-900">
        Home page
      </h2>
      <div className="ml-3 text-base">
        <Link
          to={{
            pathname: '/log-in',
          }}
          onClick={signOut}
          className="pt-2 text-sm text-gray-500 hover:text-gray-600"
        >
          Log out
        </Link>
      </div>
    </div>
  )
}

export default Home

