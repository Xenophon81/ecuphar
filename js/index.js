
$(document).ready(function(){
    $('.items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
  autoplay: true,
    });
});


//import './scss/_settings.scss';
//import 'bootstrap'
//import 'bootstrap/dist/css/bootstrap.css' // Import precompiled Bootstrap css
// import '../node_modules/bootstrap/scss/bootstrap'
// import '@fortawesome/fontawesome-free/css/all.css'

//import '../scss/index.scss';

// $('.slick-slider').slick({
//     arrows: true,
//     //fade: true,
//     //cssEase: 'linear',
//     //lazyLoad: 'ondemand',
//     autoplay: true,
//     autoplaySpeed: 6000,
//     infinite: true,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     centerPadding: 100,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//     ]
// });