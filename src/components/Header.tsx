import { JSX } from "preact"
import { PaperAirplaneIcon } from "@heroicons/react/24/outline"

interface HeaderProps {
  rightElement: JSX.Element
}

export function Header({ rightElement }: HeaderProps): JSX.Element {
  return (
    <div className="border-1 border-b h-24 border-background-800 flex items-center justify-between pr-8">
      <PaperAirplaneIcon className="h-12 w-12 text-blue-400 ml-8" />
      {rightElement}
    </div>
  )
}
