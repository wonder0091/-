document.addEventListener('DOMContentLoaded', function() {
    // 获取所有的 section
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const filterButtons = section.querySelectorAll('.filter-btn');
        const gridItems = section.querySelectorAll('.grid-item');
        function filterItems(category) {
            gridItems.forEach(item => {
                const categories = item.getAttribute('data-category');
                if (category === 'all') {
                    item.style.display = '';
                } else if (categories) {
                    const categoryList = categories.split(',');
                    if (categoryList.includes(category)) {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                } else {
                    item.style.display = 'none'; 
                }
            });
        }
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                filterItems(category);
            });
        });
        // 确保每个 section 在加载时显示所有内容
        filterItems('all');
    });
});
