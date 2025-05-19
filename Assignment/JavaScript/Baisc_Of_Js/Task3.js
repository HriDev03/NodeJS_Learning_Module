//  Q3) Counter using closures
function func(){
    let time=0;
    function funcY(){
        setInterval(()=>{
            time++;
            console.log(time);
        },1000);
    }
    funcY();
}
func();
