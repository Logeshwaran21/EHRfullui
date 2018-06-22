import Controller from '@ember/controller';
export default Controller.extend( {
    isShowingModal: false,
    showLogin: true,
    ShowRequest: false, //this is to show request id
   
    actions: {
        Register:function(){
            this.transitionToRoute('reg');
        },
        
        Login: function() {
            console.log("115")
            var email = this.get('email');
            console.log(email);
            var password = this.get('password');
            console.log(password);
            var category = $('#id_of_select').val();
            console.log(category);
            

            var mycontroller = this;
            var dataString = {
                "email": email,
                "password": password,
                "category":category,
                


                //    "usertype": usertype,
            };
            console.log(JSON.stringify(dataString));
                console.log(email);
                console.log(password);
                console.log(category);
                return $.ajax({
                    url: 'http://localhost:8082/login',
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(dataString),
                    success: function(response) {
                        console.log((response));
                        var message = response.message
                        console.log("message", message)
                        if (message == "Login sucessfull" && category=="Doctor") {
                            alert("login sucessful");
                            // mycontroller.set('message', message)
                            
                            // var status = response.status
                            // mycontroller.set('usertype', usertype)
                            // console.log(usertype);
                            mycontroller.transitionToRoute('home');
                            // this.transitionToRoute('home');
                        } 
                        else if (message == "Login sucessfull" && category=="General User") {
                            alert("login sucessful");
                            mycontroller.transitionToRoute('phome');
                        }
                        else if (message == "Login sucessfull" && category=="Lab Reporter") {
                            alert("login sucessful");
                            mycontroller.transitionToRoute('lhome');
                        }



                        else {
                            alert("Invalid Credentials");
                        }
                       
                    }
                })
            } 
        },
    

    });