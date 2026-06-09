document.addEventListener('DOMContentLoaded', function() {
    
    // 1. ระบบ Animation เมื่อเลื่อนหน้าจอมาถึง (Scroll Reveal)
    const sections = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        threshold: 0.1 // เริ่มทำเมื่อเห็นองค์ประกอบ 10%
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // 2. ระบบปรับความสูง Navbar เมื่อเลื่อนหน้าจอลงมา
    const nav = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.style.padding = '5px 0';
            nav.style.boxShadow = '0 5px 15px rgba(0,0,0,0.15)';
        } else {
            nav.style.padding = '0';
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });

    // 3. เพิ่มลูกเล่นให้แถวในตารางเมื่อเอาเมาส์ไปวาง
    const tableRows = document.querySelectorAll('.team-table tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.transition = '0.2s';
        });
    });

});