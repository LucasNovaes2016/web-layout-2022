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
 
    const menuOptions = document.getElementsByClassName('menu-items__option');
 
    for (const menuOption of menuOptions) {
       const menuOptionIcon = menuOption.querySelector('i');
       const menuOptionList = menuOption.nextElementSibling;
 
       menuOption.addEventListener('click', () => {
          if (menuOption.classList.contains('menu-items__option--active')) {
             menuOption.classList.remove('menu-items__option--active')
             menuOptionIcon.classList.remove('fa-minus');
             menuOptionIcon.classList.add('fa-plus');
             menuOptionList.classList.add('hidden')
          } else {
             menuOption.classList.add('menu-items__option--active')
             menuOptionIcon.classList.remove('fa-plus');
             menuOptionIcon.classList.add('fa-minus');
             menuOptionList.classList.remove('hidden')
          }
       })
    }
 
 })