if (!window.allData) window.allData = {};

allData.animals = {
    // =====================
    // BARN ANIMALS
    // =====================
    "Cow": {
        building: "Barn",
        cost: "1500g",
        product: ["Milk"],
        largeProduct: ["Large Milk"],
        notes: "Produces milk daily; higher friendship increases chance for Large Milk"
    },

    "Goat": {
        building: "Big Barn",
        cost: "4000g",
        product: ["Goat Milk"],
        largeProduct: ["Large Goat Milk"],
        notes: "Produces milk every 2 days; higher friendship increases quality"
    },

    "Sheep": {
        building: "Deluxe Barn",
        cost: "8000g",
        product: ["Wool"],
        notes: "Produces wool every 3 days; can be sheared more often with high friendship"
    },

    "Pig": {
        building: "Deluxe Barn",
        cost: "16000g",
        product: ["Truffle"],
        notes: "Finds truffles outside on non-rainy days (Spring, Summer, Fall)"
    },

    // =====================
    // COOP ANIMALS
    // =====================
    "Chicken": {
        building: "Coop",
        cost: "800g",
        product: ["Egg"],
        largeProduct: ["Large Egg"],
        notes: "Produces eggs daily; comes in white or brown variants"
    },

    "Duck": {
        building: "Big Coop",
        cost: "1200g",
        product: ["Duck Egg"],
        notes: "Produces eggs every 2 days; may also produce Duck Feather"
    },

    "Rabbit": {
        building: "Deluxe Coop",
        cost: "8000g",
        product: ["Wool"],
        secondaryProduct: ["Rabbits Foot"],
        notes: "Produces wool; rare chance for Rabbit's Foot"
    },

    "Dinosaur": {
        building: "Big Coop",
        cost: "N/A (hatched from egg)",
        product: ["Dinosaur Egg"],
        notes: "Produces eggs weekly after incubation"
    },

    // =====================
    // SPECIAL / LATE GAME
    // =====================
    "Ostrich": {
        building: "Barn",
        cost: "N/A (incubated egg)",
        product: ["Ostrich Egg"],
        notes: "Produces large eggs used in special processing"
    },

    // =====================
    // PRODUCTS
    // =====================
 
   "Egg": {
        animal: ["Chicken"],
        sellFor: "50g"

    },

   "Large Egg": {
        animal: ["Chicken"],
        sellFor: "95g"

    },

   "Brown Egg": {
        animal: ["Chicken"],
        sellFor: "50g"

    },

   "Large Brown Egg": {
        animal: ["Chicken"],
        sellFor: "95g"

    },

   "Void Egg": {
        animal: ["Void Chicken"],
        sellFor: "65g"

    },

   "Golden Egg": {
        animal: ["Golden Chicken"],
        sellFor: "500g"

    },

   "Duck Egg": {
        animal: ["Duck"],
        sellFor: "95g"

    },

   "Duck Feather": {
        animal: ["Duck"],
        sellFor: "250g"

    },

   "Wool": {
        animal: ["Rabbit", "Sheep"],
        sellFor: "340g"

    },

   "Rabbits Foot": {
        animal: ["Rabbit"],
        sellFor: "565g"

    },

   "Dinosaur Egg": {
        animal: ["Dinosaur"],
        sellFor: "350g"

    },

   "Milk": {
        animal: ["Cow"],
        sellFor: "125g"

    },

   "Large Milk": {
        animal: ["Cow"],
        sellFor: "190g"

    },

   "Goat Milk": {
        animal: ["Goat"],
        sellFor: "225g"

    },

   "Large Goat Milk": {
        animal: ["Goat"],
        sellFor: "345g"

    },

   "Truffle": {
        animal: ["Pig"],
        sellFor: "625g"

    },

   "Ostrich Egg": {
        animal: ["Ostrich"],
        sellFor: "600g"

    }

};
