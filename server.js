const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;
const storiesFilePath = 'stories.json';

app.use(cors());
app.use(bodyParser.json());

let stories = [];
var buttonclick = 0;

app.get('/', (req, res) => {
  try {
    res.json(stories);
  } catch (error) {
    console.error('Error reading stories:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/', (req, res) => {
  try {
    if(buttonclick >= 3){
        console.log("Cannot add more stories");
    }
    else{
    const newStory = { ...req.body, id: stories.length + 1 };
    console.log('Received new story:', newStory);
    stories.push(newStory);

    fs.writeFileSync(storiesFilePath, JSON.stringify(stories, null, 2));

    res.json(newStory);
    }
    buttonclick++;

  } catch (error) {
    console.error('Error adding story:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
