'use strict'

window.Util = {
    parseData: function(data){
     var parsedData = [];
        var keys = Object.keys(data.data[0]);
        keys.sort();
        parsedData.push(keys);
        parsedData.push(data.data);

        return parsedData;
    },

    setConfig: function(conf){
        localStorage.setItem('config', JSON.stringify(conf));
    },

    getConfig: function(){
        return JSON.parse(localStorage.getItem('config'));
    }
}
