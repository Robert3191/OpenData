
window.StackedBarChart = function(config) {
    // chart configuration and helongPresser functions
    var chart = {
            margin: {
                top: 20,
                right: 20,
                bottom: 50,
                left: 50
            },
            init: function() {
                this.width = config.width - this.margin.left - this.margin.right;
                this.height = config.height - this.margin.top - this.margin.bottom;

                this.scale= {
                    x: d3.scale.ordinal().rangeRoundBands([0, this.width], .1),
                    y: d3.scale.linear().rangeRound([this.height, 0]),
                    color: d3.scale.ordinal().range(config.colors)
                }
            },
            make_x_axis: function() {
                return d3.svg.axis()
                    .scale(this.scale.x)
                    .orient("bottom")
                    .ticks(5)
            },
            make_y_axis: function() {
                return d3.svg.axis()
                    .scale(this.scale.y)
                    .orient("left")
                    .ticks(5)
            }
        }

    var pressTimer;
    var longPress;

    chart.init();

    chart.columnClick = function(series, seriesNr, category) {
        console.log(chartData[category].url);
        var url = chartData[category].url;
        if (url) {
            window.location.href = "#" + url;
        }
    }


    //TODO: Increase tooltip length

    chart.columnMouseDown = function(ev){

        longPress=false;
        var coordinates;

        if(d3.mouse($('#d3Chart')[0])[0])
            coordinates = d3.mouse($('#d3Chart')[0]);
        else {
            if(d3.touches($('#d3Chart')[0]).length ==1)
            {
                d3.event.preventDefault();
                coordinates = d3.touches($('#d3Chart')[0])[0];
            }
        }

        var x = coordinates[0];
        var y = coordinates[1];

        pressTimer = window.setTimeout(function() {
            longPress = true;
            console.log("fucked up things happen");
            var value = ev.y1 - ev.y0;

//            div .transition()
//                .duration(200)
//                .style("opacity", .9);
//            div .html("<div class='tooltip-legend-item-color' style='background-color:"+ chart.scale.color(ev.name) + "'></div>" + value)
//                .style("left", (x - 30 /*width/2 of tooltip*/) + "px")
//                .style("top", (y + 50 /*height of tooltip*/) + "px");

            $("#content").append("<div class='tooltip'>" + value + "</div>");

        },1000)

    }

    chart.columnMouseUp = function(series, seriesNr, category){
        console.log($('#tooltipbox'));
//        $('#tooltipbox').empty();
        clearTimeout(pressTimer);
//
//        div.transition()
//            .duration(3000)
//            .style("opacity", 0);

        if(longPress == false) {
            console.log(chartData[category].url);
            var url = chartData[category].url;
            if (url) {
                window.location.href = "#" + url;
            }
        }

    }

    var chartData = config.data;
    console.log(config.series);
    chart.scale.color.domain(config.series);
    chart.scale.x.domain(chartData.map(function(d) { return d.name; }));
    chart.scale.y.domain([0, d3.max(chartData, function(d) { return d.total; })]);
//
//    var div = d3.select("body").append("div")
//        .attr("class", "tooltip")
//        .attr("id","tooltipbox");
//       // .style("opacity", 0);
//

    // the svg that contains the chart
    var svg = d3.select(config.selector).append("svg")
        .attr("width", chart.width + chart.margin.left + chart.margin.right)
        .attr("height", chart.height + chart.margin.top +chart. margin.bottom)
        .attr("id", "svg")
        .append("g")
        .attr("transform", "translate(" + chart.margin.left + "," + chart.margin.top + ")");

    var xAxis = d3.svg.axis()
        .scale(chart.scale.x)
        .orient("bottom");
    var yAxis = d3.svg.axis()
        .scale(chart.scale.y)
        .orient("left")
        .tickFormat(d3.format(".2s"));

    // x axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + (+chart.height + 5) + ")")
        .call(xAxis)
        .selectAll("text")  
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-15) translate(0,12)");
    // y axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text(config.yTitle);
    // grid layout for x axis
    svg.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + chart.height + ")")
        .call(chart.make_x_axis()
            .tickSize(-chart.height, 0, 0)
            .tickFormat("")
        )
    // grid layout for y axis
    svg.append("g")
        .attr("class", "grid")
        .call(chart.make_y_axis()
            .tickSize(-chart.width, 0, 0)
            .tickFormat("")
        )

    // add a group for each column (category)
    var column = svg.selectAll(".column")
        .data(chartData)
        .enter().append("g")
        .attr("class", "g")
        .attr("transform", function(d) { return "translate(" + chart.scale.x(d.name) + ",0)"; });
    // add a rect for each series in the column
    column.selectAll("rect")
        .data(function(d) { return d.series; })
        .enter().append("rect")
        .attr("width", chart.scale.x.rangeBand())
        .attr("y", function(d) { return chart.scale.y(d.y1); })
        .attr("height", function(d) { return chart.scale.y(d.y0) - chart.scale.y(d.y1); })
        //.on("click", chart.columnClick)
        .on("mousedown", chart.columnMouseDown)
        .on("mouseup",chart.columnMouseUp)
        .on("touchstart",chart.columnMouseDown)
        .on("touchend",chart.columnMouseUp)
        .style("fill", function(d) { return chart.scale.color(d.name); });
    // add a text label for each series in the column
    column.selectAll("text")
        .data(function(d) { return d.series; })
        .enter().append("text")
        .attr("x", function(d) { return chart.scale.x(d) + chart.scale.x.rangeBand(d)/2 + 4;})    // TODO remove magic numbers!
        .attr("y", function(d){ return chart.scale.y(d.y1) + 8;} )
        .attr("dx", -5)
        .attr("dy", ".36em")
        .attr("text-anchor", "end")
        .text(function(d) {
            var result = d.y1 - d.y0;
            if (result != 0) {
                return result;
            } else {
                return "";
            }
        });

    this.showLabels = function() { column.selectAll("text").style("display", "block"); }
    this.hideLabels = function() { column.selectAll("text").style("display", "none"); }

    if ( ! Util.showLabels) {
        this.hideLabels();
    }
    return this;
}