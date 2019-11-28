/*#const { events, Job } = require("brigadier");
#events.on("exec", () => {
#  var job = new Job("do-nothing", "alpine:3.8");
#  job.tasks = [
#    "echo Hello",
#    "echo World"
#  ];
#
#  job.run();
#});
*/

const { events } = require("brigadier");

events.on("push", function(e, project) {
  console.log("received push for commit " + e.revision.commit)
})
