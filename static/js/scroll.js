
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

