window.Pie = function(config){

    var chartData;
    var config      = config;
    var svg;
    var margin = {top: 20, right: 20, bottom: 30, left: 40};

    var chart = {
        init: function() {
            this.width  = 800 - margin.left - margin.right; /*- ChartConfig.margin.left - ChartConfig.margin.right*/
            this.height = 400 - margin.top - margin.bottom;
            this.radius = Math.min(this.width, this.height) / 2.2;

            this.scale= {
                color: d3.scale.ordinal().range(ChartConfig.color)
            }

        },
        getPercentage: function(value){
            var total = 0;
            for(var i = 0; i < Object(chartData).length; i ++) {
                total = total + +chartData[i][1];
            }
            return  parseFloat(value*100/total).toFixed(1);
        }
    }

    var addData = function(){
        var color = d3.scale.ordinal().range(ChartConfig.color);

        var arc = d3.svg.arc()
            .outerRadius(chart.radius - 10)
            .innerRadius(0);

        var pie = d3.layout.pie()
            .sort(null)
            .value(function(d) {
                var value = d[1];
                return value;
            });


        var g = svg.selectAll(".arc")
            .data(pie(chartData))
            .enter().append("g")
            .attr("class", "arc");

        g.append("path")
            .attr("d", arc)
            .style("fill", function(d,i) {
                return color(i);
            });

        g.append("text")
            .attr("transform", function(d) {  var c = arc.centroid(d),
                x = c[0],
                y = c[1],

                h = Math.sqrt(x*x + y*y);
                return "translate(" + (x/h * chart.radius) +  ',' +
                    (y/h * chart.radius) +  ")";
            })
            .attr("dy", ".35em")
            .style("text-anchor",function(d) {
                // are we past the center?
                return (d.endAngle + d.startAngle)/2 > Math.PI ?
                    "end" : "start";
            })
            .text(function(d) { return chart.getPercentage(d.data[1])+"%"; });

        $('.pieLegend').css({'max-height': chart.height + 'px'});

        ChartConfig.chart = this;
    }

    this.reAddData = function(data){
        chartData = data;
        svg.selectAll(".arc").remove();

        addData();
    }

    this.draw = function(data){
        chartData = data;
        $("#"+config.selector).empty();

        chart.init();


        // the svg that contains the chart
        svg = d3.select("#"+config.selector).append("svg")
            .attr("width", chart.width + ChartConfig.margin.left + ChartConfig.margin.right)
            .attr("height", chart.height)
            .append("g")
            .attr("transform", "translate(" + chart.width/2.1 + "," + chart.height/2 + ")");

        addData();


    }

    var that = this;

    window.addEventListener("orientationchange", function() {
        that.draw();
    }, false);

}