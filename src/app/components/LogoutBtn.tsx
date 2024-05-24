'use client'

import { signOut } from 'next-auth/react';
import React from 'react'

type Props = {}

const LogoutBtn = (props: Props) => {
  return (
    <button
        onClick={()=>signOut({callbackUrl:`${window.location.origin}/auth`})}
      type="button"
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Logout
    </button>
  );
}

export default LogoutBtn