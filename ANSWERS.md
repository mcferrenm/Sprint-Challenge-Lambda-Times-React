What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used to check the props being passed into a component. It checks the data type, shape, and if a prop is required. Correct type checking prevents a number of common bugs that emerge from a rapidly scaling application.

Describe a life-cycle event in React?

A life cycle event is a point in time of a React components birth, growth, and death. These mounting, updating, and unmounting phases allow us to create functionality at specific points in time. For example we can load data from a WebApi only after we have something the user can see on screen so they don't think the app is broken.

Explain the details of a Higher Order Component?

A Higher Order Component is a component that accepts and returns components. It can extend functionality, and conditionally render components. We can invoke n components in our HOC by using "currying".

What are three different ways to style components in React? Explain some of the benefits of each.

Import CSS. Simple. Widely used. Classes keep their original names.
Reactstrap. Work quickly and prototype.
Syled Components. CSS in JS allows us to use more complex logic to render css styles.
