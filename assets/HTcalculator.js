jQuery(document).ready(function(){

	 var label = "5";
	 jQuery("span.unit_price").eq(1).html("<span class='labeltotal'></span><span class='labelvalue'></span>");
	 var label = "10";
	 jQuery("span.unit_price").eq(2).html("<span class='labeltotal'></span><span class='labelvalue'></span>");
	 var label = "20";
	 jQuery("span.unit_price").eq(3).html("<span class='labeltotal'></span><span class='labelvalue'></span>");

	 var label = "30";
	 jQuery("span.unit_price").eq(4).html("<span class='labeltotal'></span><span class='labelvalue'></span>");
	 var label = "50";
	 jQuery("span.unit_price").eq(5).html("<span class='labeltotal'></span><span class='labelvalue'></span>");
	 var label = "75";
	 jQuery("span.unit_price").eq(6).html("<span class='labeltotal'></span><span class='labelvalue'></span>");
 	 var label = "100";
	 jQuery("span.unit_price").eq(7).html("<span class='labeltotal'></span><span class='labelvalue'></span>");
	 
	 var label = "500";
	 jQuery("span.unit_price").eq(8).html("<span class='labeltotal'></span><span class='labelvalue'></span>");
var sheetH = htheight;
var sheetW = htwidth;
var padding = htpadding;
	
var LabelsPerSheet = '#'+htlabelspersheet;
var NumberOfSheets = '#'+htnumberofsheets;
		
var height = jQuery('#'+htartheight).val();
var width = jQuery('#'+htartwidth).val();
var sheet =  sheetH*sheetW;	
var productsize = height*width;
var widthamt = Math.floor(sheetW/width);
var lengthamt = Math.floor(sheetH/height);
var truetotal = Math.floor(widthamt*lengthamt);
var quantity = jQuery('.customlabel_preview_qty_value').html();

var numlabels = truetotal*quantity;
var  total = Math.floor(sheet/productsize);
jQuery(LabelsPerSheet).val(truetotal+" Labels Per Sheet | "+numlabels+" Labels Total");
var sheettotal =  Math.floor(quantity/truetotal);
jQuery( "<span> Sheets "+quantity*truetotal+" Labels</span>" ).appendTo( ".customlabel_preview_qty_value" );
	
	if (sheettotal>=5){
jQuery(NumberOfSheets).val(sheettotal);
	}
	else{
		jQuery(NumberOfSheets).val(truetotal+" Labels Per Sheet | "+numlabels+" Labels Total");
		
	}
	jQuery(".qtyselect").text(quantity+" Sheets | "+truetotal+" Labels Per Sheet | "+numlabels+" Labels Total");
	 var label = "5";
	 jQuery("span.unit_price span.labeltotal").eq(0).text(label*truetotal);
	 var label = "10";
	 jQuery("span.unit_price span.labeltotal").eq(1).text(label*truetotal);
	 var label = "20";
	 jQuery("span.unit_price span.labeltotal").eq(2).text(label*truetotal);
	 var label = "30";
	 jQuery("span.unit_price span.labeltotal").eq(3).text(label*truetotal);
	 var label = "50";
	  jQuery("span.unit_price span.labeltotal").eq(4).text(label*truetotal);
	 var label = "75";
	  jQuery("span.unit_price span.labeltotal").eq(5).text(label*truetotal);
 	 var label = "100";
	 jQuery("span.unit_price span.labeltotal").eq(6).text(label*truetotal);
	 
	 var label = "500";
	  jQuery("span.unit_price span.labeltotal").eq(7).text(label*truetotal);


var product = jQuery('.product-name h1').html();

	
jQuery('.rangeslider').click(function() {


	if (product == 'Heat Transfer Labels' ){
		jQuery("span.label label").css("margin-top", "-14%")
		
var sheetH = htheight;
var sheetW = htwidth;
var padding = htpadding;
	
var LabelsPerSheet = '#'+htlabelspersheet;
var NumberOfSheets = '#'+htnumberofsheets;
		
var height = jQuery('#'+htartheight).val();
var width = jQuery('#'+htartwidth).val();
var sheet =  sheetH*sheetW;	
var productsize = height*width;
var widthamt = Math.floor(sheetW/width);
var lengthamt = Math.floor(sheetH/height);
var truetotal = Math.floor(widthamt*lengthamt);
var quantity = jQuery('.customlabel_preview_qty_value').html();

var numlabels = truetotal*quantity;
var  total = Math.floor(sheet/productsize);
jQuery(LabelsPerSheet).val(truetotal+" Labels Per Sheet | "+numlabels+" Labels Total");
var sheettotal =  Math.floor(quantity/truetotal);
jQuery( "<span> Sheets "+quantity*truetotal+" Labels</span>" ).appendTo( ".customlabel_preview_qty_value" );
	
	if (sheettotal>=5){
jQuery(NumberOfSheets).val(sheettotal);
	}
	else{
		jQuery(NumberOfSheets).val(truetotal+" Labels Per Sheet | "+numlabels+" Labels Total");
		
	}
	jQuery(".qtyselect").text(quantity+" Sheets | "+truetotal+" Labels Per Sheet | "+numlabels+" Labels Total");
	 var label = "5";
	 jQuery("span.unit_price span.labeltotal").eq(0).text(label*truetotal);
	 var label = "10";
	 jQuery("span.unit_price span.labeltotal").eq(1).text(label*truetotal);
	 var label = "20";
	 jQuery("span.unit_price span.labeltotal").eq(2).text(label*truetotal);
	 var label = "30";
	 jQuery("span.unit_price span.labeltotal").eq(3).text(label*truetotal);
	 var label = "50";
	  jQuery("span.unit_price span.labeltotal").eq(4).text(label*truetotal);
	 var label = "75";
	  jQuery("span.unit_price span.labeltotal").eq(5).text(label*truetotal);
 	 var label = "100";
	 jQuery("span.unit_price span.labeltotal").eq(6).text(label*truetotal);
	 
	 var label = "500";
	  jQuery("span.unit_price span.labeltotal").eq(7).text(label*truetotal);}

});
		
if (product == 'Heat Transfer Labels' ){
		setqtyprice12();	
		jQuery('.customlabel_preview_1help').css("opacity","0");
	//	jQuery('.customlabel_preview_1help').css("height","0px");
	///	jQuery('.customlabel_preview_1help').insertBefore('<div><h1>'+height+' x '+width+'</h1></div>');
}
});

