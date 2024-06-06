import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [buttonClick, setButtonClick] = useState(false);

  return (
    <div>
      {buttonClick && (
        <Alert onDismiss={() => setButtonClick(false)}> My Alert </Alert>
      )}
      <Button color="danger" onClick={() => setButtonClick(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
