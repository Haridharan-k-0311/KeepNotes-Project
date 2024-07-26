var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopup = document.querySelector(".add-btn")
addpopup.addEventListener('click', function() {
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

var cancelbtn = document.querySelector(".cancel-btn")
cancelbtn.addEventListener('click', function (event) {
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

var container = document.querySelector(".container");
var booktitle = document.getElementById("book-title");
var authorname = document.getElementById("author-name");
var bookdescription = document.getElementById("description");


var addpopupbtn = document.querySelector(".popup-add-btn")
addpopupbtn.addEventListener('click', function (event) {
    event.preventDefault()

    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h2>${booktitle.value}</h2>
    <h5>${authorname.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deletenote(event)">Delete</button>`
    
    container.append(div)
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
})

function deletenote(event) {
    event.target.parentNode.remove()
    /* Remove the parent div containing the button click event target.  This will
     remove the entire book container.  If you want to remove just the button, 
     you can use event.target.remove() instead.  However, be aware that the delete
      event will also be triggered when you delete the book container, so you may 
      want to add additional logic to prevent this.  For example, you could add a
     confirmation prompt before deleting.  This is beyond the scope of this code 
     snippet.  You would need to use JavaScript's built-in confirm() function or 
     a custom confirmation prompt library.
    */
}