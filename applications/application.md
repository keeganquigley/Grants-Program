# Name of your Project

Reusable Digital ID MVP for Financial Institutions (FIs) and Fintechs

### Overview

Digest is looking for a partnering blockchain network to deploy a reusable identity solution that builds an identity profile to authenticate and identify a user without sharing PII and is reusable across FIs and Fintechs. The goal is to mitigate fraud and account takeover, and be included in a wide range of uses like online payments (e.g. P2P payments), passwordless login, wire transfers, age verification and much more.  The service will also provide faster onboarding as it will recognize a user across FI and Fintech providers (e.g. like Quick ID check for instant lending but without sharing all the personal data).  The company is a US-based firm whose team has an extensive background in identity verification and digital payments. The product will be integrated as an SDK into FI hosted wallets and Fintech online services to quickly identify and verify a user as well as the FI and Fintech provider for safe, trusted online payments. It will also ensure compliance with GDPR, PSD2, CCPA, BIPA and other privacy regulations. The Digid Team has already market- validated the concept (for over a year) and has initial interest for pilots from multiple US-based FIs on the Q2 Digital banking platform. The plan is to take the solution into pilots directly with these Q2 FIs and expand to other digital banking platforms. Q2 represents digital banking services for over 480+ FIs in the USA but there are over 48K+ so the market size is significant. 

The main goal of this blockchain project is to take advantage of low-cost and speedy blockchain rails and leverage the immutable transaction audit trail and support for DIDs and identity claim attestation management of both account holders and FI and Fintech service providers. 

We also intend to start pilot implementations with an FI or Fintech to include digital account creation, authentication, and FI transaction authentication. First pilots will target Q2 digital banking platform FIs.  Digid will work with Q2 platform integrator,Tailwind, to complete necessary integration for Q2 onboarding and step-up authentication. Digid has communicated with Tailwind and is already in agreement on the requirements for this integration work. The goal is to complete 1 to 3 initial pilots before the end of the year. 


### Project Details

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

Architecture diagram https://drive.google.com/file/d/1pxrfw88IFyVB--i8f65cvv2xGP-PrdHE/view?usp=sharing

Blockchain Project Goals for Digid to complete:

●	Digid to consider becoming a node operator\validator for the Substrate blockchain network. 
●	Digid will verify new account holders (KYC/AML) and create the DID profile and associated identity attestations and write the reusable DID profile and attestations on the chain. 
●	Digid will use the Substrate identity layer for ongoing identity verification of account holders by Regulated Entities, and maintain updates to the identity claims (e.g. change of address) 
●	Allow for creation of an identity wallet provided by Digid that is accessible via an SDK embedded within a FI or Fintech wallet provider.
●	Allow for writing transaction records for every authentication and identity check event, which includes logins, payments, transfers etc. using FI and Fintech services.
●	Allow for the sharing, with user consent, of non PII identity attributes utilizing selective disclosure and zero-knowledge proof methods. (e.g. Citizen of USA, Valid Government ID, Over 21 years of age, etc.) 
●	Ability for 3rd party developers and wallet providers to use these services for ID Verification and transaction management for their platforms.

Scope of Work for Digid:

Design and development of an MVP product that will include building the identity profiles and reliably authenticating against those profiles via an embedded web-SDK within a demo partner application and website. 
●	WebSDK using JavaScript/TypeScript. This will integrate with partner SDKs (e.g Webauth, Biometrics capture) to provide a unified and seamless authentication experience. The Webauthn credentials will be linked to the DID profile on chain. 
●	KYC onboarding to include phone/email verification, Liveness check and Face Template, Government document verification, and Name, DOB, Address, and National Number validation. This will include partner APIs Experian and DocV/Liveness partner (Innovatrics or other). 
●	Integration of Substrate APIs into Digid core for reading/writing to Substrate blockchain identity layer 
●	Creation of the Decentralized Identifiers (DIDs) profile and the identity claims (attestations) (e.g SD-JWT tokens) created as part of the KYC process to be written on chain.
●	Ability to demonstrate authentication using WebAuthn with biometrics  that are linked to the DID profile (e.g Passwordless Login demo)
●	Ability to demonstrate recognition of user across separate domains/online services by doing a lookup (e.g. phone/email hash + liveness template match) to resolve a master DID profile on chain to a new service provider (Reusable Identity match) 
●	Ability to share identity claims (attestations) about the user via selective disclosure and zero knowledge proofs. (e.g. Citizen of USA, Valid Government ID, Over 21 years of age, etc.)  
●	Creation of a hybrid “shell” demo iOS mobile banking app and website that uses the SDK as a webview to demonstrate the KYC account creation process and passwordless login. The app will also show the DID profile and KYC steps completed. 
●	Creation of an admin web portal that will provide basic account management for user DID profiles and identity claims created on chain, and show transaction history (Account creations, logins, transactions etc..) 



### Ecosystem Fit

The main goal of this blockchain project is to take advantage of low-cost and speedy blockchain rails and leverage the immutable transaction audit trail and support for DIDs and identity claim attestation management of both account holders and FI and Fintech service providers. 

We also intend to start pilot implementations with an FI or Fintech to include digital account creation, authentication, and FI transaction authentication. 

We are looking for a partnership to help us build the initial MVP and pilot ready solution. We are looking for this partner to have the ability to support DIDs and identity claim attestation management and have an expertise in supporting  compliance for cross-border blockchain payments (e.g. Travel Rule, GDPR, PSD2 SCA, CCPA, BIPA etc.) We are looking for low gas fees as well. We also believe there is mutual value that can be created by using the preferred blockchain partner, including:

1.	Utility for non-Substrate entities
a.	Organizations not using Substrate that are partners of Digid such as Q2 Digital Banking customers, Innovatrics, IP Quality Services and others can leverage the Substrate blockchain via Digid’s services. This will increase overall network usage and also provide a bridge to migrating these entities onto Substrate enabled services in the future, such as payments to entities who provide trust and ID claim verification on Digid’s network (e.g. Experian, partner banks etc.) 
2.	Utility for other blockchain developers
a.	Utilize these identity services to build identity into 3rd party wallets and FI providers around the world. Provides ongoing authentication and ID verification as needed for 3rd party developer apps.
3.	Wallet Usage
a.	Wallets that are both custodial and FI hosted as well as self-hosted and user managed can still use these identity services to validate the integrity of users including originators and beneficiaries for payment scenarios. 
4.	Press Release 
a.	We are interested in doing joint press releases that can reference initial pilot customers that may include FIs, Fintechs, and mid-tier banks and credit unions in the USA. 


## Team :busts_in_silhouette:

### Team members

-Keegan

### Contact

- **Contact Name:** Keegan
- **Contact Email:** radioactivedrummer@gmail.com
- **Website:**

### Legal Structure

- **Registered Address:** 
- **Registered Legal Entity:** 

### Team's experience

Founders have a successful track record of bringing identity and authentication services to market over the past 15 years. Building and delivering trusted payment authentication solutions (e.g. EMV 3DS, SRC, Risk-based authentication mechanisms... ) to payment network like Mastercard and Discover Financial Services, Issuing banks like Citi, and many payment processors. Founders have been involved in standards bodies such as EMVCo, FIDO Alliance, and W3C and have expertise in trusted digital payments and identity. Most recent projects involved consulting for an identity services company and building and designing decentralized identity solutions using DIDs and Verifiable Credentials. 

We have market tested our concept and received interested from several Q2 partner banks and credit unions, which is our initial pilot target market.


### Team Code Repos

- https://github.com/<your_organisation>/<project_1>
- https://github.com/<your_organisation>/<project_2>

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/<team_member_1>
- https://github.com/<team_member_2>

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/georgetuvell/
- https://www.linkedin.com/in/agramont/
- https://www.linkedin.com/company/digid-inc/
- https://www.linkedin.com/company/web3devs 


## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://github.com/w3f/Grants-Program/tree/master/docs/RFPs) (requests for proposal),
- academic publications relevant to the problem,
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
- references to conversations you might have had related to this project with anyone from the Web3 Foundation,
- previous interface iterations, such as mock-ups and wireframes.

## Development Roadmap :nut_and_bolt:


### Overview

- **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE)
- **Total Costs:** Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested. This and the costs for each milestone need to be provided in USD; if the grant is paid out in Bitcoin, the amount will be calculated according to the exchange rate at the time of payment.

### Milestone 1 Example — Basic functionality

- **Estimated duration:** 1 month
- **FTE:**  33.333
- **Costs:**  USD

Month 1
- Initial Digid WebSDK interface (Typescript)
- Node.js backend API 
- Cross-Platform iOS\Android Flutter Hybrid Mobile App
-- Uses Digid WebSDK in Webviews
- Initial account holder creation flow 
-- Phone/Email verification via WebSDK in iOS Demo App (Twilio + SendGrid) 
-- Creation of DID record on Digid and Substrate
-- Creation of Phone + Email Attestations on Substrate
- SD-JWT will be the preferred standard credential type (not JSON-LD or JWT, or Anoncreds) - eIDAS has adopted SD-JWT
- Digid BO web admin portal (React)
-- View DID records 
-- View transaction logs (e.g. phone verification, email verification)


### Milestone 2 

- **Estimated duration:** 1 month
- **FTE:**  33.333
- **Costs:**  USD
- 
Month 2
- Experian KYC integration (PreciseID) into Digid Core API
-- Name, Phone, Email, Address, DOB, Last4SSN#
- IPQS - Phone, Email, DeviceFP (SDK JS), IP reputation
- Innovatrics integration
-- WebSDK 
--- Passive liveness check and Facematch (Face template creation)
--- DocV capture and Doc photo comparison to Face template 
-- Backend Server on AWS hosted by Digid 
--- Integration of Innovatrics server to Digid backed Core API for liveness check, facematch, docV, and face comparison
- Completion of iOS mobile app onboarding flow (WebSDK capture and Experian + Innovatrics verification)
--- Phone\Email\Liveness + Face template\DocV with OCR data extraction presented to user 
--- Confirmation by user of OCRd data (Name, Addy, DOB)
--- User input of last 4 of SSN  
- Substrate KYC attestations written to DID profile	
- iOS mobile app “profile page” that shows user profile, score, and identity attestations completed

### Milestone 3 

- **Estimated duration:** 1 month
- **FTE:**  33.333
- **Costs:**  USD

Month 3
-	Webauthn
---	Integration of Webauthn WebSDK library https://webauthn.io
---	Integration of FIDO server (StrongKey? https://sourceforge.net/projects/strongkeyfido/ )
-	Webauthn Passwordless login
---	*Not using Passkeys. Must be device bound Webauthn credentials 
---	Must always include native biometric 
---	Passcode fallback only
-	Demo Bank iOS app 
---	Enrollment of iOS app Webauthn credentials after onboarding completed
---	Passwordless login (Webauthn)
-	Demo Bank Website (using WebSDK) 
---	Onboarding flow
---	SMS link + QR options to initiate mobile browser onboarding flow (no mobile app required)
---	Enrollment of Webauthn credentials on website after onboarding
---	Website only passwordless login using Webauthn 
-	Scoring
---	Calculation of DID profile score based on KYC steps completed
---	Score to be returned with the OTT validation API result, called by Service Provider after the account holder completed authentication
-	OTT validation  
---	One-Time tokens to be to be generated after each authentication event and validated on Digid backend core API by the Service Provider
-	All authentications (including Webauthn) and ID attestation checks are written to the Substrate network 

## Future Plans

Please include here

- The Digid Team has already market- validated the concept (for over a year) and has initial interest for pilots from multiple US-based FIs on the Q2 Digital banking platform. The plan is to take the solution into pilots directly with these Q2 FIs and expand to other digital banking platforms. Q2 represents digital banking services for over 480+ FIs in the USA but there are over 48K+ so the market size is significant.  
- The plan is for 1 to 3 initial Q2 pilots before end of the year and to expand to other digital banking plaform distribution partners. 

## Referral Program (optional) :moneybag: 

You can find more information about the program [here](../README.md#moneybag-referral-program).
- **Referrer:** Name of the Polkadot Ambassador or GitHub account of the Web3 Foundation grantee
- **Payment Address:** BTC, Ethereum (USDC/DAI) or Polkadot/Kusama (USDT) payment address. Please also specify the currency. (e.g. 0x8920... (DAI))

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Via our partner Web3Devs:

Digid has partnered with Web3devs to complete the development milestones for this project. Web3devs is a blockchain development shop that has been helping companies integrate into the industry since 2015. They have worked with Fortune 100 companies as well as startups. They have contributed to many projects by way of internal capital and volunteer hours. They are decentralized, with founders based in Memphis, TN, and Gainesville, Fl. 

●	https://web3devs.com 
●	https://github.com/web3devs
●	https://www.linkedin.com/company/web3devs
