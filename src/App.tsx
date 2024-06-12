import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [buttonClick, setButtonClick] = useState(false);
  let items = ["New York", "Los Angeles", "San Fransico"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Miami"
        onSelectItem={handleSelectItem}
      /> */}
      <Button onClick={() => console.log("Thank you!")}>press me!</Button>
    </div>
  );
}

export default App;
