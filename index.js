const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json())
const port = 5000;

app.get('/', (req, res)=>{
    res.send("hello from node server and express ..excited meeeee..");
});

const users = [

    {id:0, name: "shabana", email:"shabana@gmail.com", phone:"01876514682"},
    {id:1, name: "shabnur", email:"shabnur@gmail.com", phone:"01876514683"},
    {id:2, name: "shakib", email:"shakib@gmail.com", phone:"01876514685"},
    {id:3, name: "susmita", email:"susmita@gmail.com", phone:"01876514687"},
    {id:4, name: "suchorita", email:"suchorita@gmail.com", phone:"01876514688"}
]

// app.get('/users', (req, res)=>{
//     res.send(users);
// });

app.get('/fruits',(req, res)=>{
    res.send(["mango", "apple", "pineapple", "watermelone"])
});

//search quaery chek =>

app.get('/users', (req, res)=>{
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user =>user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
});

//post methode =>

app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    res.json(newUser)
    console.log('hitting the post', req.body);
    res.send('inside post')
})

app.get('/fruits/mango/fazli', (req, res)=>{
    res.send('fazli am tok lage onek')
})

//dynamic api create =>

app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, ()=>{
    console.log('listennig from port', port);
})
