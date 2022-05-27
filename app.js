const washBtn = document.querySelector("#wash-btn")
const mowBtn = document.querySelector("#mow-btn")
const weedsBtn = document.querySelector("#weeds-btn")
const serviceUlEl = document.querySelector("#service-list")
const priceUlEl = document.querySelector("#cost-list")
const totalEl = document.querySelector("#total-amount")

const resetBtn = document.querySelector("#reset-button")

const cartDetail = document.querySelector("#cart-detail")

const services = ["Wash Car", "Mow Lawn", "Pull Weeds"]

let isWash = false
let isMow = false
let isWeeds = false


let serviceList = []
let totalAmount = 0

const prices = [10, 20, 30]




washBtn.addEventListener("click", ()=>{
    
    if(isWash === false){
    serviceList.push({name:services[0], cost:prices[0], id:"wash-car"})
    totalAmount += 10
    isWash = true
}
    renderList()
})

mowBtn.addEventListener("click", ()=>{
    
    if(isMow === false){
    serviceList.push({name:services[1], cost:prices[1], id:"mow-lawn"})
    totalAmount += 20
    isMow = true
}
    renderList()

})

weedsBtn.addEventListener("click", ()=>{
    
    if(isWeeds === false){
    serviceList.push({name:services[2], cost:prices[2], id:"pull-weeds"})
    totalAmount += 30
    isWeeds = true
    console.log(serviceUlEl)
}
renderList()
})

function renderList(){
    let x = ""
    let y = ""
    for (let i = 0; i < serviceList.length; i++){
        x += `<li>${serviceList[i].name}<button id=${serviceList[i].id} class="remove-btn">Remove</button></li>`
        y += `<li>$${serviceList[i].cost}</li>`
    }
    serviceUlEl.innerHTML = x
    priceUlEl.innerHTML = y

    totalEl.textContent= "$" + totalAmount

    removeButton()
}

function removeButton(){

    for(let i = 0; i < serviceList.length; i++){

        if(serviceList[i].name === services[0]){

            removeWash = document.querySelector("#wash-car")

            removeWash.addEventListener("click", () =>{
                totalAmount-=10
                isWash = false
                removeItem(services[0])
            })
        }

        else if(serviceList[i].name === services[1]){

            removeMow = document.querySelector("#mow-lawn")

            removeMow.addEventListener("click", () =>{
                totalAmount-=20
                isMow = false
                removeItem(services[1])
            })
        }

        else if(serviceList[i].name === services[2]){

            removeWeeds = document.querySelector("#pull-weeds")

            removeWeeds.addEventListener("click", () =>{
                totalAmount-=30
                isWeeds = false
                removeItem(services[2])
            })
        }


    }
}


function removeItem(item){

    for( let i = 0; i < serviceList.length; i++){
    if (serviceList[i].name === item){
        serviceList.splice(i, 1)
        console.log(serviceList)
        console.log(serviceUlEl)
    }}
    renderList()

}

resetBtn.addEventListener("click",()=>{
    serviceList = []
    totalAmount = 0
    renderList()
    isWash = false
    isMow = false
    isWeeds = false
    console.log(serviceList)
})