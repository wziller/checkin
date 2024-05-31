"use client";
import React from "react";
import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useMutation } from "@apollo/client";
import { CREATE_CHECK } from "../dashboard/checks/[checkId]/mutations";
import { debug } from "console";

type Props = {
  open: boolean;
  setOpen: Function;
  userId: string;
};

const CheckCreateModal = (props: Props) => {
  const { userId, open, setOpen } = props;
  const [word, setWord] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [trigger, setTrigger] = useState("");
  const [reaction, setReaction] = useState("");
  const [response, setResponse] = useState("");
  const [physical, setPhysical] = useState("");
  const [thoughts, setThoughts] = useState("");
  const [action, setAction] = useState("");
  const [grateful, setGrateful] = useState("");

  const [createCheck] = useMutation(CREATE_CHECK);

  const handleSubmit = async () => {
    console.log("handleSubmit started");
    const input = {
      action: action,
      body: body,
      description: description,
      grateful: grateful,
      physical: physical,
      public: false,
      reaction: reaction,
      response: response,
      thoughts: thoughts,
      trigger: trigger,
      userId: userId,
      word: word,
      title: "title",
    };
    console.log("input+++++++>?", input);
    
    const newCheck = await createCheck({
      variables: {
       input,
      },
    })
    console.log(newCheck)
    debugger
  };
  return (
    <Transition show={open}>
      <Dialog className="relative z-10" onClose={() => setOpen(false)}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="container mx-auto sm:px-6 lg:px-8">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-12">
                      <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                          Profile
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          This information will be displayed publicly so be
                          careful what you share.
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                          <div className="col-span-full">
                            <label
                              htmlFor="about"
                              className="block text-sm font-medium leading-6 text-gray-900 mt-7"
                            >
                              What word describes your primary emotion right
                              now?
                            </label>
                            <div className="mt-2">
                              <textarea
                                id="word"
                                name="word"
                                onChange={(e) => setWord(e.target.value)}
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={word}
                              />
                            </div>
                            <label
                              htmlFor="description"
                              className="block text-sm font-medium leading-6 text-gray-900 mt-7"
                            >
                              How would you describe that emotion?
                            </label>
                            <div className="mt-2">
                              <textarea
                                id="description"
                                name="about"
                                onChange={(e) => {
                                  setDescription(e.target.value);
                                }}
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={description}
                              />
                            </div>
                            <label
                              htmlFor="body"
                              className="block text-sm font-medium leading-6 text-gray-900 mt-7"
                            >
                              How does your body feel?
                            </label>
                            <div className="mt-2">
                              <textarea
                                id="body"
                                name="body"
                                onChange={(e) => {
                                  setBody(e.target.value);
                                }}
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={body}
                              />
                            </div>
                            <label
                              htmlFor="about"
                              className="block text-sm font-medium leading-6 text-gray-900 mt-7"
                            >
                              Is there an event, person, place, or thing that
                              might have caused this response?
                            </label>
                            <div className="mt-2">
                              <textarea
                                id="about"
                                name="about"
                                onChange={(e) => {
                                  setTrigger(e.target.value);
                                }}
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={trigger}
                              />
                            </div>
                            <label
                              htmlFor="about"
                              className="block text-sm font-medium leading-6 text-gray-900 mt-7"
                            >
                              How did you react to that trigger?
                            </label>
                            <div className="mt-2">
                              <textarea
                                id="about"
                                name="about"
                                onChange={(e) => {
                                  setReaction(e.target.value);
                                }}
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={reaction}
                              />
                            </div>
                            <label
                              htmlFor="about"
                              className="block text-sm font-medium leading-6 text-gray-900 mt-7"
                            >
                              How will you respond now?
                            </label>
                            <div className="mt-2">
                              <textarea
                                id="about"
                                name="about"
                                onChange={(e) => {
                                  setResponse(e.target.value);
                                }}
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={response}
                              />
                            </div>
                            <label
                              htmlFor="about"
                              className="block text-sm font-medium leading-6 text-gray-900 mt-7"
                            >
                              Are you taking care of your physical well-being?
                            </label>
                            <div className="mt-2">
                              <textarea
                                id="about"
                                name="about"
                                onChange={(e) => {
                                  setPhysical(e.target.value);
                                }}
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={physical}
                              />
                            </div>
                            <label
                              htmlFor="about"
                              className="block text-sm font-medium leading-6 text-gray-900 mt-7"
                            >
                              What is on your mind today?
                            </label>
                            <div className="mt-2">
                              <textarea
                                id="about"
                                name="about"
                                onChange={(e) => {
                                  setThoughts(e.target.value);
                                }}
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={thoughts}
                              />
                            </div>
                            <label
                              htmlFor="about"
                              className="block text-sm font-medium leading-6 text-gray-900 mt-7"
                            >
                              What can you do to feel calmer?
                            </label>
                            <div className="mt-2">
                              <textarea
                                id="about"
                                name="about"
                                onChange={(e) => {
                                  setAction(e.target.value);
                                }}
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={action}
                              />
                            </div>
                            <label
                              htmlFor="about"
                              className="block text-sm font-medium leading-6 text-gray-900 mt-7"
                            >
                              What are you grateful for today?
                            </label>
                            <div className="mt-2">
                              <textarea
                                id="about"
                                name="about"
                                onChange={(e) => {
                                  setGrateful(e.target.value);
                                }}
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={grateful}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                      <button
                        onClick={() => setOpen(false)}
                        type="button"
                        className="text-sm font-semibold leading-6 text-gray-900"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CheckCreateModal;
