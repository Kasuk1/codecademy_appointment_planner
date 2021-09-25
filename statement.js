
const statement = `
Challenge Project: Appointment Planner
Overview
Instead of a step-by-step tutorial, this project contains a series of open-ended requirements which 
describe the project you’ll be building. There are many possible ways to correctly fulfill all of these requirements, 
and you should expect to use the internet, Codecademy, and other resources when you encounter a problem that you cannot easily solve.

Project Goals
In this project, you will use functional React components to create an app that manages contacts and appointments. 
The app consists of two pages: one to view and add contacts and one to view and add appointments.

Component Diagram

You will work with stateful and stateless functional React components using hooks. The requirements section will walk 
through implementing the app from the topmost component down. If you would like to implement it in a different order 
feel free to do what is comfortable for you.

Setup Instructions
If you choose to do this project on your computer instead of Codecademy, you can download what you’ll need by 
clicking the “Download” button below. Make sure you have Node installed on your computer and then, inside the 
project’s root directory, run npm install. Finally, run npm start which will automatically open up a new tab 
in your browser with your running application. If a new tab does not appear, you can visit http://localhost:3000/.

Tasks
Prerequisites
1.To complete this project, you should have completed the Codecademy lessons from Learn React including:

JSX
React Components
Components Interacting
Stateless Components From Stateful Components
Advanced React
Hooks
Project Requirements

2.The application code starts with App.js, ContactsPage.js and AppointmentsPage.js. These are the three stateful 
components you will work with in this project. App.js is located in the /src directory in the file explorer and 
should already be open in the code editor.

App is a stateful component that handles the routing between the two pages, ContactsPage and AppointmentsPage. 
This is already implemented using React Router.

Note: You do not need to be familiar with React Router to complete this project.

Based on the given requirements, implement App as a stateful component that maintains appointments and contacts. 
It should also pass those values, along with callback functions to update those state values, to its child components.

App Requirements:

Keep track of the contacts and appointments data, each being an array of objects
Define a callback function that, given a name, phone number, and email, adds a new contact object with that data to the array of contacts
Define a callback function that, given a title, contact, date, and time, adds a new appointment object with that data to the array of appointments
Pass the array of contacts and the appropriate callback function as props to the ContactsPage component
Pass the appointments array, contacts array, and the add appointment function as props to the AppointmentsPage component

Hint
To maintain state values in the App component:

Add { useState } to the 'react' import statement
Create empty arrays for contacts and appointments using useState([])
In the callback functions, set the new state with the setter function using the spread operator
[...oldStateArray, newArrayObject]


3.ContactsPage.js is located in the /src/continers/contactsPage directory in the file explorer 
and should already be open in the code editor.

Based on the given requirements, implement ContactsPage as a stateful component to handle the 
logic for adding new contacts and listing current contacts.

ContactsPage Requirements:

Receive two props:
The current list of contacts
A callback function for adding a new contact
Keep track of three local state values: the current name, phone, and email entered into the form
Check for duplicates whenever the name in the form changes and indicate the name is a duplicate
Only add a new contact on form submission if it does not duplicate an existing contact’s name
A successful submission should clear the form
In the Add Contact section, render a ContactForm with the following passed via props:
local state variables
local state variable setter functions
handleSubmit callback function
In the Contacts section, render a TileList with the contact array passed via props

Hint
Add { useState, useEffect } to the 'react' import statement
Import ContactForm and TileList
Extract the array of contacts and the callback for adding contacts from the props value passed as an argument to ContactsPage
The three state variables holding the form’s contact data should each default to an empty string using useState('')
Use a fourth local state variable to track a duplicate name. It should be false by default using useState(false)
To check for duplicates, implement a call to useEffect that sets the duplicate state variable to true if the name state 
variable is already in the contacts list
Within handleSubmit(), if the duplicate state variable is false, call the callback function for adding a 
new contact (passed via props) using the data from the form. Then reset the contact info state variables to their default state




4.ContactForm.js is located in the /src/components/contactForm directory in the file explorer 
and should already be open in the code editor.

Based on the given requirements, implement ContactForm as a stateless component that renders a web form to collect 
the necessary contact information.

ContactForm Requirements:

Render a form with:
The onSubmit attribute set
3 controlled <input> elements, one for each piece of contact data
A submit button
Include a pattern attribute to the phone <input> with a regex that matches the phone locale of your preference

Hint
Use <form onSubmit={callback} > to create the html form, where callback is the function passed via props for handling the form submission
The children of the form should be <input> elements, each with one of the following type attributes: 'text', 'tel', 'email' and 'submit'
The value attribute of the 3 controlled <input> elements should be set to the associated variable passed via props
The onChange attributes of the 3 controlled <input> elements should be set to a callback function that passes e.target.value to 
the associated setter function from props
One example of a phone regex is the US locale: "[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"


5.Open the TileList.js file located in the /src/components/tileList directory.

Based on the given requirements, implement TileList as a stateless component that renders a 
list of Tile components using an array of objects.

TileList Requirements:

Receive one prop:
An array of objects to render as a list
Use the array passed via props to iteratively render Tile components, passing each object in the array 
as a prop to each rendered Tile component
The requirements for the TileList component are generalized and allow it to be shared by the ContactsPage 
and AppointmentsPage components. As long as an array of objects with either the contact data or appointments 
data is passed then the content will be handled appropriately.


Hint
Import the Tile component
Extract the array of data from the props value passed as an argument to TileList
Use the map() method on the array prop
The map() callback function should have an object from the array as the first parameter and that object’s index as the second parameter
The callback should return a Tile component with the object parameter passed as a prop and the index parameter used as the component’s key



6.Open the Tile.js file located in the /src/components/tile directory.

Based on the given requirements, implement Tile as a stateless component that renders the data from an object.

Tile Requirements:

Receive one prop:
An object
Iterate over the values in the object, passed in via props, and render a <p> element for each value
Give a className of "tile-title" to the first <p> element
Give a className of "tile" to all other <p> elements
Just like the TileList component, the Tile component is generalized to work with data from any object. 
This allows it to be used in both the ContactsPage and AppointmentsPage components.


Hint
Extract the data object from the props value passed as an argument to Tile
You may use the Object.values() method to generate an array of the object’s values and then use map() to iterate over the array
Use the map() callback to render a <p> element for each of the object’s values. If you used Object.values(), use the value’s index as the key for the <p> element


7.Open the AppointmentsPage.js file located in the /src/containers/appointmentsPage directory.

Based on the given requirements, implement AppointmentsPage as a stateful component that handles the logic for 
adding new appointments and listing current appointments.

AppointmentsPage Requirements:

Receive three props:
The current list of appointments
The current list of contacts
A callback function for adding a new appointment
Keep track of four local state variables, the current title, contact, date, and time entered into the form
Add a new appointment on form submission
Clear the form on submission
In the Add Appointment section, render an AppointmentForm with the following passed via props:
local state variables
local state variable setter functions
handleSubmit callback function
In the Appointments section, render a TileList with the appointment array passed via props

Hint
Add { useState } to the 'react' import statement
Import AppointmentForm and TileList
Extract the array of appointments and the callback for adding appointments from 
the props value passed as an argument to AppointmentsPage
The four state variables holding the form’s appointment data should each default to an empty string using useState('')
The handleSubmit() function should call the callback function for adding a new appointment with the data from the form. 
It should also reset the appointment info state variables to their default values



8.Open the AppointmentForm.js file located in the /src/components/appointmentForm directory.

Based on the given requirements, implement AppointmentForm as a stateless component that renders a web form 
to collect the necessary appointment information.

AppointmentForm Requirements:

Render a form with:
The onSubmit attribute set to the callback function passed in via props
3 controlled input components, to be used for the title, date and time appointment data
A ContactPicker component with the contacts list passed in via props
A submit button
Use getTodayString() to set the min attribute of the date input

Hint
Import the ContactPicker component
Use <form onSubmit={callback} > to create the html form, where callback is the 
function passed via props for handling the form submission
The children of the form should be <input> elements of type text, date, time and submit
The value attribute of the input fields should be set to the associated variable in props
The onChange attribute for each of the <input> elements and the ContactPicker should be set to a callback 
function that passes e.target.value to the associated setter function



9.Open the ContactPicker.js file located in the /src/components/contactPicker directory.

Based on the given requirements, implement ContactPicker as a stateless component that
 renders a drop-down list of all contact names.

ContactPicker Requirements:

Receive 2 props:
The array of contacts
A callback function to handle when the onChange event is triggered
Render a select element with the onChange attribute set to the callback passed in via props
Have a default first option element that indicates no contact is selected
Iteratively add option elements using the contact names from the array passed in via props

Hint
Extract the array of contacts and the callback for handling onChange events 
from the props value passed as an argument to ContactPicker
The default <option> should have key and value attributes
The default <option> should have selected="selected" attribute
Use map() on the contact array in props to render an <option> for each contact 
with key and value attributes set to the contact name

`;