
var title1 = document.querySelector('#title-1');
var title2 = document.querySelector('#title-2');
var newsLF = document.querySelector('#newsletter-form');
title1.style.opacity = "0";
title2.style.opacity = "0";
newsLF.style.opacity = "0";

var options1 = {
    rootMargin: '0px',
    threshold: 0.2
}

function callback1(entries, observer1) {
    entries.forEach(function(iter) {
        switch (iter.target.id) {
            case "title-1":
                if (iter.intersectionRatio > 0) {
                    title1.style.opacity = "1";
                    title1.className += " animated fadeInDown";

                    observer1.unobserve(iter.target);
                }
                break;
            case "title-2":
                if (iter.intersectionRatio > 0) {
                    title2.style.opacity = "1";
                    title2.className += " animated fadeInUp";

                    observer1.unobserve(iter.target);
                }
                break;
            case "newsletter-form":
                if (iter.intersectionRatio > 0) {
                    newsLF.style.opacity = "1";
                    newsLF.className += " animated fadeInUp";

                    observer1.unobserve(iter.target);
                }
                break;
        }
    });
}

// Create an intersection observer
var observer1 = new IntersectionObserver(callback1, options1);

// Start observing 
observer1.observe(title1);
observer1.observe(title2);
observer1.observe(newsLF);

/* ======= Observer 2  ======= */

var galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(function(galleryItem) {
    galleryItem.style.opacity = "0";
});

var options2 = {
    rootMargin: '0px',
    threshold: 0.2
}

function callback2(entries, observer2) {
    entries.forEach(function(iter) {
        if (iter.intersectionRatio > 0) {
            iter.target.style.opacity = "1";
            iter.target.className += " animated fadeInUp";

            observer2.unobserve(iter.target);
        }
    });
}

// Create an intersection observer
var observer2 = new IntersectionObserver(callback2, options2);

// Start observing
galleryItems.forEach(function(galleryItem) {
    observer2.observe(galleryItem);
});