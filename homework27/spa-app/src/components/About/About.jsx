const About = () => (
  <>
    <section>
      <h1>About the Project</h1>

      <p>
        This website is a learning SPA project created to practice working with
        React, React Router and the Context API. The main goal of the project is
        to understand how modern client-side applications are built without full
        page reloads.
      </p>

      <p style={{ marginBottom: "20px" }}>
        During development, functional components, React hooks (
        <code>useState</code>, <code>useContext</code>) and core React
        architecture principles are used.
      </p>

      <h2>What’s implemented</h2>
      <ul>
        <li>Client-side routing without page reloads</li>
        <li>Global theme management using Context API</li>
        <li>Error handling with Error Boundaries</li>
        <li>Component-based application structure</li>
      </ul>

      <p>
        The project is continuously evolving and serves as a foundation for
        further experiments and improvements.
      </p>
    </section>
  </>
);

export default About;
