/*#const { events, Job, Group } = require("brigadier");
#
#events.on("push", function(e, amelioratess/new) {
#  console.log("Hello world");
#})*/



const { events, Job } = require("brigadier");
events.on("push", () => {
  var job = new Job("job1", "fgrehm/alpine-dind:latest");
  job.privileged = true;
  job.tasks = [
    "dockerd &",
    "sleep 5",
    "cd /src",
    "echo inside project repo",
    "ls",
    "docker login -u kshitizsh12 -p 10sharma10",
    "echo docker hub auth",
    "docker build -t kshitizsh12/node-app-ksh:2.1 .",
    "echo build successful",
    "docker tag kshitizsh12/node-app-ksh:2.1 kshitizsh12/node-app-ksh:3",
    "echo docker tagging",
    "docker push kshitizsh12/node-app-ksh:3",
    "echo docker push",
    "apk add openssh",
    "rc-update add sshd",
    "rc-status",
    "/etc/init.d/sshd start",
    "rc-status"
  ];

  job.run();
});


// for test
