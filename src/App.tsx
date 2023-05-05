import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Buttom";
// import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {/* <ListGroup /> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        My Button
      </Button>
    </div>
  );
}
export default App;
