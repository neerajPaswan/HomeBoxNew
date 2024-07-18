

const passwordGen = (size)=>{
    let password="";
    const elements = "1234567890@3$%&*()+abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(let idx=0;idx<size;idx++){
        let tempChar = Math.floor(Math.random()*elements.length);
        password += elements[tempChar];
    }
    return password;
}

export default passwordGen;