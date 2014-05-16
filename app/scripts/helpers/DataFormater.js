window.DataFormatter = function(data, options, success){
    var foundFlag;

    var dataMatrix =[];
    for(var index = 0; index < data.length; index ++){
        foundFlag = false;
        for(var index2 = 0; index2 < dataMatrix.length; index2 ++){
            if(dataMatrix[index2][0] == data[index][options.xAx]){
                foundFlag = true;
                dataMatrix[index2][1] = dataMatrix[index2][1] + data[index][options.yAx];
            }
        }

        if(!foundFlag){
            var buff = [];
            buff[0] =   data[index][options.xAx];
            buff[1] =   data[index][options.yAx];

            dataMatrix.push(buff);
        }
    }
    console.log(dataMatrix);
    success(dataMatrix);
}