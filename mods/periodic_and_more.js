
elements.beryllium = {
    color: "#b3b3b3",
    behavior: behaviors.WALL,
    category: "periodic",
    viscosity: 100000,
    state: "solid",
    density: 720,
    reactions: {
        "water": {elem1: null, elem2: "dirty_water"}
};

// Changing existing elements:
elements.water.color = "#ff0000";
elements.water.behavior = behaviors.WALL;

// Removing elements:
// Be aware, things may break
delete elements.ketchup;

// Adding behavior presets:
behaviors.SELFDELETE = [
    "XX|XX|XX",
    "XX|DL|XX",
    "XX|XX|XX",
];

// Raw JavaScript behaviors:
behaviors.mud.tick = function(pixel) {
    if (tryMove(pixel, pixel.x, pixel.y+1)) {
        console.log("Moved!");
    }
    else {
        console.log("Couldn't move!")
    }
};

// Create a new tool:
elements.sand_exploder = {
    color: "#ff0000",
    tool: function(pixel) {
        if (pixel.element == "sand") {
            pixel.element = "explosion"
        }
    },
    category: "tools",
};

// Add reactions to existing elements
if (!elements.water.reactions) { // Include this block once
    elements.water.reactions = {} // This creates the property if it doesn't exist
}
elements.water.reactions.mayo = { "elem1":null, "elem2":"mayo_water" }
elements.water.reactions.soap = { "elem1":null, "elem2":"soapy_water" }

// Run after all mods are loaded, for cross-mod compatibility
runAfterLoad(function() {
    // Your code here
    console.log("Hello World!");
});

// Run if another mod is active
if (enabledMods.includes["mods/chem.js", "mods/moreChemistry.js", "mods/metals.js", "mods/halogen.js", "mods/noblegas.js", "mods/radioactive.js", "mods/nousersthings.js"]) {
    runAfterLoad(function() {
        // Your code here
        console.log("Hello World!");
    });
}

// Creating eLists:
eLists.PERIODIC = ["beryllium", "scandium", "vanadium", "manganese", "cobalt"];
// Adding elements to eLists:
eLists.CONDIMENT.push("honey");
