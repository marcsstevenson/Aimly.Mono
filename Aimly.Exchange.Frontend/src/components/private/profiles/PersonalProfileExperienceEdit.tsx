/// The purpose of this component is to show the user a delete
/// confirmation dialog. There are two callbacks, one for cancel and one for confirmation.

import React, { useRef } from 'react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { BriefcaseIcon, PlusIcon, XIcon } from '@heroicons/react/outline';
import { EmploymentExperience } from 'components/private/profiles/EmploymentExperience';

interface Props {
  show: boolean;
  working: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  Title: string;
  Message: string;
  ConfirmButtonText: string;
  model: EmploymentExperience | null;
}

export const PersonalProfileExperienceEdit = (props: Props) => {
  // const [open, setOpen] = useState(true);
  let model = props.model;

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={props.show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={props.onCancel}
      >
        <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all dark:bg-gray-800 sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
              <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                <button
                  type="button"
                  className="focus:ring-primary-500 rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-gray-800"
                  onClick={() => props.onCancel()}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="sm:flex sm:items-start">
                <div className="bg-primary-100 mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                  <BriefcaseIcon className="text-primary-600 h-6 w-6" aria-hidden="true" />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100"
                  >
                    {props.Title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-700 dark:text-gray-200">{props.Message}</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="disabled:bg-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => props.onConfirm()}
                  disabled={props.working}
                >
                  Add Experience
                  <PlusIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="focus:ring-primary-500 mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-100  focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:text-gray-400 disabled:hover:bg-white sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={() => props.onCancel()}
                  ref={cancelButtonRef}
                  disabled={props.working}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
