import { document, console } from "global";
import { storiesOf } from "@storybook/html";

storiesOf("Demo", module)
  .add("heading", () => "<h1>Hello World</h1>")
  .add("button", () => {
    const button = document.createElement("button");
    button.type = "button";
    button.style = "color:blue;";
    button.innerText = "Hello Buttonz";
    button.addEventListener("click", e => console.log(e));
    return button;
  });
