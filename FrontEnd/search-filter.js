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
const searchDropDown = document.getElementById("search-dropdown");
let selectedListItem = -1;
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

prevButton.disabled = true;
nextButton.disabled = true;

// Search as user types something
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
const searchUser = debounce(function(searchString){
    if(searchString === ""){
        hideSearchDropdown();
        return;
    }
    const searchResult = users.filter(user => user.toLowerCase().includes(searchString.toLowerCase()));
    selectedListItem = -1;
    if(searchResult.length <= 0){
        prevButton.disabled = true;
        nextButton.disabled = true;
        searchDropDown.innerHTML = `<div class="no-results">No results found.</div>`;
    }
    else {
        nextButton.disabled = false;
        searchDropDown.innerHTML = "";
        const ul = document.createElement("ul");
        ul.setAttribute("id","search-user-list");
        searchDropDown.appendChild(ul);
        
        searchResult.forEach((user,index) => {
            const li = document.createElement("li");
            li.textContent = user;
            li.setAttribute("data-index",index);
            ul.appendChild(li);
        })
    }
});
// Hide search dropdown common function
function hideSearchDropdown(){
    document.getElementById("search-user").value = "";
    searchDropDown.innerHTML = "";
}
// List navigation buttons
function navigateList(direction){
    const list = document.querySelectorAll("#search-dropdown li");

    if(direction == 'next') {
        if(selectedListItem < list.length - 1){
            selectedListItem++;
            prevButton.disabled = false;
            if(selectedListItem >= list.length - 1)
                nextButton.disabled = true;
        }
    }
    if(direction == 'prev') {
        if(selectedListItem > -1){
            selectedListItem--;
            nextButton.disabled = false;
            if(selectedListItem <= 0)
                prevButton.disabled = true;
        }
    }
    if(selectedListItem > -1 && selectedListItem < list.length){
        list.forEach(li => {
            if(li.dataset.index == selectedListItem){
                li.classList.add("active");
            } else li.classList.remove("active");
        })
    }
};