// Parcel-stuff:
//import './scss/_settings.scss';
//import 'bootstrap'
//import 'bootstrap/dist/css/bootstrap.css' // Import precompiled Bootstrap css
// import '../node_modules/bootstrap/scss/bootstrap'
// import '@fortawesome/fontawesome-free/css/all.css'
//import '../scss/index.scss';

$(document).ready(function(){
    $('.items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,

        responsive: [

            {
              breakpoint: 830,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                variableWidth: true,
              },

              // breakpoint: 600,
              // settings: {
              //   slidesToShow: 1,
              //   slidesToScroll: 1,
              //   adaptiveHeight: true,
              //   variableWidth: true,
              // },

            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]

    });
});