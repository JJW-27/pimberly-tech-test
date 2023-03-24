### Pimberly tech test - Joe Williams

## How to run this project

Open up the project in VSCode or other editor, and run command 'npm start'.

## What I have done

- Initialised with create-react-app (TypeScript template)

- Created a basic form (controlled component)

- Created an api call to the github api and inserted the form input in as an argument when the form is submitted

- Stored the resulting data in state

- Created a basic table using MaterialUI DataGrid (I chose this as it comes with in-built pagination) and make sure I can get it working with mock data

- Map over the received api data to generate the array of objects that is required for the DataGrid rows prop

## Further improvements I could make

- Fetching the whole list rather than only 100 results

- Adding extra search terms / parameters, such as programming language

- Adding extra TypeScript type declarations (I added some to show I know something about it, but didn't have time to do everything I could have)

- Conditional rendering of the table to only appear when a search has been submitted

- Clearing input when a search is submitted

- General styling

## Problems that I faced

- I didn't manage to get the api to give me every result, only the first 30, and then later the first 100 when I increased it. I'm not 100% sure why this happened, but I think next I would try looking into including an auth token with my request that might allow me to access every result

- The table did not show the results at first, even with the mock data. It turned out I just needed to set the autoheight prop

- I tried to add a type declaration to the 'repo' argument inside the map, however I think now that there is no need, as this is data coming from an api, so it had too many properties and also may be subject to change if github decided to alter their api, so I could not account for these changes in my type declarations.
