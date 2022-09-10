document.addEventListener('DOMContentLoaded', () => {
    const toggleMenuElement = document.getElementById('toggleMenu');

    toggleMenuElement.addEventListener('click', () => {
        const menuElement = document.getElementById('menu');
        if (menuElement.classList.contains("hidden")) {
            menuElement.classList.remove("hidden");
        } else {
            menuElement.classList.add("hidden");
        }
    })

    const menuCloseElement = document.getElementById('menuClose');

    menuCloseElement.addEventListener('click', () => {
        const menuElement = document.getElementById('menu');

        menuElement.classList.add("hidden");
    })

})

 