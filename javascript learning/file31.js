// destructuring in object

const band = {
    nameband: "let zepplin",
    famoussong : "stairway to heaven",
    year : 1872,
    anothersong : "kashmir",

};

// const nameband = band.name;
// const famoussong = band.famoussong;
// console.log( nameband,famoussong);



const {nameband,famoussong, ...restsongs} = band;
console.log(nameband);
console.log(restsongs);


// year and somg name will store in rest songs 