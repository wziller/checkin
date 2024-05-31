import React, { useState } from "react";
import { Fragment } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import CheckEditModal from "./CheckEditModal";
import { Check } from "@prisma/client";
import CheckDeleteModal from "./CheckDeleteModal";

type Props = {
  check: Check;
};

const CheckMenu = (props: Props) => {
  const { check } = props;
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  return (
    <div className=" pb-1">
      <div className="max-w-6xl sm:flex sm:items-baseline sm:justify-end">
        <div className="max-w-12 mt-4 flex items-center justify-between sm:ml-6 sm:mt-0 sm:flex-shrink-0 sm:justify-end">
          <Menu as="div" className="relative ml-3 inline-block text-left">
            <div className="max-w-screen-md">
              <MenuButton className="-my-2 flex items-center rounded-full bg-white p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <span className="sr-only">Open options</span>
                <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
              </MenuButton>
            </div>

            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <MenuItem>
                    {({ focus }) => (
                      <button
                        onClick={() => setEditOpen(true)}
                        className={
                          focus
                            ? "bg-gray-100 text-gray-900 flex justify-between px-4 py-2 text-sm w-full"
                            : "text-gray-700 flex justify-between px-4 py-2 text-sm w-full"
                        }
                      >
                        <span>Edit</span>
                      </button>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ focus }) => (
                      <button
                      onClick={()=>setDeleteOpen(true)}
                        className={
                          focus
                            ? "bg-gray-100 text-gray-900 flex justify-between px-4 py-2 text-sm"
                            : "text-gray-700 flex justify-between px-4 py-2 text-sm"
                        }
                      >
                        <span className="text-red-600">Delete</span>
                      </button>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Transition>
          </Menu>
        </div>
      </div>
      <CheckEditModal check={check} open={editOpen} setOpen={setEditOpen} />
      <CheckDeleteModal
        checkId={check.id}
        open={deleteOpen}
        setOpen={setDeleteOpen}
      />
    </div>
  );
};

export default CheckMenu;
