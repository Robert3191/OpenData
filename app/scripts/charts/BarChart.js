window.BarChart = function(config) {
    $('#' + config.selector).empty();

    var margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = 750 - margin.left - margin.right,
        height = 350 - margin.top - margin.bottom;



    var svg = d3.select("#"+config.selector).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    this.draw = function(data) {
        svg.selectAll(".bar").remove();
        svg.selectAll(".axis").remove();

        var x = d3.scale.ordinal()
            .rangeRoundBands([0, width], .1);

        var y = d3.scale.linear().rangeRound([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .tickFormat((d3.format(".2s")));

        x.domain(data.map(function(d) { return d[0]; }));
        y.domain([0, d3.max(data, function(d) { return d[1]; })]);

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

        svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return x(d[0]); })
            .attr("width", x.rangeBand())
            .attr("y", function(d) { return y(d[1]); })
            .attr("height", function(d) { return height - y(d[1]); });

    };
}