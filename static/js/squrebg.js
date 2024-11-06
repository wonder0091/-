//装色
document.addEventListener("DOMContentLoaded", function () {
    var gridItems = document.querySelectorAll(".square-bg");

    gridItems.forEach(function (item) {
        var randomColor = "rgba(" +
            Math.floor(Math.random() * 200) + "," +
            Math.floor(Math.random() * 200) + "," +
            Math.floor(Math.random() * 200) + "," +
            0.7 + ")";

        item.style.backgroundColor = randomColor;
    });   
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


// 在 DOMContentLoaded 事件中处理缓存
document.addEventListener("DOMContentLoaded", function () {
  // 创建 Intersection Observer (用于延迟加载图标)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const iconElement = entry.target;
        const gridItem = iconElement.closest('.grid-item');
        if (gridItem) {
          const img = iconElement.querySelector('img');  // 获取图标的 img 元素
          if (img) {
            const href = gridItem.getAttribute('href');
            if (href) {
              // 检查是否有缓存的图标 URL
              const cachedSrc = localStorage.getItem(href);
              if (cachedSrc) {
                img.src = cachedSrc;  // 使用缓存的图标
              } else {
                // 如果没有缓存，缓存当前图标的 src
                const iconSrc = img.src;
                localStorage.setItem(href, iconSrc);  // 缓存图标的 src 属性
              }
            }
          }
        }
        observer.unobserve(iconElement);  // 停止观察该元素
      }
    });
  }, { rootMargin: "0px 0px 50px 0px" });

  // 获取所有 .icons 类的元素并开始观察
  const iconElements = document.querySelectorAll(".icons");
  iconElements.forEach(iconElement => observer.observe(iconElement));
});

