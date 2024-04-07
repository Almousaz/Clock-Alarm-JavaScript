const selectMenu = document.querySelectorAll('select');
const timeBox = document.querySelector('.time');
const setAlarmBtn = document.querySelector('button');
let alarmTime;


// finishing section hours
for (let i = 23 ; i >= 0 ; i--){
    // i = i < 10 ? '0' + i : i ;

    if(i < 10) {i = '0' + i}
    else{i = i}
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend' , option)
}

// finishing section minutes puttting numbers
for (let i = 59 ; i >= 0 ; i--){
    // i = i < 10 ? '0' + i : i ;

    if(i < 10) {i = '0' + i}
    else{i = i}
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML('afterend' , option)
}

//addign hours t the clock
setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    timeBox.innerHTML = `${h}:${m}:${s}`;

    if(alarmTime == `${h}:${m}`){
        console.log('ring');
    }

}, 1000);


// setting alarm
setAlarmBtn.addEventListener('click' , ()=> {

    // console.log(selectMenu[0].value)
    // console.log(selectMenu[1].value)

    alarmTime = `${selectMenu[0].value}:${selectMenu[1].value}`
    // console.log(alarmTime)
    if(alarmTime.includes('Hour') || alarmTime.includes('minute')){
       return alert('set the right time !') 
    }
    
})