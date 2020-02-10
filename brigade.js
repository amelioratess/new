/*#const { events, Job, Group } = require("brigadier");
#
#events.on("push", function(e, amelioratess/new) {
#  console.log("Hello world");
#})*/
const { events, Job, Group } = require("brigadier");
events.on("push", async () => {
  var dest = "/mnt/brigade/share/1.txt";

  var job = new Job("job1", "kshitizsh12/base:v1");
  job.storage.enabled = true;
  job.privileged = true;
  job.tasks = [
    "dockerd &",
    "sleep 5",
    "cd /src",
    "echo inside project repo",
    "ls",
    "docker login -u kshitizsh12 -p 10sharma10",
    "echo docker hub auth >" + dest, 
  //  "docker build -t kshitizsh12/node-app-ksh:2.1 .",
   // "echo build successful",
  //  "docker tag kshitizsh12/node-app-ksh:2.1 kshitizsh12/node-app-ksh:3",
  //  "echo docker tagging",
  //  "docker push kshitizsh12/node-app-ksh:3",
  //  "echo docker push",
    "docker ps"
  ];


 var joby = new Job("job2", "docker:dind");
 joby.storage.enabled = true;
 job.privileged = true;
 joby.tasks = [
  "dockerd &",
  "sleep 5",
  "cat " + dest
  ];



 const data = await Group.runEach([job, joby]);
 console.log(data);
// above two line for getting logs in brigade worker

// Group.runEach([job, joby])

});
 


// for test

