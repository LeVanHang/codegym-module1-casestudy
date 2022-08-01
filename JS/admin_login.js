function login(){
    let username=document.getElementById("enter").value;
    let password=document.getElementById("enter2").value;
    if(username=="Admin" && password=="Admax"){
        alert("Halo boss");
    }else{
        alert("Nhầm rồi!");
    }
};