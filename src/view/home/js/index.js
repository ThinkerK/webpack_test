var name = 'gulp';

var test = document.querySelector('.test');

test.innerText = `hello ${name} 修改`

const arr1 = [3,4,5,3,3,2,4,5]

for(let i in arr1){
    setTimeout(() => {
        console.log(i)
    },2000)
}