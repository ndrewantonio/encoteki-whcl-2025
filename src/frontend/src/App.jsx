import { useState } from "react";
import { encoteki_whcl_2025_backend } from "declarations/encoteki-whcl-2025-backend";

function App() {
  const [greeting, setGreeting] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    encoteki_whcl_2025_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me bro!</button>
      </form>
      <section id="greeting">{greeting}</section>
    </main>
  );
}

export default App;
