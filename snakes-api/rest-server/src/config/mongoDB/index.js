import mongoose from 'mongoose';
import {
  success,
  error
} from '../../lib/log';

mongoose.connect('mongodb://localhost/snakes');

const Snake = mongoose.model('Snake', { name: String });

const python = new Snake({ name: 'Monty' });
python.save()
  .then( () => 
    success('mongo queries connected: tssss'
  ))
  .catch( err => {
    error('error connecting mongo queries')});