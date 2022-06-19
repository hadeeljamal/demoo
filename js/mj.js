const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

function get_position(){
  // Check if geolocation supported by the browser
  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(location){
        let x = location.coords.latitude;
        let y = location.coords.longitude;
          var positionDetails = "Your position: <br/>" + "Latitude: <strong>" + location.coords.latitude + "</strong> and " + "Longitude: <strong>" + location.coords.longitude+"</strong>";
          document.getElementById("location_content").innerHTML = positionDetails;
          document.getElementById("map").innerHTML ='<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27268.342907755097!2d34.3506944!3d31.3163776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2s!4v1655624657173!5m2!1sar!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> '
      });
  } else{
      document.getElementById("location_content").innerHTML = "This browser does not support  geolocation.";
  }
}
