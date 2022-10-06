import { LockOpenIcon } from "@heroicons/react/20/solid"
import { render, JSX } from "preact"
import { Header } from "./components/Header"
import { Popover } from "./components/Popover"
import "./style.css"

function App(): JSX.Element {
  return (
    <div className="bg-background-900 flex flex-1 flex-col items-stretch">
      <Header
        rightElement={
          <Popover buttonChildren={<LockOpenIcon />} popoverChildren={<></>} />
        }
      />
    </div>
  )
}

render(<App />, document.getElementById("app") as HTMLElement)
