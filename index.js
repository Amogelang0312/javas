// alert(
//     alert ("working")
// )
let modal = document.querySelector("#modal")
let onsubmit = document.querySelector("#onsubmit")

onsubmit.addEventListener("submit", function(){
    modal.style.display = "flex"
    // alert("form submitted!");
})
console.log(onsubmit)