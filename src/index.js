import "./style.scss";
console.log('index.js loaded');
import $, { data } from "jquery";
import * as d3 from "d3";
// import config from "../config.json";
import { color } from "d3";


$(document).ready(($) => { 

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#button').fadeIn();
        } else {
            $('#button').fadeOut();
        }
    }); 

    $('#button').click(() => {
        $("html, body").animate({ scrollTop: 0 }, 100);
       
    });

});

// $(document).ready(($) => {
//     $(window).scroll(() => {
//       console.log(this); // undefined
//     });
//     $(window).scroll(function () {
//       console.log(this); // window
//     });
//   });

//----------------------------------------------------

// const chart = d3.select("#diagram")
//   .append("svg")
//   .attr("width", 400)
//   .attr("height", 400)
//   .append("g");

// const X = d3
//   .scaleTime()
//   .domain([1, 7])
//   .range([20, 280]);
// const Y = d3
//   .scaleLinear()
//   .domain([0, 40])
//   .range([280, 20]);

// const data = [
//   { data: "styczen", value: 20 },
//   { data: "luty", value: 10 },
//   { data: "marzec", value: 12 },
//   { data: "kwiecien", value: 14 },
//   { data: "maj", value: 32 },
//   { data: "czerwiec", value: 23 },
//   { data: "lipiec", value: 35 }
// ];

// chart
//   .datum(data)
//   .call(d3.axisBottom(X))
//   .call(d3.axisLeft(Y))
//   .append("path")
//   .attr("fill", "none")
//   .attr("stroke", "lightblue")
//   .attr("stroke-width", 10)
//   .attr(
//     "d",
//     d3
//       .line()
//       .x(({ data }) => X(data))
//       .y(({ value }) => Y(value))
//   );

  
//------------------------------------------------------------------






//------------------------------------------------------------------

// // set the dimensions and margins of the graph
// var margin = {top: 10, right: 30, bottom: 30, left: 60},
//     width = 560 - margin.left - margin.right,
//     height = 600 - margin.top - margin.bottom;

// // append the svg object to the body of the page
// var svg = d3.select(".diagram")
//   .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")");


// d3.json("../assets/data/data3.json", function(d){
//     return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }
//   },

//   function(data) {
//     var x = d3.scaleTime()
//       .domain(d3.extent(data, function(d) { return d.date; }))
//       .range([ 0, width ]);
//     svg.append("g")
//       .attr("transform", "translate(0," + height + ")")
//       .call(d3.axisBottom(x));

//     // Add Y axis
//     var y = d3.scaleLinear()
//       .domain([ 0, 50 ])
//       .range([ height, 0 ]);
//     svg.append("g")
//       .call(d3.axisLeft(y));

//     // Add the line
//     svg.append("path")
//       .datum(data)
//       .attr("fill", "none")
//       .attr("stroke", "lightblue")
//       .attr("stroke-width", 3)
//       .attr("d", d3.line()
//         .x(function(d) { return x(d.date) })
//         .y(function(d) { return y(d.value) })
//         )

// })


//-------------------------------------------------

// var json = [
//   { "month": "styczeń", "paint": 20 },
//   { "month": "luty", "paint": 11 },
//   { "month": "marzec", "paint": 19 },
//   { "month": "kwiecień", "paint": 15 },
//   { "month": "maj", "paint": 39 },
//   { "month": "czerwiec", "paint": 30 },
//   { "month": "lipiec", "paint": 43 },
//   ];
  
//   function draw(data) {
//       d3.select(".diagram")
//       .append("div")
//       .attr("class", "chart")
//       .selectAll(".bar")
//       .data(data)
//       .enter()
//       .append("div")
//       .attr("class", "bar")
//       .style("width", function (d) { return d.paint * 10  + "px" })
//       .style("outline", "1px solid black")
//       .text(function (d) { return d.month + ' ' + d.paint  });
//   }
  
//   draw(json);

//----------------------------------------------------------

// var data = [
//   {"y":23,"x":"2020-01-31"},
//   {"y":12,"x":"2020-02-28"},
//   {"y":14,"x":"2020-03-31"},
//   {"y":19,"x":"2020-04-30"},
//   {"y":35,"x":"2020-05-31"},
//   {"y":26,"x":"2020-06-30"},
//   {"y":43,"x":"2020-07-31"}
// ];

// var	margin = {top: 1, right: 20, bottom: 30, left: 30};
// var width = 550 - margin.left - margin.right;
// var height = 250 - margin.top - margin.bottom;
// var	x = d3.scaleTime().range([0, width]);
// var	y = d3.scaleLinear().range([height, 0]);
// var	svg = addSvg();

// addDomains();
// addValueLine();
// addAxes();

// function addSvg() {
// 	return d3.select(".diagram ")
//     .append("svg")
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//     .append("g")
//       .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
// }

// function addValueLine() {
// 	var valueline = d3.svg.line()
//     .x(function(d) { return x(new Date(d.x)); })
//     .y(function(d) { return y(d.y); });

//   svg.append("path")	
//     .attr("class", "line")
//     .attr("d", valueline(data));
// }

// function addDomains() {
//   x.domain(d3.extent(data, function(d) { return new Date(d.x); }));
//   y.domain([0, d3.max(data, function(d) { return d.y; })]);
// }

// function addAxes() {
//   var	xAxis = d3.svg.axis().scale(x).orient("bottom").ticks(5);
//   var	yAxis = d3.svg.axis().scale(y).orient("left").ticks(5);

//   svg.append("g")		
//     .attr("class", "x axis")
//     .attr("transform", "translate(0," + height + ")")
//     .call(xAxis);

//   svg.append("g")		
//     .attr("class", "y axis")
//     .call(yAxis);
// }

//-------------------------------------------------------------------

// //Set margins and sizes
// var margin = {
//   top: 20,
//   bottom: 50,
//   right: 30,
//   left: 50
//   };
  
//   var width = 700 - margin.left - margin.right;
//   var height = 500 - margin.top - margin.bottom;
//   //Create date parser
//   var ParseDate = d3.timeFormat("%d-%b-%y").parse;
//   //Create x and y scale to scale inputs
//   var xScale = d3.scaleTime().range([0, width]);
//   var yScale = d3.scaleLinear().range([height, 0]);
  
//   //Create x and y axes
//   var xAxis = d3.axisBottom().scale(xScale)
  
//   .ticks(5);
//   var yAxis = d3.axisLeft().scale(yScale)
  
//   .ticks(5);
  
//   //Create a line generator
//   var valueline = d3.svg.line()
//   .x(function(d){
//   return xScale(d.date);
//   })
  
//   .y(function(d){
//   return yScale(d.paint);
//   });
//   //Create an SVG element and append it to the DOM
//   var svgElement = d3.select("#diagram").append("svg")
//   .attr({"width": width+margin.left+margin.right, "height": height+margin.top+margin.bottom})
//   .append("g")
//   .attr("transform","translate("+margin.left+","+margin.top+")");
//   //Read TSV file
//   d3.json("../assets/data/data3.json", function(data){
//   //Parse Data into useable format
//   data.forEach(function(d){
//   d.date = ParseDate(d.date);
//   d.paint = +d.paint;
//   //the + sign converts string automagically to number
//   });
  
//   //Set the domains of our scales
//   xScale.domain(d3.extent(data, function(d){ return d.date; }));
//   yScale.domain([0, d3.max(data, function(d){ return d.paint; })]);
  
//   //append the svg path
//   var path = svgElement.append("path")
//   .attr("d", valueline(data));
  
//   //Add X Axis
//   var x = svgElement.append("g")
//   .attr("transform", "translate(0,"+height+")")
//   .call(xAxis);
  
//   //Add Y Axis
//   var y = svgElement.append("g")
//   .call(yAxis);
  
//   //Add label to y axis
//   y.append("text")
//   .attr("fill", "#000")
//   .attr("transform", "rotate(-90)")
//   .attr("y", 6)
//   .attr("dy", "0.71em")
//   .attr("text-anchor", "end")
//   .text("Price ($)");
//   });


//----------------------------------------------


// // set the dimensions and margins of the graph
// var margin = {top: 20, right: 20, bottom: 30, left: 50},
//     width = 960 - margin.left - margin.right,
//     height = 500 - margin.top - margin.bottom;

// // parse the date / time
// var parseTime = d3.timeParse("%B");

// // set the ranges
// var x = d3.scaleTime().range([0, width]);
// var y = d3.scaleLinear().range([height, 0]);

// // define the line
// var valueline = d3.line()
//     .x(function(d) { return x(d.date); })
//     .y(function(d) { return y(d.value); });

// // append the svg obgect to the body of the page
// // appends a 'group' element to 'svg'
// // moves the 'group' element to the top left margin
// var svg = d3.select("#diagram").append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")");

// // Get the data
// d3.json("../assets/data/data3.json", function(error, data) {
//   if (error) throw error;

//   // format the data
//   data.forEach(function(d) {
//       d.date = parseTime(d.date);
//       d.close = +d.value;
//   });

//   // Scale the range of the data
//   x.domain(d3.extent(data, function(d) { return d.date; }));
//   y.domain([0, d3.max(data, function(d) { return d.value; })]);

//   // Add the valueline path.
//   svg.append("path")
//       .data([data])
//       .attr("class", "line")
//       .attr("d", valueline);

//   // Add the X Axis
//   svg.append("g")
//       .attr("transform", "translate(0," + height + ")")
//       .call(d3.axisBottom(x));

//   // Add the Y Axis
//   svg.append("g")
//       .call(d3.axisLeft(y));

// });

//----------------------------------oby ostatnie-------------------

const DATA = [
  { value: 20, month: 'styczeń'},
  { value: 10, month: 'luty'},
  { value: 14, month: 'marzec'},
  { value: 19, month: 'kwiecień'},
  { value: 32, month: 'maj'},
  { value: 29, month: 'czerwiec'},
  { value: 43, month: 'lipiec'},
];

const xScale = d3
  .scaleBand()
  .domain(DATA.map((dataPoint) => dataPoint.month))
  .rangeRound([0, 700])
  .padding(0.2);

const yScale = d3
  .scaleLinear()
  .domain([0, 43])
  .range([300, 0]);


const container = d3.select('svg')
  .classed('diag', true)
  .append('svg')
  .attr("ViewBox", `0 0 780 350`);

const bars = container
  .selectAll('.bar')
  .data(DATA)
  .enter()
  .append('rect')
  .classed('bar', true)
  .attr('width', xScale.bandwidth())
  .attr('height',(data) => 300 - yScale(data.value))
  .attr('y', data => yScale(data.value))
  .attr('x', data => xScale(data.month))
  ;

var y_axis = d3.axisLeft()
  .scale(yScale);

container.append("g")
  .attr("transform", "translate(19, 0)")
  .call(y_axis);
       

var x_axis = d3.axisBottom()
  .scale(xScale);

container.append("g")
  .attr("transform", "translate(0, 300)")
  .call(x_axis);



// bars.selectAll("text")
// .data(DATA)
// .enter()
// .append("svg:text")
// .attr("x", function(datum, index ) { return xScale(index) + xScale.bandWidth(); })
// .attr("y", function(datum) { return height - yScale(datum.value); })
// .attr("dx", -xScale.bandwidth()/2)
// .attr("dy", "1.2em")
// .attr("text-anchor", "middle")
// .text(function(datum) { return datum.value; })
// .attr("fill", "black");


// bars.selectAll("text.yAxis").
// data(DATA).
// enter().append("svg:text").
// attr("x", function(datum, index) { return xScale(index) + xScale.bandWidth(); }).
// attr("y", height).
// attr("dx", -xScale.bandwidth()/2).
// attr("text-anchor", "middle").
// attr("style", "font-size: 12;").
// text(function(datum) { return datum.month;}).
// attr("transform", "translate(0, 18)").
// attr("class", "yAxis");

