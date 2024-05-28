import { DateTime } from "next-auth/providers/kakao";
import React, { Suspense } from "react";
import moment from "moment";
import Link from "next/link";

type User = {
  name: string;
  image: string;
};
type Input = {
  check: Check;
};
export type Check = {
  id: string;
  title: string;
  image: string;
  word: string;
  description: string;
  body: string;
  trigger: string;
  reaction: string;
  response: string;
  physical: string;
  thoughts: string;
  action: string;
  grateful: string;
  public: boolean;
  userId: string;
  user: User;
  updatedAt: DateTime;
};
type Props = { 
  check: Check

};

const CheckCard = (props: Props) => {

  const check = props.check;
  const user = check.user;
  const userInitials = user.name[0]


  return (
    <Link href={`checks/${check.id}`}>
      <article
        key={check.id}
        className="flex flex-col items-start justify-between"
      >
        <div className="relative w-full">
          <img
            src={check.image}
            alt=""
            className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="max-w-xl">
          <div className="mt-8 flex items-center gap-x-4 text-xs">
            <time dateTime={check.updatedAt} className="text-gray-500">
              {moment(check.updatedAt).format("MMMM Do YYYY")}
            </time>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <div>
                <span className="absolute inset-0" />
                <p>{check.word}</p>
              </div>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              {check.description}
            </p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            {user && user.image ? (
              <img className="h-8 w-8 rounded-full" src={user.image} alt="" />
            ) : (
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-500">
                <span className="text-sm font-medium leading-none text-white">
                  {userInitials}
                </span>
              </span>
            )}
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <div>
                  <span className="absolute inset-0" />
                  {user.name}
                </div>
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CheckCard;
