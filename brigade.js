/*#const { events, Job, Group } = require("brigadier");
#
#events.on("push", function(e, amelioratess/new) {
#  console.log("Hello world");
#})*/



const { events, Job } = require("brigadier");
events.on("push", () => {
  var job = new Job("do-nothing", "alpine:3.8");
  job.tasks = [
    "ls",
    "cd /src",
    "ls",
    "echo Hello",
    "echo World"
  ];

  job.run();
});
