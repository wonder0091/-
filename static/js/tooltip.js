// 获取所有有 title 属性的 .grid-item 元素
var gridItems = document.querySelectorAll('.grid-item[title]');

// 处理移动端与桌面端的事件绑定
function handleEventsBasedOnWidth() {
    var isMobile = window.innerWidth <= 768;

    gridItems.forEach(function(item) {
        var btn = item.querySelector('.tooltip-btn');
        if (!btn) {
            btn = document.createElement('img');
            btn.className = 'tooltip-btn';
            btn.src = 'static/gray-down.png'; // 替换为实际图标路径
            item.appendChild(btn);
        }

        // 移除现有的事件监听器
        item.removeEventListener('mouseenter', handleMouseEnter);
        item.removeEventListener('mouseleave', handleMouseLeave);
        btn.removeEventListener('click', handleButtonClick);

        if (isMobile) {
            // 移动端：只使用按钮点击事件
            btn.addEventListener('click', handleButtonClick);
        } else {
            // 桌面端：添加鼠标事件和按钮点击事件
            item.addEventListener('mouseenter', handleMouseEnter);
            item.addEventListener('mouseleave', handleMouseLeave);
            btn.addEventListener('click', handleButtonClick);
        }
    });
}

// 鼠标移入事件处理
function handleMouseEnter(e) {
    var tooltip = this.querySelector('.tooltip');

    if (tooltip && tooltip.dataset.fromButton === 'true') {
        return;
    }

    var titleText = this.getAttribute('title');
    if (!titleText) return;

    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = titleText;
        this.appendChild(tooltip);
    }

    tooltip.style.display = 'block';
}

// 鼠标移出事件处理
function handleMouseLeave() {
    var tooltip = this.querySelector('.tooltip');
    if (tooltip && tooltip.dataset.fromButton !== 'true') {
        tooltip.style.display = 'none';
    }
}

// 按钮点击事件处理
function handleButtonClick(e) {
    e.preventDefault();
    e.stopPropagation();

    var item = e.currentTarget.closest('.grid-item');
    var titleText = item.getAttribute('title');
    if (!titleText) return;

    var tooltip = item.querySelector('.tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = titleText;
        item.appendChild(tooltip);
    }

    var isTooltipVisible = tooltip.style.display === 'block';
    tooltip.style.display = isTooltipVisible ? 'none' : 'block';
    tooltip.dataset.fromButton = isTooltipVisible ? 'false' : 'true';

    document.querySelectorAll('.tooltip').forEach(function(t) {
        if (t !== tooltip) {
            t.style.display = 'none';
            t.dataset.fromButton = 'false';
        }
    });
}

// 点击页面其他地方时隐藏所有 tooltips
document.addEventListener('click', function(event) {
    if (!event.target.closest('.tooltip-btn') && !event.target.closest('.tooltip')) {
        document.querySelectorAll('.tooltip').forEach(function(tooltip) {
            tooltip.style.display = 'none';
            tooltip.dataset.fromButton = 'false';
        });
    }
});

// 在页面加载时执行一次事件处理
handleEventsBasedOnWidth();

// 监听窗口大小变化
window.addEventListener('resize', handleEventsBasedOnWidth);

