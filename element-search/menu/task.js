const links = document.querySelectorAll(".menu__link");

console.log(links);
console.log(...links);

[...links].forEach((link) => {
    link.onclick = () => {
      // Проверка на наличие в списке вложенных меню
      const menuSub = link.closest(".menu__item").querySelector(".menu_sub");
  
      if (menuSub) {
        // Проверяем открыто ли вложенное меню
        if (!menuSub.classList.contains("menu_active")) {
          // Закрываем другие вложенные меню у главного родителя
          const activeMenu = link
            .closest(".menu_main")
            .querySelectorAll(".menu_active");
          if (activeMenu.length > 0) {
           [...activeMenu].forEach((link) =>
             link.classList.remove("menu_active")
           );
         }
  
          menuSub.classList.add("menu_active");
        } else {
          menuSub.classList.remove("menu_active");
        }
  
        return false;
      }
    };
  });
  