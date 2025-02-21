function getWeekNumber() {
    date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 4 - (date.getDay() || 7));
    var yearStart = new Date(date.getFullYear(), 0, 1);
    var weekNo = Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
    if (weekNo == 8){
        document.getElementById("date").innerHTML = "Sesiunea B1";
    }
    if(weekNo >= 9 && weekNo <= 16){
        weekNo = weekNo - 8;
        document.getElementById("date").innerHTML = weekNo;
        if(weekNo%2!==0){
            document.getElementById("oddEven").innerHTML = "impară";
        }else{
            document.getElementById("oddEven").innerHTML = "pară";
        }
    } else if (weekNo >= 18 && weekNo <= 23){
        weekNo = weekNo - 9;
        document.getElementById("date").innerHTML = weekNo;
        if(weekNo%2!==0){
            document.getElementById("oddEven").innerHTML = "impară";
        }else{
            document.getElementById("oddEven").innerHTML = "pară";
        }
    }else if (weekNo >= 24 && weekNo <= 26){
        document.getElementById("date").innerHTML = "Sesiunea A2";
    } else if (weekNo == 27){
        document.getElementById("date").innerHTML = "Sesiunea B2";
    } else if (weekNo == 28){
        document.getElementById("date").innerHTML = "Prezentare dizertație";
    }
}