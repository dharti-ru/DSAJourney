const trackClick = debounce(2000);
document.getElementById("track-btn").addEventListener("click",trackClick);

function debounce(delay){
    let timer;
    let counter = 0;
    return function(){
        counter++
        setCounter(counter);
        clearTimeout(timer)
        timer = setTimeout(()=>{
            counter = 0;
            setCounter(counter);
        },delay);
    }
}
function setCounter(counter){
    document.getElementById("counter").innerHTML = counter;
}