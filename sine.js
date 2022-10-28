var samples, data, width, height, margin, w, h, xScale, yScale, svg, xAxis, yAxis, line, g, path, params;


samples = 10;

width = 1300;
height = 500;
margin = {
  top: 40,
  right: 40,
  bottom: 40,
  left: 40
};

w = width - margin.right; h = height - margin.top - margin.bottom;
xScale = d3.scale.linear().domain([0, samples - 1]).range([0, w]); yScale = d3.scale.linear().domain([0, 1]).range([h, 0]);

svg = d3.select('#vis').append('svg').attr('width', w + margin.left + margin.right).attr('height', h + margin.top + margin.bottom).append('g').attr('transform', "translate(" + margin.left + ", " + margin.top + ")");

svg.append("defs").append("clipPath").attr("id", "clip").append("rect").attr("width", w).attr("height", h);


xAxis = d3.svg.axis().scale(xScale).ticks(10).orient('bottom'); svg.append('g').attr('class', 'x axis').attr("transform", "translate(0," + h + ")").call(xAxis);
yAxis = d3.svg.axis().scale(yScale).ticks(5).orient('left'); svg.append('g').attr('class', 'y axis').call(yAxis);

line = d3.svg.line().x(function(d, i){
  return xScale(i);
}).y(function(d, i){
  return yScale(d);
}).interpolate('linear');

g = svg.append('g').attr('clip-path', 'url(#clip)');


a=Number(document.getElementById("x1").value);
b=Number(document.getElementById("x2").value);
c=Number(document.getElementById("x3").value);
d=Number(document.getElementById("x4").value);


data1 = generateSineData1(a, b, c, d);
data2 = generateSineData2(a, b, c ,d);
data3 = generateSineData3(a, b, c, d);
data4 = generateSineData4(a, b, c, d);

path1 = g.append('path').attr('class', 'line').data([data1]).attr('d', line).style('fill', 'none').style('stroke', 'red').style('stroke-width', '3px');
path2 = g.append('path').attr('class', 'line').data([data2]).attr('d', line).style('fill', 'none').style('stroke', 'orange').style('stroke-width', '3px');
path3 = g.append('path').attr('class', 'line').data([data3]).attr('d', line).style('fill', 'none').style('stroke', 'green').style('stroke-width', '3px');
path4 = g.append('path').attr('class', 'line').data([data4]).attr('d', line).style('fill', 'none').style('stroke', 'blue').style('stroke-width', '3px');

function doWork(a, b, c, d){


data1 = generateSineData1(a, b, c, d);
data2 = generateSineData2(a, b, c ,d);
data3 = generateSineData3(a, b, c, d);
data4 = generateSineData4(a, b, c, d);

	path1.remove();
	path2.remove();
	path3.remove();
	path4.remove();
	
path1 = g.append('path').attr('class', 'line').data([data1]).attr('d', line).style('fill', 'none').style('stroke', 'red').style('stroke-width', '3px');
path2 = g.append('path').attr('class', 'line').data([data2]).attr('d', line).style('fill', 'none').style('stroke', 'orange').style('stroke-width', '3px');
path3 = g.append('path').attr('class', 'line').data([data3]).attr('d', line).style('fill', 'none').style('stroke', 'green').style('stroke-width', '3px');
path4 = g.append('path').attr('class', 'line').data([data4]).attr('d', line).style('fill', 'none').style('stroke', 'blue').style('stroke-width', '3px');
}


function generateSineData1(a, b, c, d){
	var M=getSDataX1(a, b, c, d );
	return M;
}

function generateSineData2(a, b, c, d){
	var M=getSDataX2(a, b, c, d );
	return M;
}

function generateSineData3(a, b, c, d){
	var M=getSDataX3(a, b, c, d );
	return M;
}
function generateSineData4(a, b, c, d){
	var M=getSDataX4(a, b, c, d );
	return M;
}

function getSDataX1(a,b, c, d ){
	data_1=[];	
	data_2=[];
	data_3=[];
	data_4=[];

	

a11=Number(document.getElementById("a11").value);
a12=Number(document.getElementById("a12").value);
a13=Number(document.getElementById("a13").value);
a14=Number(document.getElementById("a14").value);

a21=Number(document.getElementById("a21").value);
a22=Number(document.getElementById("a22").value);
a23=Number(document.getElementById("a23").value);
a24=Number(document.getElementById("a24").value);

a31=Number(document.getElementById("a31").value);
a32=Number(document.getElementById("a32").value);
a33=Number(document.getElementById("a33").value);
a34=Number(document.getElementById("a34").value);

a41=Number(document.getElementById("a41").value);
a42=Number(document.getElementById("a42").value);
a43=Number(document.getElementById("a43").value);
a44=Number(document.getElementById("a44").value);


	x1=a;
	x2=b;
	x3=c;
	x4=d;
	
	for (var i=0; i<100; i++){
		data_1.push(x1);
		data_2.push(x2);
		data_3.push(x3);
		data_4.push(x4);
		
	x10=x1;
	x20=x2;
	x30=x3;
	x40=x4;
	
	x1=(a11*x10+a12*x20 +a13*x30 + a14*x40)/(a11+a12+a13+a14);
	x2=(a21*x10+a22*x20 +a23*x30 + a24*x40)/(a21+a22+a23+a24);
	x3=(a31*x10+a32*x20 +a33*x30 + a34*x40)/(a31+a32+a33+a34);
	x4=(a41*x10+a42*x20 +a43*x30 + a44*x40)/(a41+a42+a43+a44);
	
	
	
		}
	return data_1;
}

function getSDataX2(a,b, c, d ){
	data_1=[];	
	data_2=[];
	data_3=[];
	data_4=[];
	
	a11=Number(document.getElementById("a11").value);
a12=Number(document.getElementById("a12").value);
a13=Number(document.getElementById("a13").value);
a14=Number(document.getElementById("a14").value);

a21=Number(document.getElementById("a21").value);
a22=Number(document.getElementById("a22").value);
a23=Number(document.getElementById("a23").value);
a24=Number(document.getElementById("a24").value);

a31=Number(document.getElementById("a31").value);
a32=Number(document.getElementById("a32").value);
a33=Number(document.getElementById("a33").value);
a34=Number(document.getElementById("a34").value);

a41=Number(document.getElementById("a41").value);
a42=Number(document.getElementById("a42").value);
a43=Number(document.getElementById("a43").value);
a44=Number(document.getElementById("a44").value);


	x1=a;
	x2=b;
	x3=c;
	x4=d;
	
	for (var i=0; i<100; i++){
		data_1.push(x1);
		data_2.push(x2);
		data_3.push(x3);
		data_4.push(x4);
		
	x10=x1;
	x20=x2;
	x30=x3;
	x40=x4;
	
	x1=(a11*x10+a12*x20 +a13*x30 + a14*x40)/(a11+a12+a13+a14);
	x2=(a21*x10+a22*x20 +a23*x30 + a24*x40)/(a21+a22+a23+a24);
	x3=(a31*x10+a32*x20 +a33*x30 + a34*x40)/(a31+a32+a33+a34);
	x4=(a41*x10+a42*x20 +a43*x30 + a44*x40)/(a41+a42+a43+a44);
	
		}
	return data_2;
}

function getSDataX3(a,b, c, d ){
	data_1=[];	
	data_2=[];
	data_3=[];
	data_4=[];
	
	a11=Number(document.getElementById("a11").value);
a12=Number(document.getElementById("a12").value);
a13=Number(document.getElementById("a13").value);
a14=Number(document.getElementById("a14").value);

a21=Number(document.getElementById("a21").value);
a22=Number(document.getElementById("a22").value);
a23=Number(document.getElementById("a23").value);
a24=Number(document.getElementById("a24").value);

a31=Number(document.getElementById("a31").value);
a32=Number(document.getElementById("a32").value);
a33=Number(document.getElementById("a33").value);
a34=Number(document.getElementById("a34").value);

a41=Number(document.getElementById("a41").value);
a42=Number(document.getElementById("a42").value);
a43=Number(document.getElementById("a43").value);
a44=Number(document.getElementById("a44").value);


	x1=a;
	x2=b;
	x3=c;
	x4=d;
	
	for (var i=0; i<100; i++){
		data_1.push(x1);
		data_2.push(x2);
		data_3.push(x3);
		data_4.push(x4);
		
	x10=x1;
	x20=x2;
	x30=x3;
	x40=x4;
	
	x1=(a11*x10+a12*x20 +a13*x30 + a14*x40)/(a11+a12+a13+a14);
	x2=(a21*x10+a22*x20 +a23*x30 + a24*x40)/(a21+a22+a23+a24);
	x3=(a31*x10+a32*x20 +a33*x30 + a34*x40)/(a31+a32+a33+a34);
	x4=(a41*x10+a42*x20 +a43*x30 + a44*x40)/(a41+a42+a43+a44);
	
		}
	return data_3;
}

function getSDataX4(a,b, c, d ){
	data_1=[];	
	data_2=[];
	data_3=[];
	data_4=[];
	
a11=Number(document.getElementById("a11").value);
a12=Number(document.getElementById("a12").value);
a13=Number(document.getElementById("a13").value);
a14=Number(document.getElementById("a14").value);

a21=Number(document.getElementById("a21").value);
a22=Number(document.getElementById("a22").value);
a23=Number(document.getElementById("a23").value);
a24=Number(document.getElementById("a24").value);

a31=Number(document.getElementById("a31").value);
a32=Number(document.getElementById("a32").value);
a33=Number(document.getElementById("a33").value);
a34=Number(document.getElementById("a34").value);

a41=Number(document.getElementById("a41").value);
a42=Number(document.getElementById("a42").value);
a43=Number(document.getElementById("a43").value);
a44=Number(document.getElementById("a44").value);


	x1=a;
	x2=b;
	x3=c;
	x4=d;
	
	for (var i=0; i<100; i++){
		data_1.push(x1);
		data_2.push(x2);
		data_3.push(x3);
		data_4.push(x4);
		
		
	x10=x1;
	x20=x2;
	x30=x3;
	x40=x4;
	
	x1=(a11*x10+a12*x20 +a13*x30 + a14*x40)/(a11+a12+a13+a14);
	x2=(a21*x10+a22*x20 +a23*x30 + a24*x40)/(a21+a22+a23+a24);
	x3=(a31*x10+a32*x20 +a33*x30 + a34*x40)/(a31+a32+a33+a34);
	x4=(a41*x10+a42*x20 +a43*x30 + a44*x40)/(a41+a42+a43+a44);
	
		}
	return data_4;
}
