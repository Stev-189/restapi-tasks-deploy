import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import TasksRoutes from './routes/tasks.routes';

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//middlewares
const corsOptions={}
app.use(cors(corsOptions)); // culaquier servidro puede hacer peticiones
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false})); // para entender peticiones formularios
//Routes
app.get('/',(req,res)=>{
  res.json({message: 'welcome to my application'})
})
app.use('/api/tasks',TasksRoutes);
export default app