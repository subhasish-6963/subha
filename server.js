const express =require("express");
const app= express();

app.get("/",(req,res)=>{
    res.send("Hello world ");
});

app.get("date",(req,res)=>{
    res.send(new Data().toString());
});
app.use((req,res)=>{
    res.status(404).send("page not found");

});

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);

});