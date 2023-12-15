 document.addEventListener("DOMContentLoaded", function () {
        var gridItems = document.querySelectorAll(".square-bg");

        gridItems.forEach(function (item) {
            // Generate a random vibrant color with transparency
            var randomColor = "rgba(" +
                Math.floor(Math.random() * 200) + "," +
                Math.floor(Math.random() * 200) + "," +
                Math.floor(Math.random() * 200) + "," +
                0.7 + ")";

            // Apply the random color as the background
            item.style.backgroundColor = randomColor;
        });

        // Change title color to a more vibrant color
     
    });