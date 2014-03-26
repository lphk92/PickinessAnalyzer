var submit = document.getElementById("submit");
submit.onclick = processData;

function processData()
{

    // Initialze the historgram bins to 0
    var bins = [];
    for (var i = 0 ; i < maxValue ; i++)
        bins.push(0);

    var names = []
    var values = [];
    var sum = 0;
    var inputs = document.getElementsByTagName("input");
    for (var i = 0 ; i < inputs.length ; i++)
    {
        var element = inputs[i];
        if (element.type == "range")
        {
            names.push(element.name.replace('_', ' '));
            values.push(element.value);
            sum += parseInt(element.value);
            bins[element.value - 1]++;
        }
    }

    var nums = [];
    for (var i = 0 ; i < maxValue ; i++)
        nums[i] = i+1;
    var context = document.getElementById("chart").getContext("2d");

    var data = {
        labels : nums,
        datasets : [
            {
                fillColor : "black",
                strokeColor : "black",
                pointColor : "black",
                pointStrokeColor : "#fff",
                data : bins
            } ]
    };

    var chart = new Chart(context).Bar(data);
    var average = sum/values.length;
    document.getElementById("resultText").innerHTML += 
        "Your average pickiness score is " + average;
}
