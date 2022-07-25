function GetInfo() {
    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--" + newName.value + "--"


    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + newName.value + "&appid=9da01f82bc8e090553c9a0a0f7dc5e20")
        .then(response => response.json())
        .then(data => {
            for (i = 0; i < 5; i++) {
                document.getElementById("day" + (i + 1) + "min").innerHTML = "Min:" + Number(data.list[i].main.temp_min - 288.53).toFixed(1) + "°"
            }

            for (i = 0; i < 5; i++) {
                document.getElementById("day" + (i + 1) + "max").innerHTML = "Max:" + Number(data.list[i].main.temp_max - 288.53).toFixed(2) + "°"
            }
            for (i = 0; i < 5; i++) {
                console.log(data)
                document.getElementById("img" + (i + 1)).src = "http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png";
            }
        })

        .catch(err => console.log(err))

}

function DefaultScreen() {
    document.getElementById("cityInput").defaultValue = "San Diego";
    GetInfo();
}
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function checkDay(day) {
    if (day + d.getDay() > 6) {
        return day + d.getDay() - 7;
    }
    else {
        return day + d.getDay();
    }
}
console.log(document.getElementById("day1").innerHTML = weekday[checkDay(1)]);
for (i = 0; i < 5; i++) {
    var num = i + 1
    console.log(document.getElementById("day" + num).innerHTML = weekday[checkDay(i)]
    )
    document.getElementById("day" + num).innerHTML = weekday[checkDay(i)];
}