import { document, console } from "global";
import { storiesOf } from "@storybook/html";

storiesOf("Demo", module)
  .add("heading", () => "<h1>Hello Worldz</h1>")
  .add("button", () => {
    const button = document.createElement("button");
    button.type = "button";
    button.innerText = "Hello Buttonz";
    button.addEventListener("click", e => console.log(e));
    return button;
  });
