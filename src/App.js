import Button from "./components/Button";

function App() {
  return (
    <>
      <Button>Primary button</Button>
      <Button size="large">Primary large button</Button>
      <Button size="small">Secondary button</Button>
      <Button disabled size="small">
        Disabled button
      </Button>
    </>
  );
}

export default App;
