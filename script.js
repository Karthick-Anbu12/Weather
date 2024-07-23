fetch("https://restcountries.com/v3.1/all",{method:"GET"})
.then((data)=>{
    let res=data.json()
    return res
}).then((element)=>{
  let head=document.createElement("div")
  head.className="head"
  head.innerText=" Weather of Countries "
  document.body.appendChild(head)
  console.log(element)
  element.forEach(cont => {
   
    let container=document.createElement("div")
    
    container.style.margin=" 10px 10px 10px 10px"
    container.innerHTML=`<div class="card">
             <div class="card-header text-center">
               ${cont.name.common}
              </div>
  <div class="card-body text-center" >
    <img src="${cont.flags.png}">
    <p class="card-text text-center" >Capital:${cont.capital}<br>Region:${cont.region}<br>Country code:${cont.cca3}</p>
    <button class="btn  ">Check weather</button>
  </div>
</div>`
    document.body.appendChild(container)
  });
  let buttons = document.querySelectorAll("button");
    buttons.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        let latlng = element[index].latlng;
        let lat = latlng[0];
        let lon = latlng[1];

        let weatherApi = fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e5c8ecd7ed9dfeb3dd27359694ea033d
          `
        );
       
        weatherApi
       .then((data1) => data1.json())
       .then((res) => {
          alert(`Weather of ${element[index].name.common} is ${Math.floor(res.main.temp)} c Wind ${res.wind.deg} deg,${res.wind.gust} gust ${res.wind.speed} speed`)
        });
      });
    });
   
  }).catch((err)=>{console.log(err)})  