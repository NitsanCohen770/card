import * as React from "react";
import Button from "button-bit-assignment/Button";
export default function (_a) {
    var mainText = _a.mainText, subText = _a.subText;
    return (React.createElement("div", null,
        React.createElement("h1", null, mainText),
        React.createElement("h2", null, subText),
        React.createElement(Button, { label: "Hello world" })));
}
