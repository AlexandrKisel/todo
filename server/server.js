/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');

const app = express();
const port = 8081;

const categories = [{
    categoryId: '1',
    categoryTitle: 'To Read',
  },
  {
    categoryId: '2',
    categoryTitle: 'To Watch',
  },
  {
    categoryId: '3',
    categoryTitle: 'To Buy',
  },
  {
    categoryId: '4',
    categoryTitle: 'To Eat',
  },
  {
    categoryId: '5',
    categoryTitle: 'To Go',
  },
  {
    categoryId: '6',
    categoryTitle: 'To Learn',
  },
];

const tasks = [{
  taskId: '1',
  taskCategory: categories[0],
  taskTitle: 'Jodi Picoult: Leaving Time',
  taskDescription: 'pep',
  isDone: false,
}, {
  taskId: '2',
  taskCategory: categories[0],
  taskTitle: 'Eleanor Coerr: Mieko and the Fifth Treasure',
  taskDescription: 'pop',
  isDone: false,
}, {
  taskId: '3',
  taskCategory: categories[0],
  taskTitle: 'Jay Asher: Thirteen Reasons Why',
  taskDescription: 'pip',
  isDone: false,
}, {
  taskId: '4',
  taskCategory: categories[0],
  taskTitle: 'Sandra Cisneros: The House On Mango Street',
  taskDescription: 'lorem ipsum',
  isDone: false,
}, {
  taskId: '5',
  taskCategory: categories[0],
  taskTitle: 'James Matthew Barrie: Peter Pan',
  taskDescription: 'lorem ipsum',
  isDone: false,
}, {
  taskId: '6',
  taskCategory: categories[0],
  taskTitle: 'Ernest Hemmingway: The Old Man and the Sea',
  taskDescription: 'lorem ipsum',
  isDone: false,
}, {
  taskId: '7',
  taskCategory: categories[0],
  taskTitle: 'Lois Lowry: Number the Stars',
  taskDescription: 'lorem ipsum',
  isDone: false,
}, {
  taskId: '8',
  taskCategory: categories[1],
  taskTitle: 'The Godfather',
  taskDescription: 'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.',
  isDone: false,
}, {
  taskId: '9',
  taskCategory: categories[1],
  taskTitle: 'The Shawshank Redemption',
  taskDescription: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
  isDone: false,
}, {
  taskId: '10',
  taskCategory: categories[1],
  taskTitle: 'The Dark Knight',
  taskDescription: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
  isDone: false,
}, {
  taskId: '11',
  taskCategory: categories[1],
  taskTitle: 'Pulp Fiction',
  taskDescription: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
  isDone: false,
}, {
  taskId: '12',
  taskCategory: categories[2],
  taskTitle: 'Milk',
  taskDescription: 'lorem ipsum',
  isDone: false,
}, {
  taskId: '13',
  taskCategory: categories[2],
  taskTitle: 'Bread',
  taskDescription: 'lorem ipsum',
  isDone: false,
}, {
  taskId: '14',
  taskCategory: categories[2],
  taskTitle: 'Butter',
  taskDescription: 'lorem ipsum',
  isDone: false,
}, {
  taskId: '15',
  taskCategory: categories[2],
  taskTitle: 'Meat',
  taskDescription: 'lorem ipsum',
  isDone: false,
}, {
  taskId: '16',
  taskCategory: categories[2],
  taskTitle: 'Cupcake',
  taskDescription: 'lorem ipsum',
  isDone: false,
}, {
  taskId: '17',
  taskCategory: categories[2],
  taskTitle: 'Sausage',
  taskDescription: 'lorem ipsum',
  isDone: false,
}, {
  taskId: '18',
  taskCategory: categories[2],
  taskTitle: 'Juice',
  taskDescription: 'lorem ipsum',
  isDone: false,
}, {
  taskId: '19',
  taskCategory: categories[3],
  taskTitle: 'Hamburger',
  taskDescription: 'lorem ipsum',
  isDone: false,
}, {
  taskId: '20',
  taskCategory: categories[3],
  taskTitle: 'Pizza',
  taskDescription: 'lorem ipsum',
  isDone: false,
}, {
  taskId: '21',
  taskCategory: categories[3],
  taskTitle: 'French fries',
  taskDescription: 'lorem ipsum',
  isDone: false,
}, {
  taskId: '22',
  taskCategory: categories[4],
  taskTitle: 'Сinema',
  taskDescription: 'lorem ipsum',
  isDone: false,
}, {
  taskId: '23',
  taskCategory: categories[4],
  taskTitle: 'Barbershop',
  taskDescription: 'lorem ipsum',
  isDone: false,
}, {
  taskId: '24',
  taskCategory: categories[4],
  taskTitle: 'Jogging',
  taskDescription: 'lorem ipsum',
  isDone: false,
}, {
  taskId: '25',
  taskCategory: categories[5],
  taskTitle: 'HTML',
  taskDescription: 'pep',
  isDone: false,
}, {
  taskId: '26',
  taskCategory: categories[5],
  taskTitle: 'CSS',
  taskDescription: 'pop',
  isDone: false,
}, {
  taskId: '27',
  taskCategory: categories[5],
  taskTitle: 'Javascript',
  taskDescription: 'pip',
  isDone: false,
}, {
  taskId: '28',
  taskCategory: categories[5],
  taskTitle: 'REACT',
  taskDescription: 'pop',
  isDone: false,
}]

app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({
  extended: true
})) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/tasks', (req, res) => {
  setTimeout(() => {
    res.json(tasks)
  }, 200)
})

app.get('/categories', (req, res) => {
  setTimeout(() => {
    res.json(categories);
  }, 200)
})

app.post('/addTask', (req, res) => {
  tasks.push(req.body)
  setTimeout(() => {
    res.json(tasks)
  }, 200)
})

app.post('/addCategory', (req, res) => {
  categories.push(req.body)
  setTimeout(() => {
    res.json(tasks)
  }, 200)
})

app.post('/editCategory', (req, res) => {
  categories.splice(
    categories.findIndex((item) => item.categoryId === req.body.categoryId),
    1,
    req.body,
  );
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].taskCategory.categoryId === req.body.categoryId) tasks[i].taskCategory.categoryTitle = req.body.categoryTitle;
  }
  setTimeout(() => {
    res.json(categories)
  }, 200)
})

app.post('/deleteCategory', (req, res) => {
  categories.splice(
    categories.findIndex((item) => item.categoryId === req.body.categoryId),
    1
  );
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].taskCategory.categoryId === req.body.categoryId) {
      tasks.splice(i, 1);
      i -= 1;
    }
  };
  setTimeout(() => {
    res.json(categories)
  }, 200)
})

app.post('/editTask', (req, res) => {
  tasks.splice(
    tasks.findIndex((item) => item.taskId === req.body.taskId),
    1,
    req.body,
  );
  setTimeout(() => {
    res.json(tasks)
  }, 200)
})

app.post('/deleteTask', (req, res) => {
  tasks.splice(
    tasks.findIndex((item) => item.taskId === req.body.taskId),
    1
  );
  setTimeout(() => {
    res.json(tasks)
  }, 200)
})

app.post('/editTaskStatus', (req, res) => {
tasks[tasks.findIndex((item) => item.taskId === req.body.taskId)].isDone = !tasks[tasks.findIndex((item) => item.taskId === req.body.taskId)].isDone;
  setTimeout(() => {
    res.json(tasks)
  }, 200)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})