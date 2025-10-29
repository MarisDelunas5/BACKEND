import * as studentControllers from '../controllers/StudentContollers.js';
import express from 'express';

const StudentRoutes = express.Router();

StudentRoutes.get ('/all', studentControllers.fetchStudent);

export default StudentRoutes;