const fs = require('fs');

// reading file
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) console.log(err);
//     console.log(data) // will output buffer data of file
//     console.log(data.toString());
// });

// writing file
// fs.writeFile('./docs/blog1.txt', 'Hello, World!', () => {
//     console.log('File written successfully');
// });
// fs.writeFile('./docs/blog2.txt', 'Hello, World!', () => {
//     console.log('File written successfully');
// });

// directories
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) console.log(err);
//         console.log('Folder created successfully');
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) console.log(err);
//         console.log('Folder deleted successfully');
//     });
// }

// deleting files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) console.log(err);
        console.log('File deleted successfully');
    });
}