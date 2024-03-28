"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[59577],{10634:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=s(74848),r=s(28453);const i={},l="Front-End for Staking Rewards Collector",o={id:"docs/RFPs/staking-rewards-collector-front-end",title:"Front-End for Staking Rewards Collector",description:"This Request for Proposals is closed, meaning we are not looking for any more proposals on this topic at the moment.",source:"@site/docs/RFPs/staking-rewards-collector-front-end.md",sourceDirName:"docs/RFPs",slug:"/docs/RFPs/staking-rewards-collector-front-end",permalink:"/docs/RFPs/staking-rewards-collector-front-end",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/staking-rewards-collector-front-end.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Social Recovery Wallet",permalink:"/docs/RFPs/social-recovery-wallet"},next:{title:"Sub-consensus mechanism",permalink:"/docs/RFPs/sub-consensus"}},d={},c=[{value:"Project Description \ud83d\udcc4",id:"project-description-page_facing_up",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-nut_and_bolt",level:2},{value:"Milestone 1 (Implementation)",id:"milestone-1-implementation",level:3},{value:"Milestone 2 (Testing)",id:"milestone-2-testing",level:3}];function a(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"front-end-for-staking-rewards-collector",children:"Front-End for Staking Rewards Collector"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.p,{children:["This Request for Proposals is ",(0,t.jsx)(n.em,{children:"closed"}),", meaning we are not looking for any more proposals on this topic at the moment."]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Status:"})," Implemented: ",(0,t.jsx)(n.a,{href:"https://github.com/w3f/Open-Grants-Program/blob/master/applications/cryptolab-staking-reward-collector-front-end.md",children:"Repo 1, finished"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/w3f/Open-Grants-Program/blob/master/applications/staking-rewards-collector-front-end.md",children:"Repo 2, in progress"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Proposer:"})," JonasW3F"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Your Project(s):"})," -"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Projects you think this work could be useful for"})," Staking operations of all nominators and validators."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Teams/People that could deliver the RFP"})," -"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"project-description-page_facing_up",children:["Project Description ","\ud83d\udcc4"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/w3f/staking-rewards-collector",children:"staking-rewards-collector"})," is a tool to gather staking rewards for given addresses and cross-reference those with daily price data. This is a very useful tool for every validator and nominator in the ecosystem. However, since it has currently a CLI and requires some technical knowledge to set up (git, nodejs, yarn). A front-end hosted on a website could help many users getting access to this tool and enjoy the benefits."]}),"\n",(0,t.jsx)(n.p,{children:"The backend is already written in javascript, this should make it quite easy to host as a website and develop a front-end."}),"\n",(0,t.jsxs)(n.h2,{id:"deliverables-nut_and_bolt",children:["Deliverables ","\ud83d\udd29"]}),"\n",(0,t.jsx)(n.p,{children:"In order to apply for the project, we will require you to propose the design in the form of mock-ups."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Implementation of a user interface"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Query input parameters (from the users)"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Addresses (multiple ones are supported by the code)."}),"\n",(0,t.jsx)(n.li,{children:"Start and end date"}),"\n",(0,t.jsx)(n.li,{children:"Does the user want price data linked to staking rewards?"}),"\n",(0,t.jsx)(n.li,{children:"What are the startBalances of each address?"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Data output viewer"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The code produces a .csv and .json file which should be displayed in the browser."}),"\n",(0,t.jsx)(n.li,{children:"Visualization for the varying number of input addresses."}),"\n",(0,t.jsx)(n.li,{children:"Some sorting based on network / amount."}),"\n",(0,t.jsx)(n.li,{children:"Search for specific entries like dates."}),"\n",(0,t.jsx)(n.li,{children:"Option to download to local storage."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Help page / buttons:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Both the input query and output viewer should have several help buttons to give explanations for all users."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Compatibility"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"It should be easy to extend the underlying script and the UI should be flexible enough to incorporate that (e.g., adding another column in the data output)."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Hosting"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Centralized and preferably decentralized (IPFS)."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Testing"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Test if the code behaves as expected."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Total Estimated Duration:"})," 3 Weeks"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Full-time equivalent (FTE):"}),"  15 days"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Total Costs:"})," 4000 USD (provisional)"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"milestone-1-implementation",children:"Milestone 1 (Implementation)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Estimated Duration:"})," 9 days"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"FTE:"}),"  9"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Costs:"})," 3500 USD"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Number"}),(0,t.jsx)(n.th,{children:"Deliverable"}),(0,t.jsx)(n.th,{children:"Specification"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1."}),(0,t.jsx)(n.td,{children:"UI for user input"}),(0,t.jsx)(n.td,{children:"Develop an UI to request necessary data from the users."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2."}),(0,t.jsx)(n.td,{children:"UI for data visualizer"}),(0,t.jsx)(n.td,{children:"Develop an environment to display the output (.csv and .json) for the end user in a pleasurable way."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3."}),(0,t.jsx)(n.td,{children:"Help pages / comments"}),(0,t.jsx)(n.td,{children:"Implement help texts and descriptions for users."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4."}),(0,t.jsx)(n.td,{children:"Internal testing"}),(0,t.jsx)(n.td,{children:"Unit tests covering the functionality and logic"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"milestone-2-testing",children:"Milestone 2 (Testing)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Estimated Duration:"})," 3 days"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"FTE:"}),"  3 days"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Costs:"})," 500 USD"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Number"}),(0,t.jsx)(n.th,{children:"Deliverable"}),(0,t.jsx)(n.th,{children:"Specification"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1."}),(0,t.jsx)(n.td,{children:"Deployment"}),(0,t.jsx)(n.td,{children:"Deploy the code on a centralized server and IPFS."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2."}),(0,t.jsx)(n.td,{children:"Test live environment"}),(0,t.jsx)(n.td,{children:"Test the homepage with various different OS and browsers and provide a report"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3."}),(0,t.jsx)(n.td,{children:"Polishing"}),(0,t.jsx)(n.td,{children:"Reach out for feedback to the Grants Team. Integrate final feedback on functional, as well as cosmetic changes like font size, colors, typos etc."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var t=s(96540);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);