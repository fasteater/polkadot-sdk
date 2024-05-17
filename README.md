# Polkadot SDK

![GitHub stars](https://img.shields.io/github/stars/paritytech/polkadot-sdk) | 
![GitHub forks](https://img.shields.io/github/forks/paritytech/polkadot-sdk)

[![StackExchange](https://img.shields.io/badge/StackExchange-Community%20&%20Support-222222?logo=stackexchange)](https://substrate.stackexchange.com/) |
![GitHub contributors](https://img.shields.io/github/contributors/paritytech/polkadot-sdk) |
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/paritytech/polkadot-sdk) 

![GitHub lines of code](https://img.shields.io/tokei/lines/github/paritytech/polkadot-sdk) |
![GitHub last commit](https://img.shields.io/github/last-commit/paritytech/polkadot-sdk)

The Polkadot SDK repository provides all the resources needed to start building on the [Polkadot](www.polkadot.network) network, 
a multi-chain blockchain platform that enables different blockchains to interoperate and share information in a secure and scalable
way. 

## 📚 Documentation

* Rust Docs, SDK level Documentation
 * Getting Started
 * Introduction each component of the Polkadot SDK: Substrate, FRAME, Cumulus, and XCM

## 🚀 Releases

> [!NOTE]  
> Our release process is still Work-In-Progress and may not yet reflect the aspired outline here.

The Polkadot-SDK has two release channels: `stable` and `nightly`. Production software is advised to only use `stable`.
`nightly` is meant for tinkerers to try out the latest features. The detailed release process is described in
[RELEASE.md](docs/RELEASE.md).

### 😌 Stable

`stable` releases have a support duration of **three months**. In this period, the release will not have any breaking
changes. It will receive bug fixes, security fixes, performance fixes and new non-breaking features on a **two week**
cadence.

### 🤠 Nightly

`nightly` releases are released every night from the `master` branch, potentially with breaking changes. They have
pre-release version numbers in the format `major.0.0-nightlyYYMMDD`.

## 🔐 Security

The security policy and procedures can be found in [docs/contributor/SECURITY.md](./docs/contributor/SECURITY.md).

## 🤍 Contributing & Code of Conduct

Ensure you follow our [contribution guidelines](./docs/contributor/CONTRIBUTING.md). In every interaction and
contribution, this project adheres to the [Contributor Covenant Code of Conduct](./docs/contributor/CODE_OF_CONDUCT.md).

### 👾 Ready to Contribute? 

Take a look at the issues labled with [`mentor`]() (or alternatively this page, created by one of the maintainers) label to get started! 
We always recognize valuable contributions by proposing an on-chain tip to the Polkadot netowrk as token of our appreciation.

## Polkadot Fellowship

Development in this repo usually goes hand in hand with the `fellowship` organization. In short, this repository provides all the SDK 
pieces needed to build both Polkadot and its parachains. But, the actual Polkadot runtime lives in the `fellowship/runtimes` repository. 
Read more about the fellowship, this separation, the RFC process [here](https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/polkadot_sdk/index.html). 

## History

This repository is the amalgamation of 3 separate repos that used to constitude Polkadot SDK, namely Substrate, Polkadot and Cumulus. 
Read more about he merge and its hisotry [here](https://polkadot-public.notion.site/Polkadot-SDK-FAQ-fbc4cecc2c46443fb37b9eeec2f0d85f).
