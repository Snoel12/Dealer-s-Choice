const express = require("express");
const app = express();
const port = process.env.port || 3000;
const morgan = require("morgan");
const { find } = require("./dealer");
const dealer = require("./dealer");

app.use(morgan("dev"));
app.use(express.static("public"));
app.get("/", (req, res) => {
  const supe = dealer.list();
  const html = `<!DOCTYPE html>
  <html>
  <head>
      <title> The Avengers </title>
      <link rel = "stylesheet" type= 'text/css' href ='./style.css'/>
  </head>
  <body>
  <nav>
  <a href= '/' > Home </a>
  <a href ='/users'> Users </a>
  </nav>
  <div>
  <h1 id = 'homeh1'> The Avengers Initiative</h1>
  </div>
  
  </body>
  
  </html>
  `;
  res.send(html);
});

app.get("/users", (req, res) => {
  const supe = dealer.list();
  const html = `<!DOCTYPE html>
    <html>
    <head>
        <title> The Avengers </title>
        <link rel = "stylesheet" href ='./style.css'/>
    </head>
    <body id ='homeBody'>
    <nav>
    <a href= '/' > Home </a>
    <a href ='/users'> Users </a>
    </nav>
    <h1> The Avengers</h1>
    <ul>
      ${supe
        .map(
          (supes) => `<li> <a href= '/users/${supes.id}'>${supes.alias} </li>`
        )
        .join("")}  
    </ul>
    
    </body>
    
    </html>
    `;
  res.send(html);
});

app.get("/users/:id", (req, res) => {
  const supe = dealer.list();
  let pointer = req.params.id;
  let superhero = find(pointer);
  const html = `<!DOCTYPE html>
      <html>
      <head>
          <title> Captain America </title>
          <link rel = "stylesheet" href ='./style.css'/>
      </head>
      <body id>
      <nav>
      <a href= '/' > Home </a>
      <a href ='/users'> Users </a>
      </nav>
      <h1> ${superhero.alias} </h1>
      <table> 
      <tr>
       <th> first name</th>
       <th> first name</th>
      </tr>
      <th> ${superhero.firstName} </th>
      <th> ${superhero.lastName} </th>
      <tr> 
       
      </tr>
      

      
      </table>
      
      </body>
      
      </html>
      `;
  res.send(html);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
