$(document).ready(function() {

//-------------------------------------------VARIABLES---------------------------------------------

            
//--------------------------------------------ANIMATION--------------------------------------------

      $(".outform").animate(
          {top:"0px",},1000);


      $(".outform").fadeIn(1000);

      $(".outform").animate(  {opacity:"1"}  );

 //-----------------------------------------RADIO CHECKED------------------------------------------- 
 
      $("#copmanybutton, #userbutton").change(function(){
        

          if($("#copmanybutton").is(':checked')){
                           
                           //  HIDE  //
               $("#invalidName, #invalidBithday, #invalidMobileNumber, #invalidUserMail, #invalidLastName").css("display","none");

                             //SHOW//
               $("#invalidCompanyName, #invalidCompanyNumber").css("display","block");
                            
                            //SET DISABLED ATTR//
               $("#firstname, #lastname, #usermail, #mobilenumber, #birthDayin, #birthmonthin, #birthyearin").attr("disabled", true);
                        
                        //REMOVE REQUIRED ATTR//
               $("#userbutton, #firstname, #lastname, #usermail, #mobilenumber, #birthDayin, #birthmonthin, #birthyearin").attr("required", false);
                        
                        // REMOVE DISABLED ATTR//
               $("#companyname, #companynumber").attr("disabled", false);
                
                }


        else if($("#userbutton").is(':checked')){

                           //SET DISABLED ATTR//
               $("#companyname, #companynumber").attr("disabled", true);

                         //REMOVE REQUIRED ATTR//
               $("#copmanybutton, #companynumber, #companyname").attr("required", false);

                         //REMOVE DISABLED ATTR//
               $("#birthDayin, #birthmonthin, #birthyearin").attr("disabled", false);
               $("#firstname, #lastname, #usermail, #mobilenumber").attr("disabled", false);
                
                                 //SHOW//
               $("#invalidCompanyName, #invalidCompanyNumber").css("display","none");

                               //HIDE//
               $("#invalidName. #invalidLastName. #invalidUserMail. #invalidMobileNumber. #invalidBithday").css("display", "block");

                }
                else{
                  alert("You Must chose kind of the account!!!");

                }   
        });

//--------------------------------------------FIRST NAME--------------------------------------------

 
      $("#firstname").change(function() {

          var FNLength = $("#firstname").val().length;
              Fname = $("#firstname").val();
              regex = /[0-9!@#\$%\^\&*\)\(+=._-]|\./;


            
            if(regex.test(Fname) ){
                $("#invalidName").html("<div class='alert alert-danger'>Avoid using special characters (.,!@#$%^&*()) and number form 0 to 9</div>");
                $("#firstname").css("border-color", "red");
                $(".shakename").effect("shake");
            }
            else if (FNLength<3){
                $("#invalidName").html("<div class='alert alert-danger'>your name must have 3 character at least</div>");
                $("#firstname").css("border-color", "red");
                $(".shakename").effect("shake");
            }
            else if ( FNLength>15){
                 $("#invalidName").html("<div class='alert alert-danger'>your name must have less than 13 charcter</div>");
                 $("#firstname").css("border-color", "red");
                 $(".shakename").effect("shake");

            }
            else if (/\s/.test(Fname) ){
                $("#invalidName").html("<div class='alert alert-danger'>Do NOt use WHITESPACE !!</div>");
                $("#firstname").css("border-color", "red");
                $(".shakename").effect("shake");
            }
            else{
                $("#invalidName").html("<div class='alert alert-success '>"+"Welcome "+Fname.toUpperCase()+"</div>");
                $("#firstname").css("border-color", "green");

            }

      });

//--------------------------------------------SECOND NAME-------------------------------------------

      $("#lastname").change(function() {


          var LNLength = $("#lastname").val().length;
              Lname = $("#lastname").val();
              regex = /[0-9!@#\$%\^\&*\)\(+=._-]|\./;

            if(regex.test(Lname) ){
                $("#invalidLastName").html("<div class='alert alert-danger'>Avoid using special characters (.,!@#$%^&*()) and number form 0 to 9</div>");
                $("#lastname").css("border-color", "red");
                $(".shakeLname").effect("shake");
            }
            else if (LNLength<3){
                $("#invalidLastName").html("<div class='alert alert-danger'>your name must have 3 character at least</div>");
                $("#lastname").css("border-color", "red");
                $(".shakeLname").effect("shake");
            }
            else if ( LNLength>15){
                 $("#invalidLastName").html("<div class='alert alert-danger'>your name must have less than 13 charcter</div>");
                 $("#lastname").css("border-color", "red");
                 $(".shakeLname").effect("shake");
            }
            else if (/\s/.test(Lname) ){
                $("#invalidLastName").html("<div class='alert alert-danger'>Do NOt use WHITESPACE !!</div>");
                $("#lastname").css("border-color", "red");
                $(".shakeLname").effect("shake");
            }
            else{
                $("#invalidLastName").html("<div class='alert alert-success '>"+Lname.toUpperCase()+" is a great name.."+"</div>");
                $("#lastname").css("border-color", "green");
            }

      });

//--------------------------------------------USER MAIL-----------------------------------------------


    $("#usermail").change(function(){

        var Msymbol = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            space = /\s/;
            mail =  $("#usermail").val();

        if(Msymbol.test(mail) ){
            $("#invalidUserMail").html("<div class='alert alert-success'> Done..!!</div>");
            $("#usermail").css("border-color", "green");
        }
        else if(space.test(mail) ){
            $("#invalidUserMail").html("<div class='alert alert-danger'>Do NOt use WHITESPACE'</div>");
            $("#usermail").css("border-color", "red");
            $(".shakemail").effect("shake");
        }
        else{
            $("#invalidUserMail").html("<div class='alert alert-danger'>wrong mail..!!</div>");
            $("#usermail").css("border-color", "red");
            $(".shakemail").effect("shake");
        }


    });


//-----------------------------------------MOBILE NUMBER-----------------------------------------------

    $("#mobilenumber").change(function(){

        var alphabet = /[A-Za-z]|\./;
            Mnumber = $("#mobilenumber").val();
            MnLength = $("#mobilenumber").val().length;


        if(alphabet.test(Mnumber) ){
            $("#invalidMobileNumber").html("<div class='alert alert-danger'> WRONG NUMBER  </div>");
            $("#mobilenumber").css("border-color", "red");
            $(".shakenumer").effect("shake");
        }
        else if(Mnumber.charAt(0)==="+" && Mnumber.charAt(1)==="2" && MnLength===13 ){
            $("#invalidMobileNumber").html("<div class='alert alert-success'>correct number </div>");
            $("#mobilenumber").css("border-color", "green");
        }
        else if(MnLength>13 || MnLength<13){
            $("#invalidMobileNumber").html("<div class='alert alert-danger'>your number must have 13 charcter</div>");
            $("#mobilenumber").css("border-color", "red");
            $(".shakenumer").effect("shake");
        }
        else{
            $("#invalidMobileNumber").html("<div class='alert alert-danger'>your number must have country code (+2) </div>");
            $("#mobilenumber").css("border-color", "red");
            $(".shakenumer").effect("shake");
        }

    });


//--------------------------------------------BIRTHDAY-------------------------------------------------
      
    $("#birthyearin").change(function(){

        var age = new Date().getFullYear() - $("#birthyearin").val();

        if($("#birthyearin").val()<1970 || $("#birthyearin").val()>2000){
            $("#invalidBithday").html("<div class='alert alert-danger'> Invalid Birthday..!!! </div> ");
            $("#birthday"),css("border-color", "red");
            $(".shakeday").effect("shake");
        }
        else{
            $("#invalidBithday").html("<div class='alert alert-success'>Your Are "+age+" Years Old..!!</div>");
            $("#birthday"),css("border-color", "green");
        }
;
    });
    
//------------------------------------------COMPANY NAME-----------------------------------------------

      $("#companyname").change(function() {

          var CnLength = $("#companyname").val().length;
              Cname = $("#companyname").val();
              regex = /[0-9!@#\$%\^\&*\)\(+=._-]|\./;


            
            if(regex.test(Cname) ){
                $("#invalidCompanyName").html("<div class='alert alert-danger'>Avoid using special characters (.,!@#$%^&*()) and number form 0 to 9</div>");
                $("#companyname").css("border-color", "red");
                $(".shakeCname").effect("shake");
            }
            else if (CnLength<3 || CnLength>15){
                $("#invalidCompanyName").html("<div class='alert alert-danger'>your name must have 3-35 character</div>");
                $("#companyname").css("border-color", "red");
                $(".shakeCname").effect("shake");
            }
            else if (/\s/.test(Cname) ){
                $("#invalidCompanyName").html("<div class='alert alert-danger'>Do NOt use WHITESPACE !!</div>");
                $("#companyname").css("border-color", "red");
                $(".shakeCname").effect("shake");
            }
            else{
                $("#invalidCompanyName").html("<div class='alert alert-success '>"+"Welcome "+Cname.toUpperCase()+"</div>");
                $("#companyname").css("border-color", "green");
            }

      });
    

//-----------------------------------------COMPANY NUMBER----------------------------------------------

    $("#companynumber").change(function(){

        var alphabet = /[A-Za-z]|\./;
            Cnumber = $("#companynumber").val();
            CnLength = $("#companynumber").val().length;


        if(alphabet.test(Cnumber) ){
            $("#invalidCompanyNumber").html("<div class='alert alert-danger'> WRONG NUMBER  </div>");
            $("#companynumber").css("border-color", "red");
            $(".shakeCnumber").effect("shake");
        }
        else if(Cnumber.charAt(0)==="+" && Cnumber.charAt(1)==="2" && Cnumber===13 ){
            $("#invalidCompanyNumber").html("<div class='alert alert-success'>correct number </div>");
            $("#companynumber").css("border-color", "green");
        }
        else if(CnLength>13 || CnLength<13){
            $("#invalidCompanyNumber").html("<div class='alert alert-danger'>your number must have 13 charcter</div>");
            $("#companynumber").css("border-color", "red");
            $(".shakeCnumber").effect("shake");
        }
        else{
            $("#invalidCompanyNumber").html("<div class='alert alert-danger'>your number must have country code (+2) </div>");
            $("#companynumber").css("border-color", "red");
            $(".shakeCnumber").effect("shake");
        }



    });

//--------------------------------------------THE END--------------------------------------------------
});
