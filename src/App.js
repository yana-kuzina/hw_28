import { useState } from "react";

import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [isOpenAlert, setOpenAlert] = useState(false);

  const handleOpen = () => setOpenAlert(true);

  const handleClose = () => setOpenAlert(false);

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

      <button onClick={handleOpen}>Open alert</button>

      {isOpenAlert && (
        <Alert color="primary" onClose={handleClose}>
          Some text
        </Alert>
      )}
    </>
  );
}

export default App;
