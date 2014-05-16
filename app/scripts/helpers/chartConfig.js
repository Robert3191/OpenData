'use strict'

window.ChartConfig = {
    chart: null,
    chartType: "StackedBarChart",
    showLabels: false,
    showTitle: true,
    selector: '#d3Chart',
    color:["#72a5d1","#bee682","#d8db63","#c4c462","#b4ad95","#002b5f","#2c2c0E","#f0f017","#497b84", "#4bb2c5", "#c5b47f", "#EAA228", "#579575", "#839557", "#958c12", "#953579", "#4b5de4", "#d8b83f", "#ff5800", "#0085cc", /**/ "#b25", "#c5f", "#EA8", "#595", "#839557", "#981", "#535", "#b5d", "#db3", "#ff8", "#08c", /**/ "#bb2", "#c47", "#EA8", "#579", "#857", "#9c1", "#359", "#4b5", "#dbf", "#f58", "#0cc", /**/ "#4ad", "#c14", "#E2A", "#571", "#317", "#c1f", "#55f", "#f5e", "#d8f", "#ff5", "#008", /**/ "#4bb2c5", "#c5b47f", "#EAA228", "#579575", "#839557", "#958c12", "#953579", "#4b5de4", "#d8b83f", "#ff5800", "#0085cc","#5785ac"],

    margin: {
        top: 20,
        right: 20,
        bottom: 50,
        left: 50
    },

    getHeight: function(){
        return window.innerHeight -
            52 - // navbar
            (ChartConfig.showTitle ? 50 : 0) - // title
            30 - // subtitle
            (ChartConfig.chartType != "PieChart" ? 62 : 0) - // legend
            44 - // nav buttons
            20
    },

    getWidth: function(){
        return  window.innerWidth;
    }
}