window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
    theme: "light2",
    animationEnabled: true,
    
		title:{
			text: "Sorting Algorithm"              
		},
		data: [              
		{
      color: "#ffca67",
			type: "column",
			dataPoints: [{ y: 0 }]
		}
		]
  });
  let random_value_begin = Math.floor(Math.random() * 1000);
  let temp_array = [];

  for (i=0; i < random_value_begin; i++){
    let x = Math.random() * 100000;
    chart.options.data[0].dataPoints.push({ y: x});
    temp_array.push(x)
    
  }
  chart.render();
  
  function find_index(array){
    return (array[0] == Math.min(array)) ? 0 : 1 + find_index(array.slice(1), Math.min(array));
  }

  function Selection_Sort(array){
    let min = find_index(array);
    chart.options.data[0].dataPoints[min].y = ''
    chart.options.data[0].dataPoints.unshift({ y: array[min]});
    chart.render();
    return (array.length == 1) ? array[0] :[array[min]] + Selection_Sort(array.splice(min,1));
  }
  
  $("#print_chart").click( function (){
    alert("chart printed");
    chart.render();
  })
  $("#Selection_Sort").click( function (){
    Selection_Sort(temp_array.sort(function(a,b) { return a-b} ));
    chart.render();
  })
}

