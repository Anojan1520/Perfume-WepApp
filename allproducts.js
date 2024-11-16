
const products = [
    { src: './assets/fogg2.jpg', name: 'FOGG Xtremo', price: '$50.00', details: 'FOGG Xtremo, a long-lasting men\'s perfume with a musky and spicy fragrance, ideal for daily wear.' },
    { src: './assets/fog3.jpg', name: 'FOGG Master', price: '$75.00', details: 'FOGG Master, an intense deodorant spray with a refreshing scent that lasts all day.' },
    { src: './assets/fogg1.jpg', name: 'FOGG Xpresso', price: '$75.00', details: 'FOGG Xpresso, a premium perfume with coffee undertones, ideal for evening wear.' },
    { src: './assets/1601007830.jpg', name: 'BRUT Classic', price: '$75.00', details: 'BRUT Classic, a timeless scent with fresh and woody notes, suitable for men of all ages.' },
    { src: './assets/1663300741.gif', name: 'Embrace Eternity', price: '$75.00', details: 'Embrace Eternity, a versatile perfume with floral and citrus hints, perfect for casual use.' },
    { src: './assets/1663306696.gif', name: 'Royal Mirage Noir', price: '$75.00', details: 'Royal Mirage Noir, a sophisticated fragrance for men with notes of musk and amber.' },
    { src: './assets/1663399309.gif', name: 'Riviera Blue', price: '$75.00', details: 'Riviera Blue, an aquatic perfume with fresh and airy notes, perfect for summer.' },
    { src: './assets/1709532385 (1).jpg', name: 'FOGG Green Deodorant', price: '$75.00', details: 'FOGG Green Deodorant, a bold and refreshing fragrance that ensures all-day freshness.' },
    { src: './assets/JA48-250x250.jpg', name: 'Cologne Club Silver', price: '$75.00', details: 'Cologne Club Silver, a modern and fresh cologne with light floral and woody notes.' },
    { src: './assets/lp2.jpg', name: 'Blossom Pink', price: '$75.00', details: 'Blossom Pink, a delicate perfume with a mix of floral and fruity notes, ideal for special occasions.' }
];



for (let i = 0; i < products.length; i++) {
    const element = products[i];
    let featured_products = document.getElementById('all-perfume')
    let div = document.createElement('div')
    div.className = 'product-card'
    div.innerHTML = `  <img class="p-image" src="${element.src}" alt="Perfume 1">
                    <h3 class="p-name">${element.name}</h3>
                    <p class="p-price">${element.price}</p>
                    <a href="product.html" class="achor-products">View Details</a>`
                    featured_products.appendChild(div)
}

console.log("Parent")

let changepath = document.querySelectorAll('.achor-products')
console.log(changepath)

changepath.forEach(x => {

    x.addEventListener('click', function (event) {
        event.preventDefault();
        let Parent = event.target.parentElement
        let NextProduct = Parent.querySelector('.p-image').src
        let Price=Parent.querySelector('.p-price').textContent
        let name=Parent.querySelector('.p-name').textContent
        let details=products.find(x=>x.name==name)
        let ChangeArray={src:NextProduct,name:name,price:Price,detail:details.details}
        sessionStorage.setItem('perfume',JSON.stringify(ChangeArray))
        window.location.href = x.href
    })
})