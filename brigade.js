const { events, Job, Group } = require("brigadier");

events.on("push", function(e, project) {
  console.log("Hello world");
})
