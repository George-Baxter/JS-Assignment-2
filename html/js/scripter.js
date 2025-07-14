class Smoothie {
    constructor(name, size, fruits, boosters, base) { //need to add pricing
        this.name = name;
        this.size = size; //small, medium, large
        this.fruits = fruits;
        this.boosters = boosters;
        this.base = base; //almond milk yogurt and greek yogurt
    }

    
    
    
    // Method to display the smoothie order details
    displayOrder() {
        return `
          <h2>${this.name}'s Smoothie Order</h2>
          <p><strong>Size:</strong> ${this.size}</p>
          <p><strong>Fruits:</strong> ${this.fruits.length > 0 ? this.fruits.join(', ') : 'None selected'}</p>
          <p><strong>Extras:</strong> ${this.boosters.length > 0 ? this.boosters.join(', ') : 'None'}</p>
          <p><strong>Liquid Base:</strong> ${this.base.length > 0 ? this.base.join(', ') : 'None selected'}</p>
        `;
    }
}

// This function is called when the form is submitted
function handleSmoothieSubmit(e) {
    e.preventDefault(); // Stop the page from refreshing so we dont lose form data
  
    // Get form values
    const name = document.getElementById('name').value;
    const size = document.getElementById('size').value;
  
    // Helper function to get all checked boxes for a given input name
    const getCheckedValues = (name) => {
      return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map(input => input.value);
    };
  
    // Get selected values from checkboxes
    const fruits = getCheckedValues('fruit');
    const boosters = getCheckedValues('booster');
    const base = getCheckedValues('base');
  
    // Create the Smoothie object
    const smoothie = new Smoothie(name, size, fruits, boosters, base);
  
    // Display the smoothie description on the page
    document.getElementById('orderOutput').innerHTML = smoothie.displayOrder();
}

// Add event listener to the form
document.getElementById('smoothieorder').addEventListener('submit', handleSmoothieSubmit);