# Welcome to Encoteki: The Satwas Band on ICP

![](https://github.com/ndrewantonio/icp_encoteki_mint/blob/main/logo.png)

Learn more about Encoteki visit:

[💬 Socials](https://msha.ke/encoteki)

[📃 Whitepaper](https://drive.google.com/drive/u/1/folders/12mX98DWzA1Qd5WtSQJFVkYJ2m-yoPr3F)

[🛜 Website](https://5d2yu-xaaaa-aaaae-abmba-cai.icp0.io/)

[🛜 BE Canister](https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=5e36a-2yaaa-aaaae-abmbq-cai)

# The Satwas Band NFT at ICP 🔥

Encoteki is an innovative project dedicated to creating a self-sustainable environment and community through the power of technology and NFTs. Our mission is to conserve endangered animals in Indonesia, support local communities, and offer tangible benefits to our project participants.

At the core of Encoteki is the belief that everyone can make a positive impact on the environment and community. By leveraging Bitfinity and ICP blockchain technology, Encoteki not only ensures transparency and accountability in every action but also provides NFT holders with unique utilities, including access to special events, discounts, and potential profit-sharing opportunities through our subsidiaries.

Join us in making a meaningful difference while enjoying the benefits of being part of a forward-thinking ecosystem. Let's create a better world together, one NFT at a time.

## Install
```
mops add icrc_nft-mo
```

## Deployment

The simplest deployment is to provide null arguments to each ICRC(3,7,30) component.

Edit the files in /example/initial_state for each ICRC.

```
dfx deploy icrc7 --argument 'record {icrc7_args = null; icrc37_args =null; icrc3_args =null;}' --mode reinstall
```
A sample deployment/functional script is provided in deploy.sh in the example folder.

## Provided functions

For sample minting, burning, approval, transfer functions, please see the deploy.sh file in the examples folder.

Further availability of functionality can be referenced in earlier referenced documentation.

## Documentation

Pre-compiled docs can be found on mops.one at:

- ICRC3 - Transaction Log and Archive - https://mops.one/icrc3-mo/docs/lib
- ICRC7 - Base NFT - https://mops.one/icrc7-mo/docs
- ICRC37 - Approval workflow - https://mops.one/icrc37-mo/docs
