interface ButtonProps {
  leftIcon: JSX.Element
  label: string
}

export function Button({ leftIcon, label }: ButtonProps): JSX.Element {
  return (
    <button class="group relative flex justify-center self-end rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 shadow-sm pl-9">
      <span class="absolute inset-y-0 left-0 flex items-stretch pl-3 w-6">
        {leftIcon}
      </span>
      {label}
    </button>
  )
}
