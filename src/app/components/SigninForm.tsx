"use client";

import { signIn } from "next-auth/react";
import React, { useState } from "react";

type Props = {};

const SigninForm = (props: Props) => {
  const [email, setEmail] = useState<null | string>(null);
  const signInWithEmail = async () => {
    const SignInResult = await signIn("email", {
        email: email,
        callbackUrl:`${window.location.origin}`,
        redirect:false
    })
    if(!SignInResult?.ok){
        return window.alert("ERROR WITH EMAIL:  Please try again")
    }
    return window.alert("Success!");
  }

  
  return (
    <form action={signInWithEmail}method="POST" className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            type="email"
            autoComplete="email"
            required
            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default SigninForm;
