/*
* 1)Write a JS program to display the current day and time in the following format.
* sample output : Today is Tuesday
* Current time is : 10PM : 30 : 38
* 2)Write a JS program to get the current Date
* 3)Find the area of a triangle where lengths of the three of its sides are 5, 6, 7
* 4)Find 1st January be a Sunday between a range of years
* */
const today = new Date()
const CurrentData = {
    getToday() {
        let day = today.getDay()
        const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        console.log(`Today is ${dayList[day]}`);
    },
    getTodayTime() {
        let hours = today.getHours()
        let minutes = today.getMinutes()
        let seconds = today.getSeconds()
        let prepand = (hours >= 12) ? "PM" : "AM";
        hours = (hours >= 12) ? hours - 12 : hours;
        if (hours === 0 && prepand === "PM") {
            if (minutes === 0 && seconds === 0) {
                hours = 12
                prepand = "Noon"
            } else {
                hours = 12
                prepand = "PM"
            }
        }
        if (hours === 0 && prepand === "AM") {
            if (minutes === 0 && seconds === 0) {
                hours = 12
                prepand = "Midnight"
            } else {
                hours = 12
                prepand = "AM"
            }
        }
        console.log(`Current time : ${hours} ${prepand} : ${minutes} : ${seconds}`)
    },
    getCurrentDate() {
        let dd = today.getDate()
        let mmn = today.getMonth() + 1
        let mmt = today.getMonth()
        let yy = today.getFullYear()
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        // console.log(`${dd}${mm}${mm}`)
        dd = (dd < 10) ? `0${dd}` : ''
        mmn = (mmn < 10) ? `0${mmn}` : ''
        mmt = (mmt < 10) ? `${mmt}` : ''
        /*if (dd < 10) dd = `0${dd}`
        if (mm < 10) mm = `0${mm}`*/
        console.log("Current Date")
        let todayDateNum = `${mmn}-${dd}-${yy}`
        let todayDateText = `${month[mmt]}-${dd}-${yy}`
        console.log(todayDateNum)
        console.log(todayDateText)
        todayDateNum = `${mmn}/${dd}/${yy}`
        todayDateText = `${month[mmt]}/${dd}/${yy}`
        console.log(todayDateNum)
        console.log(todayDateText)
        todayDateNum = `${dd}-${mmn}-${yy}`
        todayDateText = `${dd}-${month[mmt]}-${yy}`
        console.log(todayDateNum)
        console.log(todayDateText)
        todayDateNum = `${dd}/${mmn}/${yy}`
        todayDateText = `${dd}/${month[mmt]}/${yy}`
        console.log(todayDateNum)
        console.log(todayDateText)
    },
    getAriaTriangle() {
        const [s1, s2, s3] = [5, 6, 7]
        const perimeter = (s1 + s2 + s3) / 2
        const area = Math.sqrt(perimeter * ((perimeter - s1) * (perimeter - s2) * (perimeter - s3)))
        console.log(area)
    },
    getLeapYear(year) {
        return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
    },
    getFirstSunday(from, to) {
        for (let year = from; year < to; year++) {
            const d = new Date(year, 0, 1)
            if (d.getDay() === 0) console.log(`1st January is being sunday ${year}`)
        }
    }

}
CurrentData.getToday();
CurrentData.getTodayTime()
CurrentData.getCurrentDate()
CurrentData.getAriaTriangle()
console.log(CurrentData.getLeapYear(2016));
CurrentData.getFirstSunday(2014, 2050)

/*
* 2)Write a JS program to print the contents of the current window
* */
function getWindow() {
    window.print();
}


