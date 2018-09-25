var app = new Vue({
    el: '#app',
    data: {
   datateam:["a", "b"],
        nickname:"",
        phone:"",
        photo:"",
        site:"",
        email:"",
        name:"",
   full_url: "https://api.myjson.com/bins/i4t6k",

    },
    created: function () {

        this.getData();

    },
    methods: {

        modal:function(namelist){
          
            console.log(namelist)
            for(i=0;i<app.datateam.length;i++){
                if(namelist==app.datateam[i].name){
                app.nickname=app.datateam[i].contact_info.nickname;
                app.phone=app.datateam[i].contact_info.phone;
                app.photo=app.datateam[i].contact_info.photo;
                app.site=app.datateam[i].contact_info.site;
                app.email=app.datateam[i].contact_info.email;
                app.name=app.datateam[i].name;
                }
            }
            
            
        },
        
        getData: function () {
            fetch(this.full_url, {

                method: "GET",

            }).then(function (response) {

                if (response.ok) {
                    // add a new promise to the chain
                    return response.json();
                }
                // signal a server error to the chain
                throw new Error(response.statusText);
             
            }).then(function (json) {
                // equals to .success in JQuery Ajax call
                app.datateam= json.teamsjob;
                console.log(app.datateam)
        


            }).catch(function (error) {
                // called when an error occurs anywhere in the chain
                console.log("Request failed: " + error.message);
                   alert("ups sorry not coneting server");
            });


        },


    }
})
