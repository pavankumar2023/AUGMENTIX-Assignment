const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { body, validationResult } = require('express-validator');
const winston = require('winston');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Logger setup
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app.log' })
  ],
});

// MongoDB connection
mongoose.connect('mongodb://localhost/todo-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  logger.info('Connected to MongoDB');
});

// To-Do Model
const TodoSchema = new mongoose.Schema({
  task: String,
  completed: Boolean,
});

const Todo = mongoose.model('Todo', TodoSchema);

// Routes
app.get('/', (req, res) => {
  logger.info('Root route accessed');
  res.send('Welcome to the To-Do List API!');
});

app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    logger.error('Error fetching todos', error);
    res.status(500).send('Server error');
  }
});

app.post('/todos', [
  body('task').not().isEmpty().withMessage('Task is required')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const newTodo = new Todo({
    task: req.body.task,
    completed: false,
  });

  try {
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (error) {
    logger.error('Error saving todo', error);
    res.status(500).send('Server error');
  }
});

app.put('/todos/:id', async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { completed: req.body.completed },
      { new: true }
    );
    res.json(updatedTodo);
  } catch (error) {
    logger.error('Error updating todo', error);
    res.status(500).send('Server error');
  }
});

app.delete('/todos/:id', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted' });
  } catch (error) {
    logger.error('Error deleting todo', error);
    res.status(500).send('Server error');
  }
});

// Global error-handling middleware
app.use((err, req, res,) => {
  logger.error('Global error handler:', err);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
