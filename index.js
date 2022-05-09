import express from "express"
import path from "path"
import dotenv from 'dotenv'
import {routers} from './src/routers/router.js'

dotenv.config();
const __dirname = path.resolve(path.dirname(''))

const app = express();

app.use(express.urlencoded({extended: true})) 
app.use(express.json()) 

app.set('view engine','ejs')
app.use(routers)
app.use(express.static(path.join(__dirname,"public")));

const port = process.env.PORT || 3000 
app.listen(port,() => {console.log(`rodando na porta ${port}`)});

