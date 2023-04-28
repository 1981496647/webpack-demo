
// import _ from 'lodash';
// import './style.css'
// import Img from './hlw.jpg'
// import printMe from './print.js';
const component = async () => {
    const element = document.createElement('div');
    const { default: _ } = await import('lodash')
    element.innerHTML = _.join(['Hello', 'webpack'], '');

    // return import('lodash')
    //     .then(({ default: _ }) => {
    //         element.innerHTML = _.join(['Hello', 'webpack'], '');

    //         return element;
    //     })
    //     .catch(error => {
    //         console.log(error);
    //         console.log(
    //             'An error occurred while loading the component'
    //         );
    //     })
    // const element = document.createElement('div');
    // const btn = document.createElement('button');

    // // lodash 在当前 script 中使用 import 引入
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.classList.add('hello');
    // btn.innerHTML = '点击打印print'
    // // btn.onclick = printMe;
    // element.appendChild(btn);
    // // const myImg = new Image();
    // // myImg.src = Img;
    // // element.appendChild(myImg);
    return element;
}
component().then(component => {
    document.body.appendChild(component);
})