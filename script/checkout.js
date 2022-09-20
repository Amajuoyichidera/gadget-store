const outerEl = document.getElementById('outer');
const homeEl = document.getElementById('home');

function getCartTotal(){
    const temp = localStorage.getItem('cartTotal');
    const total = parseInt(temp);
    const cartArr = [];
    localStorage.setItem('cartArr', JSON.stringify(cartArr));
    localStorage.setItem('cartTotal', 0);
    updateDOM(total);
}

// end of the site 
function updateDOM(total){
    outerEl.innerHTML = `
        <img src ="https://i.pinimg.com/736x/09/cf/6b/09cf6b0eb073084fb0c061b2a8b772d0.jpg" height="200vh"></img>
        <h2>Thank you for shopping with us</h2>
        <h3>Your final total is : ${total}</h3>
    `;
}

// redirect to home page
homeEl.addEventListener('click', ()=>{
    window.location.href = "./products.html";
});

getCartTotal();
