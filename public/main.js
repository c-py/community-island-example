console.log("Scene.js init", window.secret);

window.parent.postMessage(
  { method: "initialise", map: "http://localhost:3002/map.json" },
  "*"
);

// window.addEventListener("message", function (event) {
//   if (event.source === window.parent) {
//     console.log({ caught: event });
//      Listen to incoming events from parent
//   }
// });
