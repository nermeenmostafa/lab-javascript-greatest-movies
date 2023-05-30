// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray
        .map((movie) => {
            return movie.director;

        })
    return directors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const bestMovies = moviesArray.filter((movie) => {
        return (movie.genre.includes("Drama") && movie.director === "Steven Spielberg");
    })
    return bestMovies.length
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const sumOfScores = moviesArray.reduce((a, b) => {
        return a + (b.score || 0);
    }, 0)
    return Math.round((sumOfScores / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovie = moviesArray.filter((Movie) => {
        return Movie.genre.includes('Drama')
    })
    return scoresAverage(dramaMovie)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesClone = JSON.parse(JSON.stringify(moviesArray));

    // sort
    return moviesClone.sort((a, b) => {
        if (a.year === b.year) {
            return -1
        } else {
            return a.year - b.year
        }
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesClone = JSON.parse(JSON.stringify(moviesArray));
    const sortedMovies = moviesClone.sort((a, b) => {
        if (a.title > b.title) {
            return 1

        } else {
            return -1
        }
    })
    const moviesTitles = sortedMovies.slice(0, 20).map((m) => { return m.title })
    return moviesTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesClone = JSON.parse(JSON.stringify(moviesArray));

    const movies = moviesClone.map(m => {
        const hrs = +m.duration.split("h")[0]
        const mins = +m.duration.split("h")[1].split("min")[0]
        const duration = (hrs * 60) + mins
        m.duration = duration
        return m
    })
    console.log(movies)
    return movies
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if(!moviesArray.length) return null
    const moviesClone = JSON.parse(JSON.stringify(moviesArray));
    
    const groupedMoviesByYear = groupBy(moviesClone, "year");
    const moviesYears = Object.keys(groupedMoviesByYear);
    let rate = 0;
    let bestYear = null;
    moviesYears.forEach(year => {
        const thisYearMovies = moviesClone.filter(m => m.year === +year)
        const yearAverage = scoresAverage(thisYearMovies)
        if(yearAverage > rate) {
            rate = yearAverage
            bestYear = year
        }
    })
    return `The best year was ${bestYear} with an average score of ${rate}`
}

let groupBy = function (arr, key) {
    return arr.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};



//let bestMovies = movies.filter((Movie) => {
   // return (Movie.genre.includes("Drama") && Movie.director === "Steven Spielberg")

//})
//return bestMovies.length;
