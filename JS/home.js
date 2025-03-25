document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.highlight-target');
    
    // 替换上面的checkPosition函数
    function checkPosition() {
        const viewportCenter = window.innerHeight / 2;
        
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            const itemCenter = rect.top + rect.height / 2;
            const distance = Math.abs(viewportCenter - itemCenter);
            
            // 距离越近，透明度越高（更突出）
            const opacity = 1 - Math.min(distance / viewportCenter, 0.8);
            item.style.setProperty('--highlight-opacity', opacity);
            
            // 完全在视口中央时添加类
            if (distance < 100) {
                item.classList.add('highlighted');
            } else {
                item.classList.remove('highlighted');
            }
        });
    }
    
    // 初始检查 + 滚动时检查
    checkPosition();
    window.addEventListener('scroll', checkPosition);
});