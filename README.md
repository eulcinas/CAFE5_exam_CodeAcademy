# CodeAcademy final exam task

The task was to create a React.js + Node.js + MongoDB application which lets a party planning company to register participants to an upcoming event. The user of the app sees this data:

- A registration form (inputs from Name, Surname, email and age);
- A list of registered participants for the upcoming event;

## Launching the application

This project concurrently launches Vite server (Front-End) and Node.js (express.js) which is connected to MongoDB databases. You can launch this app by using these steps:

- You can clone this repository by using the 'git clone' command in your terminal;
- After downloading all files, use command 'npm ci' to download node-modules;
- Finally start the application with command 'npm start';

Or use this link to view deployed project on my Vercel server
[CAFE5_exam]()

## Features

- CRUD operations (POST in registration form, GET in register list, PUT and DELETE to edit or remove the participants card);
- Data storage (users are stored in MongoDB database);
- Only 10 participant cards are rendered at the same time, pagination is applied to view other cards;
- Design is simple yet understandable;

### Credits

This project was created by Eimantas Ulčinas as part of a web development course final exam at Code Academy.
