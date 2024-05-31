'use client'

import { useQuery } from "@apollo/client";
import  {GET_USER_CHECKS}  from "./queries";
import CheckCard from "@/app/components/CheckCard";
import { useSession } from "next-auth/react";


export default function page() {
  const { data:session, status } = useSession();

  const userId:string =session?.user?.id
  
  const { loading, error, data } = useQuery(GET_USER_CHECKS, {
    variables: { userId: userId },
  });
    if (!userId) return <p>Loading...</p>;
    if (loading) return <p>Loading...</p>;
    if (error) {
      // console.error("GraphQL error:", error);
      return <p>Error: {error.message}</p>;
    }
    const checks = data.checksByUserId;
  
  return (
    <>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Past Checks
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            How you have been feeling in the past.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {checks?.map((check:any) => (
            <CheckCard key={check.id} check={check}/>
          ))}
        </div>
      </div>
    </div>
   
    </>
    
  );
}
