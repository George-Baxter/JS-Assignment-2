class Smoothie {
    constructor(name, size, boosters, base,) { //need to add pricing
        this.name = name;
        this.size = size; //small, medium, large
        this.boosters = boosters;
        this.base = base; //almond milk yogurt and greek yogurt
        this.fruits = fruits;
    }

}

// Function to handle smoothie form submission
function smoothieOrderSubmit(e) {
    e.preventDefault(); // Stopping page from refreshing on submission otherwise smoothie data is lost
    const name = document.getElementById("name").value;
    const size = document.getElementById("size").value;
}