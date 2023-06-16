const player = {};
player.name = 'Small Rinky';
player.speciality = 'gondo murkho';
player.bat = function(){
    console.log('swing your bat');
}
console.log(player);
player.bat();

const student ={
    name:'pandey',
    job:'khai andey',
    ball: function(){
        console.log('throw  the ball')
    },
    salary:100000
}

const person = new Object();
console.log(person);

const item = Object.create(null);
console.log(item);