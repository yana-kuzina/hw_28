import Button from "./components/Button";

function App() {
  return (
    <>
      <Button color="primary">Primary button</Button>
      <Button color="primary" size="large">
        Primary large button
      </Button>
      <Button color="primary" size="small">
        Secondary button
      </Button>
      <Button color="primary" disabled size="small">
        Disabled button
      </Button>
      <Button color="secondary">Secondary button</Button>
      <Button color="secondary" disabled>
        Secondary button
      </Button>
    </>
  );
}

export default App;
