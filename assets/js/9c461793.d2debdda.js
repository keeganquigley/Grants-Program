"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[6374],{75524:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));a(95657);const o={},l="Subauction",r={unversionedId:"applications/subauction",id:"applications/subauction",title:"Subauction",description:"- Team name: Subauction",source:"@site/applications/subauction.md",sourceDirName:"applications",slug:"/applications/subauction",permalink:"/applications/subauction",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/subauction.md",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Project Details",id:"project-details",level:3},{value:"English Auction type",id:"english-auction-type",level:4},{value:"Auction type generalization",id:"auction-type-generalization",level:4},{value:"Governance and Content Curation",id:"governance-and-content-curation",level:4},{value:"Governance",id:"governance",level:2},{value:"Part of the auction pallet",id:"part-of-the-auction-pallet",level:3},{value:"Separate pallet",id:"separate-pallet",level:3},{value:"Smart contract",id:"smart-contract",level:3},{value:"Token",id:"token",level:3},{value:"Curatorship",id:"curatorship",level:3},{value:"Content curation",id:"content-curation",level:2},{value:"Positive motivation",id:"positive-motivation",level:3},{value:"Negative motivation",id:"negative-motivation",level:3},{value:"Business Model Mechanics",id:"business-model-mechanics",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"NFT integration",id:"nft-integration",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Team Website",id:"team-website",level:3},{value:"Legal structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repo",id:"team-code-repo",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview",level:3},{value:"Technologies used",id:"technologies-used",level:3},{value:"Milestone 1: Implement Auction Type Generalisation",id:"milestone-1-implement-auction-type-generalisation",level:3},{value:"Milestone 2: Implement New Auction Types",id:"milestone-2-implement-new-auction-types",level:3},{value:"Candle Auction Type",id:"candle-auction-type",level:4},{value:"Top-up Auction Type",id:"top-up-auction-type",level:4},{value:"Community engagement",id:"community-engagement",level:3},{value:"Future Plans",id:"future-plans",level:2}],c={toc:u},p="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"subauction"},"Subauction"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team name:")," Subauction"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"BTC address:")," 387RAYPUGkQuyeqcj3Quw1ErH5a7Hria6N (BTC)")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("p",null,"In Ethereum, the NFT industry is really testing network limits these days, so we expect there's quite some potential exploring the space within the Polkadot ecosystem."),(0,i.kt)("p",null,"Inspired by the parachain candle auction mechanics, we started working on a prototype of the NFT auction system while participating in Encode hackathon (awarded 2nd place in the Polkadot category)."),(0,i.kt)("p",null,"This document describes a vision for the NFT marketplace platform built on top of NFT infrastructure projects being developed now on Polkadot."),(0,i.kt)("p",null,"We believe the ecosystem might benefit from a more generic implementation of our initial prototype of NFT auctions with English auction type. Also, we'd like to take a different path than most of the projects built on Ethereum and apply a curated quality-over-quantity approach with some specific features available in the Polkadot ecosystem."),(0,i.kt)("p",null,"Last but not least, while many other projects focus on the improvement of underlying background technology, we're convinced that there is a huge opportunity bridging the gap between what's possible with current technology and the end-user capabilities to interact with these systems. That's why we aim to both improve on infrastructure (NFT auction pallet) and potentially user delivery via a well-designed frontend application using another application for grant to continue in this work."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"What we already accomplished:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"English auction type (creation, bidding, removal)"),(0,i.kt)("li",{parentName:"ul"},"NFT minting using ORML pallet and NFT standard schema based on OpenSea"),(0,i.kt)("li",{parentName:"ul"},"Media integration with upload to IPFS"),(0,i.kt)("li",{parentName:"ul"},"NFT and funds locking on the network, exchange of those funds")),(0,i.kt)("h4",{id:"english-auction-type"},"English Auction type"),(0,i.kt)("p",null,'The most common type of auction is where the participants bid against each other and the highest offer wins. Auction will reach its end when one of the criterias are met, there is a countdown and when the auction is concluded, the highest bidder wins.\nAn auction can have a time period between the bids. So for example if nobody made a better bid than the last one in 10 minutes, auction is concluded and the last bidder wins.\nAn auctioneer can even end the auction in any moment he chooses (usually when he is satisfied with the price).\nThere can be also various configurations parameters like auction length, minimum value of the next bid or list of invited participants (so called "permissioned auction").'),(0,i.kt)("h4",{id:"auction-type-generalization"},"Auction type generalization"),(0,i.kt)("p",null,"As the long-term goal is to support as many different types of auctions as possible, the application has to be flexible enough to provide an easy interface to plug them in. This will be made possible by making the solution more robust with its architecture overhaul. In order to achieve genericity, we want to create a higher level of abstraction and provide more suitable data structures."),(0,i.kt)("h4",{id:"governance-and-content-curation"},"Governance and Content Curation"),(0,i.kt)("p",null,"As stated in the project overview, we're strong believers in the quality over quantity approach. We'd also like to re-introduce the concept of scarcity and exclusivity in the NFT space which is slowly fading out in the Ethereum world from our point of view. To make that happen, we'd set up DAO for content curation where we would initially serve as the curators to avoid possible abusive content and eventually allow the community to participate."),(0,i.kt)("p",null,"We plan to leverage most of the governance features available on Polkadot. The first cornerstone of governance will be the council who will be voted on and will be deciding in referenda on the shape of the application - its modules, features, and functionality. The second cornerstone will be voted content curators who will be delegated from the council to approve or reject public proposals from the community, manage auctions and provide the optimal level of content safety and creativity."),(0,i.kt)("h2",{id:"governance"},"Governance"),(0,i.kt)("p",null,"We will introduce council that will basically \u201cown\u201d the entire project and any member of community who proves himself can become a part of it.\nCouncil will be able to set fees, fund interesting activities from the treasury or create proposals/referendums for the community.\nCouncil can elect curators that will manage platforms content.\nIt is expected that council will drive the project towards more interesting and experimental use-cases than plain auctions of art - a lot of stuff can be tokenized and may be attractive for the community to be able to sell different item categories."),(0,i.kt)("p",null,"There are several approaches to implementing the actual governance module."),(0,i.kt)("h3",{id:"part-of-the-auction-pallet"},"Part of the auction pallet"),(0,i.kt)("p",null,"This makes the most sense at the first sight because we can utilize the power of Substrate to implement governance via collectives, democracy and voting pallets. However, our plan is to make the auction pallet really flexible and introducing governance can pollute auctions with unnecessary complexity regarding the governance (and thus make it less re-usable for anybody who would like to implement another system on top of our pallet). Also, there are plans for having multiple instances of the auction pallet on chains supporting NFTs so it's also a question how we would keep only single instance of governance in this case."),(0,i.kt)("h3",{id:"separate-pallet"},"Separate pallet"),(0,i.kt)("p",null,"This seems like an ideal solution because it has a benefit of using Substrate but factors out all governance functionality to a separate pallet. Downside would be that each NFT platform where we plan to integrate our auction-pallet would have to integrate two pallets instead of one to their runtime."),(0,i.kt)("h3",{id:"smart-contract"},"Smart contract"),(0,i.kt)("p",null,"Smart contract approach has following advantages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Factoring our governance while keeping only one pallet at the same time"),(0,i.kt)("li",{parentName:"ul"},"Easy integration of our auctions to multiple NFT chains since the only connection to the governance is reference to our smart contract. Thus we end up with only instance of governance while having multiple auction instances sitting on different chains")),(0,i.kt)("p",null,"However, downside is obviously not exploiting great capabilities that Substrate offers and having to implement a lot of stuff by reinventing the wheel."),(0,i.kt)("h3",{id:"token"},"Token"),(0,i.kt)("p",null,"We have decided to use Basilisk as the home chain so the auctions will leverage Basilisk's fungible as well as non-fungible tokens for transfers and governance. As it uses FRAME's Uniques pallet it will be possible to easily migrate and reuse the solution on other Substrate based chains."),(0,i.kt)("h3",{id:"curatorship"},"Curatorship"),(0,i.kt)("p",null,"Curatorship is closely tied to the governance since only approved members can have elevated privileges over the system (e.g. vote on removal of inappropriate content). Any user can report offensive content to the curators. Curators then remove the content or reject the report. We will probably run a Discord/Telegram channel to open a discussion about a right way to do the curatorship and what kind of stuff is acceptable for public auctioning and what is not"),(0,i.kt)("h2",{id:"content-curation"},"Content curation"),(0,i.kt)("h3",{id:"positive-motivation"},"Positive motivation"),(0,i.kt)("p",null,"Users will be incentivized to provide a good quality content by either getting tips from the council for a good catch or fullfilling bounties which were announced by other uses. As an example, there can be a user who wants to own a digital art collectible but is not able to or does not have time to search for it. If another user provides such a collectible to the marketplace, they can be rewarded not only by the collectible price but a bounty on top of it."),(0,i.kt)("h3",{id:"negative-motivation"},"Negative motivation"),(0,i.kt)("p",null,"On the other hand, we're aware the content needs to be moderated to some extent because of possible unsolicited character. In the first place we aim to combat this by starting with VIP auctions that will be pre-approved by the council before public launch. Eventually we plan to open the auction creation process a bit more and start to allow create auctions without council approvement based on gaining reputation by using our platform without violation of rules. Once our solution starts to offer these kind of public auctions for almost anyone to create, we want to introduce a penalty system to control that unsolicited content will be removed and the person who advertises it will be punished depending on the level of severity. The slash might be taken from a security deposit at the time user creates the auction."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Offence level"),(0,i.kt)("th",{parentName:"tr",align:null},"Content property"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"),(0,i.kt)("th",{parentName:"tr",align:null},"Punishment"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"Inappropriate"),(0,i.kt)("td",{parentName:"tr",align:null},"Pornography"),(0,i.kt)("td",{parentName:"tr",align:null},"Slash up to 50% of the reserved funds for a specific purpose (e.g. auction) + up to 10% of total funds")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"Offensive"),(0,i.kt)("td",{parentName:"tr",align:null},"Explicit brutal content like violence/accidents"),(0,i.kt)("td",{parentName:"tr",align:null},"Slash up to 100% of the reserved funds for a specific purpose (e.g. auction) + up to 20% of total funds")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"Harmful"),(0,i.kt)("td",{parentName:"tr",align:null},"Child porn/Women abuse"),(0,i.kt)("td",{parentName:"tr",align:null},"Slash up to 100% of the total funds")))),(0,i.kt)("h4",{id:"business-model-mechanics"},"Business Model Mechanics"),(0,i.kt)("p",null,"To keep on moving this project forward, we need predictable revenue streams to secure resources of different parts of our NFT marketplace such as content curation, new NFT content partnerships, and of course ongoing product development. We'll research applicable business models and go-to-market strategies that align with our overall vision of the NFT marketplace."),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"We aim to build a feature-specific auction pallet that possibly integrates with already being developed NFT infrastructure projects and allows creating and bidding on NFT auctions of different auction types. The point is to provide easy integration to existing NFT implementations that can be re-used across the whole ecosystem. Also, there will be different auction types and some of them have never been implemented in the Polkadot space so it's definitely something that will push the whole ecosystem forward and we might even find some other means of token distribution models that can benefit all the projects (for example adjustments to the Dutch auction)."),(0,i.kt)("p",null,"Also, we are already in touch with several leading NFT projects within the Polkadot ecosystem and they are very interested in having an auction system on top of their platforms. For instance, we have discussed that with Kodadot and we definitely want to work together in the future."),(0,i.kt)("h3",{id:"nft-integration"},"NFT integration"),(0,i.kt)("p",null,"There are multiple different approaches to NFT implementation on the market with no official standard set in stone yet on Polkadot. We want to keep our solution as flexible as possible and have the ability to be integrated with a broad spectrum of NFTs. At this point, the closest resemblance of an NFT standard we could find was the ORML by Acala so we started and will continue building based on this library. On the other hand it should be easy in the future to migrate the solution to a different kind of NFT implementation or a Polkadot standard."),(0,i.kt)("p",null,"UPDATE 2021-09-28: The solution has been migrated from ORML to FRAME's Uniques pallet."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Jindrich Zeleny (Blockchain dev @ HydraDX)"),(0,i.kt)("li",{parentName:"ul"},"Valery Gantchev (Blockchain dev @ HydraDX)")),(0,i.kt)("h3",{id:"team-website"},"Team Website"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadotters.medium.com"},"https://polkadotters.medium.com"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"LLC in the Czech Republic")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"We participated in the Encode hackathon winning 2nd prize in the Polkadot category. We were also in touch with the Acala team managing the ORML pallets and we discussed a couple of our proposals to enhance the NFT pallet and they have accepted our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-web3-stack/open-runtime-module-library/pull/351"},"PR"),". Our team members are also graduates of Substrate Runtime Developer Academy. Last but not least, we run the biggest Polkadot community in Czechia/Slovakia (Polkadotters) where we gather valuable market feedback."),(0,i.kt)("p",null,"Besides blockchain development, each member has 5+ years of experience in Computer Science in different areas such as BI, software development, and enterprise-grade engineering."),(0,i.kt)("h3",{id:"team-code-repo"},"Team Code Repo"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/galacticcouncil/Basilisk-node/tree/feat/auctions/pallets"},"https://github.com/galacticcouncil/Basilisk-node/tree/feat/auctions/pallets"))),(0,i.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/jindrich-zeleny"},"https://www.linkedin.com/in/jindrich-zeleny")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/valery-gantchev-20a03971/"},"https://www.linkedin.com/in/valery-gantchev-20a03971/"))),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," ~3 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 2 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," ~12,000 USD")),(0,i.kt)("h3",{id:"technologies-used"},"Technologies used"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Built as a standalone auction module using ",(0,i.kt)("strong",{parentName:"li"},"Rust")," and ",(0,i.kt)("strong",{parentName:"li"},"Substrate")),(0,i.kt)("li",{parentName:"ul"},"Integrated with ",(0,i.kt)("strong",{parentName:"li"},"ORML NFT")," pallet from day 1"),(0,i.kt)("li",{parentName:"ul"},"Integrated with IPFS"),(0,i.kt)("li",{parentName:"ul"},"For the actual code please check our ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/polkadotters/SubAuction"},"repository")))),(0,i.kt)("h3",{id:"milestone-1-implement-auction-type-generalisation"},"Milestone 1: Implement Auction Type Generalisation"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#auction-type-generalization"},"Auction Type Generalization")," for definitions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 4-5 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Delivery:")," November, 2021"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:")," 2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," $6,000"),(0,i.kt)("li",{parentName:"ul"},"Implement Auction Type Generalisation from the currently developed type of English auction",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"redefine traits and add more of them (these are interfaces to handle various types of auctions), current solution has only one"),(0,i.kt)("li",{parentName:"ul"},"add handlers/methods for events that operate auctions"),(0,i.kt)("li",{parentName:"ul"},"add structs to keep on-chain data about auctions"))),(0,i.kt)("li",{parentName:"ul"},"Deliver docker-compose file to run node"),(0,i.kt)("li",{parentName:"ul"},"The code will have proper unit-test coverage to ensure functionality and robustness."),(0,i.kt)("li",{parentName:"ul"},"Provide both inline documentation of the code and a basic tutorial describing how the software can be used and tested.")),(0,i.kt)("h3",{id:"milestone-2-implement-new-auction-types"},"Milestone 2: Implement New Auction Types"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#candle-auction-type"},"Candle Auction Type")," and ",(0,i.kt)("a",{parentName:"p",href:"#top-up-auction-type"},"Top-up Auction Type")," for definitions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2-3 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Delivery:")," March, 2022"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:")," 2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," $6,000"),(0,i.kt)("li",{parentName:"ul"},"Implement:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("a",{parentName:"li",href:"#candle-auction-type"},"Candle Auction Type"),", a specific type for NFT auction to prevent snipping (placing bids in the very last second to gamble the system)"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("a",{parentName:"li",href:"#top-up-auction-type"},"Top-up Auction Type"),", a specific type for NFT auction usually used for fundraising or charity auctions"))),(0,i.kt)("li",{parentName:"ul"},"The code will have proper unit-test coverage to ensure functionality and robustness."),(0,i.kt)("li",{parentName:"ul"},"Provide both inline documentation of the code and a basic tutorial describing how the software can be used and tested.")),(0,i.kt)("h4",{id:"candle-auction-type"},"Candle Auction Type"),(0,i.kt)("p",null,"Candle auction is a variant of the English auction where the last part of the auction is randomized in the sense that it can be concluded anytime. This prevents bidders from leaving their bids to the last few minutes or seconds and it's fairer in the internet environment where bots can bid on behalf of the buyers. The configuration of such an auction will be very similar to the English one."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/green-jay/Open-Grants-Program/blob/24ed082bf5a6778392d6264ffc81cbbed77acfc2/applications/candle_auction.png?raw=true"},"Candle Auction Type Diagram")),(0,i.kt)("h4",{id:"top-up-auction-type"},"Top-up Auction Type"),(0,i.kt)("p",null,'This is a very popular auction type used by charities. Each participant will pay a "top-up fee" which is based on the bid he made minus the closest lower bid. This effectively means that each participant will pay the top-up fee except the first and the last bidder. The last bidder wins the auction, obtains the item, and only pays the item\'s price. We believe that bringing this kind of auction type enables entities to raise funds for good causes so that we can connect socially responsible projects with supporters and philanthropists.'),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/green-jay/Open-Grants-Program/blob/24ed082bf5a6778392d6264ffc81cbbed77acfc2/applications/topup_auction.png?raw=true"},"Top-up Auction Type Diagram")),(0,i.kt)("h3",{id:"community-engagement"},"Community engagement"),(0,i.kt)("p",null,"We are well-positioned within the Polkadot ecosystem to create our own product since we started the Polkadotters community that is currently having over 4,000 members and supporters. Therefore we will have plenty of space to carefully test our product and receive valuable feedback from the community. We will also try to gather support from other Polkadot ecosystem projects since we already have a good reputation within a space and we are confident that we will be able to promote the project properly."),(0,i.kt)("p",null,"Our progress will be regularly published on social media to gain enough attention and for the sake of transparency of the whole project."),(0,i.kt)("p",null,"Our channels"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadotters.medium.com"},"https://polkadotters.medium.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/Polkadotters1"},"https://twitter.com/Polkadotters1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.facebook.com/groups/232197797602358/"},"https://www.facebook.com/groups/232197797602358/"))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"We're huge fans of NFT space and we do believe that the Polkadot ecosystem will benefit from having the feature-specific auctino pallet that can be able easily integrated into other NFT solution standards developed on Polkadot. Our end result should be a feature-specific pallet that could be plugged into other blockchain applications and an NFT auction marketplace application with DAO curated exclusive content. But this is only beginning, we believe that huge innovations are going to happen in the NFT space and we want to follow those changes as closely as possible to make our auction system thrive!"))}h.isMDXComponent=!0}}]);