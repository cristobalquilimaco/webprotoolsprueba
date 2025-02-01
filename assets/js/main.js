document.addEventListener("DOMContentLoaded", function() {
    const moreInfoBtn = document.getElementById("more-info-btn");
    const subscribeBtn = document.getElementById("reset-btn");
    const emailInput = document.querySelector(".input");
    const loadingContainer = document.getElementById("loading-container");
    const loadingText = document.getElementById("loading-text");
    const scrollToTopButton = document.getElementById("scrollToTop");

    moreInfoBtn.addEventListener("click", function() {
        handleButtonClick("Pronto te contactaremos");
    });

    subscribeBtn.addEventListener("click", function() {
        handleButtonClick("Suscrito exitosamente");
    });

    scrollToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    function handleButtonClick(successMessage) {
        if (emailInput.value === "") {
            alert("Por favor ingresa un correo.");
        } else {
            showLoading(successMessage);
        }
    }

    function showLoading(message) {
        loadingContainer.style.display = "flex";
        loadingText.style.color = "yellow";
        loadingText.innerHTML = "Cargando...";

        setTimeout(function() {
            loadingText.innerHTML = message;
            setTimeout(function() {
                loadingContainer.style.display = "none";
            }, 3000);
        }, 3000);
    }
});



// ANIMATION SCROLL


document.addEventListener("DOMContentLoaded", () =>{
    const cards = document.querySelectorAll(".animate-on-scroll");

    const checkVisibility = () =>{
        cards.forEach(card =>{
            const cardTop = card.getBoundingClientRect().top;
            const cardBotom = card.getBoundingClientRect().bottom;

            if(cardTop < window.innerHeight && cardBotom > 0){
                card.classList.add("visible");
            }else{
                card.classList.remove("visible")
            };
        });
    };
    window.addEventListener("scroll", checkVisibility)
    window.addEventListener("resize", checkVisibility)

    checkVisibility()
});
