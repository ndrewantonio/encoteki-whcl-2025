import React, { useState } from "react";
import "./mint.scss";
import { icrc7 } from "declarations/icrc7";

// import { AuthClient } from "@dfinity/auth-client";
// import { createActor } from "declarations/icrc7";
// import { canisterId } from "declarations/icrc7/index.js";

// const network = process.env.DFX_NETWORK;
// const identityProvider =
//   network === "ic"
//     ? "https://identity.ic0.app" // Mainnet
//     : "http://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:4943"; // Local

const Mint = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // const [state, setState] = useState({
  //   actor: undefined,
  //   authClient: undefined,
  //   isAuthenticated: false,
  //   principal: 'Click "Whoami" to see your principal ID',
  // });

  // Initialize auth client
  // useEffect(() => {
  //   updateActor();
  // }, []);

  // const updateActor = async () => {
  //   const authClient = await AuthClient.create();
  //   const identity = authClient.getIdentity();
  //   const actor = createActor(canisterId, {
  //     agentOptions: {
  //       identity,
  //     },
  //   });
  //   const isAuthenticated = await authClient.isAuthenticated();

  //   setState((prev) => ({
  //     ...prev,
  //     actor,
  //     authClient,
  //     isAuthenticated,
  //   }));
  // };

  // const login = async () => {
  //   await state.authClient.login({
  //     identityProvider,
  //     onSuccess: updateActor,
  //   });
  // };

  // const logout = async () => {
  //   await state.authClient.logout();
  //   updateActor();
  // };

  // const whoami = async () => {
  //   setState((prev) => ({
  //     ...prev,
  //     principal: "Loading...",
  //   }));

  //   const result = await state.actor.whoami();
  //   const principal = result.toString();
  //   setState((prev) => ({
  //     ...prev,
  //     principal,
  //   }));
  // };

  function mint(event) {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
    }, 5000);

    // const name = event.target.elements.name.value;
    // encoteki_whcl_2025_backend.greet(name).then((greeting) => {
    //   setGreeting(greeting);
    // });
    // return false;
    console.log("hi");
  }

  return (
    <div className="payment-container">
      <div className="payment-form">
        <h2 className="form-title">Mint</h2>
        {/* {state.principal && (
          <div>
            <h2>Your principal ID is:</h2>
            <h4>{state.principal}</h4>
          </div>
        )} */}
        {success && <p className="success-message">Minting successful!</p>}
        {/* {!state.isAuthenticated ? (
          <button onClick={login} className="buy-button">
            Login
          </button>
        ) : (
          <button onClick={mint} className="buy-button">
            {loading ? "Minting..." : "Mint"}
          </button>
        )} */}

        <button onClick={mint} className="buy-button">
          ?{loading ? "Minting..." : "Mint"}
        </button>
      </div>
    </div>
  );
};

export default Mint;
