import { LockOpenIcon } from "@heroicons/react/20/solid"
import { render, JSX } from "preact"
import { Button } from "./components/Button"
import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { Popover } from "./components/Popover"
import "./style.css"

function App(): JSX.Element {
  return (
    <div className="bg-background-900 flex flex-1 flex-col items-stretch">
      <Header
        rightElement={
          <Popover
            buttonChildren={<LockOpenIcon />}
            popoverChildren={
              <>
                <Input
                  id="api-token"
                  label="API Token"
                  placeholder="qwerty12345"
                />
                <Button leftIcon={<LockOpenIcon />} label="Save" />
              </>
            }
          />
        }
      />
    </div>
  )
}

render(<App />, document.getElementById("app") as HTMLElement)
