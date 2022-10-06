interface InputProps {
  placeholder: string
  id: string
  label: string
}

export function Input({ id, placeholder, label }: InputProps): JSX.Element {
  return (
    <>
      <label for={id} class="block text-sm font-medium text-surface-700">
        {label}
      </label>
      <input
        type="text"
        name={id}
        id={id}
        class="mt-1 block w-full rounded-md border-surface-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm px-2 py-1"
        placeholder={placeholder}
      />
    </>
  )
}
