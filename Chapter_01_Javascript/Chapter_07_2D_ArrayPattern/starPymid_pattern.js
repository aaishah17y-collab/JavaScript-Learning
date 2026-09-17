let rows = 5;

for (let i = rows; i >= 1; i--) {

    let pattern = "";

    // Add spaces
    for (let j = i; j < rows; j++) {
        pattern += " ";
    }

    // Add stars
    for (let k = 1; k <= i; k++) {
        pattern += "* ";
    }

    // Print the complete row
    console.log(pattern);
}
