/*Você está desenvolvendo um sistema de avaliação de filmes.
Crie um array com os filmes disponíveis e outro array com as notas dadas pelos usuários a cada filme.
Crie uma função que permita ao usuário dar uma nota a um filme, informando o nome do filme e a nota. 
A função deve atualizar o array de notas do filme correspondente. 
Crie outra função que calcule a média das notas de um filme, informando o nome do filme.*/

//https://javascript.info/


const movies = [];
let ratings = new Array(movies.length).fill(0);
const mediaOfEachMovie = new Array(movies.length).fill(0);


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

        //click event
        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                //add lock e trava estrelas na tela
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

                //trava imagem das estrelas na tela
                stars.forEach(star => {
                    if (star.classList.contains('lock')) {
                        const imageRating = star.closest('.rating');
                        imageRating.style.opacity = '1';
                        imageRating.style.background = 'linear-gradient(to right, rgba(134, 33, 63, 0.8) 0%, rgba(120, 53, 33, 0.8) 50%, rgba(134, 37, 33, 0.8) 100%)';
                    }
                });

                const dataRating = star.dataset.rating;
                ratings[moviePosters - 1] = parseInt(dataRating);
                const rating = star.closest('.rating');
                const rateChosen = rating.parentNode.querySelector('.rateChosen');
                rateChosen.textContent = movies[moviePosters - 1] + "\n" + "      " + dataRating + ' ★';

                mediaDosFilmes();

            });
        });
    }

}


function atualizarMediaDosFilmes(filmeIndex) {
    const ratingsForMovie = ratings.slice(filmeIndex * 5, filmeIndex * 5 + 5);
    const ratingsSum = ratingsForMovie.reduce((sum, rating) => sum + rating, 0);
    const averageRating = ratingsSum / ratingsForMovie.length || 0;
    mediaOfEachMovie[filmeIndex].rating = averageRating.toFixed(1);
}

function mediaDosFilmes() {

    const nome = document.getElementById('nome').value.trim();
    const rating = ratings[ratings.length - 1];
    const text = document.getElementById('mensagem').value.trim();

    if (rating !== undefined) {
        const newMovie = {
            nome: nome,
            rating: rating.toFixed(1),
            text: text
        };


        mediaOfEachMovie.push(newMovie);
        const filmeIndex = mediaOfEachMovie.length - 1;
        atualizarMediaDosFilmes(filmeIndex);
    }


    const mediaDoFilmes = document.querySelectorAll('.mediaDoFilme');

    mediaOfEachMovie.forEach((movie, index) => {
        if (movie.nome === nome) {
            atualizarMediaDosFilmes(index);
            mediaDoFilmes[index].innerHTML = mediaOfEachMovie[index].rating + ' ★';
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    rateMovie();
});

console.log(movies);