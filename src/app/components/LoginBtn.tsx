'use client'

import Link from "next/link";
import React from "react";

type Props = {};

const LoginBtn = (props: Props) => {
  return (
    <button
      type="button"
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <Link href="/auth">Login</Link>
    </button>
  );
};

export default LoginBtn;
