# Project4-frontend.github.io - My Travel Journal

* [Project Backend URL](https://github.com/Mepkaz01/Project4-backend.github.io)
* [Project Trello](https://trello.com/b/egfEOojZ/my-travel-journal-app-c4g2021)

This project is based on a hobby I have for helping out family and friends plan their travel itineraries. Based on what they are looking to do, I give them options on hotels, tours, restaurants and if renting a car rental is optimal. The people who I have helped plan trips for have always encouraged me to do a travel blog. Here is a start. 

## Wire Frame

![Wire Frame](https://user-images.githubusercontent.com/82845234/125888408-f918c266-e9f3-46d5-8734-254db2b010d7.png)


## User Stories

1) Home Page with information to motivate user to create an account
2) Login/Signup page for user (link in Home page) and admin user (https://localhost3000/adminlogin)
3) Author's Bio page
4) Travel Posts by country page with travel tips and cost per trip
5) User Login/Signup page should direct to User's Profile page with Edit/Delete functions
6) User's able to edit profile information on the profile page
7) User's are only able to see the Travel Posts link within their profile page
8) Admin Login/Signup page should direct to Admin's Profile page with Edit/Delete functions
9) Admin able to create an account for another admin
10) Admin Profile page should have links to Create Post page and Post Edit/Delete Page

## Future Enhancements

1) Admin Profile page should have links to User and Admin reports with delete functionality
2) Travel Posts page with bookmark button for user's to save in their own profile
3) User's Profile page is able to show bookmark posts
4) User's Profile page should have functionality to be able to remove bookmark posts from the profile page

## Screenshots

### Home Page

![Home](https://user-images.githubusercontent.com/82845234/125958363-121f6882-b0be-4179-ba0f-37cf9a9fef82.png)

### Search by Country Page

![Search](https://user-images.githubusercontent.com/82845234/125958508-d53d0271-59e0-4c36-a4ae-899a4c3bd896.png)

### About Me Page

![About](https://user-images.githubusercontent.com/82845234/125958963-5bcd087a-8a71-4f13-a7b2-130366586e2e.png)

### Travel Posts Page

![Posts](https://user-images.githubusercontent.com/82845234/125959160-2cefb774-84cb-4f4a-8977-503cc6094193.png)

## Technologies Used

* npm install
* npx create-react-app
* npm install --save react-router-dom
* npm install axios
* cd project-name
* npm i react-map-gl react-map-gl-geocoder
* npm start
* Download Bootstrap and follow directions from this page: https://mdbootstrap.com/docs/b5/react/getting-started/installation/

## Learning Opportunities/Issues Encountered

* Django and React - I started working with Django as my backend. Everything was going well until I realiazed I was not able to connect my user model to my post model. Spent a couple of days getting it to work and finally decided to switch my backend to Express node js which I had previously done with project 3. I'd like to continue to work on getting the Django backend version fully working. 
* Bookmark Feature - One of my goals was to add a bookmark feature to my page by having user's bookmark posts to their profile page. After a few days of trying to get this work with the suggestions of the instructors, I finally decided to go with another feature: the search by country. I'd continue to work on this since it's a must have for me. 

## Wins

* Got my the mapbox api going and the search by country api showing
* Bootstrap - I had fun working with the bootstrap as in many ways it made my job esier with styling however I still needed to apply some of my own css but nonetheless, very helpful. 

## Resources

* Map Box: https://medium.com/geekculture/building-an-interactive-map-with-mapbox-react-f335384f4863
* MDBootStrap: https://mdbootstrap.com/docs/b5/react/getting-started/installation/
* Code For Good Lessons Recordings
* Project 3 Fronted
* Instructors' tips and suggestions (Thanks!)


