window.onload = () => {
    function buildClock(){
       

        const date = new Date();

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        
        hours = hours< 10 ? hours = "0" + hours : hours;
        minutes = minutes< 10 ? minutes = "0" + minutes : minutes
        seconds = seconds < 10 ? seconds = "0" + seconds : seconds;
          
        document.querySelector('#hours').innerText = hours;
        document.querySelector('#minutes').innerText = minutes;
        document.querySelector('#seconds').innerText = seconds;

        setTimeout(buildClock,1000);
    }
    buildClock();

}