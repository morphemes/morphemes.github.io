$(document).ready(function () {
  
// for the photo slider    
    $('#owl-demo').owlCarousel({
        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });

// setting up the sidebar div 
    $('#toggler')
        .click(function () {
            $('#sidebar').toggle('slide', { direction: 'right' }, 500);
    });

});


