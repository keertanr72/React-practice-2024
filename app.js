/**
 * <div id = "parent">
 *  <div id="child">
 *      <h1>I am an h1 tag</h1>
 *  </div>
 * </div>
 */
const h1 = React.createElement("h1", {}, "I am an h1 tag");
const h2 = React.createElement("h2", {}, "I am an h2 tag");
const child = React.createElement("div", { id: "child" }, [h1, h2] );
const parent = React.createElement("div", {id: "parent"}, child);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
