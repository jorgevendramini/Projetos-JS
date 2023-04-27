/*Você está desenvolvendo um sistema de avaliação de filmes.
Crie um array com os filmes disponíveis e outro array com as notas dadas pelos usuários a cada filme.
Crie uma função que permita ao usuário dar uma nota a um filme, informando o nome do filme e a nota. 
A função deve atualizar o array de notas do filme correspondente. 
Crie outra função que calcule a média das notas de um filme, informando o nome do filme.*/

//https://javascript.info/


const movies = [];

//adiciona o título dos filmes a array
const images = document.querySelectorAll('.imagemFilme');

for (let i = 0; i < images.length; i++) {
    const alt = images[i].alt;
    movies.push(alt);
}




function rateMovie() {
    for (let moviePosters = 0; moviePosters <= movies.length; moviePosters++) {
        const movieId = `movie${moviePosters.toString()}`;
        const stars = document.querySelectorAll(`#${movieId} .star`);

        //faz que as estrelas apareçam e sumam quando passa o mouse por cima e remove o mouse de cima
        stars.forEach((star, index) => {
            star.addEventListener('mouseover', () => {
                for (let i = 0; i <= index; i++) {
                    stars[i].classList.add('active');
                }
            });

            star.addEventListener('mouseout', () => {
                for (let i = 0; i <= index; i++) {
                    if (!stars[i].classList.contains('lock')) {
                        stars[i].classList.remove('active');
                    }
                }
            });
        });

        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                const isLocked = star.classList.contains('lock');
                for (let i = 0; i <= index; i++) {
                    if (isLocked) {
                        for (j = 0; j <= stars.length - 1; j++) {
                            stars[j].classList.remove('lock');
                            stars[j].classList.remove('active');
                        }
                    } else {
                        stars[i].classList.add('lock');
                    }
                }
            });
        });

        // const imageWrapper = document.getElementById(movieId).querySelector('.image-wrapper');
        // if (imageWrapper.querySelector('.lock')) {
        //     const imageFilme = imageWrapper.querySelector('.img');
        //     imageFilme.style.opacity = '0.9';
        // }

    }
}


rateMovie();