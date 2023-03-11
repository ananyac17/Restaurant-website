var newsLF = document.querySelector('#newsletter-form');
var title1 = document.querySelector('#title-1');
var menuIcons = document.querySelector('#menu-icons');
newsLF.style.opacity = "0";
title1.style.opacity = "0";
menuIcons.style.opacity = "0";

var options1 = {
    rootMargin: '0px',
    threshold: 0.2
}

function callbackMenu1(entries, observer1) {
    entries.forEach(function(iter) {
        switch (iter.target.id) {
            case "newsletter-form":
                if (iter.intersectionRatio > 0) {
                    newsLF.style.opacity = "1";
                    newsLF.className += " animated fadeInUp";

                    observer1.unobserve(iter.target);
                }
                break;
            case "title-1":
                if (iter.intersectionRatio > 0) {
                    title1.style.opacity = "1";
                    title1.className += " animated fadeInDown";

                    observer1.unobserve(iter.target);
                }
                break;
            case "menu-icons":
                if (iter.intersectionRatio > 0) {
                    menuIcons.style.opacity = "1";
                    menuIcons.className += " animated fadeInUp";

                    observer1.unobserve(iter.target);
                }
                break;
        }
    });
}

// Create an intersection observer
var observer1 = new IntersectionObserver(callbackMenu1, options1);

// Start observing
observer1.observe(newsLF);
observer1.observe(title1);
observer1.observe(menuIcons);

/* ======= Observer #2 logic ======= */
var menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(function(foodItem) {
    foodItem.style.opacity = "0";
});

var options2 = {
    rootMargin: '0px',
    threshold: 0.2
}

function callbackMenu2(entries, observer2) {
    entries.forEach(function(iter) {
        if (iter.intersectionRatio > 0) {
            iter.target.style.opacity = "1";
            iter.target.className += " animated fadeInUp";

            observer2.unobserve(iter.target);
        }
    });
}

// Create an intersection observer
var observer2 = new IntersectionObserver(callbackMenu2, options2);

// Start observing
menuItems.forEach(function(foodItem) {
    observer2.observe(foodItem);
});