document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
        const scrollValue = window.scrollY;
        const threshold = 120;

        console.log("ScrollY:", scrollValue); 

        if (scrollValue > threshold) {
            navbar.style.backgroundColor = "#353935";
        } else {
            navbar.style.backgroundColor = "transparent";
        }
    });
});

// btn buy
//     const buyNowBtn = document.getElementById('buyNowBtn');
//     const orderModal = new bootstrap.Modal(document.getElementById('orderModal'));

//     buyNowBtn.addEventListener('click', () => {
//         orderModal.show();
//     });
const btnShop = document.getElementById("btnShop");
btnShop.onclick = () =>{
    document.getElementById("shop").classList.add("d-none")
    document.getElementById("shop").classList.remove("d-none")
}