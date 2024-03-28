"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[57],{11380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var l=n(74848),i=n(28453);const s={},r="NFT Collectibles Wallet",a={id:"applications/nft_collectibles_wallet",title:"NFT Collectibles Wallet",description:"Payment Address (DAI):* 0x16D7A415040D52F2427C2b921dfC31829C0d17fc",source:"@site/applications/nft_collectibles_wallet.md",sourceDirName:"applications",slug:"/applications/nft_collectibles_wallet",permalink:"/applications/nft_collectibles_wallet",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/nft_collectibles_wallet.md",tags:[],version:"current",frontMatter:{}},o={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement NFT Wallet Pallet",id:"milestone-1--implement-nft-wallet-pallet",level:3},{value:"Milestone 2 \u2014 Build NFT Collectibles Wallet Mobile App",id:"milestone-2--build-nft-collectibles-wallet-mobile-app",level:3},{value:"Milestone 3 \u2014 Build Javascript SDK and Admin Frontend",id:"milestone-3--build-javascript-sdk-and-admin-frontend",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"nft-collectibles-wallet",children:"NFT Collectibles Wallet"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"Payment Address (DAI):"})," 0x16D7A415040D52F2427C2b921dfC31829C0d17fc"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"Status:"})," ",(0,l.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/pull/341#issuecomment-994701023",children:"Terminated"})]}),"\n"]}),"\n",(0,l.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.code,{children:"NFT Collectibles Wallet"})," is a multi-chain non-custodial mobile wallet which will allow users to claim, store and manage an unlimited number of NFTs from any Substrate based blockchain. This project will consist of 2 major parts: the mobile wallet for users and the javascript sdk for front-end developers to create NFT management UI."]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)("u",{children:(0,l.jsx)(t.strong,{children:"Users:"})})," By scanning QR codes, users will be able to claim NFTs into their wallet. These NFTs can be consumed (burned), listed for sale or sent to others. Users will also have the ability to mint NFTs from within the mobile app. The mobile app will be downloadable from Apple's App Store and Google's Play Store."]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)("u",{children:(0,l.jsx)(t.strong,{children:"Front-end developers:"})})," By using the ",(0,l.jsx)(t.code,{children:"nft-wallet-javascript-sdk"}),", javascript developers can create a UI for creating new NFTs. This javascript sdk will be able to connect to any substrate node via Polkadot.js."]}),"\n",(0,l.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,l.jsxs)(t.p,{children:["The reason we are creating the NFT Collectibles Wallet is to allow users of GamePower Network (",(0,l.jsx)(t.a,{href:"https://www.gamepower.network",children:"https://www.gamepower.network"}),") to claim NFTs from games published on the platform. We could have made the wallet closed sourced such as other projects (Enjin Wallet), but we decided since we are the new kids on the block, it is better for us to contribute to the Substrate/Polkadot/Kusama community. That is what excites us so much about this project."]}),"\n",(0,l.jsx)(t.p,{children:"Our team is very passionate about gaming and NFTs. We believe the use case for NFTs in gaming is one of the most valuable in crypto right now. The problem we see with NFTs is that explaining NFTs to the general consumer and giving them a streamlined and friendly place to use those NFTs is lacking. We want to solve this with the NFT Collectibles Wallet."}),"\n",(0,l.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.strong,{children:"Mobile Wallet Details:"})}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["The mobile wallet will be built using ",(0,l.jsx)(t.code,{children:"React Native"}),". We feel this will allow us to use a coding language (javascript) we've used for years and build performant mobile applications. Using React Native also allows us to code once and deploy on multiple mobile platforms."]}),"\n",(0,l.jsx)(t.p,{children:"Mobile Stack:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"React Native"}),"\n",(0,l.jsx)(t.li,{children:"Polkadot.js"}),"\n",(0,l.jsx)(t.li,{children:"react-qr-scanner"}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["A mockup of our mobile wallet UI. This mockup outlines the wallet creation, QR scanning and collectibles viewer.\n",(0,l.jsx)(t.img,{src:"https://github.com/GamePowerNetwork/nft-collectibles-wallet/raw/open-grant/images/Mobile_App_Wireframe.png",alt:"img"})]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.strong,{children:"Substrate Pallet Details:"})}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.code,{children:"nft-wallet-pallet"})," will use ORML (open runtime modules library: ",(0,l.jsx)(t.a,{href:"https://github.com/open-web3-stack/open-runtime-module-library",children:"https://github.com/open-web3-stack/open-runtime-module-library"}),") which will provide us with some underlying NFT code. The pallet will also talk to the balances pallet to handle any minting and consuming which is needed since each NFT is minted with a type of currency native to the blockchain it is on."]}),"\n",(0,l.jsx)(t.p,{children:"Substrate Stack:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Substrate"}),"\n",(0,l.jsx)(t.li,{children:"ORML"}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["These methods will serve as an interface for the NFT Wallet to communicate with any substrate runtime. ",(0,l.jsx)(t.code,{children:"nft-wallet-pallet"})," expects ORML's nft pallet to be a part of the runtime since it will be used to handle all NFT related functions."]}),"\n",(0,l.jsx)(t.p,{children:"We will expose a SEND and BURN callback so that the runtime can do any domain specific logic when sending or burning an NFT."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-rust",children:"fn send(origin, asset_id: u64, recipient: AccountId) -> Result;\n// burn the NFT with a short reason used by dapps\nfn burn(origin, asset_id: u64, reason: Vec<u8>) -> Result;\n// list an NFT for sale\nfn list(origin, asset_id: u64, price: T::Balance) -> Result;\n// buy a listed NFT\nfn buy(origin, asset_id: u64, list_price: T::Balance) -> Result;\n// add an emote to the NFT (for social)\nfn emote(origin, asset_id: u64, emote: Vec<u8>) -> Result;\n// allows a user to claim a minted NFT\nfn claim(origin, asset_id: u64) -> Result;\n"})}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.strong,{children:"Javascript SDK Details:"})}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"The front-end UI will be built using React + Polkadot.js. This will be a straight-forward and clean UI to allow the creation and management of NFTs. This UI is not a front-end for consumers but for developers to create NFTs. The underlying SDK for the front-end can be used to create any type of custom NFT management UI."}),"\n",(0,l.jsx)(t.p,{children:"Web Stack:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"React"}),"\n",(0,l.jsx)(t.li,{children:"Polkadot.js"}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["Mockup of the admin frontend.\n",(0,l.jsx)(t.img,{src:"https://github.com/GamePowerNetwork/nft-collectibles-wallet/raw/open-grant/images/Admin.png",alt:"img"})]}),"\n",(0,l.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,l.jsx)(t.p,{children:"The NFT Collectibles Wallet provides the ecosystem with a streamlined and standard way to create, manage and exchange NFTs. By allowing the wallet to connect to any substrate based chain, users can freely move around the ecosystem without downloading multiple wallets for each chain, while still having a wallet that focuses specifically on collectibles."}),"\n",(0,l.jsxs)(t.p,{children:["The NFT Wallet uses the RMRK NFT standard (",(0,l.jsx)(t.a,{href:"https://rmrk.app/#standards",children:"https://rmrk.app/#standards"}),"). However the NFT Wallet project can potentially support other standards such as the new Enjin initiative on the Polkadot ecosystem."]}),"\n",(0,l.jsx)(t.p,{children:"Our target audience is 3-fold: The everyday consumer that wants to manage their NFTs, The Substrate blockchain developer that wants to connect to the NFT Collectibles Wallet to offer NFTs on their blockchain and finally Dapp developers who want to offer their users NFTs through QR codes."}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.em,{children:(0,l.jsx)(t.strong,{children:"Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?"})})}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"The most similar project to the NFT Collectibles Wallet is the Enjin Wallet. However, the Enjin wallet is closed sourced and multiple blockchains cannot directly integrate into it in a decentralized way. This project solves that issue by being open sourced and allowing anyone that is a part of the ecosystem to contribute and enhance the project. Also by removing the wallet's centralization, any Substrate blockchain can make use of it."}),"\n",(0,l.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,l.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Michael Huntington: Senior Software Engineer."}),"\n",(0,l.jsx)(t.li,{children:"Michael Rochester: Project Manager and Software Project Implementation"}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"Contact Name:"})," Micheal Huntington"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"Contact Email:"})," ",(0,l.jsx)(t.a,{href:"mailto:dev@gamepower.network",children:"dev@gamepower.network"})]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"Website:"})," ",(0,l.jsx)(t.a,{href:"https://gamepower.network",children:"https://gamepower.network"})]}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"Registered Address:"})," None"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"Registered Legal Entity:"})," None"]}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"Michael Huntington"})," has worked on various projects through enterprise and personal software creations. Mike has published games for IOS and Android launched on the Apple AppStore and Google Play Store. He has worked as a Software Engineer for multiple fortune 500 companies such as AT&T, Turner Broadcasting, and ADP. Mike brings a wealth of knowledge to our team and is a driving force behind our concepts."]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"Michael Rochester"})," has worked with various software companies as a project manager and has implemented a wide range of clients within the municipal software niche and utility billing genre. His experience includes consumer account management applications launched on Google Play and Apple app stores. He brings 7 years of project management experience and is a guiding force for this project."]}),"\n",(0,l.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://github.com/GamePowerNetwork",children:"https://github.com/GamePowerNetwork"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://github.com/MikeHuntington",children:"https://github.com/MikeHuntington"})}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://www.linkedin.com/in/Mike-Huntington",children:"https://www.linkedin.com/in/Mike-Huntington"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://www.linkedin.com/in/Michael-Rochester",children:"https://www.linkedin.com/in/Michael-Rochester"})}),"\n"]}),"\n",(0,l.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,l.jsxs)(t.p,{children:["Currently, work for the NFT Collectibles Wallet has not started, but the team has started initial work on GamePower Network (",(0,l.jsx)(t.a,{href:"https://www.gamepower.network",children:"https://www.gamepower.network"}),") which will be the first project to implement the NFT Collectibles Wallet. The wallet was actually conceived because of the GamePower project. The need for the NFT wallet was very important and we decided to open the project up to anyone in the ecosystem that has the same need."]}),"\n",(0,l.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,l.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"Total Estimated Duration:"})," 7 weeks"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  2.1 FTE"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"Total Costs:"})," 15,000 USD"]}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"milestone-1--implement-nft-wallet-pallet",children:"Milestone 1 \u2014 Implement NFT Wallet Pallet"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"Estimated Duration:"})," 4 weeks"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"FTE:"}),"  1"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"Costs:"})," 0 DAI"]}),"\n"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,l.jsx)(t.th,{children:"Deliverable"}),(0,l.jsx)(t.th,{children:"Specification"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,l.jsx)(t.td,{children:"License"}),(0,l.jsx)(t.td,{children:"Apache 2.0 / MIT / Unlicense"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,l.jsx)(t.td,{children:"Documentation"}),(0,l.jsx)(t.td,{children:"We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,l.jsx)(t.td,{children:"Testing Guide"}),(0,l.jsx)(t.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,l.jsx)(t.td,{children:"nft-wallet-pallet"}),(0,l.jsx)(t.td,{children:"We will create a Substrate module that will allow an NFT to be (consumed, listed on market, traded, purchased on market). pallet methods are listed in the diagram above."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,l.jsx)(t.td,{children:"Substrate Test Chain"}),(0,l.jsx)(t.td,{children:"users can interact with the nft-wallet-pallet module through a simple substrate barebones setup."})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"milestone-2--build-nft-collectibles-wallet-mobile-app",children:"Milestone 2 \u2014 Build NFT Collectibles Wallet Mobile App"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"Estimated Duration:"})," 4 weeks"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"FTE:"}),"  1"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"Costs:"})," 10,000 DAI"]}),"\n"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,l.jsx)(t.th,{children:"Deliverable"}),(0,l.jsx)(t.th,{children:"Specification"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,l.jsx)(t.td,{children:"License"}),(0,l.jsx)(t.td,{children:"Apache 2.0 / MIT / Unlicense"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,l.jsx)(t.td,{children:"Documentation"}),(0,l.jsx)(t.td,{children:"We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,l.jsx)(t.td,{children:"Testing Guide"}),(0,l.jsx)(t.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,l.jsx)(t.td,{children:"build app structure"}),(0,l.jsx)(t.td,{children:"We will have the core structure of the application in place."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,l.jsx)(t.td,{children:"implement wallet creation view"}),(0,l.jsx)(t.td,{children:"This will be the landing screen of the app where users can create or restore their NFT Collectibles Wallet."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,l.jsx)(t.td,{children:"implement the collectibles view"}),(0,l.jsx)(t.td,{children:"This view is where users can see a list of all their collectibles."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,l.jsx)(t.td,{children:"implement QR scanner view"}),(0,l.jsx)(t.td,{children:"This view is where users can scan a QR code a see information about the NFT such as (the chain it belongs to and other metadata attached to the NFT)."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"5."}),(0,l.jsx)(t.td,{children:"implement QR scanner logic"}),(0,l.jsx)(t.td,{children:"When a QR code is scanned we will connect to the blockchain it belongs to and fetch the NFTs metadata."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"6."}),(0,l.jsx)(t.td,{children:"implement NFT claim screen"}),(0,l.jsx)(t.td,{children:"After scanning a QR code the user will be taken to a screen to confirm if they want to claim the NFT. From here a transaction is made for the claim."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"7."}),(0,l.jsx)(t.td,{children:"write tests"}),(0,l.jsx)(t.td,{children:"Tests will need to be written for each view."})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"milestone-3--build-javascript-sdk-and-admin-frontend",children:"Milestone 3 \u2014 Build Javascript SDK and Admin Frontend"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"Estimated Duration:"})," 3 weeks"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"FTE:"}),"  0.5"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"Costs:"})," 5,000 DAI"]}),"\n"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,l.jsx)(t.th,{children:"Deliverable"}),(0,l.jsx)(t.th,{children:"Specification"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,l.jsx)(t.td,{children:"License"}),(0,l.jsx)(t.td,{children:"Apache 2.0 / MIT / Unlicense"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,l.jsx)(t.td,{children:"Documentation"}),(0,l.jsx)(t.td,{children:"We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,l.jsx)(t.td,{children:"Testing Guide"}),(0,l.jsx)(t.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,l.jsx)(t.td,{children:"Article/Tutorial"}),(0,l.jsx)(t.td,{children:"We will publish an article/tutorial for non-technical users that explains what the NFT Collectibles wallet is and how to use it."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,l.jsx)(t.td,{children:"react frontend"}),(0,l.jsx)(t.td,{children:"This frontend will provide a UI for all the CRUD methods needed for managing NFTs. Users should be able to mint collections, mint NFTs and change issuers."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,l.jsx)(t.td,{children:"Connect to IPFS"}),(0,l.jsx)(t.td,{children:"All metadata entered for minting collections and NFTs should be stored on IPFS."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,l.jsx)(t.td,{children:"Connect to substrate with Polkadot.js"}),(0,l.jsx)(t.td,{children:"Users should easily be able to connect the Admin frontend using polkadot.js."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,l.jsx)(t.td,{children:"write tests"}),(0,l.jsx)(t.td,{children:"Tests will need to be written for each view."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,l.jsx)(t.p,{children:"This NFT Collectibles Wallet will be used as part of the GamePower Network. GamePower will operate on the Kusama and Polkadot platform and will be the first application of it's kind that delivers decentralized game publishing. GamePower will use the NFT Collectibles Wallet to allow users of GamePower to store NFTs purchased or earned through GamePower either in a game or through the GamePower NFT marketplace."}),"\n",(0,l.jsx)(t.p,{children:"However, Development of the NFT Collectibles Wallet won't end after all milestones are met. We plan to add features such as Minting NFTs from within the application by users, A way for the app to automatically discover blockchains using NFTs on its own (maybe through some type of registry). There are endless possibilities where this wallet can go and we are very excited to get started on it!"}),"\n",(0,l.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,l.jsx)(t.p,{children:"Currently we have no funding for this project or GamePower Network, we feel getting the NFT Collectibles Wallet off the ground will kick-start our GamePower Network development in a big way. We are excited to be part of the Substrate and Polkadot community and we will continue to contribute as much as we can. Thank you for your time and thank you for considering us for the Web3 Open Grant."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var l=n(96540);const i={},s=l.createContext(i);function r(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);