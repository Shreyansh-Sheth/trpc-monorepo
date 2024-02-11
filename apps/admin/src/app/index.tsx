import * as React from "react";
import "./styles.css";
import { log } from "@repo/logger";
import { validations } from "@repo/utils";
import { Provider } from "./provider";
import { trpc } from "../utils/api";
log("Hello from Admin");
function App(): JSX.Element {
  React.useEffect(() => {
    console.log(
      validations.CreateEMRValidation.safeParse({ name: "John", email: "dasd" })
    );
  }, []);
  return (
    <Provider>
      <div className="container">
        <h1 className="title">
          Admin
          <span>Kitchen Sidasdasnk</span>
        </h1>
        <p>dasdasd</p>
        <TestTRPC />
      </div>
    </Provider>
  );
}

function TestTRPC() {
  const [subscriptionData, setSubscriptionData] = React.useState();
  const data = trpc.randomNumber.useSubscription(undefined, {
    onData(data) {
      setSubscriptionData(data.randomNumber);
    },
    onStarted() {
      console.log("started");
    },
  });

  return (
    <div>
      <button onClick={() => {}}>{subscriptionData}</button>
    </div>
  );
}

export default App;
