import { Button } from "./components/Button"
import { PlusIcon } from "./icons/PlusIcon"

function App() {

  return (
    <>
      <Button startIcon={<PlusIcon/>} variant="primary" text="SHARE" size="small"></Button>
      <Button variant="secondary" text="CREATE" size="large"></Button>
    </>
  )
}

export default App
