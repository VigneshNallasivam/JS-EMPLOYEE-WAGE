const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS_PER_MONTH = 20;
function EmployeeWage() {
    /**
     * In this method calculate the Employee Wage
     */
    let employeeWageArray = new Array();
    let workingHours = 0;
    let workingHoursInMonth = 160;
    let day = 1;
    while (day <= WORKING_DAYS_PER_MONTH && workingHours <= workingHoursInMonth) {
        let ramdomValue = Math.floor(Math.random() * 10) % 3;
        switch (ramdomValue) {
            case IS_FULL_TIME:
                workingHours += FULL_TIME_HOURS;
                employeeWageArray.push(FULL_TIME_HOURS*WAGE_PER_HOUR)
                break;
            case IS_PART_TIME:
                workingHours += PART_TIME_HOURS;
                employeeWageArray.push(PART_TIME_HOURS*WAGE_PER_HOUR)
                break;
            default:
                employeeWageArray.push(0*WAGE_PER_HOUR)
                workingHours += 0;
        }
        day++;
    }
    console.log("Employee Working hours in month : " + workingHours);
    console.log("Employee Total wage per month : " + workingHours * WAGE_PER_HOUR);
    /**
     * print array
     */
    console.log("Daily employee wage store in array : "+employeeWageArray);
    /**
     * use reduce function
     */
    console.log("Reduce function");
    let toatalWage = employeeWageArray.reduce((x,y) => x+y);
    console.log(toatalWage);
    let number=1;
    /**
     * use map function
     */
    console.log("map function");
    employeeWageArray.map((x)=>{
        console.log( number++ + ' : ' +x);
    } );
    /**
     * use filter function
     */
    console.log("filter function");
    employeeWageArray.filter(x => {if(x==160){
        console.log(x);
    }});
    /**
     * use find function
     */
    console.log("find function 160 wage days");
    employeeWageArray.find((x,y) =>{
        if(x==160){
            console.log(y);
        }
    });
    /**
     * every function
     */
    console.log("Every function for full time wage");
    let status = employeeWageArray.every(x=> x==160);
    console.log(status);
    console.log("Every function for part time wage");
    let result = employeeWageArray.every(x=> x==80);
    console.log(result);
    /**
     * find the total working days
     */
    console.log("filter function");
    let count=0;
    employeeWageArray.filter(x => {if(x>0){
        count++;
    }});
    console.log("Working days : "+count);
}