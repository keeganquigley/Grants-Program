"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[34174],{44994:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var s=t(74848),i=t(28453);const r={},l="Ink Contracts Wizard",a={id:"applications/ink-smart-contract-wizard",title:"Ink Contracts Wizard",description:"Team Name:* Ink Contracts Wizard Team",source:"@site/applications/ink-smart-contract-wizard.md",sourceDirName:"applications",slug:"/applications/ink-smart-contract-wizard",permalink:"/applications/ink-smart-contract-wizard",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/ink-smart-contract-wizard.md",tags:[],version:"current",frontMatter:{}},d={},o=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"CLI commands",id:"cli-commands",level:3},{value:"Motivation",id:"motivation",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"User Journey",id:"user-journey",level:3},{value:"Simillar platforms for solidity",id:"simillar-platforms-for-solidity",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Grant level",id:"grant-level",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt-1",level:2},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Milestone 2",id:"milestone-2",level:3},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2},{value:"Future plans",id:"future-plans",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"ink-contracts-wizard",children:"Ink Contracts Wizard"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Team Name:"})," Ink Contracts Wizard Team"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Payment Address:"})," Bitcoin Address: bc1qtr9993ch6zlr29j5c22zzax57h62x5gj24wtxk"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Level:"})," 1"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,s.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"Ink Contracts Wizard is an CLI based smart contract generation tool. It will scaffold Smart Contracts based on the options selected by the user. Once all the options are selected, user will have smart contract scaffolded in the machine."}),"\n",(0,s.jsx)(n.h3,{id:"cli-commands",children:"CLI commands"}),"\n",(0,s.jsx)(n.p,{children:"CLI will have following commands."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"ink-wiazrd --help"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Print outs all the available commands."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"ink-wizard new flipper"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Create boilerplate code for Flipper Smart Contract."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"ink-wizard new psp-22"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Create boilerplate code for PSP-22 standard smart contracts, it is as same as ERC-20 standard."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"ink-wizard new psp-34"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Create boilerplate code for PSP-34 standard smart contracts, it is as same as ERC-1155 standard."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"ink-wizard new psp-37"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Create boilerplate code for PSP-37 standard smart contracts, it is as same as ERC-721 standard."}),"\n",(0,s.jsx)(n.p,{children:"In an interactive way, CLI will ask user if they want to have mint, burn, Pausable, Capped, Ownable, etc. functionality."}),"\n",(0,s.jsx)(n.h3,{id:"motivation",children:"Motivation"}),"\n",(0,s.jsxs)(n.p,{children:["A lot of people use OpenZepplin's Smart Contract Wizard tool on daily basis since they are industry standard. We will be using OpenBrush smart contracts: ",(0,s.jsx)(n.a,{href:"https://github.com/Supercolony-net/openbrush-contracts",children:"https://github.com/Supercolony-net/openbrush-contracts"}),". The reason to use OpenBrush Library is to abstract away a lot of details like OpenZepplin Smart Contracts does otherwise Smart Contracts code will end up being too bloaty."]}),"\n",(0,s.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Where and how does your project fit into the ecosystem?\nAnyone who wants to quickly scaffold smart contract from the UI are our users."}),"\n",(0,s.jsx)(n.li,{children:"Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?\nAnyone who wants to create Smart Contracts on top of Ink are our target users."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"user-journey",children:"User Journey"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"User installs the CLI."}),"\n",(0,s.jsx)(n.li,{children:"User selects option in which she wants there smart contracts to have functionality."}),"\n",(0,s.jsx)(n.li,{children:"User will be able to generate the Smart Contract."}),"\n",(0,s.jsx)(n.li,{children:"Smart contracts will be scaffolded in the user's machine."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"simillar-platforms-for-solidity",children:"Simillar platforms for solidity"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/wizard",children:"https://docs.openzeppelin.com/contracts/4.x/wizard"})}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Aviraj Khare"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Contact Name:"})," Aviraj Khare"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Registered Legal Entity:"})," Not yet registered"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Aviraj Khare: Worked in Gojek, Dukaan in the past. Into Web3 space since 2016. Successfully completed Ink Boxes grant."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/avirajkhare00",children:"https://github.com/avirajkhare00"})}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsx)(n.h1,{id:"overview-1",children:"Overview"}),"\n",(0,s.jsx)(n.h2,{id:"grant-level",children:"Grant level"}),"\n",(0,s.jsx)(n.p,{children:"Level 1: Up to $10,000, 2 approvals"}),"\n",(0,s.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt-1",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Total Estimated Duration:"})," 4 weeks"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Total Costs:"})," 5,000 USD"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-1",children:"Milestone 1"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Estimated Duration:"})," 2 weeks"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 3,000 USD"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0a."}),(0,s.jsx)(n.td,{children:"Apache License 2.0"}),(0,s.jsx)(n.td,{children:"All code will be published under Apache 2.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0b."}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsx)(n.td,{children:"We will provide both inline documentation of the code."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0c."}),(0,s.jsx)(n.td,{children:"Testing and it's Guide"}),(0,s.jsx)(n.td,{children:"Core functions will be fully covered by comprehensive unit tests written in unittest in python which is a great test runner to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0d."}),(0,s.jsx)(n.td,{children:"Docker"}),(0,s.jsx)(n.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0."}),(0,s.jsx)(n.td,{children:"Conversion of OpenBrush smart contracts written in Ink to it's templates and sub-templates."}),(0,s.jsxs)(n.td,{children:["We will be using this code repo: ",(0,s.jsx)(n.a,{href:"https://github.com/Supercolony-net/openbrush-contracts",children:"https://github.com/Supercolony-net/openbrush-contracts"})," and will convert them into basic templates and it's sub templates. We will be converting PSP-22, PSP-34, PSP-37 contracts."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1."}),(0,s.jsx)(n.td,{children:"Creation of code generation logic for Ink smart contracts."}),(0,s.jsx)(n.td,{children:"We will be building our own code generator in Python. We will have templatized code and code convertor will output the rendered code with user's selected options."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-2",children:"Milestone 2"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Estimated Duration:"})," 2 weeks"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 2,000 USD"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0a."}),(0,s.jsx)(n.td,{children:"Apache License 2.0"}),(0,s.jsx)(n.td,{children:"All code will be published under Apache 2.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0b."}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsx)(n.td,{children:"We will provide both inline documentation of the code and a basic tutorial that explains how a user can run the CLI to generate the smart contracts."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0c."}),(0,s.jsx)(n.td,{children:"Testing and it's Guide"}),(0,s.jsx)(n.td,{children:"Core functions will be fully covered by comprehensive unit tests written using unittest package to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0d."}),(0,s.jsx)(n.td,{children:"Docker"}),(0,s.jsx)(n.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0e."}),(0,s.jsx)(n.td,{children:"Articles"}),(0,s.jsx)(n.td,{children:"We will publish an article on Medium on how to use this CLI tool."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0."}),(0,s.jsx)(n.td,{children:"Smart Contract Generator CLI"}),(0,s.jsx)(n.td,{children:"We will be building this CLI using Typer package using which we can create interactive CLI."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1."}),(0,s.jsx)(n.td,{children:"Push the Python package to PyPi"}),(0,s.jsx)(n.td,{children:"We will push this python package to PyPi so that users can install the package using pip3."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2."}),(0,s.jsx)(n.td,{children:"Creation of formula for CLI"}),(0,s.jsx)(n.td,{children:"We will be creating homebrew formula so that users can easily install this CLI tool. Since most of the substrate ecosystem users use Rust, having formula will remove dependency to install python."})]})]})]}),"\n",(0,s.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,s.jsx)(n.h3,{id:"future-plans",children:"Future plans"}),"\n",(0,s.jsx)(n.p,{children:"Once we are done with grants, we will be adding ink-boxes so that anyone can scaffold any ink-box using the same CLI."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var s=t(96540);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);