
for (let x = 15; x >= 0 ; x--) {
    if(x > 0 && (x % 5 === 0|| x % 3 === 0)){
        continue
    }
    console.log(x);
}

