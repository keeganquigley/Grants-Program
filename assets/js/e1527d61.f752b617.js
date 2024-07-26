"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[72526],{20614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var i=n(74848),s=n(28453);const l={},r="JuniDB",a={id:"applications/JuniDB",title:"JuniDB",description:"Team Name:* Uddug",source:"@site/applications/JuniDB.md",sourceDirName:"applications",slug:"/applications/JuniDB",permalink:"/applications/JuniDB",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/JuniDB.md",tags:[],version:"current",frontMatter:{}},d={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Key advantages",id:"key-advantages",level:4},{value:"Available  storage data types",id:"available--storage-data-types",level:4},{value:"Motivation",id:"motivation",level:4},{value:"Project Details",id:"project-details",level:3},{value:"Encryption module",id:"encryption-module",level:4},{value:"Technical stack",id:"technical-stack",level:4},{value:"Public Methods",id:"public-methods",level:4},{value:"Storage",id:"storage",level:4},{value:"Scheme 1. Palett structure",id:"scheme-1-palett-structure",level:4},{value:"Data uploading",id:"data-uploading",level:5},{value:"Data retrieving",id:"data-retrieving",level:5},{value:"Scheme 2. Interaction with Substrate",id:"scheme-2-interaction-with-substrate",level:4},{value:"Infrastructure",id:"infrastructure",level:4},{value:"Ci/Cd",id:"cicd",level:4},{value:"Frontend",id:"frontend",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Commits",id:"commits",level:3},{value:"Related domain",id:"related-domain",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Milestone 2",id:"milestone-2",level:3},{value:"Milestone 3",id:"milestone-3",level:3},{value:"Milestone 4",id:"milestone-4",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"junidb",children:"JuniDB"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Team Name:"})," Uddug"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Payment Address:"})," 0xc45eAd98E95D1962133d9c15847e2EA4E16dfD0b"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Status:"})," ",(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grant-Milestone-Delivery/pull/254#issuecomment-1404647441",children:"Terminated"})]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,i.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"It's a very highload action to store large amounts of data on-chain. The most-common and useful solution for decentralised apps is to use IPFS as a data storage and store on-chain only hashes. Our team inspired by the OrbitDB will focus on the scalability, decentralised, easy-learning solution for substrat developers that want to manipulate big amounts of data easily."}),"\n",(0,i.jsx)(t.h4,{id:"key-advantages",children:"Key advantages"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Usability"})," - just integrate and code"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Security"})," - built-in encryption"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Scaling"})," - ready for changes and big data"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"available--storage-data-types",children:"Available  storage data types"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Key-value"})," - simple key-value storage"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Hash"})," - hash storage like Redis hash"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"motivation",children:"Motivation"}),"\n",(0,i.jsx)(t.p,{children:"Working a lot with blockchain technologies, our team found that it\u2019s data-driven, and thus there are rapidly growing interests in integrating them for more secure and efficient data storage and sharing.We are convinced that blockchain technologies change the world, and have been working hard to create more transparent solutions. We designed and built core infrastructure for decentralised projects."}),"\n",(0,i.jsx)(t.p,{children:"We have been observing and learning Substrate technologies and find Polkadot as the best ecosystem for us to join depending on technology and strong market position. We believe that our protocol will be useful for other projects in the Polkadot ecosystem."}),"\n",(0,i.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsx)(t.p,{children:"Substrate pallet provides a configurable database module allows to store and  manipulate a big amount of data. Pallet works as an offchain worker and connect data between blockchain and ipfs via offchain::worker."}),"\n",(0,i.jsx)(t.h4,{id:"encryption-module",children:"Encryption module"}),"\n",(0,i.jsx)(t.p,{children:"Built-in encryption module allows to create a secure database and encrypt all data before its uploading to the database with user account keys. With enabled encryption only account users have access to the database. Data could be decrypted via Web-application after receiving. Module is based on asymmetrical cryptography and uses an account public key to encrypt data on the blockchain side and a private key to decrypt data on the client side."}),"\n",(0,i.jsxs)(t.p,{children:["We plan to make it based on ed25519 crypto scheme and use ",(0,i.jsx)(t.a,{href:"https://github.com/phayes/ecies-ed25519",children:"ecies-ed2551"})," crate to implement encryptions on backend side."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.postimg.cc/gJds3kj9/encryption.png",alt:"scheme A"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"receive data by RPC request"}),"\n",(0,i.jsx)(t.li,{children:"Encrypt data by account public key"}),"\n",(0,i.jsx)(t.li,{children:"Insert encrypted data into ipfs via offfchain::ipfs"}),"\n",(0,i.jsx)(t.li,{children:"Insert received ipfs hash into storage"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.postimg.cc/Y9h66G7s/decryption.png",alt:"scheme B"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"catch request to get data by RPC request"}),"\n",(0,i.jsx)(t.li,{children:"get ipfs hash from storage"}),"\n",(0,i.jsx)(t.li,{children:"fetch encrypted data from ipfs via offchain::ipfs"}),"\n",(0,i.jsx)(t.li,{children:"receive encrypted data in RPC response"}),"\n",(0,i.jsx)(t.li,{children:"decrypt data using user account private key via app ddecryption module"}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"technical-stack",children:"Technical stack"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Rust"})," - main language"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Substrate"})," - blockchain framework"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Substrate-front-end-template"})," - web-app template"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Offchain::ipfs"})," - substrate-ipfs bridge"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"IPFS"})," - data storage"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"ecies-ed25519"})," - encryption crate"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"public-methods",children:"Public Methods"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"KeyValueInit(name)"})," - initialise new keyValue database"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"KeyValueSet(key, value)"})," - set given value in keyValue database"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"KeyValueGet(key)"})," - get value for given key"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"KeyValueDel(key)"})," - delete value from keyValue database"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"KeyValueAll()"})," - fetch all values from keyValue database"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"HashInint(name)"})," -  initialise Hash database"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"HashCreate(hashName)"})," - create new empty cash"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"HashSetField(hash, field, value)"})," - set hash field with given value"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"HashGetField(hash, field)"})," - get hash field"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"HashDelFied(hash, field)"})," - delete field from hash"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"HashAll(hash)"})," - get all hash fields"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"storage",children:"Storage"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Data Map"})," - mapping ipfs hashes and data keys"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Key-value"})," - database meta info"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"scheme-1-palett-structure",children:"Scheme 1. Palett structure"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.postimg.cc/Hn1nkxGD/pallet.png",alt:"scheme C"})}),"\n",(0,i.jsx)(t.h5,{id:"data-uploading",children:"Data uploading"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Rpc/wss request to pallet to insert data"}),"\n",(0,i.jsx)(t.li,{children:"Validating data based on database schema"}),"\n",(0,i.jsx)(t.li,{children:"Formatting data"}),"\n",(0,i.jsx)(t.li,{children:"Encrypted (if needed)"}),"\n",(0,i.jsx)(t.li,{children:"Store to ipfs via offchain::ipfs"}),"\n",(0,i.jsx)(t.li,{children:"Retrieving ipfs hash with data"}),"\n",(0,i.jsx)(t.li,{children:"Store ipfs hash into pallet storage"}),"\n"]}),"\n",(0,i.jsx)(t.h5,{id:"data-retrieving",children:"Data retrieving"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"RPC/wsss request to pallet to fetch get data"}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Validating data query"}),"\n",(0,i.jsx)(t.li,{children:"Get ipfs hash from storage"}),"\n",(0,i.jsx)(t.li,{children:"Fetch data from ipfs via offchain::ipfs"}),"\n",(0,i.jsx)(t.li,{children:"Return data object in response"}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"scheme-2-interaction-with-substrate",children:"Scheme 2. Interaction with Substrate"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.postimg.cc/1zzJvmjQ/scheme.png",alt:"scheme D"})}),"\n",(0,i.jsx)(t.h4,{id:"infrastructure",children:"Infrastructure"}),"\n",(0,i.jsx)(t.p,{children:"Testing substrate nodes with offchain::orbitDB pallet orchestrated by kubernetes cluster deployed on GCP."}),"\n",(0,i.jsx)(t.h4,{id:"cicd",children:"Ci/Cd"}),"\n",(0,i.jsx)(t.p,{children:"Ci/Cs organized by github actions"}),"\n",(0,i.jsx)(t.h4,{id:"frontend",children:"Frontend"}),"\n",(0,i.jsx)(t.p,{children:"Simple SPA web application powered by react and polkadot.js. Using for testing purposes."}),"\n",(0,i.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,i.jsx)(t.p,{children:"Pallet is suitable for substrate developers and strives to become a complex solution for data storage and manipulation."}),"\n",(0,i.jsx)(t.p,{children:"We expect that the project will be useful for the Web3 community."}),"\n",(0,i.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Tech lead, backend:"})," Andrew Skurlatov"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/andrew-skurlatov/",children:"https://www.linkedin.com/in/andrew-skurlatov/"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Head of product:"})," Mike Manko"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/mikhail-manko-97a491a2/",children:"https://www.linkedin.com/in/mikhail-manko-97a491a2/"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Product design:"})," Anuar Zhumaev"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/yxorama/",children:"https://www.linkedin.com/in/yxorama/"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"DevOps:"})," Ivan Podcebnev"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/naykip/",children:"https://www.linkedin.com/in/naykip/"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Data Science:"})," Constantine Czerniak"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/%D1%81czerniak/",children:"https://www.linkedin.com/in/%D1%81czerniak/"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Frontend:"})," Nikita Velko"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/nikichv/",children:"https://www.linkedin.com/in/nikichv/"})}),"\n",(0,i.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Contact Name:"})," Mikhail Manko"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Contact Email:"})," ",(0,i.jsx)(t.a,{href:"mailto:ms@uddug.com",children:"ms@uddug.com"})]}),"\n",(0,i.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Registered Address:"})," PO301650, RUSSIA,  UL. OVRAZHNAYA, D. 35, S. TETYAKOVKA, NOVOMOSKOVSKIJ R-N, OBL. TUL'SKAYA."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Registered Legal Entity:"})," PE SKURLATOV ANDREY ALEKSEEVICH"]}),"\n",(0,i.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,i.jsx)(t.p,{children:"Core of our team is of united, like-minded professionals with solid experience. We are constantly evolving our capabilities to help software technology companies to do more with less: develop software solutions faster and ensure high quality within time constraints, with fewer resources, and lower costs. We combine proven methodologies, business domain knowledge and technology expertise of skilled software professionals to deliver highly optimized solutions and services across a wide range of industry domains."}),"\n",(0,i.jsx)(t.p,{children:"Team range of experience begins from developing small scaled websites up to complex blockchain architectures. Our projects are diverse, but all of them share the need to have a software solution for humans."}),"\n",(0,i.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"http://github.com/andskur/",children:"http://github.com/andskur/"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"http://github.com/uddugteam/",children:"http://github.com/uddugteam/"})}),"\n",(0,i.jsx)(t.h3,{id:"commits",children:"Commits"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/uddugteam/thc-node/commits/master",children:"https://github.com/uddugteam/thc-node/commits/master"})}),"\n",(0,i.jsx)(t.h3,{id:"related-domain",children:"Related domain"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://thc.uddug.com/",children:"https://thc.uddug.com/"})}),"\n",(0,i.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,i.jsxs)(t.p,{children:["We have already developed the pre-alfa pallet for ",(0,i.jsx)(t.strong,{children:"Trusted Health Council"})," ",(0,i.jsx)(t.a,{href:"https://github.com/uddugteam/thc-node",children:"(https://github.com/uddugteam/thc-node)"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Link to initial pull request (",(0,i.jsx)(t.a,{href:"https://github.com/uddugteam/General-Grants-Program/blob/master/grants/speculative/trusted_health_consul.md",children:"https://github.com/uddugteam/General-Grants-Program/blob/master/grants/speculative/trusted_health_consul.md"}),")."]}),"\n",(0,i.jsxs)(t.p,{children:["Link to 2nd pull request\n(",(0,i.jsx)(t.a,{href:"https://github.com/uddugteam/Open-Grants-Program/blob/master/applications/ML-as-a-service.md",children:"https://github.com/uddugteam/Open-Grants-Program/blob/master/applications/ML-as-a-service.md"}),")."]}),"\n",(0,i.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Estimated Duration:"})," 4 months"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  2.5 FTE"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Costs:"})," 28 000 USD"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-1",children:"Milestone 1"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  2.5"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 7 000 USD"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"License: GNU GPL v3"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsx)(t.td,{children:"Documentation of the code and a basic tutorial describing how the software can be used and tested."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,i.jsx)(t.td,{children:"Testing Guide"}),(0,i.jsx)(t.td,{children:"Complex quality assurance for all platform features. Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,i.jsx)(t.td,{children:"Article"}),(0,i.jsx)(t.td,{children:"We will publish an article that explains the functionality of the proposed pallet in this milestone."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(t.td,{children:"Substrate ML pallet"}),(0,i.jsx)(t.td,{children:"Basic database layout implementation with key-value data storage"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(t.td,{children:"Web application"}),(0,i.jsx)(t.td,{children:"Interacting with blockchain + form with fields to manipulate with data. Based on the substrate-front-end-template"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,i.jsx)(t.td,{children:"Docker image"}),(0,i.jsx)(t.td,{children:"We will provide a dockerfile to demonstrate the full functionality of testing Substrate chain with integrated Database pallet."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-2",children:"Milestone 2"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  2.5"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 7 000 USD"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"License: GNU GPL v3"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsx)(t.td,{children:"Documentation of the code and a basic tutorial describing how the software can be used and tested."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,i.jsx)(t.td,{children:"Testing Guide"}),(0,i.jsx)(t.td,{children:"Complex quality assurance for all platform features. Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,i.jsx)(t.td,{children:"Article"}),(0,i.jsx)(t.td,{children:"We will publish an article that explains the functionality of the proposed pallet in this milestone."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsxs)(t.td,{children:["Update ",(0,i.jsx)(t.a,{href:"https://github.com/rs-ipfs/substrate",children:"offchain::ipfs"})]}),(0,i.jsx)(t.td,{children:"We will coordinate with equilibrium.co to update offchain::ipfs to the latest Substrate version via PR to the existing repository"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(t.td,{children:"Docker image"}),(0,i.jsx)(t.td,{children:"We will provide a dockerfile to demonstrate the full functionality of testing Substrate chain with integrated Database pallet."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-3",children:"Milestone 3"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  2.5"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 7 000 USD"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"License: GNU GPL v3"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsx)(t.td,{children:"Documentation of the code and a basic tutorial describing how the software can be used and tested."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,i.jsx)(t.td,{children:"Testing Guide"}),(0,i.jsx)(t.td,{children:"Complex quality assurance for all platform features. Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,i.jsx)(t.td,{children:"Article"}),(0,i.jsx)(t.td,{children:"We will publish an article that explains the functionality of the proposed pallet in this milestone."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(t.td,{children:"Substrate pallet"}),(0,i.jsx)(t.td,{children:"Implement an encryption module to allow encrypt and decrypt needed data out of the box."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(t.td,{children:"Web application"}),(0,i.jsx)(t.td,{children:"Update web application to interact with the encryption system."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,i.jsx)(t.td,{children:"Docker image"}),(0,i.jsx)(t.td,{children:"We will provide a dockerfile to demonstrate the full functionality of testing Substrate chain with integrated Database pallet."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-4",children:"Milestone 4"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  2.5"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 7 000 USD"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"License: GNU GPL v3"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsx)(t.td,{children:"Documentation of the code and a basic tutorial describing how the software can be used and tested."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,i.jsx)(t.td,{children:"Testing Guide"}),(0,i.jsx)(t.td,{children:"Complex quality assurance for all platform features. Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,i.jsx)(t.td,{children:"Article"}),(0,i.jsx)(t.td,{children:"We will publish an article that explains the functionality of the proposed pallet in this milestone."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(t.td,{children:"Substrate pallet"}),(0,i.jsx)(t.td,{children:"Add hash data storage to the pallet. Update rpc module to interact with new data storage. Database optimizations."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(t.td,{children:"Web application"}),(0,i.jsx)(t.td,{children:"Update web application with new data storage rpc."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,i.jsx)(t.td,{children:"Docker image"}),(0,i.jsx)(t.td,{children:"We will provide a dockerfile to demonstrate the full functionality of testing Substrate chain with integrated Database pallet."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,i.jsx)(t.p,{children:"Further development (adding new data storages, indexing system, concurrency queries)"}),"\n",(0,i.jsx)(t.p,{children:"Community engagement"}),"\n",(0,i.jsx)(t.p,{children:'Also we want to realise this idea and integrate it as the core part of our project in the healthcare sphere \u201cTrusted Health Council\u201d.  We have reached agreements with medical institutes in the field of further development of the project concept such as belgium "University of Antwerp" and russian "Pirogov Medical University" on the further development of the project, in particular, providing access to their databases, as well as the creation of specialized departments on the basis of institutes for the innovative development of universities, promotion, participation in healthcare exhibitions and advisors.'}),"\n",(0,i.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,i.jsx)(t.p,{children:"The development of the prototype and initial research have been started with the personal funds. We have tried for a General Grant first, and decided to start with an Open grant Program relying on recommendation. Also we have applied for the Substrate Builders Programm and  have proceeded with a general interview to iterate around steps going forward. We have also opened a dialogue with Blockchers & IPFS."})]})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},l=i.createContext(s);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);