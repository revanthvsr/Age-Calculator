const fname=document.querySelector("#name");
const birth=document.querySelector("#birthyear");
const button=document.getElementById("sub");
function AgeCalculator()
{
    
        button.addEventListener("click",function(event){ 
            event.preventDefault();
            fname.checkValidity();
            const fullname=fname["value"];
            const userSelectedYear =new Date(birth["value"]).getFullYear();
            const userSelectedMonth=new Date(birth["value"]).getMonth();
            const userSelectedDay=new Date(birth["value"]).getDate();
            const age=new Date().getFullYear()-userSelectedYear;
            const month=new Date().getMonth()-userSelectedMonth;
            const day=new Date().getDate()-userSelectedDay;
            
           return document.getElementById('demo').innerHTML=("The Age of "+fullname+" is "+age+" years "+month+ " months "+day+ " days");
            
        });
    
    
}
AgeCalculator();

