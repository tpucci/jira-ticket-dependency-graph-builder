import { JSX } from "preact"
import { PaperAirplaneIcon } from "@heroicons/react/24/outline"

export function Header(): JSX.Element {
  return (
    <div className="border-1 border-b h-24 border-zinc-800 flex items-center">
      <PaperAirplaneIcon className="h-12 w-12 text-blue-400 ml-8" />
    </div>
  )
}
