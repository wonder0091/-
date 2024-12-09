
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const rightContainer = document.getElementById('right-container');
    if (sectionId === 'anime') {
        rightContainer.scrollTop = 0; 
        return;
    }else{
        if (section) {
            const offsetTop = section.offsetTop - rightContainer.offsetTop; 
            rightContainer.scrollTo({
                top: offsetTop,
                behavior: 'smooth', 
            });
        }
    }

}

const menuItems = document.querySelectorAll('#menu li');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // 移除所有其他 li 的 selected 属性
    menuItems.forEach(otherItem => otherItem.removeAttribute('selected'));
    // 添加 selected 属性到当前点击的 li
    item.setAttribute('selected', '');
  });
});
