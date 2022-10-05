import { render, JSX } from "preact"
import { Header } from "./components/Header"
import "./style.css"

function App(): JSX.Element {
  return (
    <div className="bg-zinc-900 flex flex-1 flex-col items-stretch">
      <Header />
    </div>
  )
}

render(<App />, document.getElementById("app") as HTMLElement)
