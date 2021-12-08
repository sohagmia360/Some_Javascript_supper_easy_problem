// Return Less Then 0 or Eual

function LessThenEual(numbers){
    if(numbers < 0 || numbers === 0){
        return true
    }else{
        return false
    }
}
let Result = LessThenEual(80)
console.log(Result)