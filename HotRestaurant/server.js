// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
//
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Guest Reso/wait list (DATA)

const reservations = [
 
 ];
 
 const waitlist = [
  
  ];

// Routes

// Basic route that sends the user first to the AJAX Page
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));


// Displays a single character, or returns false
app.get('/api/reservations', (req, res) => res.json(reservations));
app.get('/api/waitlist', (req, res) => res.json(waitlist));


// Create New Characters - takes in JSON input
app.post('/api/tablerequest', (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newReso = req.body;



  if (reservations.length < 5){

    reservations.push(newReso);

  } else{

    waitlist.push(newReso)
  }
  
  res.json(newReso);
});

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
