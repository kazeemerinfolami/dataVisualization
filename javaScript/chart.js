//pieChart

//columns
let labels1 = ["YES", "YES BUT IN GREEN", "maybe", "but", "why"]
//data collected
let data1 = [31, 4, 3, 10, 70]
let tableName = "Aspora Recorgnition"
let colors1 = ["#F05837", "blue", "green", "#F3e93b", "#68975a6"]
let myChart1 = document.getElementById("doughnutChart").getContext("2d")
let chart1 = new Chart(myChart1, {
    type: "doughnut",
    data: {
        labels: labels1,
        datasets: [{
            data: data1,
            backgroundColor: colors1
        }]
    },
    options: {
        title: {
            text: tableName,
            display: true
        }
    }
})

//Bar

//columns
let labels2 = ["YES", "YES BUT IN GREEN", "maybe", "but", "why"]
//data collected
let data2 = [32, 4, 2, 20, 70]
let tableName2 = "Aspora Recorgnition"
let colors2 = ["#72a2c0", "#93a806", "green", "#a4978e", "#be9063"]
let myChart2 = document.getElementById("barChart").getContext("2d")
let chart2 = new Chart(myChart2, {
    type: "bar",
    data: {
        labels: labels2,
        datasets: [{
            data: data2,
            backgroundColor: colors2
        }]
    },
    options: {
        title: {
            text: tableName2,
            display: true
        },
        legend: {
            display: false
        }
    }
})

//radar

//columns
let labels3 = ["agree", "disagree", "yes", "no"]
let tableName3 = "Aspora Recorgnition"
let myChart3 = document.getElementById("radarChart").getContext("2d")
let chart3 = new Chart(myChart3, {
    type: "radar",
    data: {
        labels: labels3,
        datasets: [{
            label: "female",
            fill: true,
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(179,181,198,0.2)",
            data: [3, 10, 10, 28]
        },
        {
            label: "male",
            fill: true,
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(255,99,132,1)",
            data: [4, 20, 9, 18]
        }]
    },
    options: {
        title: {
            text: tableName3,
            display: true
        }
    }
})


//pieChart

//columns
let labels4 = ["YES", "YES BUT IN GREEN", "maybe", "but", "why"]
//data collected
let data4 = [34, 4, 3, 40, 70]
let tableName4 = "Aspora Recorgnition"
let colors4 = ["#72a2c0", "#93a806", "green", "#a4978e", "#be9063"]
let myChart4 = document.getElementById("pieChart").getContext("2d")
let chart4 = new Chart(myChart4, {
    type: "pie",
    data: {
        labels: labels4,
        datasets: [{
            data: data1,
            backgroundColor: colors1
        }]
    },
    options: {
        title: {
            text: tableName4,
            display: true
        }
    }
})

//line

//columns
let labels5 = ["YES", "YES BUT IN GREEN", "maybe", "but", "why"]
//data collected
let data5 = [35, 4, 5, 50, 70]
let tableName5 = "Aspora Recorgnition"
let colors5 = ["red", "blue", "green", "yellow", "gold"]
let myChart5 = document.getElementById("lineChart").getContext("2d")
let chart5 = new Chart(myChart5, {
    type: "line",
    data: {
        labels: labels5,
        datasets: [{
            data: data5,
            backgroundColor: colors2
        }]
    },
    options: {
        title: {
            text: tableName5,
            display: true
        },
        legend: {
            display: false
        }
    }
})