import { Popover as HUIPopover, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { Fragment } from "preact"

interface PopoverProps {
  buttonChildren: JSX.Element
  popoverChildren: JSX.Element
}

export function Popover({
  buttonChildren,
  popoverChildren,
}: PopoverProps): JSX.Element {
  return (
    <HUIPopover className="relative">
      {({ open }: { open: boolean }) => (
        <>
          <HUIPopover.Button
            className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-full bg-background-800 px-3 py-2 text-base text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            {buttonChildren}
            <ChevronDownIcon
              className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
              aria-hidden="true"
            />
          </HUIPopover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <HUIPopover.Panel className="absolute right-0 z-10 mt-3 w-screen max-w-sm transform px-4 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-background-900 ring-opacity-5">
                <div className="bg-surface-50 p-4">{popoverChildren}</div>
              </div>
            </HUIPopover.Panel>
          </Transition>
        </>
      )}
    </HUIPopover>
  )
}
