const element1 = React.createElement("h1",{id:"header-tag1"},"Hello World!");
const element2 = React.createElement("h2",{id:"header-tag2"},"Hello World2!");
const div = React.createElement("div",{},[element1,element2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);