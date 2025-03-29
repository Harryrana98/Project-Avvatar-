const colors=[
    {backgroundColor:"#02343F", color:"#F0EDCC"},
    {backgroundColor:"#331B3F", color:"#ACC7B4"},
    {backgroundColor:"#0A174E", color:"#F5D042"},
    {backgroundColor:"#07553", color:"#CED46A"},
    {backgroundColor:"#50586C", color:"#DCE2F0"},
    {backgroundColor:"#815854", color:"#F9EBDE"},
    {backgroundColor:"#1E4174", color:"#DDA94B"},
    {backgroundColor:"#A4193D", color:"#FFDFB9"},
    {backgroundColor:"#1AAFBC", color:"#80634C"},
]
let addbutton = document.querySelector("#addbutton")
let remove= document.querySelector("#remove")
let newuser = document.querySelector(".new_user")
let confirm1 = document.querySelector("#confirm1")
let confirm2 = document.querySelector("#confirm2")
let cancel1 = document.querySelector("#cancel1")
let cancel2 = document.querySelector("#cancel2")
let deleteuser = document.querySelector(".delete_user")
let avvatar = document.querySelector(".avvatar")
let adminName = document.querySelector("#adminName")
let nameInput = document.querySelector("#name")


function randomcolors(){
    return Math.floor(Math.random()*colors.length)
   
}

addbutton.addEventListener("click", function () {
    newuser.style.display = "block"

})


confirm1.addEventListener("click", function (e) {
    e.preventDefault()

    if (nameInput.value == "" && typeof (nameInput.value) != String) {
        alert("Please enter a valid name")
    }  

    else {
        let admin = document.createElement("p")

        admin.classList = "admin"
        admin.innerHTML = nameInput.value[0]
        const objrandom=colors[randomcolors()]
        admin.style.backgroundColor = objrandom.backgroundColor
        admin.style.color = objrandom.color

        admin.style.textTransform = "capitalize"



        let deleteadmin = document.createElement("span")
        let icon = document.createElement("i")
        icon.classList = "fa-regular fa-circle-xmark"
        icon.id = "cross"
        deleteadmin.append(icon)
        admin.append(deleteadmin)
        adminName.append(admin)

        nameInput.value = ""

        newuser.style.display = "none"



        deleteadmin.addEventListener("click", function () {
            deleteuser.style.display = "block"

            cancel2.addEventListener("click", function () {
                deleteuser.style.display = "none"
            

            })

            confirm2.addEventListener("click", function () {
                admin.remove()

                deleteuser.style.display = "none"

            })
        })
    }
})

remove.addEventListener("click", function () {

    newuser.style.display = "none"

})

cancel1.addEventListener("click", function () {
    newuser.style.display = "none"
    nameInput.value = ""

})





