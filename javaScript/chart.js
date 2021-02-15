//pieChart

//columns
let labels1 = ["yes", "no", "prefer_not_to_say"]
//data collected
let data1 = [521, 459, 20]
let tableName = "Have you ever heard about Aspora ?"
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
let labels2 = ["yes", "no", "prefer_not_to_say"]
//data collected
let data2 = [456, 417, 127]
let tableName2 = "Do you currently play any kind of sport?"
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


//Bar

//columns
let labels3 = ["laced", "laceless", "for_both"]
//data collected
let data3 = [420, 234, 127]
let tableName3 = "Do you want these shoes to be laced/laceless?"
let colors3 = ["green", "#a4978e", "#be9063"]
let myChart3 = document.getElementById("barChart2").getContext("2d")
let chart3 = new Chart(myChart3, {
    type: "bar",
    data: {
        labels: labels3,
        datasets: [{
            data: data3,
            backgroundColor: colors3
        }]
    },
    options: {
        title: {
            text: tableName3,
            display: true
        },
        legend: {
            display: false
        }
    }
})
//radar

//columns
// let labels3 = ["laced", "laceless", "for_both"]
// let tableName3 = "Do you want these shoes to be laced/laceless"
// let myChart3 = document.getElementById("radarChart").getContext("2d")
// let chart3 = new Chart(myChart3, {
//     type: "radar",
//     data: {
//         labels: labels3,
//         datasets: [{
//             label: "laced",
//             fill: true,
//             backgroundColor: "rgba(179,181,198,0.2)",
//             borderColor: "rgba(179,181,198,1)",
//             pointBorderColor: "#fff",
//             pointBackgroundColor: "rgba(179,181,198,0.2)",
//             data: [234]
//         },
//         {
//             label: "laceless",
//             fill: true,
//             backgroundColor: "rgba(255,99,132,0.2)",
//             borderColor: "rgba(255,99,132,1)",
//             pointBorderColor: "#fff",
//                 pointBackgroundColor: "rgba(255,99,132,0.2)",
//                 data: [420]
//             },
//             {
//                 label: "for_both",
//                 fill: true,
//                 backgroundColor: "black",
//                 borderColor: "grey",
//                 pointBorderColor: "#fff",
//                 pointBackgroundColor: "yellow",
//                 data: [417]
//             }]
//     },
//     options: {
//         title: {
//             text: tableName3,
//             display: true
//         }
//     }
// })


//pieChart

//columns
let labels4 = ["38_40", "41_43", "44_46", "47_and_above"]
//data collected
let data4 = [138, 262, 370, 237]
let tableName4 = "What shoe size range would you personally like for the shoe to come in?"
let colors4 = ["#72a2c0", "#93a806", "#a4978e", "#be9063"]
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
let labels5 = ["2000_5000", "6000_10000", "11000_15000", "16000_20000", "21000_and_more"]
//data collected
let data5 = [189, 307, 295, 167, 50]
let tableName5 = "What price range do you believe that these shoes will cost upon release?"
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

//pieChart

//columns
let labels6 = ["2000_5000", "6000_10000", "11000_15000", "16000_20000", "21000_and_more"]
//data collected
let data6 = [189, 307, 295, 167, 50]
let tableName6 = "What price range do you believe that these shoes will cost upon release?"
let colors6 = ["#F05837", "blue", "green", "#F3e93b", "#68975a6"]
let myChart6 = document.getElementById("doughnutChart2").getContext("2d")
let chart6 = new Chart(myChart6, {
    type: "doughnut",
    data: {
        labels: labels6,
        datasets: [{
            data: data6,
            backgroundColor: colors6
        }]
    },
    options: {
        title: {
            text: tableName6,
            display: true
        }
    }
})