const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
res.send("Hello World");    
})

app.get('/about', (req, res)=>{
res.send("about page");    
})

app.get('/404', (req, res)=>{
res.send("404 page not found");    
})

app.get('/user/:id/book/:bookid', (req, res)=>{
res.send(req.params)
})

app.get('/user/:id-:bookid', (req, res)=>{
res.send(req.params)
})

app.get('/search', (req, res)=>{
res.send(req.query)
})


app.get('/search2', (req, res)=>{
    const name = req.query.name;
    const age = req.query.age;
  
res.send(`you are ${age} years old and your name is ${name}`)
})

app.get('/download', (req, res)=>{
res.download('./download/DHBVN.pdf', new Date().toDateString() + '.pdf');
})

app.get('/download', (req, res)=>{
res.sendFile(__dirname + '/download/DHBVN.pdf', { headers: { 'Content-Disposition': 'attachment; filename=' + new Date().toDateString() + '.pdf' } });
})


app.post('/adata', (req, res)=>{
res.send(req.body);
})

app.get('/ahostname', (req, res)=>{
res.send(req.method);
})

app.get('/aahostname', (req, res)=>{
if(req.accepts('html')){
res.send(`<h1>hello HTML</h1>`);
}else if(req.accepts('json')){
res.send({ message: "hello JSON" });
}else if(req.accepts('xml')){
res.send("<message>hello XML</message>");
}else{
res.send("Not Acceptable");
}
})

app.get('/headers', (req, res)=>{
res.send(req.headers);
})

app.post('/useis', (req, res)=>{
if (req.is('application/json')) {
  res.send("valid data");
} else if (req.is('text/html')) {
  res.send("valid html data");
} else if (req.is('application/xml')) {
  res.send("<message>valid xml data</message>");
} else {
  res.status(400).send("Not Acceptable");
}
})