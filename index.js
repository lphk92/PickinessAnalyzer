var submit = document.getElementById("submit");
submit.onclick = processData;

function processData()
{
    var ranges = [];
    
    var inputs = document.getElementsByTagName("input");
    alert("Process");
    for (var i = 0 ; i < inputs.length ; i++)
    {
        var element = inputs[i];
        if (element.type == "range")
            ranges.push(element);
    }
}
