# boom

Light the firecracker!

## Objective

Use **JavaScript Event Listeners** and **Audio** to click an image of a firecracker, change the image source, and play a sound!

## Prerequisites

To complete this project, students should have the following:  
* Basic understanding of HTML structures and attributes.
* Basic understanding of JavaScript and DOM (Event Handling).

## Concepts

HTML | Description
-----|------------
audio | An audio element.

JS | Description
---|------------
Event Handler | A function invoked by an Event Listener.
Event Listener | element.addEventListener('event', function(){}) listens for when the event has happened. If the event has happened (click, keydown...etc.), the function is executed.

## Your Challenge

### Part I

To complete Part I, fulfill the following requirements:
1. Set up your project file structure through the command line.
2. Create the following:
* HTML file
* CSS file
* JS file 
3. Link all of your files correctly.

### Part II HTML

To complete Part II, fulfill the following requirements:

1. Create an ```img``` with an ```id``` of "firecracker". Specify the correct ```src``` to the firecracker.jpg image.
2. Create an ```audio``` with an ```id``` of sound. Specify the correct ```src``` to the explosion.png sound.

### Part III CSS

To complete Part III, fulfill the following requirements:

1. Target the ```id``` of "firecracker".
* Make it so that the image is a little smaller. *Hint: What properties can you use to change the size of an element?*

### Part IV JS

TO complete Part IV, fulfill the following requirements:

1. Create a ```variable``` called firecracker that will store the firecracker image.
2. Create a ```variable``` called sound that will store the audio element.
3. Add an ```EventListener``` to the firecracker image that listens for a ```click```. When the image is clicked, do the following:
  * Change the ```src``` of the firecracker image to the explosion.png. *Make sure to specify the correct path to the explosion.png file.*
  * Play the sound!

## Stretch Goals
1. Create 2 more firecrackers that will also show the explosion and play a sound on click!

### Resources
Event Listeners: https://www.w3schools.com/js/js_htmldom_eventlistener.asp
Get an Element By Id: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
