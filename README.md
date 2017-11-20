### Kyle Burke GCI Code Challenge

#### Setup
 1) Clone the repo.
 2) `npm install` or `yarn install`
 3) `npm start` or `yarn start`

#### Tools and Architecture
`Create React App` was used to scaffold this project. CRA is very useful
when we are unopinionated about the build systems surrounding the project,
but gives us an easy out with `npm run eject` should we ever scale up and
need to perform fine tuning. CRA prefills the project with Jest for testing,
and has several different prefab loadouts (I particularly like
`react-scripts-ts` for using TypeScript with React)

`Redux` is used in this project to manage state. We like Redux because it
decouples application state from our components, and makes our views
a function of the state, which helps us to reason about state mutations
(partly because there are none), and limit side effects in and around our
components, which makes testing much easier.

`React Bootstrap` provides us with a nice list of styled presentational
components that have simple interfaces which suit a project of this scale.
The components' relative statelessness makes them easy to load into our
Redux-driven project.

This project has a very flat directory structure and would not scale well
past this point. If the codebase grew larger, I would split files into
folders organized largely by relation to a substore. All components,
reducers, and actions related to e.g. the user table would be grouped into a
folder. Routing would also be introduced and actually simplify some of
the code in this project and mitigate some doubling of responsibilities that
components like Form are performing.
