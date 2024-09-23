function getWeekNumber() {
    date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 4 - (date.getDay() || 7));
    var yearStart = new Date(date.getFullYear(), 0, 1);
    var weekNo = Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
    if(weekNo >= 40 && weekNo <= 51){
        weekNo = weekNo - 39;
        document.getElementById("date").innerHTML = weekNo;
        if(weekNo%2!==0){
            document.getElementById("oddEven").innerHTML = "impară";
        }else{
            document.getElementById("oddEven").innerHTML = "pară";
        }
    } else if (weekNo >= 2 && weekNo <= 3){
        weekNo = weekNo + 11;
        document.getElementById("date").innerHTML = weekNo;
        if(weekNo%2!==0){
            document.getElementById("oddEven").innerHTML = "impară";
        }else{
            document.getElementById("oddEven").innerHTML = "pară";
        }
        console.log(weekNo);
    } else if (weekNo >= 4 && weekNo <= 6){
        document.getElementById("date").innerHTML = "Sesiunea A1";
    } else if (weekNo == 8){
        document.getElementById("date").innerHTML = "Sesiunea B1 (update pentru semestrul 2 curând)";
    } else {
        document.getElementById("date").innerHTML = "Vacanță";
    }
}