var food = document.querySelector('#food');
var drinks = document.querySelector('#drinks');
var aboutDescription = document.querySelector('#about-description');
var cardfirst = document.querySelector('#card-1');
var cardsecond = document.querySelector('#card-2');
var cardthird = document.querySelector('#card-3');
var newsLF = document.querySelector('#newsletter-form');
food.style.opacity = "0";
drinks.style.opacity = "0";
aboutDescription.style.opacity = "0";
cardfirst.style.opacity = "0";
cardsecond.style.opacity = "0";
cardthird.style.opacity = "0";
newsLF.style.opacity = "0";

var options = {
    rootMargin: '0px',
    threshold: 0.2
}

function callback(entries, observer) {
    entries.forEach(function(iter) {
        switch (iter.target.id) {
            case "food":
                if (iter.intersectionRatio > 0) {
                    food.style.opacity = "1";
                    food.className += " animated slideInLeft";

                    observer.unobserve(iter.target);
                }
                break;
            case "card-1":
                if (iter.intersectionRatio > 0) {
                    cardfirst.style.opacity = "1";
                    cardfirst.className += " animated slideInUp";

                    observer.unobserve(iter.target);
                }
                break;
            case "card-2":
                if (iter.intersectionRatio > 0) {
                    cardsecond.style.opacity = "1";
                    cardsecond.className += " animated slideInUp";

                    observer.unobserve(iter.target);
                }
                break;
            case "card-3":
                if (iter.intersectionRatio > 0) {
                    cardthird.style.opacity = "1";
                    cardthird.className += " animated slideInUp";

                    observer.unobserve(iter.target);
                }
                break;
            case "drinks":
                if (iter.intersectionRatio > 0) {
                    drinks.style.opacity = "1";
                    drinks.className += " animated slideInRight";

                    observer.unobserve(iter.target);
                }
                break;
            case "about-description":
                if (iter.intersectionRatio > 0) {
                    aboutDescription.style.opacity = "1";
                    aboutDescription.className += " animated fadeInDown";

                    observer.unobserve(iter.target);
                }
                break;
            case "newsletter-form":
                if (iter.intersectionRatio > 0) {
                    newsLF.style.opacity = "1";
                    newsLF.className += " animated fadeInUp";

                    observer.unobserve(iter.target);
                }
                break;
        }
    });
}

// Create an intersection observer
var observer = new IntersectionObserver(callback, options);

// Start observing 
observer.observe(food);
observer.observe(drinks);
observer.observe(aboutDescription);
observer.observe(cardfirst);
observer.observe(cardsecond);
observer.observe(cardthird);
observer.observe(newsLF);