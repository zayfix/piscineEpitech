module.exports = {
    countGs: function(str) {
        var numberCount = 0;
        for(let position = 0; position < str.length; position++)
        {
            if(str[position] == 'G')
                numberCount++;
        }
        return numberCount;
    }
}