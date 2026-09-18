export default function Random(){
    let rand=Math.floor((Math.random()*100)+1)
    return <h3 style={{'color':'plum'}}>
        Random Number is :{rand}
    </h3>
}