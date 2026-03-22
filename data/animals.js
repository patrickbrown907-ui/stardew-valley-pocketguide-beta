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
        secondaryProduct: ["Rabbit's Foot"],
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
    }
};