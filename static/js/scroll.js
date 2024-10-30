function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (sectionId === 'anime') {
        const rightContainer = document.getElementById('right-container');
        rightContainer.scrollTop = 0; // 将right-container滚动到顶部
        return;
    } else {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

