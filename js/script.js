/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';


    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const ads = document.querySelectorAll(".promo__adv img");
    const poster = document.querySelector(".promo__bg");
    const drama = poster.querySelector(".promo__genre");
    const filmList = document.querySelector(".promo__interactive-list");
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    deleteAdv(ads);
   
    
    drama.innerText = "Драма";
    poster.style.backgroundImage ='url("img/bg.jpg")';
    
    const sortArr = (arr) => {
        arr.sort();
    };

    

    function createMovieList(films, parent){
        parent.innerHTML = "";
        sortArr(films);
        
        films.forEach((film, i) =>{
            parent.innerHTML += 
            `<li class="promo__interactive-item">${i+1} ${film}
            <div class="delete"></div>
            </li>`;
        });
        document.querySelectorAll(".delete").forEach((bin, i) => {
            bin.addEventListener("click", () =>{
            bin.parentElement.remove();
            movieDB.movies.splice(i, 1);

            createMovieList(movieDB.movies, filmList);//рекурсия для адекватной нумерации
            });
        });
    }
 createMovieList(movieDB.movies, filmList);

//second studio
/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

const favFilm = document.querySelector(".adding__input");
const addForm = document.querySelector("form.add");
const checkbox = document.querySelector('[type="checkbox"]');



addForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    if(favFilm.value){
        if (favFilm.value.length > 21){
            favFilm.value = `${favFilm.value.slice(0, 21)} ... `
        }
        if (checkbox.checked == true){
            console.log("Добавляем любимый фильм");
        }
    movieDB.movies.push(favFilm.value);
    sortArr(movieDB.movies);

    createMovieList(movieDB.movies, filmList);
    e.target.reset();
}
});



