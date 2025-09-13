import init from "./ymap";

// Дождёмся загрузки API и готовности DOM.
const tt = document.querySelector(".btn-yamap")
tt.addEventListener("click", () => {
    console.log('click');
var myMap;
    ymaps.ready(init);
})
