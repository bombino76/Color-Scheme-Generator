


document.getElementById("btn").addEventListener("click",function(){
    document.getElementById("show-color").innerHTML =""
    document.getElementById("color-hex").innerHTML =""
    let hex = document.getElementById("color-pick").value
    hex = hex.substr(1, hex.length - 1)
    const mode = document.getElementById("mode").value
    const query = `
    https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}
     `
     console.log(query)
         fetch(query)
            .then(response => response.json())
            .then(data => {
                for(let i = 0; i < 5; i++){
                    document.getElementById("show-color").innerHTML +=`
                    <div class="color-item" style="background-color:${data.colors[i].hex.value};"></div>
                    `
                    document.getElementById("color-hex").innerHTML +=`
                    <div class="hex-item">${data.colors[i].hex.value}</div>`
                }
                
               


            
            })
       

})