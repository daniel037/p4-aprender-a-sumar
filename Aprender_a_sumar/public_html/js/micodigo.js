var n1, n2 , n3,n4;
$(document).ready(function (){
        cargar();         
    
});
        

function cargar(){
        n1 = (Math.random() *10);
        n1 = parseInt(n1.toFixed(0));
        
        n2 = (Math.random() *10);
        n2 = parseInt(n2.toFixed(0));
        
        if(n1>10) n1=10;if(n2>10) n2=10;
        if(n1 === 0) n1=1; if(n2 === 0) n2=1;
        n4=n1+n2;
        
        $("#div1").html("<img src='imagen/emeramone.png'>");
        for( i=0; i<n1-1;i++ )
        {
             $("#div1").append("<img src='imagen/emeramone.png'>");
        }
        
        $("#div3").html("<img src='imagen/emeramone.png'>");
        for( i=0; i<n2-1;i++ )
        {
            $("#div3").append("<img src='imagen/emeramone.png'>");
        }  
        
        $("#veri").click(function (){
        n3 = $("#resultado").val()();
        if(n4===n3)
        {
            $("#div4").html("<p>LO LOGRASTE</p>");
        }
        else  
        {
            $("#div4").html("<p>VUELVE A INTENTAR</p>");
        }
    });
}
