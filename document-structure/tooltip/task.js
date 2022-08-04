let toolips = Array.from(document.querySelectorAll("a.has-tooltip"));
const divNew = document.createElement("div");


toolips.forEach((item) => {
    item.addEventListener("click", (event) => {
    event.preventDefault();
    let coordinates = item.getBoundingClientRect();
    divNew.textContent = item.getAttribute("title");
    divNew.classList.add("tooltip");
    divNew.setAttribute(
            `style`,
            `left: ${coordinates.left + 5}px; top: ${coordinates.top + 11}px`
    );
            item.insertAdjacentElement("afterend", divNew);
            divNew.classList.toggle("tooltip_active");
    });
});
