// 🧩 Scenario: "Live Search Filter"
// Problem:
// Build a search bar that filters a list of names as the user types.
// But to avoid unnecessary re-renders, apply debounce of 300ms on the input.
// 🧠 Expected Behavior:
// You’re given an input field and a list of names.

// As the user types, the list should update to only show items that include the typed string.

// But the filtering should happen only after 300ms of inactivity, not on every keystroke.

// 🧪 Example:
// Let’s say the name list is:

// ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"]
// If the user types:

// “a” → show “Alice”, “Charlie”, “David”, “Frank”

// Then types “al” → after 300ms → show “Alice” only

const users = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
const searchUser = debounce(function(searchString){
    const searchResult = users.filter(user => user.toLowerCase().includes(searchString.toLowerCase()));//.map(user => `<li>${user}</li>`);
    const ul = document.getElementById("search-result");
    ul.innerHTML = "";
    searchResult.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user;
        ul.appendChild(li);
    })
    // document.getElementById("search-result").innerHTML = searchResult.join("");
});
document.getElementById("search-user").addEventListener("input",function(e){
    let searchString = document.getElementById("search-user").value;
    searchUser(searchString);
});

function debounce(callback){
    let timer;
    return (searchString)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            callback(searchString);
        },300)
    }
}