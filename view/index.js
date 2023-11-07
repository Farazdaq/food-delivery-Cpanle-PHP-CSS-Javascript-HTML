const toggleButton = document.getElementById("idmenu");

if(toggleButton !=null){
toggleButton.style.display = "none";
}

function displaymenu() {
    console.log("done")
    if(toggleButton !=null){
    
    if(toggleButton.style.display== "none")
    {toggleButton.style.display = "flex";}
    else{toggleButton.style.display = "none";}

}


    
}

google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

// Set Data
const data = google.visualization.arrayToDataTable([
  ['Price', 'Size'],
  [34,7],[14,8],[33,8],[100,9],[90,9],
  [100,9],[110,10],[120,11],
  [130,14],[140,14],[150,15]
]);

// Set Options
const options = {
  hAxis: {title: 'Time'},
  vAxis: {title: 'Sell'},
  legend: 'none'
};

// Draw
const chart1 = new google.visualization.LineChart(document.getElementById('myChart1'));
const chart2 = new google.visualization.LineChart(document.getElementById('myChart2'));
const chart3 = new google.visualization.LineChart(document.getElementById('myChart3'));
chart1.draw(data, options);
chart2.draw(data, options);
chart3.draw(data, options);

}