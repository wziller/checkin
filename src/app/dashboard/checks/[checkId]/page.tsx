"use client";
import React, { useState } from "react";
import { GET_CHECK_BY_ID } from "./queries";
import { useQuery } from "@apollo/client";
import moment from "moment";
import CheckMenu from "@/app/components/CheckMenu";
import CheckEditModal from "@/app/components/CheckEditModal";

type Props = {
  params: { checkId: string };
};

const page = (props: Props) => {
  const { checkId } = props.params;

  const { loading, error, data } = useQuery(GET_CHECK_BY_ID, {
    variables: { checkId: checkId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("GraphQL error:", error);
    return <p>Error: {error.message}</p>;
  }

  const check = data.checkById;
  

  return (
    <div className="bg-white px-6 py-10 lg:px-8">
      <div className="">
        <CheckMenu check={check} />
      </div>
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <div className="flex justify-center w-full h-96 overflow-hidden bg-center bg-no-repeat my-20">
          <img src={check.image} />
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {moment(check.updatedAt).format("MMMM Do YYYY")}
        </h1>
        <p className="mt-6 text-xl leading-8">{check.word}</p>
        <div className="mt-10 max-w-2xl">
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            How did you describe that emotion?
          </h2>
          <p>{check.description}</p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            How did your body feel?
          </h2>
          <p className="mt-6">{check.body}</p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Was there an event, person, place, or thing that might have caused
            this response?
          </h2>
          <p className="mt-10">{check.trigger}</p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            How did you react to that trigger?
          </h2>
          <p className="mt-10">{check.reaction}</p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            How did you decide to respond?
          </h2>
          <p className="mt-10">{check.response}</p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Were you taking care of your physical well-being?
          </h2>
          <p className="mt-10">{check.physical}</p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            What was on your mind that day?
          </h2>
          <p className="mt-10">{check.thoughts}</p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            What could you have done to feel calmer?
          </h2>
          <p className="mt-10">{check.action}</p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            {`What were you grateful for on ${moment(check.updatedAt).format(
              "MMMM Do"
            )}?`}
          </h2>
          <p className="mt-10">{check.grateful}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
