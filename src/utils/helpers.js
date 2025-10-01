export const random = (s , l) => {
    return ( Math.random() * (l - s) + 1 ) + s;
};