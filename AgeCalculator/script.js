let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let age = document.getElementById("result");

function calculateAge(){
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;
    
    if(m2 >= m1){
        m3 = m2 - m1;
    }else{
        y3--;             
        m3 = 12 + m2 - m1;
    }


    if(d2 >= d1){
       d3 = d2 - d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1,m1) + d2 - d1;
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }

    age.innerHTML = `You are <span>${y3}</span> Years <span>${m3}</span> Month <span>${d3}</span> Days Old.`;

}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();   // This return last Date of the Month according to the paramaeter values
}


 /*
      let's consider DOB = 14-11-2011 & Current Date = 08-09-2023

      here d1 = 14, m1 = 11, y1 = 2011
           d2 = 8 , m2 = 9, y2 = 2023

           y3 = y2 - y1 
              = 2023 - 2011
           y3 = 12

           m3 = m2 - m1
              = 9 - 11
           m3 = -2  This is not we actually expect

           so for This we need to minus year by 1 because Negative Month indicates not completed 1 Yr time period yet.
            y3--; 
            y3 = 11

            then add extra Months to m3 
            m3 = 12 + m2 - m1
               = 12 + 9 - 11
               = 10

            so final we get 11 years & 10 Months


           d3 = d2 - d1 
              = 8 - 14 
              = -6 This is not we actually expect

          Negative days value indicates not completed 1 Month time period yet.

          so minus 1 Month 
          m3--;
          m3 = 9;

          d3 = getDaysInMonth(y1,m1) + d2 - d1;   
             = 30 + 8 - 14
          d3 = 24


          if any case Month value is 0 and we Minus the Month then we get Negavtive value
             so to avoid this we again reset Month value to 11 
             setting 12 is already indicates adding 1 Yr so that setting 11 value to Month
             
    */