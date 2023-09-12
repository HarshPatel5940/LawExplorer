import React from 'react'
import Link from "next/link";

const SignupComponent = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
    <div className="flex flex-col items-center justify-center space-y-10">
      <div>Logo</div>

      <div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl py-4">Create your account</h1>

          <div className="flex flex-col">
            <input
              className="border-2  border-green-500 rounded px-4 py-2 mt-4 w-80"
              type="email"
              name="email"
              placeholder="Email"
            />
          <input
              className="border-2 border-green-500 rounded px-4 py-2 mt-4"
              type="password"
              name="password"
              placeholder="Password"
            />

            <button  className="bg-green-700 text-white rounded px-4 py-2 mt-4 text-xl" type= "submit">Continue</button>
          </div>

          <div className='mt--1'>
            <p className='font-bold'>
            Already have an account? <Link href="/login"><a  className="text-green-500 ">Login In</a></Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignupComponent