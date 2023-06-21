const fs=require('fs');
const rs=fs.createReadStream('./test.txt');
rs.on('open',()=>{
    console.log('File Opened');
})
rs.on('data',(data)=>{
    console.log(data.toString());
})