function getCompChoice(max) {
    return Math.floor(Math.random() * max);
}
if (getCompChoice(3) === 1) {
    console.log("Rock");
}
else if (getCompChoice(3) === 2) {
    console.log("Scissors");
}
else {console.log("Paper");
}