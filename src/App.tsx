import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"

function App() {

  return (
    <>
      <Button startIcon={<PlusIcon size="lg"/>} variant="primary" text="Share Brain" size="medium"></Button>
      <Button startIcon={<ShareIcon size="lg"/>} variant="secondary" text="Add to Brain" size="medium"></Button>
      <Card/>
    </>
  )
}

export default App
