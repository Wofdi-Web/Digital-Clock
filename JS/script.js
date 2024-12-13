// Digital Clock

function getClock() {
  const now = new Date();

  //Hour
  let hours = now.getHours();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);

  // Minutes
  const minutes = now.getMinutes().toString().padStart(2, 0);

  // Seconds
  const seconds = now.getSeconds().toString().padStart(2, 0);

  // Format
  const timeString = `${hours} : ${minutes} : ${seconds} ${meridiem}`;
  document.getElementById("clock").textContent = timeString;
}

getClock();
setInterval(getClock, 1000);
