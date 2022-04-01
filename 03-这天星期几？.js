const xingqiji = function (year,month,day) {
    let newDate = new Date()
    newDate.setFullYear(year,month-1,day)
    let arr = new Array()
    arr[0] = 'Sunday'
    arr[1] = 'Monday'
    arr[2] = 'Tuesday'
    arr[3] = 'Wednesday'
    arr[4] = 'Thursday'
    arr[5] = 'Friday'
    arr[6] = 'Saturday'
    console.log(arr[newDate.getDay()])
}
xingqiji(2022,3,25)
