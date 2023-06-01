setInterval(
    function seeBirthday() {
        //user data input 
        let month = document.querySelector('#month').value
        let date = document.querySelector('#date').value
        date = Number(date)

        //current date 
        let currentFullDate = new Date()
        let currentMonth = currentFullDate.getMonth()
        currentMonth = Number(currentMonth)
        let currentDate = currentFullDate.getDate()
        currentDate = Number(currentDate)

        
        // months if condition


        // if (currentMonth === 0) {

        //     Month = 'January'

        // } else if (currentMonth === 1) {

        //     Month = 'February'

        // } else if (currentMonth === 2) {

        //     Month = 'March'

        // } else if (currentMonth === 3) {

        //     Month = 'April'

        // } else if (currentMonth === 4) {

        //     Month = 'May'

        // } else if (currentMonth === 5) {

        //     Month = 'June'

        // } else if (currentMonth === 6) {

        //     Month = 'July'

        // } else if (currentMonth === 7) {

        //     Month = 'August'

        // } else if (currentMonth === 8) {

        //     Month = 'September'

        // } else if (currentMonth === 9) {

        //     Month = 'October'

        // } else if (currentMonth === 10) {

        //     Month = 'November'

        // } else {

        //     Month = 'December'

        // }

        //concatenate and print for experiment

        // let now = `${currentDate} ${Month}`
        // console.log(now)

        // let userDate = `${date} ${month}`
        // console.log(userDate)

        // document.querySelector('#result').innerHTML = 'currentDate :' + now + '<br/>' + 'userDate :' + userDate

        // here we got user date of birth and user current date
        // next task is how much time will take from current date to user date of birth
        // here i will use urdu variables and comments

        //convert user months into index numbers

        if (month === 'January') {
            NewMonth = 0
        }else if (month === 'February') {
            NewMonth = 1
        }else if (month === 'March') {
            NewMonth = 2
        }else if (month === 'April') {
            NewMonth = 3
        }else if (month === 'May') {
            NewMonth = 4
        } else if (month === 'June') {
            NewMonth = 5
        } else if (month === 'July') {
            NewMonth = 6
        } else if (month === 'August') {
            NewMonth = 7
        } else if (month === 'September') {
            NewMonth = 8
        } else if (month === 'October') {
            NewMonth = 9
        } else if (month === 'November') {
            NewMonth = 10 
        }else {
            NewMonth = 11
        }

        let months = NewMonth - currentMonth

        if (months < 0) {

            months = months + 12

        } else {

            months = months
        }

        //here we have our months finally! now its tim for days

        // now for days

        let dates = date - currentDate

        if (dates < 0) {

            dates = dates + 30
            months = months - 1
        } else  {
            dates = dates 
        }

        // console.log(months)
        // console.log(dates)
        // here we have our months and days now take time

        let currentHour = currentFullDate.getHours()

        let NewHour = 23 - currentHour

        if (NewHour === 0) {
            dates = dates - 1
        } else {
            dates = dates
        }

           // console.log(NewHour)
        // here we have completed our hours now minutes

        let currentMinute = currentFullDate.getMinutes()

        let NewMinute = 60 - currentMinute

        if (NewMinute === 0) {

            NewHour = NewHour - 1

        } else {
            NewHour = NewHour
        }

         // console.log(NewMinute)
        // here we have completed our minutes now seconds

        let currentSecond = currentFullDate.getSeconds()

        let NewSecond = 60 - currentSecond

        if (NewSecond === 0) {
            NewMinute = NewMinute - 1 
        } else {
            NewMinute = NewMinute
        }
        // console.log(NewSecond)
        // second done now milisecond

        let currentMilliSecond = currentFullDate.getMilliseconds()

        let NewMilliSecond = 1000 - currentMilliSecond

        if (NewMilliSecond === 0) {

            NewSecond = NewSecond - 1

        } else {

            NewSecond = NewSecond
        }
          // console.log(NewMilliSecond)
        //milli second done now print

        //but singular plural first

        if (months === 1) {
            month1 = 'Month'
        } else {
            month1 = 'Months'
        }

        if (dates === 1) {
            day1 = 'Day'
        } else {
            day1 = 'Days'
        }

        if (NewHour === 1) {
            hour1 = 'Hour'
        } else {
            hour1 = 'Hours'
        }

        if (NewMinute === 1) {
            minute1 = 'Minute'
        } else {
            minute1 = 'Minutes'
        }

        if (NewSecond === 1) {
            second1 = 'Second'
        } else {
            second1 = 'Seconds'
        }

        if (NewMilliSecond === 1) {
            millisecond1 = 'Millisecond'
        } else {
            millisecond1 = 'Milliseconds'
        }

        //months error

        if(months === -1){

            months = 11

        } else {
            months = months

        }

        //now print

        let WholeTime = `${months} ${month1},<br/>  ${dates} ${day1},<br/>  ${NewHour} ${hour1},<br/>  ${NewMinute} ${minute1},<br/>   ${NewSecond} ${second1},<br/>  ${NewMilliSecond} ${millisecond1}`

        document.querySelector("#result").innerHTML = WholeTime
    }

    , 1
)