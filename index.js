const app = require("./app");



app.listen(process.env.PORT || 4909, (err) => {
    err?console.log("Server Error"):
    console.log(`Server is running on ${process.env.SERVER_PORT} port`);    

})