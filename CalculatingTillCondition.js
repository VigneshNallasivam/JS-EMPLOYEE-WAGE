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
    let workingHours = 0;
    let workingHoursInMonth = 160;
    let day = 1;
    while (day <= WORKING_DAYS_PER_MONTH && workingHours <= workingHoursInMonth) {
        let ramdomValue = Math.floor(Math.random() * 10) % 3;
        switch (ramdomValue) {
            case IS_FULL_TIME:
                workingHours += FULL_TIME_HOURS;
                break;
            case IS_PART_TIME:
                workingHours += PART_TIME_HOURS
                break;
            default:
                workingHours += 0;
        }
        day++;
    }
    console.log("Employee Working hours in month : " + workingHours);
    console.log("Employee Total wage per month : " + workingHours * WAGE_PER_HOUR);
}