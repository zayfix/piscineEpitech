module.exports = {
    range: function (start, end, step) {

        if(!step)
        {
            step = 1;
        }

        var numbers = [];

        if(step >0)
        {
            for(var i = start; i <= end; i+=step)
            {
                numbers.push(i);
            }
        }
        else
        {
            for(var j = start; j >= end; j+=step)
            {
                numbers.push(j);
            }
        }
        return numbers;
    }
}