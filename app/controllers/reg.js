import Controller from '@ember/controller';



export default Controller.extend( {
    isShowingModal: false,
    showLogin: true,
    ShowRequest: false, //this is to show request id
   
    actions: {
        DocSubmit: function() {
            console.log("115")
            var email = this.get('email');
            console.log(email);
            var password = this.get('password');
            console.log(password);
            var confirmpassword = this.get('confirmpassword');
            console.log(confirmpassword);
            var doctorname = this.get('doctorname');
            console.log(doctorname);
            var lastname = this.get('lastname');
            console.log(lastname);
            var dob = this.get('dob');
            console.log(dob);
            var experience = this.get('experience');
            console.log(experience);
            var designation= this.get('designation');
            console.log(designation);
            var phonenumber = this.get('phonenumber');
            console.log(phonenumber);
            var hospitalname= this.get('hospitalname');
            console.log(hospitalname);
            var qualification = this.get('qualification');
            console.log(qualification);
            var address = this.get('address');
            console.log(address);
            var licenseid = this.get('licenseid');
            console.log(licenseid);

            var mycontroller = this;
            var dataString = {
                "email": email,
                "password": password,
                "confirmpassword":confirmpassword,
                "doctorname":doctorname,
                "lastname":lastname,
                "dob":dob,
                "experience":experience,
                "designation":designation,
                "qualification":qualification,
                "address":address,
                "licenseid":licenseid,
                "hospitalname":hospitalname,
                "phonenumber":phonenumber



                //    "usertype": usertype,
            };
            console.log(JSON.stringify(dataString));
                console.log(email);
                console.log(password);
                return $.ajax({
                    url: 'http://localhost:8082/registerFront',
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(dataString),
                    success: function(response) {
                        console.log((response));
                        var message = response.message
                        console.log("message", message)
                        if (message === "user has been registered successfully") {
                            alert("Registration successfull");
                            mycontroller.transitionToRoute('login');
                            // mycontroller.set('message', message)
                            
                            // var status = response.status
                            // mycontroller.set('usertype', usertype)
                            // console.log(usertype)
                        } else {
                            console.log("else")
                        }

                    }
                })
            } ,

            PatSubmit: function() {
                console.log("115")
                var email = this.get('email');
                console.log(email);
                var password = this.get('password');
                console.log(password);
                var confirmpassword = this.get('confirmpassword');
                console.log(confirmpassword);
                var doctorname = this.get('doctorname');
                console.log(doctorname);
                var lastname = this.get('lastname');
                console.log(lastname);
                var dob = this.get('dob');
                console.log(dob);
                var experience = this.get('experience');
                console.log(experience);
                var designation= this.get('designation');
                console.log(designation);
                var phonenumber = this.get('phonenumber');
                console.log(phonenumber);
                var hospitalname= this.get('hospitalname');
                console.log(hospitalname);
                var qualification = this.get('qualification');
                console.log(qualification);
                var address = this.get('address');
                console.log(address);
                var licenseid = this.get('licenseid');
                console.log(licenseid);
    
                var mycontroller = this;
                var dataString = {
                    "email": email,
                    "password": password,
                    "confirmpassword":confirmpassword,
                    "doctorname":doctorname,
                    "lastname":lastname,
                    "dob":dob,
                    "experience":experience,
                    "designation":designation,
                    "qualification":qualification,
                    "address":address,
                    "licenseid":licenseid,
                    "hospitalname":hospitalname,
                    "phonenumber":phonenumber
    
    
    
                    //    "usertype": usertype,
                };
                console.log(JSON.stringify(dataString));
                    console.log(email);
                    console.log(password);
                    return $.ajax({
                        url: 'http://localhost:8082/registerFront',
                        type: 'POST',
                        contentType: 'application/json',
                        data: JSON.stringify(dataString),
                        success: function(response) {
                            console.log((response));
                            var message = response.message
                            console.log("message", message)
                            if (message === "user has been registered successfully") {
                                alert("Registration successfull");
                                mycontroller.transitionToRoute('login');
                                // mycontroller.set('message', message)
                                
                                // var status = response.status
                                // mycontroller.set('usertype', usertype)
                                // console.log(usertype)
                            } else {
                                console.log("else")
                            }
    
                        }
                    })
                }
    },
    });