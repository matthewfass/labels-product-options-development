(function ($) {
   /*_______________/--------------------\______________________*/
  /*                  - BOTS LIKE HONEY -                      */
 /*-----------------\____________________/--------------------*/
/*/**-------------------------------------------------------o
||| HIDE HONEY POT FROM HUMANS                        |||
------------------------------------------------------*/
$('#custom-form-1 #formlast .form-list .fields:first-child').hide();
$('#custom-form-2 #formlast .form-list .fields:first-child').hide();
$('#custom-form-3 #formlast .form-list .fields:first-child').hide();
$('#custom-form-4 #formlast .form-list .fields:first-child').hide();
$('#custom-form-5 #formlast .form-list .fields:first-child').hide();
    
   /*_______________/--------------------\______________________*/
  /*                   - GET A QUOTE -                         */
 /*-----------------\____________________/--------------------*/
/*/**-------------------------------------------------------o
||| JQUERY BACKUP IF ANCHOR FAILS                     |||
------------------------------------------------------*/ 
$('ul.menu > li:last-child').click(function () {
    $([document.documentElement, document.body]).animate({
            scrollTop: $('#get-a-quote-homie').offset().top - 100
    }, 300);
});/*_______________/--------------------\______________________*/
  /*           - HOME PAGE GET A QUOTE BUTTON -                */
 /*-----------------\____________________/--------------------*/
/*/**-------------------------------------------------------o
||| HOME PAGE GET A QUOTE BUTTON                      |||
------------------------------------------------------*/
$(document).ready(function() {
    $('ul.menu > li.menu-parent-item:last-child > a').attr('href','https://qualitywovenlabels.com/#get-a-quote');
    // NEED ABSOLUTE PATH
});/*_______________/--------------------\______________________*/
  /*                - GET A QUOTE BUTTON  -                    */
 /*-----------------\____________________/--------------------*/
/*/**-------------------------------------------------------o
||| CHANGES TO GET A QUOTE FORM - CONTEXT               |||
------------------------------------------------------*/
$('#custom-form-3 > .buttons-set > .button > span').text('See My Price');
/*_______________/--------------------\______________________*/
  /*             - SMOOTH SCROLLING ANCHORS -                  */
 /*-----------------\____________________/--------------------*/
/*/**-------------------------------------------------------o
||| SMOOTH SCROLLING ANCHORS - OLD BROWSER SUPPORT    |||
------------------------------------------------------*/
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});
/*/**-------------------------------------------------------o
||| SMOOTH SCROLLING ANCHORS                          |||
------------------------------------------------------*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});/*_______________/--------------------\______________________*/
  /*                 -PRODUCT TOOL TIPS-                       */
 /*-----------------\____________________/--------------------*/
/*/**-------------------------------------------------------o
||| PRODUCT TOOL TIPS                                 |||
------------------------------------------------------*/    
$('.tagtip-question').click(function( event ){
  event.stopImmediatePropagation();
});/* o///=======================================>>>---------------------------------------<<<=======================================\\\o END OF | PRODUCT TOOL TIPS */
   /*_______________/--------------------\______________________*/
  /*                     -CART PAGE-                           */
 /*-----------------\____________________/--------------------*/
/*/**-------------------------------------------------------o
||| CART PAGE                                         |||
------------------------------------------------------*/
$('.checkout-cart-index .btn-remove').click(function() {
    $(document).scrollTop(0);
    location.reload();
});/* o///=======================================>>>---------------------------------------<<<=======================================\\\o END OF | CART PAGE */ 
   /*_______________/--------------------\______________________*/
  /*                     -CART PAGE-                           */
 /*-----------------\____________________/--------------------*/
/*/**-------------------------------------------------------o
||| CART PAGE                                         |||
------------------------------------------------------*/
jQuery('.checkout-cart-index .btn-remove.btn-remove2').click(function() {
    jQuery(document).scrollTop(0);
    location.reload();
});/* o///=======================================>>>---------------------------------------<<<=======================================\\\o END OF | CART PAGE */  
   /*_______________/--------------------\______________________*/
  /*                   -APPROVAL PAGE-                         */
 /*-----------------\____________________/--------------------*/
/*/**-------------------------------------------------------o
||| APPROVAL PAGE                                     |||
------------------------------------------------------*/
$('.dis-button.confirm-art').prop('disabled', true).addClass('disabled eio-3');
$('input.eye-agree').change(function(event){
    $('.dis-button.confirm-art').prop('disabled', function(i, v) { return !v; }).toggleClass('disabled');
});/* o///=======================================>>>---------------------------------------<<<=======================================\\\o END OF | APPROVAL PAGE */  
   /*_______________/--------------------\______________________*/
  /*             - WHOLESALE & GENERIC FORMS -                 */
 /*-----------------\____________________/--------------------*/
/*/**-------------------------------------------------------o
||| ADD CLASSES TO WRAPPER FIELDSETS                  |||
------------------------------------------------------*/
$('input.input-text').closest('.fieldset').addClass('text-input');
$('input:checkbox').closest('.fieldset').addClass('checkbox-input');
$('#formhalf.checkbox-input').addClass('additional-info')

/*/**-------------------------------------------------------o
||| REMOVE INLINE CSS FROM ELEMENTS                   |||
------------------------------------------------------*/
// CALENDAR
$('#deadline_13_11_date').removeAttr('style');
// TEXTAREA
$('textarea').one( "click", function() {
    $(this).val('');
});

/*/**-------------------------------------------------------o
||| STYLES FOR ADDITIONAL INFORMATION                 |||
------------------------------------------------------*/
$('#deadline_13_11_date').closest('.field').addClass('calendar-input');
$('#deadline_13_11_date').closest('.fieldset').addClass('additional-info');

/*/**-------------------------------------------------------o
||| TOGGLE CLASS ON INPUT FIELD FOCUS                 |||
------------------------------------------------------*/
$('input.input-text').focus(function () {
    $(this).closest('.fields').removeClass('not-selected');
    $(this).closest('.fields').addClass('selected');
}).blur(function () {
    $(this).closest('.fields').removeClass('selected');
    $(this).closest('.fields').addClass('not-selected');
});

/*/**-------------------------------------------------------o
||| TOGGLE CLASS ON INPUT CHECKBOX                    |||
------------------------------------------------------*/
$('input:checkbox').closest('li').addClass('unchecked');
$('input:checkbox').click(function () {
    $(this).closest('li').toggleClass('checked unchecked');
    if ($(this).closest('li').hasClass('checked')) {
        $(this).append('<i class="fas fa-check"></i>');
    }
});

/*/**-------------------------------------------------------o
||| USE MULTIPLE SELECTORS TO CHECK CHECKBOX          |||
------------------------------------------------------*/
$('input:checkbox').closest('li').click(function () {
    $(this).find('input').click();
});
$('li.unchecked label').click(function () {
    $(this).prev('input').click();
});

/*/**-------------------------------------------------------o
||| ADD SPAN AFTER INPUT FOR ANIMATION                |||
------------------------------------------------------*/
$('input.input-text').after('<span class="animated-border"></span>');

/*/**-------------------------------------------------------o
||| ADD CLASS IF INPUT IS EMPTY                       |||
------------------------------------------------------*/
$('input.input-text').blur(function () {
    tmpval = $(this).val();
    if (tmpval == '') {
        $(this).closest('.fields').addClass('empty');
        $(this).closest('.fields').removeClass('not-empty');
    } else {
        $(this).closest('.fields').addClass('not-empty');
        $(this).closest('.fields').removeClass('empty');
    }
});

/*/**-------------------------------------------------------o
||| ADD CLASSES TO WRAPPER ELEMENTS                   |||
------------------------------------------------------*/
$('input.input-text').closest('.registered-users').addClass('text-input');
$('input:checkbox').closest('.registered-users').addClass('checkbox-input');

/*/**-------------------------------------------------------o
||| TOGGLE CLASS ON INPUT FIELD FOCUS                 |||
------------------------------------------------------*/
$('input.input-text').focus(function () {
    $(this).closest('li').removeClass('not-selected');
    $(this).closest('li').addClass('selected');
}).blur(function () {
    $(this).closest('li').removeClass('selected');
    $(this).closest('li').addClass('not-selected');
});
    
/*/**-------------------------------------------------------o
||| ADD CLASS IF INPUT IS EMPTY                       |||
------------------------------------------------------*/
$('input.input-text').blur(function () {
    tmpval = $(this).val();
    if (tmpval == '') {
        $(this).closest('li').addClass('empty');
        $(this).closest('li').removeClass('not-empty');
    } else {
        $(this).closest('li').addClass('not-empty');
        $(this).closest('li').removeClass('empty');
    }
});
    
/*/**-------------------------------------------------------o
||| INPUT FIELD STARTS SELECCTED                      |||
------------------------------------------------------*/
$('#full_name_29_3_text').closest('.fields').removeClass('not-selected').addClass('selected');
    
    /* o///=======================================>>>---------------------------------------<<<=======================================\\\o END OF | WHOLESALE & GENERIC FORMS */
   /*_______________/--------------------\______________________*/
  /*                   -PRODUCT PAGE -                         */
 /*-----------------\____________________/--------------------*/
/*/**-------------------------------------------------------o
||| MORE THAN 10,000 UNITS                            |||
------------------------------------------------------*/
$('.qty-container').append('<!-- custom.js --><a href="/wholesale-pricing-inquiry" class="request-custom-quote" targt="_blank"><span>10000+</span><span class="qty-spacer"></span><span>Wholesale Pricing</span></a>');
    /* o///=======================================>>>---------------------------------------<<<=======================================\\\o END OF | PRODUCT PAGE */
   /*_______________/--------------------\______________________*/
  /*                 -END OF JQUERY FILE-                      */
 /*-----------------\____________________/--------------------*/
/*/**-------------------------------------------------------o
||| END OF JQUERY FILE                                |||
------------------------------------------------------*/
})(jQuery);
