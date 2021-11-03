# Time Punch  App
## UNDER CONSTRUCTION
## Description
This application is meant to keep track of time punches on various projects for an employer. It was made for a small car dealership in Utah, which had minimal employees. It is meant to be lightweight, fast, and perform a limited number of purposes:
1. Employees can log in to the app (basic security)
2. Employees can select a project they are working on (numerical, in this case). First two numbers are the year, last two numbers are teh vehicle. Ex: 2134 would be for the year 2021, and vehicle number 34.
3. Employees can see their time punch history for last two weeks
4. Admin has access to all employee info on the app, including name, password reset, pay rate, and time punch history. Can export the data as needed (Feature to be figured out)
## Technologies
- React
- React-Router-Dom
- Materials UI (This one is new for me, as I generally do the CSS myself)
- NodeJS
- Express
- PostgresSQL database
- Sequelize

### Developer Notes
- react admin may be the best way to allow admin view