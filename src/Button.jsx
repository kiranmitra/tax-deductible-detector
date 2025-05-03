
function Button(){
    // const handleClick = () => console.log("Clicked");

    // const handleClick2 = (name) => console.log(`${name} was here`)
    //return(
        //<button onClick={() => handleClick2("Eddie")}>Click Me</button>
    //);
    /*
    let count = 0
    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} has clicked the button ${count} amount of times`)
        } 
        else{
            console.log(`${name} lock in`)
        }
    };

    return(
        <button onClick={() => handleClick("Eddie")}>Click Me</button>
    ); */

    const handleClick = (e) => e.target.textContent = "Been Clicked"
    
    return(
    
         <button onDoubleClick={(e) => handleClick(e)}> Click me</button>
        
        
    );
}

export default Button