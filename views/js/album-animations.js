var title1 = document.querySelector('#title-1');
var title2 = document.querySelector('#title-2');
var cardFood = document.querySelector('#card-food');
var cardDrinks = document.querySelector('#card-drinks');
var cardLocation = document.querySelector('#card-location');
var cardStaff = document.querySelector('#card-staff');
var newsLF = document.querySelector('#newsletter-form');
title1.style.opacity = "0";
title2.style.opacity = "0";
cardFood.style.opacity = "0";
cardDrinks.style.opacity = "0";
cardLocation.style.opacity = "0";
cardStaff.style.opacity = "0";
newsLF.style.opacity = "0";

var options = {
    rootMargin: '0px',
    threshold: 0.2
}

function callback(entries, observer) {
    entries.forEach(function(iter) {
        switch (iter.target.id) {
            case "title-1":
                if (iter.intersectionRatio > 0) {
                    title1.style.opacity = "1";
                    title1.className += " animated fadeInDown";
                    observer.unobserve(iter.target);
                }
                break;
            case "title-2":
                if (iter.intersectionRatio > 0) {
                    title2.style.opacity = "1";
                    title2.className += " animated fadeInUp";
                    observer.unobserve(iter.target);
                }
                break;
            case "card-food":
                if (iter.intersectionRatio > 0) {
                    cardFood.style.opacity = "1";
                    cardFood.className += " animated slideInUp";
                    observer.unobserve(iter.target);
                }
                break;

            case "card-drinks":
                if (iter.intersectionRatio > 0) {
                    cardDrinks.style.opacity = "1";
                    cardDrinks.className += " animated slideInUp";
                    observer.unobserve(iter.target);
                }
                break;
            case "card-location":
                if (iter.intersectionRatio > 0) {
                    cardLocation.style.opacity = "1";
                    cardLocation.className += " animated slideInUp";
                    observer.unobserve(iter.target);
                }
                break;
            case "card-staff":
                if (iter.intersectionRatio > 0) {
                    cardStaff.style.opacity = "1";
                    cardStaff.className += " animated slideInUp";
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
observer.observe(title1);
observer.observe(title2);
observer.observe(cardFood);
observer.observe(cardDrinks);
observer.observe(cardLocation);
observer.observe(cardStaff);
observer.observe(newsLF);