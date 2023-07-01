const countDown = () => {
    const countDay = new Date("August 5,2023 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = countDay - now;
    
    const seconds = 1000;
    const minutes =seconds *60;
    const hours   =minutes*60;
    const days    =hours*24;

    const txtDay = Math.floor(timeLeft/days);
    const txtHour=Math.floor((timeLeft % days)/hours) ;
    const txtMinutes =Math.floor((timeLeft % hours)/minutes);
    const txtSeconds =Math.floor((timeLeft%minutes)/seconds );

    document.querySelector('.day').innerHTML = txtDay;
    document.querySelector('.hour').innerHTML = txtHour;
    document.querySelector('.minutes').innerHTML = txtMinutes;
    document.querySelector('.second').innerHTML =txtSeconds;

    if (timeLeft < 0) {
        document.getElementById("txt").innerText = "It's my birthday!";
        document.querySelector('.container').style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
    }
};
setInterval(countDown,1000);