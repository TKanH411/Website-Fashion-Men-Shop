console.log("Hello")

let date=document.getElementById("date");

let cur_date=new Date();
let day=cur_date.getDate();
let year=cur_date.getFullYear();
let month=cur_date.getMonth();

console.log(day, month+1, year)
if (month+1<10){
    month="0"+month.toString();
}
let minDate=year+'-'+(month+1)+'-'+day
let maxDate=year+'-'+(month+1)+'-'+(day+3)

date.setAttribute("min",minDate)
date.setAttribute("max",maxDate)

function validate(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email");
    let phone=document.getElementById("phone");
    let date=document.getElementById("date");
    let time=document.getElementById("time").value;  

    if (name.length <3){
        error_message.innerHTML="Enter a valid name!"
        return;
    }

    if (email.value.indexOf("@")==-1 || email.value.length<7){
        error_message.innerHTML="Enter a valid email!"
        return;
    }

    if (phone.value.length!==10){
        error_message.innerHTML="Enter a valid phone number!"
        return;
    }
    console.log("Name: "+name,"Email: "+email.value,"Phone: "+phone.value, "Date: "+date.value, "Time: "+time);
    error_message.style.background="green"
    error_message.style.color="white"
    error_message.innerHTML="You will get a callback soon!"
    alert("Form submitted successfully!")
    setTimeout(function() {
        window.location.href = "index.html"; // Thay đổi "index.html" thành trang chính của bạn
    }, 3000);
}