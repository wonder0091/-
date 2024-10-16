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


// 获取 favicon 的 URL (使用本地路径)
function getFaviconURL(url) {
  const domain = extractDomain(url);
  const filename = domain.replace(/\./g, '_') + '.ico'; // 将 . 替换为 _，并添加 .ico 后缀
  return `static/item_icons/${filename}`;
}

// 从 URL 中提取域名
function extractDomain(url) {
  let domain;
  // 移除协议
  if (url.indexOf("://") > -1) {
    domain = url.split('/')[2];
  } else {
    domain = url.split('/')[0];
  }
  // 移除端口号（如果存在）
  domain = domain.split(':')[0];
  return domain;
}

// 在 DOMContentLoaded 事件中填充图标
document.addEventListener("DOMContentLoaded", function () {
  // 创建 Intersection Observer (用于延迟加载图标)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const iconElement = entry.target;
        const gridItem = iconElement.closest('.grid-item');
        if (gridItem) {
          const href = gridItem.getAttribute('href');
          if (href) {
            const img = iconElement.querySelector('img');
            const textElement = gridItem.querySelector('.text-content'); 

            if (img && textElement) {
              // 提取首字母并设置为 alt 属性
              const text = textElement.textContent.trim();
              if (text.length > 0) {
                img.alt = text[0]; 
              }

              // 检查是否有缓存的 favicon
              const cachedSrc = localStorage.getItem(href);
              if (cachedSrc) {
                img.src = cachedSrc;  // 使用缓存的图标路径
              } else {
                const faviconURL = getFaviconURL(href);
                img.src = faviconURL;
                localStorage.setItem(href, faviconURL);  // 缓存图标路径
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
