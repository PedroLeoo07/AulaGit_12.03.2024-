let t = 20;

let l = 10;

let c = 0;

if (t < 0 || 1 < 0) {
    console.log("Nao e possivel realizar essa conta");

} else if (l % 1 != 0 || t % 1 !=0) {
    console.log("Não é possivel realizar essa conta");
2
} else {
    while (c < l + 1) {
        let produto = t * c;
        console.log(t, "x", c, "=", produto);
        c++;
    }
}

 








