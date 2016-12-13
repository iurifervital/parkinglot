
$(function() {
				$("#RFTC06_btn_finalizar").click(function() {
					var Nombres = $("#RFDP03_2_txt_nombres").val();
                    var AP = $("#RFDP03_2_txt_AP").val();
                    var AM = $("#RFDP03_2_txt_AM").val();
                    var Correo = $("#RFDP03_txt_correo").val();
                    var Contrasena = $("#RFDP03_txt_contrasena").val();
                    var Contrasena2 = $("#RFDP03_txt_repitaContrasena").val();
                    var Celular = $("#RFDP03_2_txt_telefonoCelular").val();
                    
	   				
					
					$("#RFDP03_2_txt_nombres").val(" ");
                    $("#RFDP03_2_txt_AP").val(" ");
                    $("#RFDP03_2_txt_AM").val(" ");
                    $("#RFDP03_txt_correo").val(" ");
                    $("#RFDP03_txt_contrasena").val(" ");
                    $("#RFDP03_2_txt_telefonoCelular").val(" ");
	    			
					
					 $.ajax({type: "POST", 
							url: "http://localhost/parkinglot/agregarRegistro.php",
	                      	data: ({RFDP03_2_txt_nombres: Nombres,RFDP03_2_txt_AP: AP,RFDP03_2_txt_AM:AM,RFDP03_txt_correo:Correo, RFDP03_txt_contrasena: Contrasena, RFDP03_2_txt_telefonoCelular: Celular}),
	                      cache: false,
	                      dataType: "text",
	                      success: Enviamos
	                    });
					
					});
					
					function Enviamos(data){
                        
                        
						alert("Registrado con exito!!");
                        activate_subpage("#RFI07"); 
                        
						
					}
				
				});
                