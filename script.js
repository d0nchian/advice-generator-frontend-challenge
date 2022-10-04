let idNum = "";
let advice = "";

fetchData = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      idNum = data.slip.id;
      advice = data.slip.advice;
      console.log(idNum, advice);
      console.log((document.querySelector(".id").innerHTML = idNum));
      console.log((document.querySelector(".quote").innerHTML = advice));
    });
};
fetchData();
