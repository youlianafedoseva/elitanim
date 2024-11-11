function sendMessage(message) {
  let ackReceived = false;
  let retries = 0;

  while (!ackReceived && retries < MAX_RETRIES) {
    send(message);
    startTimer(TIMEOUT);
    
    while (!ackReceived && !timerExpired) {
      if (ackReceived) {
        stopTimer();
      } else if (timerExpired) {
        retries++;
        break;
      }
    }
  }
}
