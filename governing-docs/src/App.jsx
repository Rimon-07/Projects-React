import { Button } from "./components/common/button"
import { SectionTitle } from "./components/common/section-title"

function App() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Button>Primary button </Button>
    <Button className="bg-white text-black">secondary button </Button>

    <SectionTitle gradient="Solution">Problem & </SectionTitle>
    </main>
  )
}

export default App