import * as React from "react";
import "./styles.css";
import { log } from "@repo/logger";
import { validations } from "@repo/utils";
log("Hello from Admin");
function App(): JSX.Element {
  React.useEffect(() => {
    validations.CreateEMRValidation.safeParse({ name: "John", email: "dasd" });
  }, []);
  return (
    <div className="container">
      <h1 className="title">
        Admin
        <span>Kitchen Sidasdasnk</span>
      </h1>
      <p>dasdasd</p>
    </div>
  );
}

export default App;
