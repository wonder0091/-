 function performSearch() {
        var searchEngineSelect = document.getElementById("search-engine");
        var selectedEngine = searchEngineSelect.options[searchEngineSelect.selectedIndex].value;
        var searchInputValue = document.getElementById("search-input").value;

        var searchUrl = selectedEngine.replace('%s', encodeURIComponent(searchInputValue));

        window.open(searchUrl, '_blank');
    }

    // Add event listener for form submission
    document.getElementById("search-form").addEventListener("submit", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Perform the search when the form is submitted
        performSearch();
    });



 function performSearch(event) {
        var searchEngineSelect = document.getElementById("search-engine");
        var selectedEngine = searchEngineSelect.options[searchEngineSelect.selectedIndex].value;
        var searchInputValue = document.getElementById("search-input").value;

        var searchUrl = selectedEngine.replace('%s', encodeURIComponent(searchInputValue));

        window.open(searchUrl, '_blank');
    }

    // Add event listener for form submission
    document.getElementById("search-form").addEventListener("submit", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Perform the search when the form is submitted
        performSearch();
    });