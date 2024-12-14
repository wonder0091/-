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


// 获取搜索框元素
const searchInput = document.getElementById('search-input');

// 动态创建样式
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
  }
  .searchTooltip::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 10px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent white transparent;
  }
`;
document.head.appendChild(styleSheet);

// 提示框逻辑
function onMouseOverHandler() {
  const tooltipShownTimestamp = localStorage.getItem('searchTooltipShownTimestamp');
  const today = Math.floor(new Date().getTime() / (1000 * 60 * 60 * 24));
  if (!tooltipShownTimestamp || today - parseInt(tooltipShownTimestamp, 10) >= 7) {
    const tooltip = document.createElement('div');
    tooltip.textContent = '部分搜索需要梯子或登录帐号使用';
    tooltip.classList.add('searchTooltip');
    const inputRect = searchInput.getBoundingClientRect();
    tooltip.style.top = inputRect.bottom + 5 + 'px';
    tooltip.style.left = inputRect.left + 'px';
    document.body.appendChild(tooltip);
    // 移除提示框
    setTimeout(() => {
      document.body.removeChild(tooltip);
    }, 3000);
    // 记录提示框显示的时间戳
    localStorage.setItem('searchTooltipShownTimestamp', today.toString());
  }
}


// 添加事件监听
searchInput.addEventListener('mouseover', onMouseOverHandler);


