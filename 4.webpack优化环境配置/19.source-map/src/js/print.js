console.log('print.js被加载了');

function myprint() {
    const content = 'hello webpack!!!'
    console.log(content)();
}
export default myprint