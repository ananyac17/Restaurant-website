var title1 = document.querySelector('#title-1');
var title2 = document.querySelector('#title-2');
var description = document.querySelector('#description');
var newsLF = document.querySelector('#newsletter-form');
title1.style.opacity = "0";
title2.style.opacity = "0";
description.style.opacity = "0";
newsLF.style.opacity = "0";

var options = {
    rootMargin: '0px',
    threshold: 0.2
}

function callback(entries, observer) {
    entries.forEach(function(iter) {
        switch (iter.target.id) {
            case "description":
                if (iter.intersectionRatio > 0) {
                    description.style.opacity = "1";
                    description.className += " animated fadeInUp";

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
        }
    });
}

// Create an intersection observer
var observer = new IntersectionObserver(callback, options);

// Start observing 
observer.observe(title1);
observer.observe(title2);
observer.observe(description);
observer.observe(newsLF);