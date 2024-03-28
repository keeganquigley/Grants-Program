"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[78799],{19045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(74848),s=n(28453);const r={},a="ISO-8583 implementation",l={id:"applications/ISO-8583-implementation",title:"ISO-8583 implementation",description:"- Team Name: Dastanbek Samatov",source:"@site/applications/ISO-8583-implementation.md",sourceDirName:"applications",slug:"/applications/ISO-8583-implementation",permalink:"/applications/ISO-8583-implementation",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/ISO-8583-implementation.md",tags:[],version:"current",frontMatter:{}},o={},c=[{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Infrastracture",id:"infrastracture",level:4},{value:"Blockchain",id:"blockchain",level:4},{value:"Challenges",id:"challenges",level:4},{value:"Inspirations",id:"inspirations",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Infrastructure Part",id:"milestone-1-infrastructure-part",level:3},{value:"Milestone 2 Blockchain Part",id:"milestone-2-blockchain-part",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"iso-8583-implementation",children:"ISO-8583 implementation"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Team Name:"})," Dastanbek Samatov"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Payment Address:"})," 0xc42D0562BB4e53f5e9D888df35e1B91eA0f19cC3 (USDC)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsxs)(t.strong,{children:[(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["This application is in response to the ",(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/ISO_8583.md",children:"ISO-8583 RFP"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"ISO-8583 PoC implementation for Substrate."}),"\n",(0,i.jsxs)(t.p,{children:["In this project I aim to implement the proof of concept for the ISO-8583 standard in Substrate. The implementation will be based on the extensive research done by ",(0,i.jsx)(t.a,{href:"https://github.com/adit313",children:"Adit Patel"})," in the following ",(0,i.jsx)(t.a,{href:"https://github.com/adit313/ISO8583-Blockchain-Integration-Plan",children:"repository"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["I've already worked on the similar project for ",(0,i.jsx)(t.a,{href:"https://github.com/element36-io/ocw-ebics",children:"EBICS standard"}),". I can leverage the knowledge gained from that project and research done by Adit Patel to implement the ISO-8583 standard in Substrate."]}),"\n",(0,i.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsx)(t.p,{children:"To fully imitate the ISO-8583 standard, I have divided this PoC project into two parts: infrastracture and blockchain. Infrastracture components are responsible for imitating the flow of the ISO-8583 message from the merchant to the PCIDSS compliant gateway. Blockchain components are responsible for further processing of the ISO-8583 message and settling the transactions/messages on the Substrate chain."}),"\n",(0,i.jsx)(t.p,{children:"Below is the implementation plan in a deeper technical detail from Adit Patel's research:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://github.com/dastansam/Grants-Program/assets/88332432/8b832448-9095-4846-95ea-ccaebe5e52a5",alt:"Implementation plan"})}),"\n",(0,i.jsx)(t.h4,{id:"infrastracture",children:"Infrastracture"}),"\n",(0,i.jsx)(t.p,{children:"For this part, the implementation will consist of the following components:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Merchant"}),": A hybrid web application, i.e can be used to either make the payment directly on Substrate chain, guaranteeing instant settlement, or via debit/credit card. It will consist of a mock marketplace and main work will be done on the payment checkout window. Depending on the payment method, the application will then send the payment request to the corresponding payment processor."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Payment processor (Stripe, Visa, Mastercard)"}),": The payment processor will be imitated by a web server that will accept the payment request from the merchant, compose the ISO-8583 message and send it to the gateway. It will maintain the offchain ledger (database)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"PCIDSS Compliant Gateway (Oracle Company)"}),": The gateway is the first part of the centralized oracle. It will be mocked by a message broker that will process the incoming ISO-8583 messages from the traditional network and pools them for the offchain worker to query. It is also responsible for maintaining an up-to-date record of the offchain and on-chain ledger, validating messages, keeping track of chain events and composing new messages in case there is a mismatch between the two ledgers."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"For the above componenets, there are already some open source projects that can be used. Namely:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/zemuldo/iso_8583",children:"ISO-8583 implementation in Javascript"}),": I will use this library in mock web server and the merchant application. Opted for this library since it seems to be well maintained and documented (the Rust version has the last commit from 2019)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://www.rabbitmq.com/",children:"RabbitMQ"}),": I will use RabbitMQ as a message broker for the gateway. It is a well known and widely used message broker. It also has a ",(0,i.jsx)(t.a,{href:"https://github.com/jgallagher/amiquip",children:"Rust client"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"And for the merchant app, below are the mockups of payment checkout window:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://github.com/dastansam/Grants-Program/assets/88332432/ee5e870a-1992-4d74-b6da-288b615f50e2",alt:"Card payment"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://github.com/dastansam/Grants-Program/assets/88332432/f4412bf4-b2c3-4407-866a-6ebbd948ac35",alt:"Payment on-chain"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://github.com/dastansam/Grants-Program/assets/88332432/64e6d9bc-54af-4848-a6db-226bc8eebd96",alt:"Successfull checkout"})}),"\n",(0,i.jsx)(t.h4,{id:"blockchain",children:"Blockchain"}),"\n",(0,i.jsx)(t.p,{children:"On the blockchain side, there were three key components that were proposed in the research:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A centralized oracle"}),"\n",(0,i.jsx)(t.li,{children:"ERC-20R smart contract"}),"\n",(0,i.jsx)(t.li,{children:"Substrate chain"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"However, from my previous experience building the EBICS PoC and generally as a more experienced Substrate developer, I believe the first two components can be simplified to:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"An offchain worker (OCW)"}),": It will act as a second part of the oracle, i.e it will query for the ISO-8583 messages from the gateway and will send them to the Substrate chain. The only way for the chain to receive the ISO-8583 messages will be through the OCW. This will ensure that the chain is not spammed with unnecessary messages and will also allow us to hide sensitive information like account numbers and authorization codes."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Pallet"}),": pallets are more flexible and a lot easier to implement and maintain than smart contracts. It will implement the ERC-20R standard and will settle the transactions on the Substrate chain."]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"challenges",children:"Challenges"}),"\n",(0,i.jsxs)(t.p,{children:["One of the main challenges for this project is the reversability of transactions in the ISO-8583 standard. The standard allows for the reversal of transactions in case of a dispute. This is not a problem for the traditional payment networks since they are centralized and can easily reverse the transaction. Although, ERC20-R standard has a ",(0,i.jsx)(t.code,{children:"revert"})," function, it becomes complicated when we try to get back the funds that are already spent. I will have to do more research on this topic and will try to come up with a solution."]}),"\n",(0,i.jsx)(t.h4,{id:"inspirations",children:"Inspirations"}),"\n",(0,i.jsx)(t.p,{children:"EBICS PoC implementation offers some insights and inspiration, however, the ISO-8583 standard is a lot more complex and will require a lot more robust and complex infrastructure. Similarly, on the blockchain side, the reversability of transactions will pose a great challenge. Therefore, large parts of the blockchain components will need to be rewritten from scratch or significantly refactored in best case."}),"\n",(0,i.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,i.jsx)(t.p,{children:"A quote from Adit Patel here:"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Supporting international standards would smooth the connection between crypto and traditional financial institutions and is a ",(0,i.jsx)(t.a,{href:"https://www.cryptopolitan.com/iso-20022-compliant-crypto-list/",children:"go to market strategy for several competing projects"}),". While those efforts are focused on the newer ISO-20022, not ISO-8583, there is significant value in being the first blockchain to support traditional banking infrastructure and dislodge incumbent networks such as SWIFT or Visa/Mastercard."]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Dastanbek Samatov"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Name:"})," Dastanbek Samatov"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Email:"})," ",(0,i.jsx)(t.a,{href:"mailto:dastanbeksamatov@gmail.com",children:"dastanbeksamatov@gmail.com"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Website:"})," ",(0,i.jsx)(t.a,{href:"https://dastansam.github.io/",children:"https://dastansam.github.io/"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Address:"})," No registred entity"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Legal Entity:"})," No registred entity"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,i.jsx)(t.p,{children:"Dastanbek Samatov is a Software Engineer with more than 3 years of experience. For the past 2 years he has been working as a Rust/Substrate Engineer focusing on parachain development and also has been involved with several Web3 Foundation grant projects in the past (some of them as lead developer):"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"SCALE Codec in AssemblyScript"})," - ",(0,i.jsx)(t.a,{href:"https://github.com/LimeChain/as-scale-codec",children:"https://github.com/LimeChain/as-scale-codec"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Substrate Runtime in AssemblyScript"})," - ",(0,i.jsx)(t.a,{href:"https://github.com/LimeChain/as-substrate-runtime",children:"https://github.com/LimeChain/as-substrate-runtime"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Framework for Substrate Runtimes in AssemblyScript"})," - ",(0,i.jsx)(t.a,{href:"https://github.com/LimeChain/subsembly",children:"https://github.com/LimeChain/subsembly"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"OCW EBICS"})," - ",(0,i.jsx)(t.a,{href:"https://github.com/element36-io/ocw-ebics",children:"https://github.com/element36-io/ocw-ebics"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/subclone/iso-8583-chain-template",children:"https://github.com/subclone/iso-8583-chain-template"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/subclone/payment-processor",children:"https://github.com/subclone/payment-processor"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/dastanbeksamatov",children:"https://github.com/dastanbeksamatov"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"team-linkedin-profiles-if-available",children:"Team LinkedIn Profiles (if available)"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://linkedin.com/in/dastanbek-samatov",children:"https://linkedin.com/in/dastanbek-samatov"})}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,i.jsxs)(t.p,{children:["This application is in response to the ",(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/ISO_8583.md",children:"ISO-8583 RFP"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The implementation is inspired from the previous ",(0,i.jsx)(t.a,{href:"https://github.com/adit313/ISO8583-Blockchain-Integration-Plan",children:"research"})," project for this RFP."]}),"\n",(0,i.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Estimated Duration:"})," 4 months"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"})," 1 FTE"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Costs:"})," 28,000 USD"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-1-infrastructure-part",children:"Milestone 1 Infrastructure Part"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 2 month"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  1"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 14,000 USD"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0a."})}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0 / GPLv3 / MIT / Unlicense"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0b."})}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsxs)(t.td,{children:["We will provide both ",(0,i.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,i.jsx)(t.strong,{children:"tutorial"})," that explains how a user can spin up the whole infrastructure components."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0c."})}),(0,i.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,i.jsx)(t.td,{children:"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0d."})}),(0,i.jsx)(t.td,{children:"Docker"}),(0,i.jsx)(t.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(t.td,{children:"Merchant App"}),(0,i.jsxs)(t.td,{children:["I will create a React application that will mock the merchant. The app will be connected to the Substrate chain with ",(0,i.jsx)(t.code,{children:"PolkadotJs"})," and users will be able to directly pay using an on-chain extrinsic. Web app will also handle necessary balance checks by querying chain to early return invalid transactions. Users will also have an option to use their mock plastic cards."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(t.td,{children:"Payment Processor"}),(0,i.jsx)(t.td,{children:"I will create a NodeJs server that will receive payment requests from merchant app, compose the ISO-8583 message and send it to the gateway. This server will also be responsible for keeping the offchain ledger, similar to how traditional networks currently operate."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,i.jsx)(t.td,{children:"PCIDSS Compliant Gateway"}),(0,i.jsxs)(t.td,{children:["I will create a message broker service that will serve as a centralized oracle gateway. It will process and pool incoming messages from the mock payment processor. Oracle will maintain a constant connection to Substrate chain, to ensure the validity of messages in the pool before they are consumed. For example, if there is a transfer from Alice to Bob, oracle will ensure that ",(0,i.jsx)(t.code,{children:"Alice"})," has enough funds both offchain and on-chain, ",(0,i.jsx)(t.code,{children:"tx_id"})," of transfer is not already on-chain, etc. It will also include mechanisms to ensure the message is being consumed by genuine offchain worker and not some other malicious ",(0,i.jsx)(t.em,{children:"consumer"}),". For this step, some basic cryptographic authentication method will be used."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,i.jsx)(t.td,{children:"Makefile"}),(0,i.jsx)(t.td,{children:"I will create a Makefile that will provide commands to ease testing, running and maintaining the project"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-2-blockchain-part",children:"Milestone 2 Blockchain Part"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated Duration:"})," 2 months"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  1"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 14,000 USD"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0a."})}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0 / GPLv3 / MIT / Unlicense"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0b."})}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsxs)(t.td,{children:["We will provide both ",(0,i.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,i.jsx)(t.strong,{children:"tutorial"})," that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0c."})}),(0,i.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,i.jsx)(t.td,{children:"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0d."})}),(0,i.jsx)(t.td,{children:"Docker"}),(0,i.jsx)(t.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0e."})}),(0,i.jsx)(t.td,{children:"Article"}),(0,i.jsx)(t.td,{children:"I will publish an article that explains the complete lifecycle and future plans of the project"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(t.td,{children:"Substrate Chain"}),(0,i.jsxs)(t.td,{children:["I will create a Substrate chain forked from ",(0,i.jsx)(t.code,{children:"substrate-node-template"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(t.td,{children:"Offchain Worker"}),(0,i.jsx)(t.td,{children:"I will write an offchain worker logic that queries PCIDSS compliant gateway for ISO-8583 messages, processes them and dispatches extrinsics to the chain."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,i.jsx)(t.td,{children:"ERC-20R Pallet"}),(0,i.jsxs)(t.td,{children:["I will create a pallet that implements the ",(0,i.jsx)(t.code,{children:"ERC-20R"})," interface. It will be responsible for processing incoming message from the offchain-worker. It will perform security checks, maintain the ledger and control the issuance of the tokens."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,i.jsx)(t.td,{children:"Integration tests"}),(0,i.jsxs)(t.td,{children:["I will add end-to-end tests with Javascript and ",(0,i.jsx)(t.code,{children:"zombienet"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"5."}),(0,i.jsx)(t.td,{children:"Makefile"}),(0,i.jsx)(t.td,{children:"I will create a Makefile that will provide commands to ease testing, running and maintaining the project"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,i.jsx)(t.p,{children:"In case of successful PoC, I plan to continue working on this project to address some of the pain points of the PoC:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Reversability"}),": look for more decentralized ways to guarantee reversability of the transactions, maybe with somewhat similar mechanism to slashing"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Decentralization of Oracles"}),": look for more decentralized ways of message processing by using decentralized oracles, maybe look for the direction of zero-knowledge proofs"]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})}),"\n",(0,i.jsx)(t.p,{children:"I have previously worked on several grant projects (listed above) and generally have been in Polkadot ecosystem for more than 3 years."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);