require('dotenv').config()
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';

const server = express();

server.use(cors());
server.use(bodyParser.json());

import setRoutes from './routes';
setRoutes(server);

export default server;