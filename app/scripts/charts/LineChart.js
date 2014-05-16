window.Line = function(config){
    console.log(config);
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = 730 - margin.left - margin.right,
        height = 350 - margin.top - margin.bottom;

    var xValues=[];

    this.draw = function(data){
        $("#" + config.selector).empty();

        data.forEach(function(d) {
            xValues.push(d[0]);
        });

        var x = d3.scale.ordinal().rangeRoundBands([0, width],.9);
        var y = d3.scale.linear()
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");
            //.tickValues(xValues);

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .tickFormat((d3.format(".2s")));;

        var line = d3.svg.line()
            .x(function(d) { return x(d[0]); })
            .y(function(d) { return y(d[1]); });

        var svg = d3.select("#" + config.selector).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        x.domain(data.map(function(d) {console.log(d[0]); return d[0]; }));
        y.domain(d3.extent(data, function(d) { return d[1]; }));


        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text(config.yTitle);

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line);
    }
}