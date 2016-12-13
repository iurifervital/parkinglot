var globalID;
var globalUser;
var globalPass;
var code;
var x;
var globalCostoEstacionamiento;

var caracteres = "0123456789ABCDEF";
var longitud = 10;


var ltiempo;
var lpago;




function rand_code(chars, lon){
            code = "";
            for (x=0; x < lon; x++)
            {
                rand = Math.floor(Math.random()*chars.length);
                code += chars.substr(rand, 1);
            }
            return code;
        }


 function info(){
                        
                        $.ajax({type: "POST", 
				            url: "http://localhost/parkinglot/infoFinal.php",
	                      	data: ({iduser: globalID, codigo: code}),
	                        cache: false,
	                        dataType: "text",
	                        success: function(result){
                              var result=$.parseJSON(result);
                              $.each(result, function(i, field){
                                 
                                  ltiempo=field.tiempo;
                                  lpago=field.pago;
                                  
                                  $("#RFRFIDF15_lbl_costoPorHora").append(globalCostoEstacionamiento);
                $("#RFRFIDF15_lbl_horasAcumuladas").append(ltiempo);
                $("#RFRFIDF15_lbl_totalPagar").append(lpago);
                                  
                                  


                              });
                          }
	                    });
     
                        
                    }

/*jshint browser:true */
/*global $ */(function()
              

{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #Go */
    $(document).on("click", "#Go", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#RFIS02"); 
         return false;
    });
    
        /* button  #RFIS02_btn_registro */
    $(document).on("click", "#RFIS02_btn_registro", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#RFDP03"); 
         return false;
    });
    
        /* button  #RFDP03_btn_regresar */
    $(document).on("click", "#RFDP03_btn_regresar", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#RFIS02"); 
         return false;
    });
    
        /* button  #RFDP03_btn_siguiente */
    $(document).on("click", "#RFDP03_btn_siguiente", function(evt)
    {
        var ecorreo;
        var epass;
        var epass2;
        
        ecorreo = $("#RFDP03_txt_correo").val();
        epass = $("#RFDP03_txt_contrasena").val();
        epass2 = $("#RFDP03_txt_repitaContrasena").val();
        
        if(ecorreo!='' && epass!='' && epass2!=''){
            if(epass==epass2){
                activate_subpage("#RFDP03_2"); 
            }else{
                alert("Las contraseñas no coinciden");
            }
        }else{
            alert("Llene todos los campos");
        }
         /*global activate_subpage */
         
         return false;
    });
    
        /* button  #RFDP03_2_btn_regresar */
    $(document).on("click", "#RFDP03_2_btn_regresar", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#RFDP03"); 
         return false;
    });
    
        /* button  #RFDP03_2_btn_Siguiente */
    $(document).on("click", "#RFDP03_2_btn_Siguiente", function(evt)
    {
        var enombres = $("#RFDP03_2_txt_nombres").val();
        var eap = $("#RFDP03_2_txt_AP").val();
        var eam = $("#RFDP03_2_txt_AM").val();
        var etelefonoCelular = $("#RFDP03_2_txt_telefonoCelular").val();
  
        
        if(enombres!='' && eap!='' && eam!='' && etelefonoCelular!=''){
            activate_subpage("#RFMP4"); 
        }else{
            alert("Llene todos los campos");
        }
         /*global activate_subpage */
         
         return false;
    });
    
        /* button  #RFMP04_btn_regresar */
    $(document).on("click", "#RFMP04_btn_regresar", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#RFDP03_2"); 
         return false;
    });
    
        /* button  #RFMP04_btn_tarjeta */
    $(document).on("click", "#RFMP04_btn_tarjeta", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#RFPT05"); 
         return false;
    });
    
        /* button  #RFPT05_btn_regresar */
    $(document).on("click", "#RFPT05_btn_regresar", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#RFMP4"); 
         return false;
    });
    
        /* button  #RFPT05_btn_siguiente */
    $(document).on("click", "#RFPT05_btn_siguiente", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#RFTC06"); 
         return false;
    });
    
        /* button  #RFTC06_btn_regresar */
    $(document).on("click", "#RFTC06_btn_regresar", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#RFPT05"); 
         return false;
    });
    
        /* button  #RFI07_2_btn_regresar */
    $(document).on("click", "#RFI07_2_btn_regresar", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#RFI07"); 
         return false;
    });
    
        /* button  #RFIS02_btn_iniciarSecion */
    
    
        /* button  #RFIS02_btn_iniciarSecion */
    $(document).on("click", "#RFIS02_btn_iniciarSecion", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* button  #RFIS02_btn_iniciarSecion */
    $(document).on("click", "#RFIS02_btn_iniciarSecion", function(evt)
    {
         
                    var lcorreo = $("#RFIS02_txt_correo").val();
                    var lcontrasena = $("#RFIS02_txt_contrasena").val();
                    
                    
	   				
					
					$("#RFIS02_txt_correo").val(" ");
                    $("RFIS02_txt_contrasena").val(" ");
                    
        
        $.ajax({type: "POST", 
							url: "http://localhost/parkinglot/jsonLogin.php",
	                      	data: ({usu: lcorreo,pass: lcontrasena}),
	                      cache: false,
	                      dataType: "text",
	                      success: function(result){
                              var result=$.parseJSON(result);
                              $.each(result, function(i, field){
                                  $("#userNombre").append(field.nombres+" "+field.ap +" "+field.am);
                                  $("#userPago").append(field.pago);
                                  $("#userTelefono").append(field.celular);
                                  globalID=field.id;
                                  globalUser=field.correo;
                                  globalPass=field.contrasena;
                              });
                          }
	                    });
        
        
	    			
        
         activate_subpage("#RFI07_2"); 
         return false;
    });
    
        /* button  #mostrar */
    $(document).on("click", "#mostrar", function(evt)
    {
         
         return false;
    });
    
        /* button  #RFI07_btn_menu */
    $(document).on("click", "#RFI07_btn_menu", function(evt)
    {
        
         activate_subpage("#RFI07_2"); 
         return false;
    });
    
        /* button  #RFH10_btn_atras */
    $(document).on("click", "#RFH10_btn_atras", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#RFI07_2"); 
         return false;
    });
    
        /* button  #RFI07_2_btn_historial */
    $(document).on("click", "#RFI07_2_btn_historial", function(evt)
    {
        
        $("#userHistorial").html("");
                    
        
        $.ajax({type: "POST", 
							url: "http://localhost/parkinglot/historial.php",
	                      	data: ({iduser: globalID}),
	                      cache: false,
	                      dataType: "text",
	                      success: function(result){
                              var result=$.parseJSON(result);
                              $.each(result, function(i, field){
                                  $("#userHistorial").append("Estacionamiento: "+field.estacionamiento+" Total: "+field.pago +"$ "+"Horas: "+field.tiempo+"<br>");
                              });
                          }
	                    });
         /*global activate_subpage */
         activate_subpage("#RFH10"); 
         return false;
    });
    
        /* button  #RFBED11_btn_regresar */
    $(document).on("click", "#RFBED11_btn_regresar", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#RFI07"); 
         return false;
    });
    
        /* button  #RFBED11_btn_cercano */
    
    
        /* button  #RFI07_btn_buscarEstacionamiento */
    $(document).on("click", "#RFI07_btn_buscarEstacionamiento", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#RFBED11"); 
         return false;
    });
    
        /* button  #RFBED11_btn_cercano */
    $(document).on("click", "#RFBED11_btn_cercano", function(evt)
    {
        
        
        $.ajax({type: "POST", 
							url: "http://localhost/parkinglot/cercano.php",
	                      	data: ({iduser: globalID}),
	                      cache: false,
	                      dataType: "text",
	                      success: function(result){
                              var result=$.parseJSON(result);
                              $.each(result, function(i, field){
                                  $("#RFMC12_txt_costo").val(field.costoHora);
                                  globalCostoEstacionamiento=field.costoHora;
                                   
                              });
                          }
	                    });
         /*global activate_subpage */
         activate_subpage("#RFMC12"); 
         return false;
    });
    
        /* button  #RFMC12_btn_apartar */
    $(document).on("click", "#RFMC12_btn_apartar", function(evt)
    {
        var codigoSalida = rand_code(caracteres, longitud);
        
        $("#RFRFID14_txt_codigo").val(codigoSalida);
        $("#RFRFID14_2_txt_codigoSalir").val(codigoSalida);
        //agregando codigo
        $.ajax({type: "POST", 
							url: "http://localhost/parkinglot/agregarCodigo.php",
	                      	data: ({codigo: codigoSalida,userid: globalID}),
	                      cache: false,
	                      dataType: "text"
	                    });
        //agregando fecha de inicio y estacionamiento al historial
        $.ajax({type: "POST", 
							url: "http://localhost/parkinglot/apartado.php",
	                      	data: ({codigo: codigoSalida,userid: globalID}),
	                      cache: false,
	                      dataType: "text"
	                    });
        
         /*global activate_subpage */
         activate_subpage("#RFDE13");
         return false;
    });
    
        /* button  #RFMC12_btn_cancelar */
    $(document).on("click", "#RFMC12_btn_cancelar", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#RFBED11"); 
         return false;
    });
    
        /* button  #RFDE13_btn_RFID */
    $(document).on("click", "#RFDE13_btn_RFID", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#RFRFID14"); 
         return false;
    });
    
        /* button  #RFRFID14_btn_regresar */
    $(document).on("click", "#RFRFID14_btn_regresar", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#RFDE13"); 
         return false;
    });
    
        /* button  #RFRFID14_btn_ok */
    $(document).on("click", "#RFRFID14_btn_ok", function(evt)
    {
         /*global activate_subpage */
        
        $.post("http://localhost/parkinglot/verificandoEntrada.php",{ codigo : code, userid : globalID},function(respuesta){
            if (respuesta == true) {
                activate_subpage("#RFRFID14_2");
            }
            else{
                alert("Ingrese el código en el leector QR");
            }
        });
        
          
         return false;
    });
    
        /* button  #RFRFID_btn_fin */
    $(document).on("click", "#RFRFID14_2_btn_fin", function(evt)
    {
        
        
        $.post("http://localhost/parkinglot/verificandoSalida.php",{ codigo : code, userid : globalID},function(respuesta){
            if (respuesta == true) {
                //escribe el fin en el historial
                $.post("http://localhost/parkinglot/fin.php",{ codigo : code, userid : globalID});
                //escribe las horas en que se estubo en el estacionamiento
                //fin - inicio
                $.post("http://localhost/parkinglot/escribirTiempo.php",{ codigo : code, userid : globalID}, function(){
                    //escribe el pago en historial
                    //precio x hora
                    $.post("http://localhost/parkinglot/escribirCosto.php",{ codigo : code, userid : globalID, precio:globalCostoEstacionamiento}, function(){
                        info();
                    }
                           
                           
                          );
                    
                });
                //
                
                
                activate_subpage("#RFRFIDF15");
                
            }
            else{
                alert("Ingrese el código en el leector QR");
            }
        });
        
         /*global activate_subpage */
          
         return false;
    });
    
        /* button  #RFRFID15_btn_fin */
    $(document).on("click", "#RFRFID15_btn_fin", function(evt)
    {
        activate_subpage("#RFI07"); 
         return false;
    });
    
        /* button  #RFI07_2_btn_cerrarSesion */
    $(document).on("click", "#RFI07_2_btn_cerrarSesion", function(evt)
    {
        globalID=-1;
        globalUser='';
        globalPass='';
        code='';
        globalCostoEstacionamiento=-1;

        ltiempo=-1;
        lpago=-1;
        
        
        $("#RFIS02_txt_correo").val(" ");
        $("RFIS02_txt_contrasena").val(" ");
        $("#RFDP03_2_txt_nombres").val(" ");
        $("#RFDP03_2_txt_AP").val(" ");
        $("#RFDP03_2_txt_AM").val(" ");
        $("#RFDP03_txt_correo").val(" ");
        $("#RFDP03_txt_contrasena").val(" ");
        $("#RFDP03_2_txt_telefonoCelular").val(" ");
        
         activate_subpage("#RFIS02"); 
         return false;
    });
    
        /* button  #RFTC06_btn_finalizar */
    $(document).on("click", "#RFTC06_btn_finalizar", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
