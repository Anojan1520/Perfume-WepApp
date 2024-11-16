console.log("Product-view work")

let Perfume=JSON.parse(sessionStorage.getItem('perfume'))||[]
if (Perfume==false) {
    window.location.href='./index.html'
}


document.getElementById('p-Image').src=Perfume.src
document.getElementById('p-name').textContent=Perfume.name
document.getElementById('p-details').textContent=Perfume.detail