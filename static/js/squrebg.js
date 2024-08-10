//装色
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


//填充首字母
        document.querySelectorAll('a').forEach(anchor => {
            const textContentDiv = anchor.querySelector('.text-content');
            const squareBgDiv = anchor.querySelector('.square-bg');
            
            if (textContentDiv && squareBgDiv) {
                const firstCharacter = textContentDiv.innerText.trim().charAt(0);
                squareBgDiv.innerText = firstCharacter;
            }
        });
