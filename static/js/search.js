document.addEventListener("DOMContentLoaded", function() {
    function performSearch(event) {

        if (event) {
            event.preventDefault();
        }

        var searchEngineSelect = document.getElementById("search-engine");
        var selectedEngine = searchEngineSelect.options[searchEngineSelect.selectedIndex].value;
        var searchInputValue = document.getElementById("search-input").value;

        var searchUrl = selectedEngine.replace('%s', encodeURIComponent(searchInputValue));

        window.open(searchUrl, '_blank');
    }

    document.querySelector('button').addEventListener("click", performSearch);

    document.getElementById("search-form").addEventListener("submit", performSearch);
});
