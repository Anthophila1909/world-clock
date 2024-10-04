function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");

  let losAngelesDate = moment.tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesDate.format("MMMM Do YYYY");

  let losAngelesTime = losAngelesDate.format("H:mm:ss [<small>]A[</small>]");
  losAngelesTimeElement.innerHTML = losAngelesTime;

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");

  let parisDate = moment.tz("Europe/Paris");
  parisDateElement.innerHTML = parisDate.format("MMMM Do YYYY");

  let parisTime = parisDate.format("H:mm:ss [<small>]A[</small>]");
  parisTimeElement.innerHTML = parisTime;
}

updateTime;
setInterval(updateTime, 1000);
