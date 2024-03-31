// let {myVariable} = require('./file2');
// console.log(myVariable);

// console.log(global);

// console.log(process);

// const os = require('os');
// console.log(os.cpus());
// console.log(os.userInfo());

// console.log(__dirname);
// console.log(__filename);

// const {EventEmitter} = require('events');
// const ee = new EventEmitter;
//
// ee.on('xxx', () => {
//     console.log('xxx emitted');
// })
// ee.emit('xxx');
//
// ee.on('xxx1', (age, name) => {
//     console.log('xxx emitted', age, name);
// })
// ee.emit('xxx1', 22, 'vova');


let fs = require('fs');
let path = require('path');

// const filePath = path.join(process.cwd(), 'dir', 'text.txt');

// fs.writeFile(filePath, 'Hello world', (err) => {
//     if (err) {
//         console.log(err);
//     }
// })

// fs.readFile(filePath, (err, data) => {
//     console.log(data.toString());
// })

// fs.appendFile(filePath, 'TEST', (err) => {
//     if (err) {
//         console.log(err);
//     }
// })

// fs.mkdir(path.join(__dirname, 'zoom', 'test'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err);
//     }
// })

// fs.rmdir(path.join(__dirname, 'zoom'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err);
//     }
// })
//
// fs.readdir(path.join(process.cwd(), 'dir'), (err, files) => {
//     console.log(files);
// })
//
// fs.stat(filePath, (err, stat) => {
//     console.log(stat);
// })

// fs.unlink(filePath, () => {
//
// })

// fs.rename(path.join(process.cwd(), 'dir', 'file2.js'), path.join(process.cwd(), 'code', 'second.js'), (err) => {
//     if (err) {
//     console.log(err);
//     }
// })


let readStream = fs.createReadStream('./video.mp4');

readStream.on('data', (buffer) => {
    console.log(buffer);
})

readStream.on('end', () => {
    console.log('finish');
})

