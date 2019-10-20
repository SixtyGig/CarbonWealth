$(document).ready(() => {
    $('.product-photo').show(); //targeting class
    $('#nav-dropdown').hide(); //targeting id

    const $navDropdown = $('#nav-dropdown');// create a variable
    $navDropdown.hide();

    //on click event with a callback toggle function
    const $menuButton = $('.menu-button');
    const $navDropdown = $('#nav-dropdown');
    $menuButton.on('click',() => 
    {
    $navDropdown.toggle();
    })

    //mouse leave function to hide something
    $navDropdown.on('mouseleave', () => {
        $navDropdown.hide();
      })

});

var ids = [];

    $(document).ready(function($) {    
    $(".color_cell").bind('click', function() {
        alert('Test');

        ids.push(this.id);       
    });
});