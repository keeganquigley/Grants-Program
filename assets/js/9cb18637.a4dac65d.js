"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[64555],{69908:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));a(95657);const i={},r="Web3 Foundation Deep Account Analytics in Three Tiers for the Polkadot Data Alliance",l={unversionedId:"applications/DeepAccountAnalytics-PolkadotDataAlliance",id:"applications/DeepAccountAnalytics-PolkadotDataAlliance",title:"Web3 Foundation Deep Account Analytics in Three Tiers for the Polkadot Data Alliance",description:"- Team Name: Colorful Notion, Inc.",source:"@site/applications/DeepAccountAnalytics-PolkadotDataAlliance.md",sourceDirName:"applications",slug:"/applications/DeepAccountAnalytics-PolkadotDataAlliance",permalink:"/applications/DeepAccountAnalytics-PolkadotDataAlliance",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/DeepAccountAnalytics-PolkadotDataAlliance.md",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Abstract \ud83d\udcc4",id:"abstract-",level:2},{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members / Contact",id:"team-members--contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview",level:3},{value:"Milestone 1 \u2014 Three Tier Deep Account Analytics on Account References",id:"milestone-1--three-tier-deep-account-analytics-on-account-references",level:3},{value:"Milestone 2 \u2014 Three Tier Deep Account Analysis of Democracy+Staking+Nomination Pools",id:"milestone-2--three-tier-deep-account-analysis-of-democracystakingnomination-pools",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"web3-foundation-deep-account-analytics-in-three-tiers-for-the-polkadot-data-alliance"},"Web3 Foundation Deep Account Analytics in Three Tiers for the Polkadot Data Alliance"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Team Name:")," Colorful Notion, Inc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Payment Address")," ",(0,o.kt)("inlineCode",{parentName:"li"},"0xEaf3223589Ed19bcd171875AC1D0F99D31A5969c")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,o.kt)("h2",{id:"abstract-"},"Abstract \ud83d\udcc4"),(0,o.kt)("p",null,"This proposal addresses outstanding ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/data_analysis_tools.md"},"deep account analytics problems for the Web3 Foundation"),".\nWe propse 3-tier solution:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tier 1. ",(0,o.kt)("em",{parentName:"li"},"raw indexing"),": Google BigQuery Public Datasets"),(0,o.kt)("li",{parentName:"ul"},"Tier 2. ",(0,o.kt)("em",{parentName:"li"},"deep indexing"),": shared datasets delivered with Google Analytics Hub"),(0,o.kt)("li",{parentName:"ul"},"Tier 3. ",(0,o.kt)("em",{parentName:"li"},"dashboards"),": the above indexed data in Apache Superset")),(0,o.kt)("p",null,"This proposal seeks to develop the above solution with the support of a Web3 Foundation grant, but critically addresses\nfuture maintainance a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1fA5ARHy-frzgZC66rniKZ5o7CSbDvCTkS--kWaMzuMs/edit#"},"Polkadot Data Alliance Bounty"),"\nthat can support work on all 3 tiers with ",(0,o.kt)("em",{parentName:"p"},"child bounties")," for Polkadot Data Alliance contributors."),(0,o.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,o.kt)("p",null,"This proposal is in response to the RFP ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/data_analysis_tools.md"},"Data Analysis Tools for Substrate-based Blockchains"),"\nwhich seeks to answer deep account analytics questions of:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Account References"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Which transactions/accounts were responsible for the reserved balance in an account?"),(0,o.kt)("li",{parentName:"ul"},"What modules currently depend on consumers, providers, and sufficients reference counters for a certain account, and which transactions introduced/removed those references?"),(0,o.kt)("li",{parentName:"ul"},"What are the pallets responsible for reserves/holds and locks/freezes on an account?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Democracy"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Which accounts have delegated OpenGov votes to an account or to which accounts the account in question has delegated their votes to for each track?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Staking/Nomination Pools"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Who are all the nominators that nominated Validator X? (an inverse mapping basically of staking.nominators from validator -> nominators)"),(0,o.kt)("li",{parentName:"ul"},"Who are the top 10 nominators with the highest APR, and which validators do they have in common?")),(0,o.kt)("p",null,"We call these ",(0,o.kt)("em",{parentName:"p"},"deep analytics"),' questions because to answer them requires significant "deep indexing" beyond "raw indexing", which cannot be done without intricate knowledge of Substrate.  Currently, these questions are difficult to answer without going through many pages in a block explorer like Polkaholic.io, and nearly impossible without doing some amount of data engineering.  The answers to the above questions ',(0,o.kt)("em",{parentName:"p"},"could")," be treated as new features to be developed in the context of block explorer like Polkaholic, or within special purpose UIs like polkassembly or staking.polkadot.network."),(0,o.kt)("p",null,"We propose a different style of solution that we believe properly factorizes the following ",(0,o.kt)("em",{parentName:"p"},"three")," tiers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tier 1. raw indexing - raw indexing of decoded blocks (blocks, extrinsics/calls, events, traces)"),(0,o.kt)("li",{parentName:"ul"},"Tier 2. deep indexing - post-processing of raw indexed data "),(0,o.kt)("li",{parentName:"ul"},"Tier 3. dashboards - situating the above with BI tools -- speci that does not require deep knowledge of the structure of the indexed data")),(0,o.kt)("p",null,"Typically, a block explorer or special purpose UI concerning chain\ndata blends all of these three tiers together -- and the maintainer of\nthe block explorer enjoys a community following (etherscan.io ).  But\noften when new deep analytics questions arise are not directly\navailable in an explorer, users with deep account analytics questions\nare left struggling and need custom answers only provided by data\nengineers and analytics engines -- covered by dashboard systems like\nDune Analytics.  In Dune Analytics, Tier 2 is covered by Dune Wizards\nand Tier 3 is covered with a customized front-end.  "),(0,o.kt)("p",null,"The solution we develop here is ",(0,o.kt)("em",{parentName:"p"},"not")," to make a long list of feature\nrequests for either block explorers or special purpose UIs to answer\nwith new functionality."),(0,o.kt)("p",null,"Instead, our solution to this problem is to separate the THREE TIERS within a ",(0,o.kt)("em",{parentName:"p"},"genuinely collaborative")," Polkadot Data Alliance:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Tier 1: raw indexing results in all blocks, extrinsics, events, traces delivered in Google Bigquery Public Datasets.  In May 2023, Colorful Notion, under the curation of Parity Data, onboarded a complete index of 70+ chains of Polkadot+Kusama into Google Public Datasets.  This is in the "crypto_polkadot" and "crypto_kusama" dataset, which anyone can access with this Analytics Hub link ',"[here]")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Tier 2: deep indexing can then be done by doing some amount of data engineering with the above raw deata, resulting in tables, views or materialized views that can also be shared with new datasets, which can also be shared with Analytics Hub.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Tier 3: front-end engineering: given the above dataset, an open source BI tool (Apache Superset) can access ",(0,o.kt)("em",{parentName:"p"},"multiple")," datasets contributed by ",(0,o.kt)("em",{parentName:"p"},"multiple")," Polkadot Data Alliance members.  Recently, Parity Data shared this dataset of ",(0,o.kt)("em",{parentName:"p"},"their")," index of Polkadot, which enables a simple comparison between Parity Data's index and Colorful Notions' index."))),(0,o.kt)("p",null,"We consider our approach a ",(0,o.kt)("em",{parentName:"p"},"genuinely collaborative"),' approach, because anyone can contribute at any of the 3 tiers -- providing raw indexes, deep indexes, or dashboards.  All dataset deliverables are public and the data processing itself is also reproducible in a "ETL" flow.  This should be contrast to a ',(0,o.kt)("em",{parentName:"p"},"non-collaborative")," approach where dataset is kept locked away unshared with the community, closed source and thus irreproducible."),(0,o.kt)("p",null,"However, because all three tiers involve a certain amount of storage, compute and data engineering/data analyst man power, it is critical to not ",(0,o.kt)("em",{parentName:"p"},"just")," build the above three tiered solution,\nbut recognize that it needs ",(0,o.kt)("strong",{parentName:"p"},"maintainence"),".  The Web3 Foundation supports maintainence, but does not support the considerable cloud computing costs that Tier 1 and 2 require, nor the sort of solution that Tier 3 requires.  We thus propose that the above three tier architecture be situated ",(0,o.kt)("em",{parentName:"p"},"in conjunction with")," a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1fA5ARHy-frzgZC66rniKZ5o7CSbDvCTkS--kWaMzuMs/edit#"},"Polkadot Data Alliance bounty"),", not just for ourselves at Colorful Notion, but for everyone equally commited to genuine collaboration a Polkadot Data Alliance.  "),(0,o.kt)("p",null,"It is believed that this collaborative framework can address many different problems other than deep analytics, and result in a more efficient allocation of Treasury funds and parachain resources: including an industry-wide multichain block explorer, ecosystem-wide XCM indexing, tracing tools, to name a few that our team has explored with some depth of seriousness."),(0,o.kt)("p",null,"Much Tier 1 foundation has already been laid through our work and other indexers (Subquery, Subsquid, Subscan, web3go) in the ecosystem, who we hope will be able to contribute at Tier 1 ","[ideally within BigQuery so as to be directly usable as another source for Tier 2 and Tier 3]","."),(0,o.kt)("p",null,"But Tier 1 is not enough -- it is necessary to address Tier 2 and Tier 3 as well, and the Web3 Foundation RFP questions clearly illustrate the inadequacy of stopping with raw indexes and the need for deep indexing.  We believe a strong collaborative mindset is required to fully address these questions and numerous others the Substrate ecosystem asks comprehensively."),(0,o.kt)("p",null,"The goal of this proposal is to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"address the Web3 Foundation's specific deep account analytics questions fully, specifically with three-tiered deliverables at Tier 1+2+3, using widely used tools of Google BigQuery and Apache Superset"),(0,o.kt)("li",{parentName:"ul"},"demonstrate a viable financial path for our own maintainence for the above solution within the Web3 Foundation grant structure and the structure of the Polkadot Treasury using the Polkadot Data Bounty system"),(0,o.kt)("li",{parentName:"ul"},"form an alternate kind of deliverable for Web3 Foundation other than code that everyone can use: ",(0,o.kt)("em",{parentName:"li"},"datasets")," and ",(0,o.kt)("em",{parentName:"li"},"dashboards")," that everyone can use")),(0,o.kt)("h3",{id:"project-details"},"Project Details"),(0,o.kt)("p",null,'The "Account References" questions of'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Which transactions/accounts were responsible for the reserved balance in an account?"),(0,o.kt)("li",{parentName:"ul"},"What modules currently depend on consumers, providers, and sufficients reference counters for a certain account, and which transactions introduced/removed those references?"),(0,o.kt)("li",{parentName:"ul"},"What are the pallets responsible for reserves/holds and locks/freezes on an account?")),(0,o.kt)("p",null,'are largely answerable through traces.  At the heart of every\nblockchain is a state transition function, where the state transitions\nfor any block are commonly called "traces" in blockchain engineering.\nSubstrate makes every trace visible through a\n',(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/substrate/rpc/#traceblockblock-hash-targets-optiontext-storagekeys-optiontext-methods-optiontext-traceblockresponse"},"state_traceBlock"),'\nRPC function, which outputs every storage key-value map change in a\nre-execution of a single block.  This RPC call is considered "unsafe"\nas it requires compute time to regenerate.'),(0,o.kt)("p",null,"Polkaholic.io's indexer, when traces are available from an internal archive node, fetches traces and exposes them in the block explorer.\nFor example, here is the trace for ",(0,o.kt)("a",{parentName:"p",href:"https://polkaholic.io/trace/polkadot/15723663/"},"Polkadot Block 15723663")),(0,o.kt)("img",{src:"https://cdn.polkaholic.io/screenshots/polkadot-trace.png"}),(0,o.kt)("p",null,"The raw keys (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"0x26aa394eea5630e0...f1dbd372bbe532b1f8702b2a7e"),") and values (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"0x01ab50050...000000000000"),") are decoded using the chains type spec into "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Key: [ "12xtAYsRUrmbniiWQqJtECiBQrMn8AypQcXhnQAc6RB6XkLW" ]\nValue: {\n    "nonce": 348331,\n    "consumers": 2,\n    "providers": 1,\n    "sufficients": 0,\n    "data": \u2296{\n        "free": "0x000000000000000005785a9c9f9ad21b",\n        "reserved": 0,\n        "miscFrozen": "0x00000000000000000058d15e17628000",\n        "feeFrozen": "0x00000000000000000058d15e17628000"\n    }\n}\n')),(0,o.kt)("p",null,"and loaded into BigQuery as part of a publicly available ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/bigquery/analytics-hub/exchanges/projects/974572213039/locations/us/dataExchanges/substrate_18804f88005"},"substrate-etl"),", recently added to Google BigQuery's Public Datasets in May 2023."),(0,o.kt)("img",{src:"https://cdn.polkaholic.io/screenshots/substrate-etl-trace.png"}),(0,o.kt)("p",null,"In Milestone 1, we will provide a 3 tier solution to deep account analytics on Account References.  Here is how the 3 tiers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Tier 1 requires ",(0,o.kt)("em",{parentName:"p"},"raw indexing")," of traces.  Traces are critical to Colorful Notion's ",(0,o.kt)("a",{parentName:"p",href:"https://polkaholic.io/xcmtransfers?xcmType=xcmtransfer"},"XCM Indexing")," and are important for parachain engineers to understand how the execution of a block, and are critical to the model producers, consumers and sufficients.   As raw traces form a very large dataset, to keep storage costs low, the indexer filters out pallets section/method that and exposes them in ",(0,o.kt)("inlineCode",{parentName:"p"},"crypto_polkadot.traces0")," (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/colorfulnotion/polkaholic/blob/main/substrate/schema/substrateetl/traces.json"},"see schema"),").  In particular, given how central accounts and native and non-native tokens are to blockchain usage, the indexer further decodes accounts and asset state into many additional columns like free, reserved and frozen.  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Tier 2 requires ",(0,o.kt)("em",{parentName:"p"},"deep indexing")," of the above trace data, to analyze how certain attributes changed in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1jywN--pONmJqmbuASWDLNdBvsB86OuizJnQ72ijAXSU/edit#gid=704412439"},"System:Account")," holding account reference counters, account balance reserved provenance (see: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/account-data-structures/"},"https://docs.substrate.io/reference/account-data-structures/"),").  We have some preliminary work on this (see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1gZZOvH4BYk2QYlhzz9AvRxiR6mcYtgRz9VZluz1lwuU/edit#gid=1313769699"},"this sheet"),") and proved that, yes, it is indeed possible to uniquely identify the extrinsic id (but not call id) for every trace, and that the changes can be identified to build a new dataset every day.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Tier 3 requires situating the above dataset into an Account Analysis Dashboard of ",(0,o.kt)("a",{parentName:"p",href:"https://analytics.polkaholic.io/dashboard/list/"},"Apache Superset"),".   Here we have a WASM Contract Explorer prototype:"))),(0,o.kt)("img",{src:"https://cdn.polkaholic.io/screenshots/deep-account-dashboard.png"}),(0,o.kt)("p",null,"We envision Milestone 1 focussed on Account References and then extended in Milestone 2 to Democracy+Staking deep analysis.  This will result in an Account Analysis Dashboard, with 3 or more account tabs exploring:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'"Account References" concerning deep indexing developed in Milestone 1')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'"Democracy" concerning deep indexing about ',(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1hdvW5Kw3gwBnXqFskALX1_szdTf4pYL-SlbOqJ8tlO0/edit#gid=1803912396"},"Democracy:VotingOf")," developed in Milestone 2"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{"direct":{"delegations":{"capital":0,"votes":0},"prior":[0,0],"votes":[[113,{"standard":{"vote":"0x81","balance":10000000000}}],[119,{"standard":{"vote":"0x82","balance":50000000000}}]]}}\n')),(0,o.kt)("p",null,"OR"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{"delegating":{"balance":15000000000,"conviction":"Locked4x","delegations":{"capital":0,"votes":0},"prior":[0,0],"target":"15ZvLonEseaWZNy8LDkXXj3Y8bmAjxCjwvpy4pXWSL4nGSBs"}}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"Staking" concerning deep indexing about Staking and Nomination Pools, with the added complexity of stashing controller/accounts, developed in Milestone 2.')),(0,o.kt)("p",null,"It is straightforward to link these dashboards directly to polkaholic.io based the key (accountID/extrinsicID/...) and add filtering on any column present in the table with Apache Superset."),(0,o.kt)("p",null,"Any UI can then link to this dashboard with the account ID, and the dashboard can link back to a block explorer."),(0,o.kt)("p",null,"Once the dataset is made available, end users can build charts and dashboards with the same ease as they do in Excel or Google Sheets."),(0,o.kt)("p",null,"The community dashboard can be used in the same way as Dune Analytics dashboards serves the EVM community."),(0,o.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,o.kt)("p",null,"While this proposal does not explicitly require collaboration on any of the 3 tiers, our intention is to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"set up a foundation where the Web3 Foundation could ask other teams to contribute datasets (Tier 2) and build dashboards (Tier 3) in the same way."),(0,o.kt)("li",{parentName:"ol"},"set up a repeatable model between Web3 Foundation and a Polkadot Data Alliance support data-oriented research (W3F) and ongoing maintenance (",(0,o.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1fA5ARHy-frzgZC66rniKZ5o7CSbDvCTkS--kWaMzuMs/edit#"},"Polkadot Data Bounty"),") with child bounties ")),(0,o.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,o.kt)("h3",{id:"team-members--contact"},"Team members / Contact"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contact Name:")," Sourabh Niyogi / Michael Chung"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,o.kt)("a",{parentName:"li",href:"mailto:sourabh@colorfulnotion.com"},"sourabh@colorfulnotion.com")," / ",(0,o.kt)("a",{parentName:"li",href:"mailto:michael@colorfulnotion.com"},"michael@colorfulnotion.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Website:")," ",(0,o.kt)("a",{parentName:"li",href:"https://colorfulnotion.com"},"https://colorfulnotion.com"))),(0,o.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Registered Address:")," 55 E 3rd Ave, San Mateo, CA 94401, USA"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Colorful Notion, Inc.")),(0,o.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Key engineers Sourabh Niyogi and Michael Chung have developed Polkaholic.io since Fall 2021 and substrate-etl since December 2022.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Prior to building Polkaholic.io, Sourabh and Michael worked in decentralized social networking protocol development + privacy-preserving contact tracing (Wolk),\nmobile advertising real-time bidding algorithm design and analytics (CrossChannel/MdotM).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Sourabh spent time doing computational cognitive science and machine vision research at MIT, including\nin ","[Bayesian learning of verb meaning and causal laws]","(",(0,o.kt)("a",{parentName:"p",href:"https://scholar.google.com/citations?user=HHmGYdEAAAAJ&hl=en%5D"},"https://scholar.google.com/citations?user=HHmGYdEAAAAJ&hl=en]"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Michael hails from UC Berkeley with a degree in statistics and economics and leads deep indexing at Colorful Notion."))),(0,o.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/colorfulnotion/substrate-etl"},"substrate-etl")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/colorfulnotion/polkaholic"},"Polkaholic.io")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/colorfulnotion/xcm-global-registry"},"XCM Global Asset Registry")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/sourabhniyogi"},"Sourabh Niyogi")," | ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mkchungs"},"Michael Chung"))),(0,o.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Summer 2022: Released Polkaholic.io, a fully working Substrate-first multichain block explorer."),(0,o.kt)("li",{parentName:"ul"},"Fall 2022: Increased XCM Transfers Coverage, Improved UI + API based on feedback from users.  Added EVM/WASM support."),(0,o.kt)("li",{parentName:"ul"},"Winter/Spring 2023: Developed substrate-etl and XCM Global Asset Registry."),(0,o.kt)("li",{parentName:"ul"},"May 2023: Google included Polkadot + Kusama in ",(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/public-data"},"Google Public Datasets"),".")),(0,o.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,o.kt)("p",null,"This proposal aims to deliver on the three-tier architecture outlined in two milestones:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Milestone 1 will develop ",(0,o.kt)("inlineCode",{parentName:"li"},"System:Account")," deep analytics."),(0,o.kt)("li",{parentName:"ul"},"Milestone 2 will develop ",(0,o.kt)("inlineCode",{parentName:"li"},"Democracy"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Staking")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"NominationPools")," deep analytics.")),(0,o.kt)("p",null,"For each Milestone, there are 3 kinds of deliverables corresponding to the 3 tiers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Raw indexes, in the form of BigQuery datasets which are delivered "))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:2},(0,o.kt)("li",{parentName:"ol"},"Deep indexes, in the form of BigQuery dataset"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:3},(0,o.kt)("li",{parentName:"ol"},"Dashboard publication, in the form of Apache Superset Dashboard")))),(0,o.kt)("p",null,"All raw and deep indexing code will be made open source within the polkaholic and substrate-etl repo."),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 4 months"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  300 FTE hours ","[100 USD/hr]"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Costs:")," 30,000 USD")),(0,o.kt)("h3",{id:"milestone-1--three-tier-deep-account-analytics-on-account-references"},"Milestone 1 \u2014 Three Tier Deep Account Analytics on Account References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Estimated duration:")," 8 weeks (ending 8/31/23) "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FTE:"),"  150 FTE hours ","[100 USD/hr]"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Costs:")," 15,000 USD")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,o.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,o.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,o.kt)("td",{parentName:"tr",align:null},"License"),(0,o.kt)("td",{parentName:"tr",align:null},"GNUv3 - polkaholic + substrate-etl repo")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,o.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,o.kt)("td",{parentName:"tr",align:null},"Provide README on construction of 1+2+3")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,o.kt)("td",{parentName:"tr",align:null},"Manual Testing Guide"),(0,o.kt)("td",{parentName:"tr",align:null},"Manual testing guide with steps for using the application, with examples including expected inputs and outputs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"1."),(0,o.kt)("td",{parentName:"tr",align:null},"Raw Indexing"),(0,o.kt)("td",{parentName:"tr",align:null},"substrate-etl:crypto_polkadot.traces0 for 7/1/23 - 8/31/23")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"2."),(0,o.kt)("td",{parentName:"tr",align:null},"Deep Indexing"),(0,o.kt)("td",{parentName:"tr",align:null},"substrate-etl:substrate.accountreference0 and supporting datasets")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"3."),(0,o.kt)("td",{parentName:"tr",align:null},"Dashboard Publication"),(0,o.kt)("td",{parentName:"tr",align:null},'Superset dashboard tab: "Account Reference"')))),(0,o.kt)("p",null,"We will take this opportunity to deliver raw indexes on traces, deep indexes on account references and a dashboard on Account References hosted at ",(0,o.kt)("a",{parentName:"p",href:"https://analytics.polkaholic.io"},"https://analytics.polkaholic.io"),"."),(0,o.kt)("p",null,"Indexing + Dashboard Publication must be able to support deep analysis of ",(0,o.kt)("strong",{parentName:"p"},"Account References"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Which transactions/accounts were responsible for the reserved balance in an account?"),(0,o.kt)("li",{parentName:"ul"},"What modules currently depend on consumers, providers, and sufficients reference counters for a certain account, and which transactions introduced/removed those references?"),(0,o.kt)("li",{parentName:"ul"},"What are the pallets responsible for reserves/holds and locks/freezes on an account?")),(0,o.kt)("h3",{id:"milestone-2--three-tier-deep-account-analysis-of-democracystakingnomination-pools"},"Milestone 2 \u2014 Three Tier Deep Account Analysis of Democracy+Staking+Nomination Pools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Estimated duration:")," 8 weeks (ending 10/31/23)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FTE:"),"  150 FTE hours ","[100 USD/hr]"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Costs:")," 15,000 USD")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,o.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,o.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,o.kt)("td",{parentName:"tr",align:null},"License"),(0,o.kt)("td",{parentName:"tr",align:null},"GNUv3 - polkaholic + substrate-etl repo")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,o.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,o.kt)("td",{parentName:"tr",align:null},"Document substrate-etl README on 1+2+3")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,o.kt)("td",{parentName:"tr",align:null},"Manual Testing Guide"),(0,o.kt)("td",{parentName:"tr",align:null},"Manual testing guide with steps for using the application, with examples including expected inputs and outputs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"1."),(0,o.kt)("td",{parentName:"tr",align:null},"Raw Indexing"),(0,o.kt)("td",{parentName:"tr",align:null},"BigQuery Index substrate-etl.crypto_polkadot.traces0 9/1/2023-10/31/23 -- stashing accounts")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"2."),(0,o.kt)("td",{parentName:"tr",align:null},"Deep Indexing"),(0,o.kt)("td",{parentName:"tr",align:null},"BigQuery substrate-etl:substrate.democracy",(0,o.kt)("em",{parentName:"td"},"* substrate-etl:substrate.staking"),(0,o.kt)("em",{parentName:"td"}," substrate-etl:substrate.nomination",(0,o.kt)("em",{parentName:"em"},"pools")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"3."),(0,o.kt)("td",{parentName:"tr",align:null},"Dashboard Publication"),(0,o.kt)("td",{parentName:"tr",align:null},'Superset dashboard tabs: "Democracy", "Staking", "Nomination Pools"')))),(0,o.kt)("p",null,"We will take this opportunity to address the complexity of stashing accounts by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deep Indexing.  Using the above tables in the views referencing  ",(0,o.kt)("inlineCode",{parentName:"li"},"storage_staking_*, storage_nominationpools_*")," tables"),(0,o.kt)("li",{parentName:"ul"},"Dashboard Publication.  Using the above, we can develop dashboards for Democracy+Staking+Nomination Pools")),(0,o.kt)("p",null,"Indexing + Dashboard Publication must be able to support deep analysis of Democracy and Staking/Nomination Pools pallets:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Democracy: Which accounts have delegated OpenGov votes to an account or to which accounts the account in question has delegated their votes to for each track?"),(0,o.kt)("li",{parentName:"ul"},"Staking/Nomination Pools: Who are all the nominators that nominated Validator X? (an inverse mapping basically of staking.nominators from validator -> nominators)  Who are the top 10 nominators with the highest APR, and which validators do they have in common?")),(0,o.kt)("h2",{id:"future-plans"},"Future Plans"),(0,o.kt)("p",null,"Broadly, this proposal sets up a path for the Web3 Foundation to have Polkadot Data Alliance contributors deliver results for the Web3 Foundation itself and the community in the following ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"within the three-tier architecture, Polkadot Data Alliance contibutors can collaborate with Web3 Foundation and others in the Substrate community using raw indexes, published deep indexes, or building and extending dashboards.  Our technical choice for collaboration is BigQuery and Apache Superset but other choices may be equally viable or appropriate, by other teams.  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"with the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1fA5ARHy-frzgZC66rniKZ5o7CSbDvCTkS--kWaMzuMs/edit#"},"Polkadot Data Alliance Bounty")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program#hammer_and_wrench-maintenance-grants"},"Web3 Foundation Maintance Grants"),", there is a clear path to support both software maintainence ",(0,o.kt)("em",{parentName:"p"},"and")," hosting / data indexing infrastructure "))),(0,o.kt)("p",null,"In followup work, we would expect to address the 3 tiers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"raw indexing: cover traces on a regular basis defined in child bounties"),(0,o.kt)("li",{parentName:"ul"},"deep indexing: support the dataset deliverables on a regular basis "),(0,o.kt)("li",{parentName:"ul"},"dashboards: maintain published dashboards developed, and host the Apache Superset")),(0,o.kt)("p",null,"We would welcome the challenge of doing followon high impact work, but hope that others in the Polkadot Data Alliance can follow this model as well."),(0,o.kt)("p",null,"We propose a child bounty to host Apache Superset instance at ",(0,o.kt)("a",{parentName:"p",href:"https://analytics.polkadot.network"},"https://analytics.polkadot.network")," or transfer this responsibility to a parent bounty curator."),(0,o.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,o.kt)("p",null,"We request suitable Web3 Foundation members be identified as parent\nand child bounty curator candidates, and that the charter for the\nPolkadot Data Alliance be developed in a collaboration with Parity.\nThe Polkadot Data Alliance charter is ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1fA5ARHy-frzgZC66rniKZ5o7CSbDvCTkS--kWaMzuMs/edit#"},"here"),"."),(0,o.kt)("p",null,"We do not believe our participation (or anyone else's participation)\nin a Polkadot Data Alliance in providing deliverables at any of the\nthree tiers eliminates the possibility of doing further data\nprocessing for other sources of additional revenue.  Our goal is to be\nself-sufficient and not dependent on W3F Grants or Treasury funding,\nbut we hope our value and commitment to sharing and collaboration is\nrecognized by the community so we can be productive high impact\ncontributors."))}u.isMDXComponent=!0}}]);