export const menu = () => {
    const menuBtn = document.getElementById('sidebar');
    menuBtn.addEventListener('click', openMenu);
    
    function openMenu() {
        menuBtn.classList.toggle('active');
    };
    console.log('hete')
};
