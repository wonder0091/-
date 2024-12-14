const allLinks = document.querySelectorAll('a.grid-item');
document.addEventListener('DOMContentLoaded', function() {
    const openSearchModal = document.getElementById('openSearchModal');
    const searchInput = document.getElementById('searchInput');
    const searchModal = document.getElementById('searchModal');
    const closeBtn = searchModal.querySelector('.close');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');


    // 打开模态框
    openSearchModal.onclick = function() {
        openSearchModal.style.display = "none";
        searchModal.style.display = "block";
    };

    // 关闭模态框
    closeBtn.onclick = function() {
        openSearchModal.style.display = "block";
        searchModal.style.display = "none";
        searchInput.value = '';
        searchResults.innerHTML = ''; // 清空之前的搜索结果
    };

    // 点击模态框外部关闭
    window.onclick = function(event) {
        if (event.target == searchModal) {
            openSearchModal.style.display = "block";
            searchModal.style.display = "none";
        }
    };

    // 搜索功能
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        searchResults.innerHTML = ''; // 清空之前的搜索结果

        if (searchTerm === '') {
            searchResults.innerHTML = '<p>请输入搜索关键词。</p>';
            return;
        }

        let hasResults = false;

        allLinks.forEach(link => {
            const title = link.getAttribute('title') ? link.getAttribute('title').toLowerCase() : '';
            const text = link.querySelector('.text-content') ? link.querySelector('.text-content').textContent.toLowerCase() : '';

            // 匹配关键词
            if (title.includes(searchTerm) || text.includes(searchTerm)) {
                const clonedLink = link.cloneNode(true);
                clonedLink.classList.add('grid-item'); // 确保添加了grid-item类
                searchResults.appendChild(clonedLink);
                hasResults = true;

            }
        });

        if (!hasResults) {
            searchResults.innerHTML = '<p>没有找到匹配的结果。</p>';
        }
    }

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
});



//工具栏返回顶部
const rightContainer = document.getElementById('right-container');
scrollTopButton.addEventListener('click', () => {
  rightContainer.scrollTop = 0;
});

// 切换日夜模式
const darkModeButton = document.getElementById('darkModeButton');
const header = document.getElementById('header');
const leftContainer = document.getElementById('left-container');
const searcontainer = document.querySelector('.search-container');
const modalcontent = document.querySelector('.modal-content');
const sections = document.querySelectorAll('section'); 
const filterbtn = document.querySelectorAll('.filter-btn'); 
const textcontent = document.querySelectorAll('.text-content');
let isDarkMode = false;

darkModeButton.addEventListener('click', () => {
    isDarkMode = !isDarkMode;

    // 切换夜间模式 CSS 类
    document.body.classList.toggle('dark-mode', isDarkMode);
    header.classList.toggle('dark-mode', isDarkMode);
    leftContainer.classList.toggle('dark-mode', isDarkMode);
    rightContainer.classList.toggle('dark-mode', isDarkMode);
    modalcontent.classList.toggle('dark-mode', isDarkMode);

    // 遍历 sections 添加/移除夜间模式
    sections.forEach(section => section.classList.toggle('dark-mode', isDarkMode));
    filterbtn.forEach(btn => btn.classList.toggle('dark-mode', isDarkMode));

    // 遍历 text-content 添加/移除夜间模式
    textcontent.forEach(txt => txt.classList.toggle('dark-mode', isDarkMode));

    // 遍历链接设置夜间模式
    allLinks.forEach(link => link.classList.toggle('dark-mode', isDarkMode));
});
