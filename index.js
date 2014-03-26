var maxValue = 5;
var foods = [
    "Key Lime Pie",
    "Tater Tots",
    "Sourdough",
    "Cobb Salad",
    "Pot Roast",
    "Twinkies",
    "Jerky",
    "Fajitas",
    "Ice Cream",
    "Cornbread",
    "Trail Mix",
    "Jambalaya",
    "Biscuits 'n Gravy",
    "Ham",
    "Steak",
    "Salmon",
    "Sushi",
    "Meatloaf",
    "Grits",
    "Macaroni and Cheese",
    "Crabcakes",
    "Potato Chips",
    "Beef Stew",
    "Fortune Cookies",
    "Peanut Butter Sandwich",
    "Bakes Beans",
    "Popcorn",
    "Fried Chicken",
    "Waffles",
    "Clam Chowder",
    "S'mores",
    "Lobster",
    "Buffalo Wings",
    "Ribs",
    "BLT Sandwich",
    "Apple Pie",
    "Pecan Pie",
    "Po' Boy",
    "Chili",
    "Chocolate Chip Cookies",
    "Blueberry Cobbler",
    "Hamburger",
    "Deepdish Pizza",
    "Nachos",
    "Philly Cheese Steak",
    "Hot Dogs",
    "Reuben",
    "Turkey",
    "Cranberry Sauce",
    "Mashed Potatoes"
];

var test = document.getElementById("test");
for (var i = 0 ; i < foods.length ; i++)
{
    var curr = foods[i];
    var noSpace = curr.replace(' ', '_');
    test.innerHTML += "<div class=\"food\"><label for=\"" +
                        noSpace + "\">" + curr + "</label>" +
                        "<span>Dislike</span><input name=\"" + noSpace +
                        "\" type=\"range\" min=\"1\" max=\"" + maxValue + "\">" +
                        "<span>Like</span></div>";
}

test.innerHTML += "<input type=\"submit\" id=\"submit\">";
