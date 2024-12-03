export const generateRandom = ()=>{
    const charaters= "ABCDEFGHIJKLMNOPURSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let result = "";
    for(let i=0; i<4;i++) {
        result += charaters.charAt(Math.floor(Math.random()*charaters.length))
    }
    return result;
}