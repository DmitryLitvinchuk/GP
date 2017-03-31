$(function() {

    let checkboxes = $("label[class='checkbox']");
    
    let icons = "<span class='icons'><span class='checkbox-checked'></span><span class='checkbox-unchecked'></span></span>";
        
    checkboxes.prepend( icons );
        
    checkboxes.on("click", ".icons", function() {
        
        let $_this = $(this).find(".icons");
        
        let input = $(this).find("input");
                
        console.log( input );
        console.log( input.is( ":checked" ) );
        
        input.prop("checked", !input.is( ":checked" ) );
        
        //_this.find(".checkbox-checked").css("opacity", Number(input.attr("checked")) );
        //_this.find(".checkbox-unchecked").css("opacity", Number(!input.attr("checked")) );
        
        console.log( input.prop( "checked" ) );
    
    });
    
});