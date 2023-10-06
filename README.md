# Project 1 — Mini Pokédex

<h1>Video Link: https://youtu.be/MPeAbIbh2aA</h3>

## Description
In this project, you'll be creating a frontend that graphically displays Pokémon information (similiar to a Pokédex). To fetch all the necessary information, you'll be working with the [PokeAPI](https://pokeapi.co/docs/v2#pokemon).

## Setting Up
- Fork this repository, set the owner to BoG-Dev-Bootcamp-F23, and name it `project1-f23-yourname`
- Clone the repository onto your local computer
- Navigate to your new project folder and create your HTML, CSS, and JS files

# Submission Instructions
- Create a 0.5-3 minute video walkthrough of your project (include the video link in the README of your project repo)
- Push all your changes to the remote repository. Make sure that the owner is BoG-Dev-Bootcamp-F23 so that we can see the repository! (if you forgot to do this, you can alternatively message Nathan on Slack with the link to your repo)
- **Due Date:** 10-5-2023

## Requirements
- Must use HTML, CSS, and JS
- Must contain the specified frontend elements
- Must use the free PokeAPI
- Should have at least 20 commits (though not required)

## Project Specifications
**What the end result should look like:**

<img width="500" alt="Screenshot 2023-09-26 at 5 41 02 PM" src="https://github.com/BoG-Dev-Bootcamp-F23/project1-f23/assets/8647920/e32ac85b-18f0-424d-bccb-a369b55e12f2">
<img width="500" alt="Screenshot 2023-09-26 at 5 41 09 PM" src="https://github.com/BoG-Dev-Bootcamp-F23/project1-f23/assets/8647920/46dc87f0-400f-4e3d-bcf9-557b58befd62">

### General Guidelines
You should try to follow the mockups as closely as possible (including the alignments). The Figma designs can be found [here](https://www.figma.com/file/fQMSS7UqlWSY8M4uadlboM/Bits-of-Good-F23-Project-1?type=design&node-id=0%3A1&mode=design&t=94SJ06eCzcBAOSip-1).

This project is designed to replicate real Bits of Good developer work. Typically, developers are given mockups by designers and are tasked with implementing them in code.

### API Fetches
You will be pinging the PokeAPI using `fetch()`. Refer to the [PokeAPI docs](https://pokeapi.co/docs/v2#pokemon) for more details about endpoints and JSON response formats. You can also view your requests at https://pokeapi.co/.

### Arrow Buttons
<img width="324" alt="Screenshot 2023-09-26 at 5 41 48 PM" src="https://github.com/BoG-Dev-Bootcamp-F23/project1-f23/assets/8647920/45f00173-3fac-4ac8-bf4c-e3cffd00c92f">

These buttons control the ID number of the Pokémon you are currently displaying. Whenever a user clicks on these buttons, the ID number should be incremented/decremented, and the other components should be updated accordingly (to achive this, you'd want to create an HTTP request every time the buttons are clicked to fetch the data for the next Pokémon).

Note: be careful about querying an id number that doesn't exist (e.g. 0).

### Pokémon Identifiers (Image, Name, Types)
<img width="264" alt="Screenshot 2023-09-26 at 5 42 00 PM" src="https://github.com/BoG-Dev-Bootcamp-F23/project1-f23/assets/8647920/54923f99-0eef-4f13-a26d-cd3df259be06">

These should update automatically as a user clicks on the arrow buttons. All of the necessary data is available in the response to the HTTP request.


#### Pokémon Types
For however many types a Pokémon has, display all of them horizontally. Each type should correspond with a different color. The [official hex colors](https://www.epidemicjohto.com/t882-type-colors-hex-colors) for each type are:

<img width="153" alt="Screenshot 2023-09-26 at 5 42 21 PM" src="https://github.com/BoG-Dev-Bootcamp-F23/project1-f23/assets/8647920/27cd1982-094d-42d4-88f7-28f99e4598f9">

### Info/Moves Buttons
<img width="374" alt="Screenshot 2023-09-26 at 5 42 39 PM" src="https://github.com/BoG-Dev-Bootcamp-F23/project1-f23/assets/8647920/061ff1b1-82eb-4af9-9909-eeef3835a578">

The color of the buttons should differ based on whichever one is currently active (i.e. if the info is showing, then the info button should be green, etc.). Clicking each button should change whether the info or moves button is showing. 

The selected setting should remain the same when the user switches between Pokémon using the arrows. 

### Stats Panel
#### Info
<img width="269" alt="Screenshot 2023-09-26 at 5 42 56 PM" src="https://github.com/BoG-Dev-Bootcamp-F23/project1-f23/assets/8647920/24a2cd97-332c-493d-ab21-afa6e6e1f25c">

This panel should change accordingly as the user switches between Pokémon. Make sure the units are being displayed correctly — for example, the height stat is returned as an integer from the API but the units are in 0.1m.

#### Moves
<img width="270" alt="Screenshot 2023-09-26 at 5 43 05 PM" src="https://github.com/BoG-Dev-Bootcamp-F23/project1-f23/assets/8647920/3dc9263e-0d10-4e9d-9f54-06f3ab90819a">

Like the info panel, the moves should change accordingly as the user switches between Pokémon. This panel should simply list the names of all the Pokémon's moves.
