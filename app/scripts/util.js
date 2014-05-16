'use strict'

window.Util = {
    chartType:"StackedBar",
    dataURL:"",
    parseData: function(data){
     var parsedData = [];
        var keys = Object.keys(data.data[0]);
        keys.sort();
        parsedData.push(keys);
        parsedData.push(data.data);

        return parsedData;
    }
}
