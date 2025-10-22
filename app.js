import express from "express";

const app = express();

const port = 5678

app.use(express.json()); 

try{
app.listen(port, () =>{
    console.log('listening to port 3000...');

});

}catch(e){
    console.log(e);

}

app.get('/ivan', async (request, response) =>{
    response.status(200).json({messages: "hello there! I am Kikay"});

})
