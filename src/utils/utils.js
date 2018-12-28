export function shuffle(myArray) {
    let j, x, i;
    for (i = myArray.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = myArray[i - 1];
        myArray[i - 1] = myArray[j];
        myArray[j] = x;
    }
}
