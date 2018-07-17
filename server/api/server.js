import app from './app'
let port = process.env.port || 80;

let server = app.listen(port,()=>{
    console.log(`Eko Delivery App is running on ${port}`);
})

export default server //For testing
