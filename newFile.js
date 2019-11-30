let num = 5;
// if (num < 49) {
//     console.log("Неверно!");
// } else if (num > 100){
//     console.log("Многовато");
// } else {
//     console.log("ТАК");
// }

// while (num < 55) {
//     console.log(num);
//     num++;
// }
do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i <= 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
};