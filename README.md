# Minimal universal component example
Minimal example of the the "universal component"-method using Node, Express and React.

The term [universal/isomorpic](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) has been around in the JavaScript community for some time. Where as a fully universal application will render the entire app on both server and client, universal component only renders specific components in both environments. This will allow us to get some of the gains from using a universal architecture (SEO, performance and maintainability) without adding the complexity that a full universal app introduces.

[Here is an excellent article](https://medium.com/capital-one-developers/why-everyone-is-talking-about-isomorphic-universal-javascript-and-why-it-matters-38c07c87905) that goes more into detail on the benefits of universal JS.


## Prerequisites
- Node (version specified in package.json -> engines)


## Getting started
- `npm install`
- `npm run start` to start the server
- `npm run client-dev` to build and watch for changes in the client


## Adding a new universal component
1. Create your component in the folder universal eg `universal/MyComponent.js`
2. Wrap your component in the [HOC](https://reactjs.org/docs/higher-order-components.html) universal/helpers/universal.js.
3. Register the component in client/components.js so that the client knows that it should render/mount it.


## Comments
- In this example i use react/jsx as the server templating engine using [express-react-views](https://github.com/reactjs/express-react-views). You can easily use whatever templating language you want such as handlebars, jinja or whatever. However, using JSX is useful because it makes it very easy to convert a ordinary server rendered component to a universal component.
- The code is splitted in three directories: client/, server/ and universal/. Code in client/ only runs in the browser, server/ on node and universal runs in both environments.
