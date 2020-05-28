// Below Jquery is used for showing preview section of product detail Page:
jQuery(document).ready(function() {




    if (jQuery(".turnaround-container dl dd ul li:nth-child(1) div").length > 0) {

    } else {
        jQuery(".turnaround-container dl dd ul li:nth-child(1)").append('<div></div>');
        jQuery(".turnaround-container dl dd ul li:nth-child(2)").append('<div></div>');
    }

    var product = jQuery('.product-name h1').html();
    if (product != "Basic Woven Labels") {
   //     jQuery(".turnaround-container dl dd ul li:nth-child(1) div").append('<div style="background-color: #6f2834;     border: #8e0404 1px solid;border-radius: 5px; width: 75%; margin: 0 auto; padding: 5px;"><div style=" color: #fff; font-size: 12px; font-weight: 600; font-style: ;">Guaranteed Ship Date</div><div style=" color: #fff; font-size: 12px; font-weight: 600; font-style: italic;">' + estdatestandard + '</div></div><div style="font-size: 10px; font-weight: 100;width:75%; margin:0 auto; line-height: 90%;">*This date assumes that you approve your artwork within two business days. Selecting a sample photo will add four business days.</div>');
    //    jQuery(".turnaround-container dl dd ul li:nth-child(2) div").append('<div style="background-color: #6f2834;    border: #8e0404 1px solid; border-radius: 5px; width: 75%; margin: 0 auto; padding: 5px;"><div style=" color: #fff; font-size: 12px; font-weight: 600; font-style: ;">Guaranteed Ship Date</div><div style=" color: #fff; font-size: 12px; font-weight: 600; font-style: italic;">' + estdaterush + '</div></div><div style="font-size: 10px; font-weight: 100; width:75%; margin:0 auto;line-height: 90%;">*This date assumes that you approve your artwork within two business days. Selecting a sample photo will add four business days.</div>');
    }
    jQuery('.product-options').click(function() {
        jQuery('.productwelcome').css('display', 'none');
    });

    var ribbonval = jQuery(".product").eq(0).text();
    var baseqty = jQuery('#csv_qty').val();
    var basewidth = jQuery('#csv_hw_default_w').val();
    var baseheight = jQuery('#csv_hw_default_h').val();
    var baseselectsize = basewidth + ' x ' + baseheight;

    if (product != 'Heat Transfer Labels') {
        jQuery('.qty-container dl dt:nth-child(1)').append('<label style="margin-left:25%">Unit Price</label><label style="margin-left:20%">Total</label>');
    } else {
        jQuery('.qty-container dl dt:nth-child(1)').append('<label style="margin-left:25%"># of Labels</label><label style="margin-left:20%">Total</label>');
    }

    if (ribbonval.indexOf("Ribbon") >= 0) {

        if (baseselectsize == '0.5 x 1') {
            var baseselectsize = '1/2 inch';
            jQuery(".sizeselect").text(baseselectsize);
        } else if (baseselectsize == '0.25 x 1') {
            var baseselectsize = '1/4 inch';
            jQuery(".sizeselect").text(baseselectsize);
        }
    } else {
        jQuery(".sizeselect").text(baseselectsize);
    }



    if (product == 'Heat Transfer Labels') {
        jQuery(".qtyselect").text(baseqty + " sheets");
    } else if (ribbonval.indexOf("Ribbon") >= 0) {
        jQuery(".qtyselect").text(baseqty + " yards");
    } else {
        jQuery(".qtyselect").text(baseqty + " pieces");
    }
    if (product == 'Heat Transfer Labels') {
        set_preview_height_width(1061, 'Width');
        set_preview_height_width(1062, 'Height')
    };
    //	var artheight = jQuery('#'+htartheight).val();
    //var artwidth = jQuery('#'+htartwidth).val();
    var sliderid_arr = rangesliderarray;
    var swatch_arr = swatcharray;
    var price = jQuery('.price-box .price').html();
    var text_price = price.replace('$', '');
    text_price = text_price.replace(',', '');
    var base_url = jQuery('.base_url2').text();

    /********code added for unit price *********/
    jQuery(".qty-container .label").append("<span class='unit_price' style=' color:#333'></span>");
    jQuery(".qty-container .options-list li span.label").prepend("<i class='fa fa-arrow-right' style='text-align: left; float: left; line-height: .8; top: -.9em; position: relative; color:#fff' aria-hidden='true'></i>");

    jQuery(".qty-container .label").trigger("create");
    var text_price = price.replace('$', '');
    var enable_unitprice_qtybox = 1;
    if (enable_unitprice_qtybox == 1) {
        setqtyprice12();
    }

    /********code added for unit price *********/
    //Code for Custom Size start:
    var cssize_count = jQuery('.sizeco').length;
    if (cssize_count > 0) {
        jQuery('#product_addtocart_form .sizebox').hide();
        jQuery('#product_addtocart_form .sizebox_parent').hide();
    }
    //Code for Custom Size end:
    //jQuery.post(base_url+"customcatalogview/ajax/setsess/", {price: text_price});
    // Below function used for swatches:
    var label = jQuery(this).parent().closest('dl').find('dt label').text();
    jQuery('#' + htonecolor).click(function() {

        jQuery('#preview_txt1_width').html(1);
        jQuery('#preview_txt1_height').html(1);
        set_preview_height_width(custom_id_s, label);

    });
    jQuery('#' + httwocolor).click(function() {
        jQuery('#preview_txt1_width').html(2);
        jQuery('#preview_txt1_height').html(2);
        set_preview_height_width(custom_id_s, label);

    });
    jQuery('#' + htthreecolor).click(function() {
        jQuery('#preview_txt1_width').html(3);
        jQuery('#preview_txt1_height').html(3);
        set_preview_height_width(custom_id_s, label);

    });
    jQuery('#' + htfourcolor).click(function() {

        jQuery('#preview_txt1_width').html(4);
        jQuery('#preview_txt1_height').html(4);
        set_preview_height_width(custom_id_s, label);

    });
    jQuery('#' + htfivecolor).click(function() {

        jQuery('#preview_txt1_width').html(5);
        jQuery('#preview_txt1_height').html(5);
        set_preview_height_width(custom_id_s, label);

    });

    //Code for Custom Size start:
    var cssize_count = jQuery('.sizeco').length;
    if (cssize_count > 0) {
        jQuery('#product_addtocart_form .sizebox').hide();
        jQuery('#product_addtocart_form .sizebox_parent').hide();
    }
    //Code for Custom Size end:
    // Below function used for swatches:
    jQuery('#product_addtocart_form li.swatch').each(function() {
        var label = jQuery(this).parent().closest('dl').find('dt label').text();
        jQuery(this).click(function(e) {
            var custom_name = jQuery(this).parent().attr('id');
            custom_id = custom_name.substring(10, custom_name.length);
            var current_val = '';
            current_val = jQuery(this).find('img').attr('alt');

            var parent_class = jQuery(this).parent().closest('dl').parent().attr('class');
            parent_class = parent_class.split(" ");

            // Add default selected class:
            var parent_ul = "#ul_swatch_" + custom_id;
            //jQuery('#product_addtocart_form "'+parent_ul+'" li.swatch').removeClass('swatch-selected');
            jQuery(this).addClass('swatch-selected');
            if (jQuery.inArray(custom_id, swatch_arr) != -1) {
                // Show big image when user select any style:
                var img_path = jQuery(this).find('img').attr('src');
                var curr_id = jQuery(this).attr('id');
                set_style_images(img_path, curr_id);
            }
            if (jQuery.inArray("preview-display", parent_class) != -1) {
                add_style_block(label, custom_id, current_val, current_val);
            }
            if (enable_unitprice_qtybox == 1) {
                setqtyprice12();
            }
            //Code for Custom Size start:
            if (jQuery.inArray("sizeco", parent_class) != -1) {
                if (current_val != 'Custom') {
                    var cvalue = current_val.split("x");
                    var cwvalue = jQuery.trim(cvalue[0]);
                    var chvalue = jQuery.trim(cvalue[1]);
                    jQuery('#preview_txt1_height').text(chvalue);
                    jQuery('#preview_txt1_width').text(cwvalue);

                    var new_chvalue_cm = parseFloat(chvalue) * 2.54;
                    var new_chvalue_text = '" / ' + new_chvalue_cm.toFixed(2) + ' cm';
                    jQuery('#swpreview_txt1_height').text(new_chvalue_text);

                    var new_cwvalue_cm = parseFloat(cwvalue) * 2.54;
                    var new_cwvalue_text = '" / ' + new_cwvalue_cm.toFixed(2) + ' cm';
                    jQuery('#swpreview_txt1_width').text(new_cwvalue_text);

                    var size_height_id = jQuery('#size_height_id').val();
                    var size_width_id = jQuery('#size_width_id').val();

                    jQuery('#options_' + size_width_id + '_text').val(cwvalue);
                    jQuery('#options_' + size_width_id + '_text').next().val(cwvalue);
                    jQuery('#options_' + size_width_id + '_text').next().change();

                    jQuery('#options_' + size_height_id + '_text').val(chvalue);
                    jQuery('#options_' + size_height_id + '_text').next().val(chvalue);
                    jQuery('#options_' + size_height_id + '_text').next().change();

                    set_style_price();
                    var enable_unitprice_qtybox = parseInt(jQuery('.enableunitprice').text());
                    if (enable_unitprice_qtybox == 1) {
                        setqtyprice12();
                    }
                    var selectsize = current_val;

                    if (selectsize == '1 x .25') {
                        var selectsize = '1/4 inch';
                    }
                    if (selectsize == '1 x .625') {
                        var selectsize = '5/8 inch';
                    }
                    if (selectsize == '1 x .5') {
                        var selectsize = '1/2 inch';
                    }
                    if (selectsize == '1 x 1') {
                        var selectsize = '1 inch';
                    }
                    jQuery(".sizeselect").text(selectsize);

                    jQuery('#product_addtocart_form .sizebox').hide();
                    jQuery('#product_addtocart_form .sizebox_parent').hide();
                } else {
                    jQuery('#product_addtocart_form .sizebox').show();
                    jQuery('#product_addtocart_form .sizebox_parent').show();

                    var selectsize = current_val;
                    if (selectsize == '1 x .25') {
                        var selectsize = '1/4 inch';
                    }
                    if (selectsize == '1 x .625') {
                        var selectsize = '5/8 inch';
                    }
                    if (selectsize == '1 x .5') {
                        var selectsize = '1/2 inch';
                    }
                    if (selectsize == '1 x 1') {
                        var selectsize = '1 inch';
                    }
                    jQuery(".sizeselect").text(selectsize);

                }
            }
            //Code for Custom Size end:
            jQuery(".sizeco").each(function() {
                if (jQuery(this).css('display') != 'none') {
                    var style_changed = jQuery(this).find('.swatch-selected').children().children().attr('title');
                    if (style_changed != 'Custom') {
                        var cvalue = style_changed.split("x");
                        var cwvalue = jQuery.trim(cvalue[0]);
                        var chvalue = jQuery.trim(cvalue[1]);
                        jQuery('#preview_txt1_height').text(chvalue);
                        jQuery('#preview_txt1_width').text(cwvalue);
                        jQuery(".sizeselect").text(style_changed);
                        set_style_price();
                    }
                }
            });
        });
    });

    // Below event used for radio, checkbox and textfields;
    jQuery('#product_addtocart_form .product-custom-option').each(function() {
        var tagName = jQuery(this).prop('tagName');
        //alert(tagName); // SELECT, TEXTAREA, INPUT, 
        if (tagName != undefined) {
            // Get label:
            var label = jQuery(this).closest('dl').find('dt label').text();
            if (tagName == 'INPUT' || tagName == 'SELECT') {
                var typeName = jQuery(this).attr('type');
                if (typeName == 'text' || tagName == 'SELECT') {
                    // Add slider on text field:
                    if (typeName == 'text') {
                        var custom_name_s = jQuery(this).attr('name');
                        custom_name_s = custom_name_s.substring(0, custom_name_s.length - 1);
                        custom_id_s = custom_name_s.substring(8, custom_name_s.length);

                        if (jQuery.inArray(custom_id_s, sliderid_arr) != -1) {
                            var csv_hw_min = jQuery('#csv_hw_min').val();
                            var csv_hw_max = jQuery('#csv_hw_max').val();
                            var csv_hw_default_w = jQuery('#csv_hw_default_w').val();
                            var csv_hw_default_h = jQuery('#csv_hw_default_h').val();
                            var min = 0.25;
                            var max = 6;
                            var default_val_w = 1;
                            var default_val_h = 1;
                            var default_val = 1;


                            if (csv_hw_min && csv_hw_min != 0) {
                                min = csv_hw_min;
                            }
                            if (csv_hw_max && csv_hw_max != 0) {
                                max = csv_hw_max;
                            }
                            var new_label = label.toLowerCase();

                            if (csv_hw_default_w && new_label.search("width") > -1) {
                                default_val = csv_hw_default_w;
                            }
                            if (csv_hw_default_h && new_label.search("height") > -1) {
                                default_val = csv_hw_default_h;
                            }
                            var slider_val = default_val;
                            if (jQuery(this).val()) {
                                slider_val = jQuery(this).val();
                            }

                            jQuery(this).hide();
                            if (product == 'Heat Transfer Labels') {
                                jQuery(this).after('<input class="hwclss" type="range" min="' + min + '" max="' + max + '" step="0.5" value="' + slider_val + '" data-rangeslider><output></output><div class="slide_range_s"><custid>' + custom_id_s + '</custid></div>');
                            } else {
                                jQuery(this).after('<input class="hwclss" type="range" min="' + min + '" max="' + max + '" step="0.025" value="' + slider_val + '" data-rangeslider><output></output><div class="slide_range_s"><custid>' + custom_id_s + '</custid></div>');
                            }
                            // Set height and width below preview image section:
                            set_preview_height_width(custom_id_s, label);
                            // Add a select size field above width & height:
                            if (jQuery('.sizebox_parent').length == 0) {
                                jQuery(this).closest('.sizebox').before('<div class="sizebox_parent">Select Your Size*</div>');
                            }
                        }
                    }
                    jQuery(this).change(function() {
                        var custom_name = jQuery(this).attr('name');
                        custom_name = custom_name.substring(0, custom_name.length - 1);
                        custom_id = custom_name.substring(8, custom_name.length);
                        var current_val = '';
                        if (tagName == 'SELECT') {
                            current_val = jQuery(this).find('option:selected').text();
                        } else {
                            current_val = jQuery(this).val();
                        }

                        var parent_class = jQuery(this).parent().closest('dl').parent().attr('class');
                        parent_class = parent_class.split(" ");
                        if (jQuery.inArray("preview-display", parent_class) != -1) {
                            add_style_block(label, custom_id, jQuery(this).val(), current_val);
                        }
                        //add_style_block(label, custom_id, jQuery(this).val(), current_val);
                    });
                }
                if (typeName == 'radio' || typeName == 'checkbox') {
                    jQuery(this).click(function() {
                        var custom_name = jQuery(this).attr('name');
                        custom_name = custom_name.substring(0, custom_name.length - 1);
                        custom_id = custom_name.substring(8, custom_name.length);

                        var parent_class = jQuery(this).closest('dl').parent().attr('class');
                        parent_class = parent_class.split(" ");
                        // Add help text:
                        var tagtip = jQuery(this).next().find('.tagtip-question-custom').length;
                        jQuery('.tagtip-question-custom').hide();
                        if (tagtip > 0) {
                            jQuery(this).next().find('.tagtip-question-custom').show();
                        }
                        if (typeName == 'radio') {
                            var radio_label = jQuery(this).next().find('label').html();
                            if (radio_label == null) {
                                //radio_label = jQuery( this ).next().html();
                                radio_label = jQuery(this).next().next().html();
                                //radio_label = jQuery( this ).find('span').remove();
                            }
                            if (jQuery.inArray("preview-display", parent_class) != -1) {
                                add_style_block(label, custom_id, jQuery(this).val(), radio_label);
                            }
                        } else {
                            if (jQuery.inArray("preview-display", parent_class) != -1) {
                                add_style_block(label, custom_id, jQuery(this).val(), null);
                            }
                        }

                    });
                }
            } else if (tagName == 'TEXTAREA') {
                jQuery(this).change(function() {
                    var custom_name = jQuery(this).attr('name');
                    custom_name = custom_name.substring(0, custom_name.length - 1);
                    custom_id = custom_name.substring(8, custom_name.length);
                    add_style_block(label, custom_id, jQuery(this).val(), jQuery(this).val());
                });
            } else {
                console.log("Fall in else area");
            }
        }
    });

    /** Update some values when page load, we used setTimeout because some values updated in phtml file:**/
    setTimeout(function() {

        var price_update = jQuery('.product-type-data .price-box .price').html();

        jQuery('.customlabel_preview_price .customlabel_preview_price_value').html(price_update);
        //jQuery('.product-info .price-box .price').html(price_update);
        jQuery('.product-info .custom_price .price').html(price_update);
        jQuery('.product-name-area .custom_price .price').html(price_update);

        //Code for Custom Size start:
        var cssize_count = jQuery('.sizeco').length;
        if (cssize_count > 0) {
            jQuery('#product_addtocart_form .sizebox').hide();
            jQuery('#product_addtocart_form .sizebox_parent').hide();
        }
        //Code for Custom Size end:

        // Default selected for swatches:
        jQuery('#product_addtocart_form li.swatch').each(function() {
            var label = jQuery(this).parent().closest('dl').find('dt label').text();
            var custom_name_pre = jQuery(this).parent().attr('id');
            var custom_id_pre = custom_name_pre.substring(10, custom_name_pre.length);
            if (jQuery.inArray(custom_id_pre, swatch_arr) != -1) {
                // Show big image when user select any style:
                var img_path_pre = jQuery(this).find('img').attr('src');
                var curr_id = jQuery(this).attr('id');
                var img_class = jQuery(this).find('img').attr('class');
                img_class = img_class.split(" ");
                if (jQuery.inArray("swatch-selected", img_class) != -1) {
                    set_style_images(img_path_pre, curr_id);
                }
            }
            //Code for Custom Size start:
            var parent_class_1 = jQuery(this).parent().closest('dl').parent().attr('class');
			//console.log('akshay');
			//console.log(parent_class_1);
            parent_class_1 = parent_class_1.split(" ");
            var current_val_1 = '';
            current_val_1 = jQuery(this).find('img').attr('alt');
            var getStyleClass = jQuery(this).attr('class');
            getStyleClass = getStyleClass.split(" ");
            if ((jQuery.inArray("sizeco", parent_class_1) != -1) && (jQuery.inArray("swatch-selected", getStyleClass) != -1)) {
                if (current_val_1 != 'Custom') {
                    var cvalue = current_val_1.split("x");
                    var cwvalue = jQuery.trim(cvalue[0]);
                    var chvalue = jQuery.trim(cvalue[1]);
                    jQuery('#preview_txt1_height').text(chvalue);
                    jQuery('#preview_txt1_width').text(cwvalue);
                    var new_chvalue_cm = parseFloat(chvalue) * 2.54;
                    var new_chvalue_text = '" / ' + new_chvalue_cm.toFixed(2) + ' cm';
                    jQuery('#swpreview_txt1_height').text(new_chvalue_text);

                    var new_cwvalue_cm = parseFloat(cwvalue) * 2.54;
                    var new_cwvalue_text = '" / ' + new_cwvalue_cm.toFixed(2) + ' cm';
                    jQuery('#swpreview_txt1_width').text(new_cwvalue_text);
                    set_style_price();
                    var enable_unitprice_qtybox = parseInt(jQuery('.enableunitprice').text());
                    if (enable_unitprice_qtybox == 1) {
                        setqtyprice12();
                    }
                    jQuery('#product_addtocart_form .sizebox').hide();
                    jQuery('#product_addtocart_form .sizebox_parent').hide();
                } else {
                    jQuery('#product_addtocart_form .sizebox').show();
                    jQuery('#product_addtocart_form .sizebox_parent').show();
                    jQuery('#product_addtocart_form .sizebox').show();
                    jQuery('#product_addtocart_form .sizebox_parent').show();

                }
            }
            //Code for Custom Size end:
        });
        // Default selected for swatches end:
        // default selected for radio, checkbox and textfields and select box;
        jQuery('#product_addtocart_form .product-custom-option').each(function() {
            var tagName = jQuery(this).prop('tagName');
            if (tagName != undefined) {
                // Get label:
                var label = jQuery(this).closest('dl').find('dt label').text();
                var parent_class1 = jQuery(this).closest('dl').parent().attr('class');
                parent_class1 = parent_class1.split(" ");
                if (tagName == 'INPUT' || tagName == 'SELECT') {
                    var typeName = jQuery(this).attr('type');
                    if (typeName == 'text' || tagName == 'SELECT') {
                        // Set default value for select box:
                        var style_dis_sel = jQuery(this).closest('dl').parent().css('display');
                        if (tagName == 'SELECT' && style_dis_sel == 'block') {

                            var custom_name = jQuery(this).attr('name');
                            custom_name = custom_name.substring(0, custom_name.length - 1);
                            custom_id = custom_name.substring(8, custom_name.length);

                            var current_val = '';
                            if (tagName == 'SELECT') {
                                current_val = jQuery(this).find('option:selected').text();
                            } else {
                                current_val = jQuery(this).val();
                            }
                            if (jQuery.inArray("preview-display", parent_class1) != -1) {
                                add_style_block(label, custom_id, jQuery(this).val(), current_val);
                            }
                        }
                    }
                    if (typeName == 'radio' || typeName == 'checkbox') {
                        // Set default value when page will load:
                        var field_name = jQuery(this).attr('name');
                        var style_dis = jQuery(this).closest('dl').parent().css('display');

                        if ((jQuery('input[name="' + field_name + '"]:checked').val() == jQuery(this).val() && style_dis == 'block' && typeName == 'radio')) {
                            var custom_name_2 = jQuery(this).attr('name');
                            custom_name_2 = custom_name_2.substring(0, custom_name_2.length - 1);
                            custom_id_2 = custom_name_2.substring(8, custom_name_2.length);
                            if (typeName == 'radio') {
                                var radio_label = jQuery(this).next().find('label').html();
                                if (radio_label == null) {
                                    //radio_label = jQuery( this ).next().html();
                                    radio_label = jQuery(this).next().next().html();
                                }
                                if (jQuery.inArray("preview-display", parent_class1) != -1) {
                                    add_style_block(label, custom_id_2, jQuery(this).val(), radio_label);
                                }
                            } else {
                                if (jQuery.inArray("preview-display", parent_class1) != -1) {
                                    add_style_block(label, custom_id_2, jQuery(this).val(), null);
                                }
                            }
                        }
                        // Set default value when page will load end:
                    }
                } else if (tagName == 'TEXTAREA') {
                    // Set default value when page will load:
                    var deftext_value = jQuery(this).val();
                    if (deftext_value) {
                        var custom_name_3 = jQuery(this).attr('name');
                        custom_name_3 = custom_name_3.substring(0, custom_name_3.length - 1);
                        custom_id_3 = custom_name_3.substring(8, custom_name_3.length);
                        add_style_block(label, custom_id_3, jQuery(this).val(), jQuery(this).val());
                    }
                    // Set default value when page will load end:
                } else {
                    console.log("Fall in else area default:");
                }
            }
        });
    }, 5000);

    jQuery('.qty-container li input').each(function() {
        // Add help text:

        var tagtip = jQuery(this).next().find('.tagtip-question-custom').length;
        jQuery('.qty-container li .tagtip-question-custom').show();

        if (tagtip > 0) {
            jQuery('.qty-container li .tagtip-question-custom').addClass('tagtip-question-custom-best');
            jQuery('.qty-container li .tagtip-question-custom-best').removeClass('tagtip-question-custom');
        }

        jQuery(this).click(function(e) {
            var quat_curval = jQuery(this).next().find('label').html();
            quat_curval = jQuery.trim(quat_curval);
            jQuery('.add-to-cart #qty').val(quat_curval);
            jQuery('.add-to-cart #qty').change();
            var qtysize = quat_curval + ' pieces';
            var ribbonval = jQuery(".product").eq(0).text();

            if (ribbonval.indexOf("Ribbon") >= 0) {
                var qtysize = quat_curval + ' yards';

            }
            if (ribbonval.indexOf("Heat Transfer Labels") >= 0) {
                var numllabels = jQuery('#' + htlabelspersheet).val();
                var qtysize = quat_curval + ' Sheets';
            }
            jQuery(".qtyselect").text(qtysize);


            // Update price & qty:
            /********code added for unit price *********/
            if (e.hasOwnProperty('originalEvent')) {
                set_style_price();
            } else {
                set_style_price123();
            }
            /********code added for unit price *********/
        })
    });

    //Code for Custom Size start
    jQuery('.dtogle').hide();
    var dtogleCount = jQuery('.dtogle').length;
    if (dtogleCount > 0) {
        var toggleDiv = "<div class = 'togglediv'><p>View Extra Options</p> <img width='28px' height='28px' src='/skin/frontend/ultimo/default/images/arrow.png'></div>";
        jQuery('.dtogle').first().before(toggleDiv);
    }
    jQuery(".togglediv").click(function() {
        jQuery(".dtogle").toggle();
        if (jQuery('.dtogle').first().css('display') == 'block') {
            jQuery(".stickit-end").css('bottom', '450px');
        } else {
            jQuery(".stickit-end").css('bottom', '-120px');
        }
    });

    //Code for Custom Size end

    /*
     * Use this function when any event fire:
     * @param String label
     * @param String custom_id
     * @param Mixed val
     * @param Int option_value
     * return nothing   
     */
    function add_style_block(label, custom_id, val, option_value) {
        var proqty = 1;
        label = label.replace("*", "");
        var storeids = [];
        jQuery('.customlabel_preview').each(function() {
            storeids[jQuery(this).attr('storeid')] = jQuery(this).attr('storeid');
        });

        var html_content = '';
        if (storeids.length == 0) {
            html_content = "<div class='customlabel_preview' storeid = '" + custom_id + "' id='customlabel_preview_" + custom_id + "'><div class='customlabel_preview_label' id='" + custom_id + "'>" + label + ":</div><div class='customlabel_preview_value' id='customlabel_preview_value_" + custom_id + "'>" + option_value + "</div></div>";
        } else if (storeids[custom_id] == custom_id) {
            var split_custom_id = custom_id.split('][');
            custom_id = split_custom_id[0];
            jQuery('#customlabel_preview_value_' + custom_id).html(option_value);
        } else {
            html_content = "<div class='customlabel_preview' storeid = '" + custom_id + "' id='customlabel_preview_" + custom_id + "'><div class='customlabel_preview_label' id='" + custom_id + "'>" + label + ":</div><div class='customlabel_preview_value' id='customlabel_preview_value_" + custom_id + "'>" + option_value + "</div></div>";
        }
        // Update price & qty:
        set_style_price();

        jQuery(".customlabel_preview_qty").before(html_content);
        // Store all dependent options id which is in display:block mode:
        getCustomDisplayStyle();
        // Store all dependent options id which is in display:block mode end:
    }

    /*
     * Get Display style status of custom option:
     */
    function getCustomDisplayStyle() {
        jQuery('#product_addtocart_form .product-custom-option').each(function() {
            var tagName = jQuery(this).prop('tagName');
            if (tagName != undefined) {
                // Get label:
                var label = jQuery(this).closest('dl').find('dt label').text();
                var parent_class1 = jQuery(this).closest('dl').parent().attr('class');
                parent_class1 = parent_class1.split(" ");
                if (tagName == 'INPUT' || tagName == 'SELECT') {
                    var typeName = jQuery(this).attr('type');
                    if (typeName == 'text' || tagName == 'SELECT') {
                        // Set default value for select box:
                        var style_dis_sel = jQuery(this).closest('dl').parent().css('display');
                        var custom_name = jQuery(this).attr('name');
                        custom_name = custom_name.substring(0, custom_name.length - 1);
                        custom_id = custom_name.substring(8, custom_name.length);
                        var current_val = '';
                        if (tagName == 'SELECT') {
                            current_val = jQuery(this).find('option:selected').text();
                        } else {
                            current_val = jQuery(this).val();
                        }
                        if (tagName == 'SELECT' && style_dis_sel == 'block') {
                            if (jQuery.inArray("preview-display", parent_class1) != -1) {
                                setCustomStyle(label, custom_id, jQuery(this).val(), current_val);
                                var split_custom_id = custom_id.split('][');
                                custom_id = split_custom_id[0];
                                jQuery(".custom-level-comp-preview #customlabel_preview_" + custom_id).show();
                            }
                        }

                        if (tagName == 'SELECT' && style_dis_sel == 'none') {
                            var split_custom_id = custom_id.split('][');
                            custom_id = split_custom_id[0];
                            jQuery(".custom-level-comp-preview #customlabel_preview_" + custom_id).hide();
                        }
                    }
                    if (typeName == 'radio' || typeName == 'checkbox') {
                        var field_name = jQuery(this).attr('name');
                        var style_dis = jQuery(this).closest('dl').parent().css('display');
                        var custom_name_2 = jQuery(this).attr('name');
                        custom_name_2 = custom_name_2.substring(0, custom_name_2.length - 1);
                        custom_id_2 = custom_name_2.substring(8, custom_name_2.length);
                        if ((style_dis == 'none' && typeName == 'radio')) {
                            jQuery(".custom-level-comp-preview #customlabel_preview_" + custom_id_2).hide();
                        }
                    }
                } else {
                    //console.log("Fall in else area default1:");
                }
            }
        });
    }

    /*
     * Use this function for dependent custom options:
     * @param String label
     * @param String custom_id
     * @param Mixed val
     * @param Int option_value
     * return nothing   
     */
    function setCustomStyle(label, custom_id, val, option_value) {
        label = label.replace("*", "");
        var storeids = [];
        jQuery('.customlabel_preview').each(function() {
            storeids[jQuery(this).attr('storeid')] = jQuery(this).attr('storeid');
        });
        var html_content = '';
        if (storeids.length == 0) {
            html_content = "<div class='customlabel_preview' storeid = '" + custom_id + "' id='customlabel_preview_" + custom_id + "'><div class='customlabel_preview_label' id='" + custom_id + "'>" + label + ":</div><div class='customlabel_preview_value' id='customlabel_preview_value_" + custom_id + "'>" + option_value + "</div></div>";
        } else if (storeids[custom_id] == custom_id) {
            if (option_value != "-- Please Select --") {
                var split_custom_id = custom_id.split('][');
                custom_id = split_custom_id[0];
                jQuery('#customlabel_preview_value_' + custom_id).html(option_value);
                //console.log(storeids[custom_id]);
            }
        } else {
            html_content = "<div class='customlabel_preview' storeid = '" + custom_id + "' id='customlabel_preview_" + custom_id + "'><div class='customlabel_preview_label' id='" + custom_id + "'>" + label + ":</div><div class='customlabel_preview_value' id='customlabel_preview_value_" + custom_id + "'>" + option_value + "</div></div>";
        }
        jQuery(".customlabel_preview_qty").before(html_content);
    }

    /*
     * Set style image on preview section and show big images below stayle section:
     */
    function set_style_images(img_path, curr_id) {
        jQuery('.customlabel_preview_1_img img').attr('src', img_path);
        var style_img_path = jQuery('.style_big_img').text();
        var style_img_path_val = style_img_path + 'customcatalogview/' + curr_id + '.png';
        if (jQuery('.style_big_img_dis').length > 0) {
            jQuery('.style_big_img_dis img').attr('src', style_img_path_val);
        } else {
            jQuery('#' + curr_id).closest('dl').after('<div class="style_big_img_dis grid12-11"><img src = "' + style_img_path_val + '" /></div>');
        }
    }

    /*
     * Set preview price:
     */
    function set_style_price() {

        var product_percent_price = 0;
        var product_csv_percent_price = 0;
        var final_csv_percent_price = 0;
        var qty = jQuery('.add-to-cart .qty-holder #qty').val();
        var price = jQuery('.product-info .price-box .price').html();
        var text_price = price.replace('$', '');
        text_price = text_price.replace(',', '');
        var unit_price = parseFloat(text_price) / parseInt(qty);
        unit_price = unit_price.toFixed(2);
        unit_price = '$' + unit_price;
        jQuery('.customlabel_preview_qty .customlabel_preview_qty_value').html(qty);
        jQuery('.customlabel_preview_qty').show();
        jQuery('.customlabel_preview_price').show();
        jQuery('.customlabel_preview_unitprice').show();
        var csv_pricing_status = jQuery('#csv_pricing_status').val();
        // Update price, height & width in text box for CSV pricing:
        if (csv_pricing_status == 1) {
            jQuery('#custom_catalog_price').val(text_price);
            // Add price code for height & width:
            var qty_h = jQuery('.add-to-cart .qty-holder #qty').val();
            var heig = jQuery('#preview_txt1_height').text();
            var wid = jQuery('#preview_txt1_width').text();
            var prodid = jQuery('.productidss').text();
            var base_url = jQuery('.base_url2').text();
            // Code for Percent Pricing
            var opoptions = getCustomOptionPrice();
            for (var key_option in opoptions) {
                if (jQuery.isNumeric(key_option)) {
                    product_percent_price += getOptionPriceByQtyDefaultProduct(opoptions[key_option][1], key_option, opoptions[key_option][0]);
                }
            }
            // Code for Percent Pricing end
            jQuery.post(base_url + "customcatalogview/ajax/index/", {
                height: heig,
                width: wid,
                qty: qty_h,
                productid: prodid
            }, function(data) {
                var data = jQuery.parseJSON(data);
                var tot_price_label = data.tot_price;
                var unit_csvp_price = data.unit_price;
                if (tot_price_label) {
                    var custom_pprice = data.tier_price;
                    var base_total_price = custom_pprice * qty_h;
                    var final_price = parseFloat(text_price) + parseFloat(tot_price_label) - parseFloat(base_total_price);
                    // Code for Percent Pricing
                    var opoptions1 = getCustomOptionPrice();
                    for (var key_option1 in opoptions1) {
                        if (jQuery.isNumeric(key_option1)) {
                            product_csv_percent_price += getOptionPriceByQtyCsvProduct(opoptions1[key_option1][1], key_option1, opoptions1[key_option1][0], unit_csvp_price);
                            //console.log(opoptions1[key_option1][1]+":"+key_option1+":"+opoptions1[key_option1][0]+":"+product_csv_percent_price);
                        }
                    }
                    final_csv_percent_price = parseFloat(product_csv_percent_price) - parseFloat(product_percent_price);
                    final_price = parseFloat(final_price) + parseFloat(final_csv_percent_price);
                    // Code for Percent Pricing end

                    final_price = final_price.toFixed(2);
                    unit_price = final_price / qty_h;
                    unit_price = unit_price.toFixed(2);
                    unit_price = '$' + unit_price;
                    var final_price_dol = '$' + final_price;
                    jQuery('.customlabel_preview_price .customlabel_preview_price_value').html(final_price_dol);
                    //jQuery('.product-info .price-box .price').html(final_price_dol);
                    jQuery("#qtyselect").text(qty_h);
                    jQuery('.product-info .custom_price .price').html(final_price_dol + " | " + unit_price + "  per piece");
                    jQuery('.product-name-area .custom_price .price').html(final_price_dol + "" + unit_price + "  per piece");
                    jQuery('.customlabel_preview_unitprice .customlabel_preview_unitprice_value').html(unit_price);
                    if (enable_unitprice_qtybox == 1) {
                        /********code added for unit price *********/
                        jQuery('.qty-container li span.label label').each(function() {
                            var txt = jQuery(this).text();
                            if (qty_h == jQuery.trim(txt)) {
                                var iret = jQuery(this).attr("for");
                                if (product != 'Heat Transfer Labels') {
                                    jQuery('.qty-container .options-list #' + iret).next().find('.unit_price').html('<table><tr><td>' + unit_price + ' Each </td><td>' + final_price_dol + '  Total</td></tr></table>');
                                    jQuery('.qty-container .options-list #' + iret).next().find('.unit_price').trigger("create");
                                } else {

                                    jQuery('.qty-container .options-list #' + iret).next().find('.unit_price .labelvalue').html('<table style="width:50%;float:right"><tr><td>' + final_price_dol + '  Total</td></tr></table>');
                                    jQuery('.qty-container .options-list #' + iret).next().find('.unit_price .labelvalue').trigger("create");

                                }



                            }
                        });
                        /********code added for unit price *********/
                    }
                    jQuery('#csv_product_price').val(final_price);
                }
            });
        } else {
            jQuery('.customlabel_preview_price .customlabel_preview_price_value').html(price);
            //jQuery('.product-info .price-box .price').html(price);
            jQuery("#qtyselect").text(qty_h);
            jQuery('.product-info .custom_price .price').html(price + " | " + unit_price + " per piece");
            jQuery('.product-name-area .custom_price .price').html(price + " | " + unit_price + " per piece");
            jQuery('.customlabel_preview_unitprice .customlabel_preview_unitprice_value').html(unit_price);
            if (enable_unitprice_qtybox == 1) {
                /********code added for unit price *********/
                jQuery('.qty-container li span.label label').each(function() {
                    var txt = jQuery(this).text();
                    if (qty_h == jQuery.trim(txt)) {
                        var iret = jQuery(this).attr("for");
                        if (product != 'Heat Transfer Labels') {
                            jQuery('.qty-container .options-list #' + iret).next().find('.unit_price').html('<table><tr><td>' + unit_price + ' Each </td><td>' + final_price_dol + '  Total</td></tr></table>');
                        } else {
                            jQuery('.qty-container .options-list #' + iret).next().find('.unit_price .labelvalue').html('<table style="width:50%;float:right"><tr><td>' + final_price_dol + '  Total</td></tr></table>');
                        }
                    }
                });
                /********code added for unit price *********/
            }
            jQuery('#csv_product_price').val(price);
        }
    }

    /********code added for unit price *********/
    function set_style_price123() {

        var product_percent_price = 0;
        var product_csv_percent_price = 0;
        var qty = jQuery('.qty').val();
        var price = jQuery('.price-box .price').html();
        var text_price = price.replace('$', '');
        text_price = text_price.replace(',', '');
        var unit_price = parseFloat(text_price) / parseInt(qty);
        unit_price = unit_price.toFixed(2);
        base_unit_price = unit_price;
        unit_price = '$' + unit_price;
        jQuery('.customlabel_preview_qty .customlabel_preview_qty_value').html(qty);
        jQuery('.customlabel_preview_qty').show();
        jQuery('.customlabel_preview_price').show();
        jQuery('.customlabel_preview_unitprice').show();
        var csv_pricing_status = jQuery('#csv_pricing_status').val();
        // Update price, height & width in text box for CSV pricing:
        if (csv_pricing_status == 1) {
            jQuery('#custom_catalog_price').val(text_price);
            // Add price code for height & width:
            var qty_h = jQuery('.qty').val();
            var heig = jQuery('#preview_txt1_height').text();
            var wid = jQuery('#preview_txt1_width').text();
            var prodid = jQuery('.productidss').text();
            var base_url = jQuery('.base_url2').text();
            jQuery.post(base_url + "customcatalogview/ajax/index/", {
                height: heig,
                width: wid,
                qty: qty_h,
                productid: prodid
            }, function(data) {

                var data = jQuery.parseJSON(data);
                var tot_price_label = data.tot_price;
                var unit_csvp_price = data.unit_price;
                if (tot_price_label) {
                    var custom_pprice = data.tier_price;
                    var base_total_price = custom_pprice * qty_h;
                    var final_price = parseFloat(text_price) + parseFloat(tot_price_label) - parseFloat(base_total_price);
                    console.log("final_price : " + final_price);

                    // Code for Percent Pricing		
                    var opoptions1 = getCustomOptionPrice();
                    console.log("opoptions1 : " + opoptions1);
                    for (var key_option1 in opoptions1) {
                        if (jQuery.isNumeric(key_option1)) {
                            product_csv_percent_price += getOptionPriceByQtyCsvProduct(opoptions1[key_option1][1], key_option1, opoptions1[key_option1][0], unit_csvp_price, qty_h);
                            console.log("product_csv_percent_price : " + opoptions1[key_option1][1] + ":" + key_option1 + ":" + opoptions1[key_option1][0] + ":" + product_csv_percent_price);
                        }
                    }
                    final_csv_percent_price = parseFloat(product_csv_percent_price) - parseFloat(product_percent_price);
                    final_price = parseFloat(final_price) + parseFloat(final_csv_percent_price);
                    // Code for Percent Pricing end

                    final_price = final_price.toFixed(2);
                    unit_price = final_price / qty_h;
                    unit_price = unit_price.toFixed(2);
                    base_unit_price = unit_price;
                    unit_price = '$' + unit_price;
                    var final_price_dol = '$' + final_price;
                    jQuery('.qty-container li span.label label').each(function() {
                        var txt = jQuery(this).text();
                        if (qty_h == jQuery.trim(txt)) {
                            var iret = jQuery(this).attr("for");
                            if (product != 'Heat Transfer Labels') {
                                jQuery('.qty-container .options-list #' + iret).next().find('.unit_price').html('<table><tr><td>' + unit_price + ' Each </td><td>' + final_price_dol + '  Total</td></tr></table>');
                            } else {
                                jQuery('.qty-container .options-list #' + iret).next().find('.unit_price .labelvalue').html('<table style="width:50%;float:right"><tr><td>' + final_price_dol + '  Total</td></tr></table>');
                            }
                        }
                    });
                }
            });

        } else {
            jQuery('.customlabel_preview_price .customlabel_preview_price_value').html(price);
            jQuery('.customlabel_preview_unitprice .customlabel_preview_unitprice_value').html(unit_price);
            var id = jQuery(".qty-container ul").attr("id");
            var arr = id.split('-');

            qtyname = "options[" + arr[1] + "]";
            var idd = "input[name='" + qtyname + "']:checked"
            var opid = jQuery(idd).attr("id");
            var next_qty_id = opid.split('_');

            if (parseInt(qty) == 25) {
                nextopid = arr[0] + "_" + arr[1] + "_1";
                if (product != 'Heat Transfer Labels') {
                    jQuery('.qty-container .options-list #' + nextopid).next().find('.unit_price').html('<table><tr><td>' + unit_price + ' Each </td><td>' + final_price_dol + '  Total</td></tr></table>');
                } else {
                    jQuery('.qty-container .options-list #' + nextopid).next().find('.unit_price .labelvalue').html('<table style="width:50%;float:right"><tr><td>' + final_price_dol + '  Total</td></tr></table>');
                }
            }
            if (parseInt(next_qty_id[2]) != 1 && parseInt(qty) != 25) {
                var next_qtyid = parseInt(next_qty_id[2]) + 1;
                var nextopid = next_qty_id[0] + '_' + next_qty_id[1] + '_' + next_qtyid;
                if (product != 'Heat Transfer Labels') {
                    jQuery('.qty-container .options-list #' + nextopid).next().find('.unit_price').html('<table><tr><td>' + unit_price + ' Each </td><td>' + final_price_dol + '  Total</td></tr></table>');
                } else {
                    jQuery('.qty-container .options-list #' + nextopid).next().find('.unit_price .labelvalue').html('<table style="width:50%;float:right"><tr><td>' + final_price_dol + '  Total</td></tr></table>');
                }
            }
            if (parseInt(qty) == 50) {
                nextopid = arr[0] + "_" + arr[1] + "_2";
                if (product != 'Heat Transfer Labels') {
                    jQuery('.qty-container .options-list #' + nextopid).next().find('.unit_price').html('<table><tr><td>' + unit_price + ' Each </td><td>' + final_price_dol + '  Total</td></tr></table>');
                } else {
                    jQuery('.qty-container .options-list #' + nextopid).next().find('.unit_price .labelvalue').html('<table style="width:50%;float:right"><tr><td>' + final_price_dol + '  Total</td></tr></table>');
                }
            }
        }
    }
    /********code added for unit price *********/

    /*
     * Set preview height & width below image:
     * @param custom id
     * @return HTML
     */
    function set_preview_height_width(custom_id_s, label) {
        var new_label = label.toLowerCase();
        //console.log(new_label.search("width"));
        var hwcls = '';
        var hwcls_text = '';
        if (new_label.search("width") > -1) {
            hwcls = 'width';
            hwcls_text = '<div class="pwidth_main"><span class="pwidth_labeltxt">Width</span>';
            //Code for Custom Size start:
            jQuery('#size_width_id').val(custom_id_s);
            //Code for Custom Size start end:
        }
        if (new_label.search("height") > -1) {
            hwcls = 'height';
            hwcls_text = '<div class="pheight_main"><span class="pheight_labeltxt">Height</span>';
            //Code for Custom Size start:
            jQuery('#size_height_id').val(custom_id_s);
            //Code for Custom Size start end:
        }

        if (jQuery('.customlabel_preview_1help').find('#preview_txt1_width').length > 0) {
            jQuery('.customlabel_preview_1help .prev_cross_symbol').after(hwcls_text + '<span id="preview_txt1_' + hwcls + '" class="preview_h_w_' + custom_id_s + '"></span><span id="swpreview_txt1_' + hwcls + '" class="swpreview_h_w_' + custom_id_s + '"></span></div>');
        } else {
            jQuery('.customlabel_preview_1help .preview_txt').after(hwcls_text + '<span id="preview_txt1_' + hwcls + '" class="preview_h_w_' + custom_id_s + '"></span><span id="swpreview_txt1_' + hwcls + '" class="swpreview_h_w_' + custom_id_s + '"></span></div><span class="prev_cross_symbol"> x </span>');
        }
    }
});

jQuery(document).ready(function() {
    var enable_unitprice_qtybox = parseInt(jQuery('.enableunitprice').text());
    jQuery('#product_addtocart_form li.swatch').each(function() {
        jQuery(this).click(function() {
            var csv_pricing_status = jQuery('#csv_pricing_status').val();

            if (enable_unitprice_qtybox == 1) {
                setqtyprice12();
            }

        });
    });
    jQuery('#product_addtocart_form .product-custom-option').each(function() {
        var tagName = jQuery(this).prop('tagName');
        if (tagName != undefined) {

            if (tagName == 'INPUT' || tagName == 'SELECT') {
                var typeName = jQuery(this).attr('type');
                var iname = jQuery(this).attr('name');
                if (typeName == 'text' || tagName == 'SELECT') {
                    jQuery(this).change(function() {
                        var csv_pricing_status = jQuery('#csv_pricing_status').val();

                        if (enable_unitprice_qtybox == 1) {
                            setqtyprice12();
                        }

                    });
                }
                if (typeName == 'radio' || typeName == 'checkbox') {
                    var qtyname = '';
                    var id = jQuery(".qty-container ul").attr("id");
                    var arr = id.split('-');
                    qtyname = "options[" + arr[1] + "]";
                    if (qtyname != iname) {
                        jQuery(this).click(function() {

                            var csv_pricing_status = jQuery('#csv_pricing_status').val();

                            if (enable_unitprice_qtybox == 1) {
                                setqtyprice12();
                            }

                        });
                    }
                }
            }
        }
    });
});

function setqtyprice12() {
    jQuery(".customlabel_preview_qty_value").html();
    var qtyname = '';
    var id = jQuery(".qty-container ul").attr("id");
    var arr = id.split('-');
    qtyname = "options[" + arr[1] + "]";
    var idd = "input[name='" + qtyname + "']:checked"
    var opid = jQuery(idd).attr("id");
    jQuery("#cust").css("opacity", "0.5");
    jQuery("#theImg").css("display", "block");
    //console.log("hello");
    jQuery('.qty-container li input').each(function() {
	
        jQuery(this).trigger("click");
    });
    jQuery("#" + opid).trigger("click");
    setTimeout(function() {
		var product = jQuery('.product-name h1').html();
		if(product = "Basic Woven Labels"){
			jQuery('.qty-container li input').each(function() {
			jQuery(this).trigger("click");
		});
		}
        jQuery("#" + opid).trigger("click");
        jQuery("#theImg").css("display", "none");
        jQuery("#cust").css("opacity", "1");
    }, 1500);
	if(product = "Basic Woven Labels"){
		set_style_price();
		};		
	}

jQuery(".product-options-wrapper").click(function(event) {
    jQuery(this).parent().attr('id');
    var clickid = event.target.id;

});

function setqtyprice(q, count) {
    var qty = parseInt(q);

    var product_percent_price = 0;
    var product_csv_percent_price = 0;
    var price = jQuery('.price-box .price').html();
    var text_price = price.replace('$', '');
    text_price = text_price.replace(',', '');
    var unit_price = parseFloat(text_price) / parseInt(qty);
    unit_price = unit_price.toFixed(2);
    unit_price = '$' + unit_price;

    var csv_pricing_status = jQuery('#csv_pricing_status').val();
    // Update price, height & width in text box for CSV pricing:
    if (csv_pricing_status == 1) {
        jQuery('#custom_catalog_price').val(text_price);
        // Add price code for height & width:
        var qty_h = qty;
        var heig = parseFloat(jQuery('#csv_hw_default_h').val());
        var wid = parseFloat(jQuery('#csv_hw_default_w').val());
        var prodid = jQuery('.productidss').text();
        var base_url = jQuery('.base_url2').text();

        // Code for Percent Pricing end
        jQuery.post(base_url + "customcatalogview/ajax/index/", {
            height: heig,
            width: wid,
            qty: qty_h,
            productid: prodid
        }, function(data) {
            var data = jQuery.parseJSON(data);

            var tot_price_label = data.tot_price;
            var unit_csvp_price = data.unit_price;
            if (tot_price_label) {
                var custom_pprice = data.tier_price;
                var base_total_price = custom_pprice * qty_h;
                var final_price = parseFloat(text_price) + parseFloat(tot_price_label) - parseFloat(base_total_price);

                // Code for Percent Pricing		
                var opoptions1 = getCustomOptionPrice();

                for (var key_option1 in opoptions1) {
                    if (jQuery.isNumeric(key_option1)) {
                        product_csv_percent_price += getOptionPriceByQtyCsvProduct(opoptions1[key_option1][1], key_option1, opoptions1[key_option1][0], unit_csvp_price);

                    }
                }
                final_csv_percent_price = parseFloat(product_csv_percent_price) - parseFloat(product_percent_price);
                final_price = parseFloat(final_price) + parseFloat(final_csv_percent_price);
                // Code for Percent Pricing end

                final_price = final_price.toFixed(2);
                unit_price = final_price / qty_h;
                unit_price = unit_price.toFixed(2);
                base_unit_price = unit_price;
if(jQuery('.qty-container .options-list #' + iret+'.label label').text("5 ")){jQuery('.qty-container .options-list #' + iret+'.label label').text("5 Samples");}

                unit_price = '$' + unit_price;
                var final_price_dol = '$' + final_price;
                jQuery('.qty-container #options_289_' + count).next().next().html(data.unit_price);

                /********code added for unit price *********/
                unit_price1 = '$' + data.unit_price;
                var id = jQuery(".qty-container ul").attr("id");
                var arr = id.split('-');
                var qtyname = "options_" + arr[1] + "_";
                //console.log("4");
                if (product != 'Heat Transfer Labels') {
                    jQuery('.qty-container .options-list #' + iret).next().find('.unit_price').html('<table style="width:50%;float:right"><tr><td>' + unit_price + ' Each </td><td>' + final_price_dol + '  Total</td></tr></table>');
                } else {
                    jQuery('.qty-container .options-list #' + iret).next().find('.unit_price .labelvalue').html('<table style="width:50%;float:right"><tr><td>' + final_price_dol + '  Total</td></tr></table>');
                }
                /********code added for unit price *********/

            }
        });
    } else {
        var prodid = jQuery('.productidss').text();
        var base_url = jQuery('.base_url2').text();
        jQuery.post(base_url + "customcatalogview/ajax/defaultprice/", {
            qty: qty,
            productid: prodid
        }, function(data) {
            /********code added for unit price *********/
            var id = jQuery(".qty-container ul").attr("id");
            var arr = id.split('-');
            var qtyname = "options_" + arr[1] + "_";
            var tot_default_price = parseFloat(data) * qty;
            tot_default_price = '$' + tot_default_price.toFixed(2);
            if (product != 'Heat Transfer Labels') {
                jQuery('.qty-container .options-list #' + iret).next().find('.unit_price').html('<table style="width:50%;float:right"><tr><td>' + unit_price + ' Each </td><td>' + final_price_dol + '  Total</td></tr></table>');
         	 
	 } else {
                jQuery('.qty-container .options-list #' + iret).next().find('.unit_price .labelvalue').html('<table style="width:50%;float:right"><tr><td>' + final_price_dol + '  Total</td></tr></table>');
            }
            /********code added for unit price *********/

        });

    }


}
/*
     * Set preview price:
     */
    function set_style_price() {

        var product_percent_price = 0;
        var product_csv_percent_price = 0;
        var final_csv_percent_price = 0;
        var qty = jQuery('.add-to-cart .qty-holder #qty').val();
        var price = jQuery('.product-info .price-box .price').html();
        var text_price = price.replace('$', '');
        text_price = text_price.replace(',', '');
        var unit_price = parseFloat(text_price) / parseInt(qty);
        unit_price = unit_price.toFixed(2);
        unit_price = '$' + unit_price;
        jQuery('.customlabel_preview_qty .customlabel_preview_qty_value').html(qty);
        jQuery('.customlabel_preview_qty').show();
        jQuery('.customlabel_preview_price').show();
        jQuery('.customlabel_preview_unitprice').show();
        var csv_pricing_status = jQuery('#csv_pricing_status').val();
        // Update price, height & width in text box for CSV pricing:
        if (csv_pricing_status == 1) {
            jQuery('#custom_catalog_price').val(text_price);
            // Add price code for height & width:
            var qty_h = jQuery('.add-to-cart .qty-holder #qty').val();
            var heig = jQuery('#preview_txt1_height').text();
            var wid = jQuery('#preview_txt1_width').text();
            var prodid = jQuery('.productidss').text();
            var base_url = jQuery('.base_url2').text();
            // Code for Percent Pricing
            var opoptions = getCustomOptionPrice();
            for (var key_option in opoptions) {
                if (jQuery.isNumeric(key_option)) {
                    product_percent_price += getOptionPriceByQtyDefaultProduct(opoptions[key_option][1], key_option, opoptions[key_option][0]);
                }
            }
            // Code for Percent Pricing end
            jQuery.post(base_url + "customcatalogview/ajax/index/", {
                height: heig,
                width: wid,
                qty: qty_h,
                productid: prodid
            }, function(data) {
                var data = jQuery.parseJSON(data);
                var tot_price_label = data.tot_price;
                var unit_csvp_price = data.unit_price;
                if (tot_price_label) {
                    var custom_pprice = data.tier_price;
                    var base_total_price = custom_pprice * qty_h;
                    var final_price = parseFloat(text_price) + parseFloat(tot_price_label) - parseFloat(base_total_price);
                    // Code for Percent Pricing
                    var opoptions1 = getCustomOptionPrice();
                    for (var key_option1 in opoptions1) {
                        if (jQuery.isNumeric(key_option1)) {
                            product_csv_percent_price += getOptionPriceByQtyCsvProduct(opoptions1[key_option1][1], key_option1, opoptions1[key_option1][0], unit_csvp_price);
                            //console.log(opoptions1[key_option1][1]+":"+key_option1+":"+opoptions1[key_option1][0]+":"+product_csv_percent_price);
                        }
                    }
                    final_csv_percent_price = parseFloat(product_csv_percent_price) - parseFloat(product_percent_price);
                    final_price = parseFloat(final_price) + parseFloat(final_csv_percent_price);
                    // Code for Percent Pricing end

                    final_price = final_price.toFixed(2);
                    unit_price = final_price / qty_h;
                    unit_price = unit_price.toFixed(2);
                    unit_price = '$' + unit_price;
                    var final_price_dol = '$' + final_price;
                    jQuery('.customlabel_preview_price .customlabel_preview_price_value').html(final_price_dol);
                    //jQuery('.product-info .price-box .price').html(final_price_dol);
                    jQuery("#qtyselect").text(qty_h);
                    jQuery('.product-info .custom_price .price').html(final_price_dol + " | " + unit_price + "  per piece");
                    jQuery('.product-name-area .custom_price .price').html(final_price_dol + "" + unit_price + "  per piece");
                    jQuery('.customlabel_preview_unitprice .customlabel_preview_unitprice_value').html(unit_price);
                    if (enable_unitprice_qtybox == 1) {
                        /********code added for unit price *********/
                        jQuery('.qty-container li span.label label').each(function() {
                            var txt = jQuery(this).text();
                            if (qty_h == jQuery.trim(txt)) {
                                var iret = jQuery(this).attr("for");
                                if (product != 'Heat Transfer Labels') {
                                    jQuery('.qty-container .options-list #' + iret).next().find('.unit_price').html('<table><tr><td>' + unit_price + ' Each </td><td>' + final_price_dol + '  Total</td></tr></table>');
                                    jQuery('.qty-container .options-list #' + iret).next().find('.unit_price').trigger("create");
                                } else {

                                    jQuery('.qty-container .options-list #' + iret).next().find('.unit_price .labelvalue').html('<table style="width:50%;float:right"><tr><td>' + final_price_dol + '  Total</td></tr></table>');
                                    jQuery('.qty-container .options-list #' + iret).next().find('.unit_price .labelvalue').trigger("create");

                                }



                            }
                        });
                        /********code added for unit price *********/
                    }
                    jQuery('#csv_product_price').val(final_price);
                }
            });
        } else {
            jQuery('.customlabel_preview_price .customlabel_preview_price_value').html(price);
            //jQuery('.product-info .price-box .price').html(price);
            jQuery("#qtyselect").text(qty_h);
            jQuery('.product-info .custom_price .price').html(price + " | " + unit_price + " per piece");
            jQuery('.product-name-area .custom_price .price').html(price + " | " + unit_price + " per piece");
            jQuery('.customlabel_preview_unitprice .customlabel_preview_unitprice_value').html(unit_price);
            if (enable_unitprice_qtybox == 1) {
                /********code added for unit price *********/
                jQuery('.qty-container li span.label label').each(function() {
                    var txt = jQuery(this).text();
                    if (qty_h == jQuery.trim(txt)) {
                        var iret = jQuery(this).attr("for");
                        if (product != 'Heat Transfer Labels') {
                            jQuery('.qty-container .options-list #' + iret).next().find('.unit_price').html('<table><tr><td>' + unit_price + ' Each </td><td>' + final_price_dol + '  Total</td></tr></table>');
                        } else {
                            jQuery('.qty-container .options-list #' + iret).next().find('.unit_price .labelvalue').html('<table style="width:50%;float:right"><tr><td>' + final_price_dol + '  Total</td></tr></table>');
                        }
                    }
                });
                /********code added for unit price *********/
            }
            jQuery('#csv_product_price').val(price);
        }
    }
