const endDate = "24 July 2026 09:00 PM";

document.getElementById('endDate').innerText = endDate
const inputs = document.querySelectorAll("input");

let result =setInterval( clock , () => {
     
} , 1000)

function clock(){
    const end = new Date(endDate);
    const now = new Date();

    const differenceInMs = end - now;
    
    if(differenceInMs/1000 < 0){
        return;
    }
    // no of days
    inputs[0].value = Math.floor(differenceInMs/(24*60*60*1000));
    inputs[1].value = Math.floor((differenceInMs/(60*60*1000))%24);
    inputs[2].value = Math.floor((differenceInMs/(1000*60))%60)
    // console.log(inputs[2].value );
    inputs[3].value = Math.floor(differenceInMs/(1000)%60);
    
    // if(inputs[0].value != 0|| inputs[1].value !=0 || inputs[2].value !=0 || inputs[3].value !=0){
    //     clock();
    // }

    // const end = new Date(endDate);
    // const now = new Date();

    // inputs[0].value = Math.abs(now.getDate()-end.getDate());
   

    
   
}



