import React, { useEffect, useState } from "react";
import "./mint.scss";
import { createActor, canisterId } from "declarations/icrc7";
import { AuthClient } from "@dfinity/auth-client";

const network = process.env.DFX_NETWORK;
const identityProvider =
  network === "ic"
    ? "https://identity.ic0.app" // Mainnet
    : "http://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:4943"; // Local (II canister running locally)

const Mint = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Keep this JS (not TS) so we can stay flexible on actor shape
  const [state, setState] = useState({
    actor: undefined, // will be the icrc7 actor instance
    authClient: undefined, // AuthClient instance
    isAuthenticated: false,
    principal: "", // shows principal after whoami
  });

  useEffect(() => {
    updateActor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateActor = async () => {
    const authClient = await AuthClient.create();
    const identity = authClient.getIdentity();
    const isAuthenticated = await authClient.isAuthenticated();

    const actor = createActor(canisterId, {
      agentOptions: {
        identity, // if unauthenticated, this is the anonymous identity
      },
    });

    setState((prev) => ({
      ...prev,
      actor,
      authClient,
      isAuthenticated,
    }));
  };

  const login = async () => {
    if (!state.authClient) return;
    await state.authClient.login({
      identityProvider,
      onSuccess: updateActor,
    });
  };

  const logout = async () => {
    if (!state.authClient) return;
    await state.authClient.logout();
    await updateActor();
    setSuccess(false);
    setLoading(false);
    setState((prev) => ({ ...prev, principal: "" }));
  };

  const whoami = async () => {
    if (!state.actor) return;
    try {
      setState((prev) => ({ ...prev, principal: "Loading..." }));
      // whoami is just an example method many templates include.
      // Guard with optional chaining in case your canister doesn’t expose it.
      const result = await state.actor.whoami?.();
      const principal = result ? result.toString() : "(no whoami in canister)";
      setState((prev) => ({ ...prev, principal }));
    } catch (err) {
      setState((prev) => ({ ...prev, principal: String(err) }));
    }
  };

  const mint = async (event) => {
    event.preventDefault();

    if (!state.isAuthenticated) {
      // require login before minting
      await login();
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      // TODO: replace this with your actual canister method + args.
      // Example patterns:
      // await state.actor.mint({ to: ..., metadata: ... });
      // await state.actor.icrc7_mint({ ... });
      //
      // If you don’t have a mint method yet, this will throw—so keep it guarded:
      if (typeof state.actor.mint === "function") {
        await state.actor.mint();
      } else if (typeof state.actor.icrc7_mint === "function") {
        await state.actor.icrc7_mint({
          /* your payload */
        });
      } else {
        throw new Error("No mint method found on the icrc7 actor.");
      }

      setSuccess(true);
    } catch (err) {
      console.error(err);
      alert(`Mint failed: ${String(err)}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-form">
        <h2 className="form-title">Mint</h2>

        {state.principal && (
          <div style={{ marginBottom: "1rem" }}>
            <h3>Your principal ID:</h3>
            <h4 style={{ wordBreak: "break-all" }}>{state.principal}</h4>
          </div>
        )}

        {success && <p className="success-message">Minting successful!</p>}

        {!state.isAuthenticated ? (
          <button onClick={login} className="buy-button">
            Login
          </button>
        ) : (
          <>
            <div className="button-row" style={{ display: "flex", gap: 12 }}>
              <button onClick={whoami} className="buy-button" type="button">
                Whoami
              </button>
              <button onClick={mint} className="buy-button" disabled={loading}>
                {loading ? "Minting..." : "Mint"}
              </button>
              <button onClick={logout} className="buy-button" type="button">
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Mint;
