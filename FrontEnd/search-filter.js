export  class SearchFilter{
    constructor(target,users){
        if (!document.querySelector('link[href="search-filter.css"]')) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "search-filter.css";
            document.head.appendChild(link);
        }
        this.users = [...users];
        this.selectedListItem = -1;
        this.root = document.createElement("div");
        this.root.innerHTML = `<div id="search-container" class="search-container">
        <input
            id="search-user"
            name="search-user"
            type="text"
            placeholder="Search User"
            alt="Search User"
        />
        <div class="list-navigator-buttons">
            <button id="prevButton">Up</button>
            <button id="nextButton">Down</button>
        </div>
        <div id="search-dropdown" class="search-dropdown"></div>
        </div>`;
        
        (typeof target === "string" ? document.querySelector(target) : target).appendChild(this.root);
        this.searchDropDown = document.getElementById("search-dropdown");
        this.prevButton = document.getElementById("prevButton");
        this.nextButton = document.getElementById("nextButton");

        this.prevButton.disabled = true;
        this.nextButton.disabled = true;

        this.init();
    }

init(){
    this.searchUser = this.debounce(function(searchString){
        if(searchString === ""){
            this.hideSearchDropdown();
            return;
        }
        const searchResult = this.users.filter(user => user.toLowerCase().includes(searchString.toLowerCase()));
        this.selectedListItem = -1;
        if(searchResult.length <= 0){
            this.prevButton.disabled = true;
            this.nextButton.disabled = true;
            this.searchDropDown.innerHTML = `<div class="no-results">No results found.</div>`;
        }
        else {
            this.nextButton.disabled = false;
            this.searchDropDown.innerHTML = "";
            const ul = document.createElement("ul");
            ul.setAttribute("id","search-user-list");
            this.searchDropDown.appendChild(ul);
            
            searchResult.forEach((user,index) => {
                const li = document.createElement("li");
                li.textContent = user;
                li.setAttribute("data-index",index);
                ul.appendChild(li);
            })
        }
    }.bind(this));
    // Search as user types something
    document.getElementById("search-user").addEventListener("input",(e)=>{
        let searchString = document.getElementById("search-user").value;
        this.searchUser(searchString);
    });
    this.prevButton.addEventListener("click", () => this.navigateList("prev"));
    this.nextButton.addEventListener("click", () => this.navigateList("next"));

}
debounce(callback){
    let timer;
    return (searchString)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            callback(searchString);
        },300)
    }
}

// Hide search dropdown common function
hideSearchDropdown(){
    document.getElementById("search-user").value = "";
    this.searchDropDown.innerHTML = "";
}
// List navigation buttons
navigateList(direction){
    const list = document.querySelectorAll("#search-dropdown li");

    if(direction == 'next') {
        if(this.selectedListItem < list.length - 1){
            this.selectedListItem++;
            this.prevButton.disabled = false;
            if(this.selectedListItem >= list.length - 1)
                this.nextButton.disabled = true;
        }
    }
    if(direction == 'prev') {
        if(this.selectedListItem > -1){
            this.selectedListItem--;
            this.nextButton.disabled = false;
            if(this.selectedListItem <= 0)
                this.prevButton.disabled = true;
        }
    }
    if(this.selectedListItem > -1 && this.selectedListItem < list.length){
        list.forEach(li => {
            if(li.dataset.index == this.selectedListItem){
                li.classList.add("active");
            } else li.classList.remove("active");
        })
    }
};
}