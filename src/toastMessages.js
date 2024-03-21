const successMsgs = [
    "Success!",
    "Great job!",
    "Operation successful!",
    "Mission accomplished!",
    "Well done!",
    "Hooray!",
    "Congratulations!",
    "Success unlocked!",
  ];
  
  const failureMsgs = [
    "Error!",
    "Oops!",
    "Task unsuccessful!",
    "Uh-oh!",
    "Error encountered!",
    "Failure!",
    "Operation terminated!",
    "Task failed!",
  ];
  
  const warningMsgs = [
    "Warning!",
    "Caution advised!",
    "Attention!",
    "Watch out!",
    "Be cautious!",
    "Heads up!",
    "Exercise caution!",
    "Potential risk detected!",
    "Warning bells!",
    "Warning ahead!",
  ];
  
  const informationMsgs = [
    "FYI!",
    "Heads up!",
    "Just so you know!",
    "Information!",
    "Important!",
    "For your information!",
    "Alert!",
    "FYI: Details provided!",
    "Important alert!",
  ];
  
  const randomMsg = (msgs) => msgs[Math.floor(Math.random() * msgs.length)];
  
  export { successMsgs, warningMsgs, failureMsgs, informationMsgs, randomMsg };
  