// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Buttom";
// import ListGroup from "./components/ListGroup";

import Like from "./components/Like/Like";

function App() {
  // const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {/* <ListGroup /> */}
      {/* {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        My Button
      </Button> */}
      <Like onClick={() => console.log("CLICKED")}></Like>
    </div>
  );
}
export default App;
