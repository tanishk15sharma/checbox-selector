const inboxContainer = document.querySelectorAll(".inbox-container input[ type = 'checkbox' ] ")


//console.log(...inboxContainer);

let lastcheckedBox;

function handlecheck(e) {

 let inBetween = false;


    if (e.shiftKey && this.checked) {
        //     // for(let i=0;i = inboxContainer.length ;i++ ){
        //     //     console.log(i)
        inboxContainer.forEach(checkbox => {
           // console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log("yesss found it");
            }
            if (inBetween) {
                checkbox.checked = true
            }
        })
    }
    lastChecked = this;
}


// console.log(lastChecked);


inboxContainer.forEach(checkbox => checkbox.addEventListener("click", handlecheck))