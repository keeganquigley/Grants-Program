"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[40734],{59087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=n(74848),i=n(28453);const s={},a="Alternative Polkadot Host Implementation",r={id:"docs/RFPs/alternative_polkadot_host_implementations",title:"Alternative Polkadot Host Implementation",description:"This Request for Proposals is currently considered under development, meaning one or more grants have been signed to address the topic. We might be interested in additional implementations, but it\u2019s better to double check this with the grants team.",source:"@site/docs/RFPs/alternative_polkadot_host_implementations.md",sourceDirName:"docs/RFPs",slug:"/docs/RFPs/alternative_polkadot_host_implementations",permalink:"/docs/RFPs/alternative_polkadot_host_implementations",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/alternative_polkadot_host_implementations.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Alternative javascript console for Polkadot JS API",permalink:"/docs/RFPs/alternative-polkadot-js-api-console"},next:{title:"Analytics Website/Data Platform",permalink:"/docs/RFPs/analysis-website-and-data-platform"}},l={},d=[{value:"Project Description \ud83d\udcc4",id:"project-description-page_facing_up",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-nut_and_bolt",level:2}];function h(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"alternative-polkadot-host-implementation",children:"Alternative Polkadot Host Implementation"}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:["This Request for Proposals is currently considered ",(0,o.jsx)(t.strong,{children:"under development"}),", meaning one or more grants have been signed to address the topic. We might be interested in additional implementations, but it\u2019s better to double check this with the grants team."]})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Status:"})," Under Development"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Proposer:"})," ",(0,o.jsx)(t.a,{href:"https://github.com/Noc2",children:"Noc2"})]}),"\n"]}),"\n",(0,o.jsxs)(t.h2,{id:"project-description-page_facing_up",children:["Project Description ","\ud83d\udcc4"]}),"\n",(0,o.jsx)(t.p,{children:"The architecture of Polkadot can be divided into two different parts, the Polkadot runtime and the Polkadot host. The Polkadot runtime is the core state transition logic of the chain and can be upgraded over the course of time and without the need for a hard fork. In comparison, the Polkadot host is the environment in which the runtime executes and is expected to remain stable and mostly static over the lifetime of Polkadot."}),"\n",(0,o.jsxs)(t.p,{children:["The Polkadot host interacts with the Polkadot runtime in limited, and well-specified ways. For this reason, implementation teams can build an alternative implementation of the Polkadot host while treating the Polkadot runtime as a black box. For more details of the interactions between the host and the runtime, please ",(0,o.jsx)(t.a,{href:"https://github.com/w3f/polkadot-spec/",children:"see the specification"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsxs)(t.strong,{children:["The Web3 Foundation is interested in supporting additional implementations of the Polkadot Host. If you are interested in this RFP, please reach out to ",(0,o.jsx)(t.a,{href:"mailto:spec@web3.foundation",children:"spec@web3.foundation"}),"."]})}),"\n",(0,o.jsx)(t.p,{children:"Currently the following implementations are under development:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/ChainSafe/gossamer",children:"Gossamer: A Go implementation of the Polkadot Host"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/soramitsu/kagome",children:"Kagome - C++ implementation of Polkadot Host"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/paritytech/polkadot",children:"Polkadot Node Implementation in Rust"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/paritytech/smoldot",children:"Smoldot - A Lightweight Substrate and Polkadot client in Rust"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/Zondax/mayon",children:"Zondax: Mayon - C/C++ implementation of the Polkadot Host"})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Research has been completed for:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://github.com/LimeChain/java-host-research",children:"LimeChain - Java"}),"]"]}),"\n"]}),"\n",(0,o.jsxs)(t.h2,{id:"deliverables-nut_and_bolt",children:["Deliverables ","\ud83d\udd29"]}),"\n",(0,o.jsx)(t.p,{children:"For Polkadot Host Implementations, it\u2019s probably too complex to structure the entire implementation via milestones. Components of the Polkadot host are:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Networking components such as Libp2p that facilitates network interactions."}),"\n",(0,o.jsx)(t.li,{children:"State storage and the storage trie along with the database layer."}),"\n",(0,o.jsx)(t.li,{children:"Consensus engine for GRANDPA and BABE."}),"\n",(0,o.jsx)(t.li,{children:"Wasm interpreter and virtual machine."}),"\n",(0,o.jsx)(t.li,{children:"Low level primitives for a blockchain, such as cryptographic primitives like hash functions."}),"\n",(0,o.jsx)(t.li,{children:"Availability & Validity components to support parachains."}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var o=n(96540);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);