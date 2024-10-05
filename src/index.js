function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");

    let losAngelesDate = moment.tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = losAngelesDate.format("MMMM Do YYYY");

    let losAngelesTime = losAngelesDate.format("H:mm:ss [<small>]A[</small>]");
    losAngelesTimeElement.innerHTML = losAngelesTime;
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");

    let parisDate = moment.tz("Europe/Paris");
    parisDateElement.innerHTML = parisDate.format("MMMM Do YYYY");

    let parisTime = parisDate.format("H:mm:ss [<small>]A[</small>]");
    parisTimeElement.innerHTML = parisTime;
  }

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");

    let sydneyDate = moment.tz("Australia/Sydney");
    sydneyDateElement.innerHTML = sydneyDate.format("MMMM Do YYYY");

    let sydneyTime = sydneyDate.format("H:mm:ss [<small>]A[</small>]");
    sydneyTimeElement.innerHTML = sydneyTime;
  }
}

function displayCity(event) {
  let selectedCityValue = event.target.value;
  if (selectedCityValue === "current") {
    selectedCityValue = moment.tz.guess();
  }

  let selectedCity = selectedCityValue.replace("_", " ").split("/")[1];
  let cityDate = moment().tz(selectedCityValue).format("MMMM Do YYYY");
  let cityTime = moment()
    .tz(selectedCityValue)
    .format("H:mm:ss [<small>]A[</small>]");
  let displayCityElement = document.querySelector("#displayed-city");

  displayCityElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${selectedCity}</h2>
            <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityTime}</div>
        </div>
        <a href="/">Back to all cities</a>`;
}

let selectCityElement = document.querySelector("#city");
selectCityElement.addEventListener("change", displayCity);

updateTime;
setInterval(updateTime, 1000);
