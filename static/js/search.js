//搜索跳转
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


//搜索框提示
  // 获取搜索框元素
  const searchInput = document.getElementById('search-input');
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      #search-input {
        padding: 5px;
      }
     .searchTooltip {
        position: absolute;
        background-color: white;
        padding: 7px;
        font-size: 13px;
        border: 1px solid rgba(128, 128, 128, 0.2);
        border-radius: 5px;
        z-index: 9999;
        &::before {
          content: "";
          position: absolute;
          top: -10px;
          left: 10px;
          border-width: 5px;
          border-style: solid;
          border-color: transparent transparent white transparent;
        }
      }
    `;
    document.head.appendChild(styleSheet);

    function onMouseOverHandler() {
      const tooltip = document.createElement('div');
      tooltip.textContent = '部分搜索需要梯子或登录帐号才能正常使用';
      tooltip.classList.add('searchTooltip');
      const inputRect = searchInput.getBoundingClientRect();
      tooltip.style.top = inputRect.bottom + 5 + 'px';
      tooltip.style.left = inputRect.left + 'px';
      document.body.appendChild(tooltip);
      setTimeout(() => {
        document.body.removeChild(tooltip);
      }, 3000);
    }

    searchInput.addEventListener('mouseover', onMouseOverHandler);


