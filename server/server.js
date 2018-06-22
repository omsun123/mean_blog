const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors =require('cors');

const config= require('./config.js'); 

const app = express();
mongoose.connect(config.database,(err)=>{
	if(err){
		console.log(err);
	}else{
		console.log('connected to database.');
	}
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(cors());

const userRoutes = require('./routes/account');
app.use('/api/accounts', userRoutes);

app.listen(3030,err=>{
	console.log('Server running at 3030 and its good.');
});
app.get('/',(req,res)=>{
	res.send('hello world');
});