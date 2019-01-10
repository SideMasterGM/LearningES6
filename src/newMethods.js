const text = "Hello world";

console.log(text, "start with h:", text.toLowerCase().startsWith('h'));
console.log(text, "finish with d:", text.toLowerCase().endsWith('d'));

console.log(text, "include the word > world:", text.includes('world'));

const friends = ["Jerson", "Antonio", "Martínez", "Moreno"];

console.log("include the word > Martínez:", friends.includes("Martínez"));

console.log("Searching:", friends.find( (friend) => {
    return friend.length > 6;
}));

console.log("Searching:", friends.find( (friend) => {
    return friend == "Jerson";
}));

console.log("Searching:", friends.findIndex( (friend) => {
    return friend == "Moreno";
}));