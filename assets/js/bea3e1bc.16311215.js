"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[5091],{92334:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var n=s(74848),r=s(28453);const i={},l="PHP RPC Lib Follow up",c={id:"applications/php-rpc-lib-follow-up",title:"PHP RPC Lib Follow up",description:"Team Name:* gmajor",source:"@site/applications/php-rpc-lib-follow-up.md",sourceDirName:"applications",slug:"/applications/php-rpc-lib-follow-up",permalink:"/applications/php-rpc-lib-follow-up",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/php-rpc-lib-follow-up.md",tags:[],version:"current",frontMatter:{}},a={},o=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Future Plans",id:"future-plans",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"php-rpc-lib-follow-up",children:"PHP RPC Lib Follow up"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Team Name:"})," ",(0,n.jsx)(t.a,{href:"https://github.com/gmajor-encrypt",children:"gmajor"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Payment Address:"})," 0xC3094f0ddce699a1Ad9Ef2621DF68Cd297a4c44F (Dai)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 1"]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,n.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["As Gavin mentioned in this ",(0,n.jsx)(t.a,{href:"https://www.coindesk.com/tech/2021/05/25/polkadots-gavin-wood-webassembly-is-the-future-of-smart-contracts-but-legacy-evm-is-right-now/",children:"CoinDesk article"}),", WebAssembly is the future of smart contracts."]}),"\n",(0,n.jsx)(t.p,{children:"However, WebAssembly, as the main Smart Contract in the substrate ecosystem, lacks the necessary infrastructure. Except for the lib of contracts provided by polkadot.js, there are no more third parties that can query the contract storage and interact with the package."}),"\n",(0,n.jsxs)(t.p,{children:["PHP is one of ",(0,n.jsx)(t.a,{href:"https://www.stackscale.com/blog/most-popular-programming-languages/",children:"the most popular development languages in the world"}),", PHP is used by 77.8% of all the websites whose server-side programming language(",(0,n.jsx)(t.a,{href:"https://w3techs.com/technologies/details/pl-php",children:"https://w3techs.com/technologies/details/pl-php"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["Traditional PHP Website developers will lack the necessary SDK if they come into contact with the substrate,\nHowever, the lack of support for contracts in the current ",(0,n.jsx)(t.a,{href:"https://github.com/gmajor-encrypt/php-substrate-api",children:"php-substrate-api"})," makes it very difficult to use PHP as a development language to interact with the substrate."]}),"\n",(0,n.jsxs)(t.p,{children:["Therefore, this proposal is an extension of ",(0,n.jsx)(t.a,{href:"https://github.com/gmajor-encrypt/php-substrate-api",children:"php-substrate-api"})," to improve the practicability of this package further and increase support for smart contracts."]}),"\n",(0,n.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Abi encode & decode, support contract metadata ",(0,n.jsx)(t.strong,{children:"v0,v1,v2,v3,v4"}),", this will be used to read and write smart contracts"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Deploy wasm smart contract"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:'$api = new SubstrateRpc("websocket_or_http_url");\n$api->rpc->contracts->new("wasm_code", "gas limit","value");\n'})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Read contract values"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:'$api = new SubstrateRpc("websocket_or_http_url");\n$api->rpc->contracts->balanceOf("from","contract");\n'})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Send Contract transaction"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:'$api = new SubstrateRpc("websocket_or_http_url");\n$signer = new SubstrateRpc\\Util\\Keyring\\Signer("privatekey");// or HD\n$api->setSigner($signer);\n$tx = $api->tx->contracts->transfer("to_address", 10000);\n$tx->signAndSend();\n'})}),"\n",(0,n.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,n.jsx)(t.p,{children:"CIt can help PHP language developers easily access the substrate (polkadot) ecology"}),"\n",(0,n.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,n.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"gmajor"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Contact Name:"})," gmajor"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Contact Email:"})," ",(0,n.jsx)(t.a,{href:"mailto:gmajorencrypt@gmail.com",children:"gmajorencrypt@gmail.com"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Website:"})," ",(0,n.jsx)(t.a,{href:"https://github.com/gmajor-encrypt",children:"https://github.com/gmajor-encrypt"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,n.jsx)(t.p,{children:"individual"}),"\n",(0,n.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,n.jsx)(t.p,{children:"I have many years of php development experience and nearly five years of blockchain development experience, familiar\nwith PHP, GOLANG, PYTHON, Nodejs, Rust"}),"\n",(0,n.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/gmajor-encrypt/php-scale-codec",children:"https://github.com/gmajor-encrypt/php-scale-codec"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/gmajor-encrypt/php-substrate-api",children:"https://github.com/gmajor-encrypt/php-substrate-api"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/gmajor-encrypt/sr25519-bindings",children:"https://github.com/gmajor-encrypt/sr25519-bindings"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/gmajor-encrypt/scale-codec-comparator",children:"https://github.com/gmajor-encrypt/scale-codec-comparator"})}),"\n",(0,n.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,n.jsx)(t.p,{children:"Not yet"}),"\n",(0,n.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,n.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Total Estimated Duration:"})," 1.5 months"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Total Costs:"})," 10000 DAI"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"milestone-1",children:"Milestone 1"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated duration:"})," 1.5 month"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FTE:"}),"  1"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Costs:"})," 10000 DAI"]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"MIT"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsx)(t.td,{children:"Documentation on how to use this lib and how to test"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,n.jsx)(t.td,{children:"ABI"}),(0,n.jsxs)(t.td,{children:["Abi encode & decode, contract ",(0,n.jsx)(t.a,{href:"https://use.ink/metadata/",children:"metadata"})," v0,v1,v2,v3,v4 will be supported"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,n.jsx)(t.td,{children:"Deploy"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"https://github.com/gmajor-encrypt/php-substrate-api",children:"php-substrate-api"})," implement new method of deploy wasm smart contract"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,n.jsx)(t.td,{children:"Read contract"}),(0,n.jsxs)(t.td,{children:["Implement method read contract values and decode as human readable, similar to ",(0,n.jsx)(t.a,{href:"https://polkadot.js.org/docs/api-contract/start/contract.read",children:"api-contract-read"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,n.jsx)(t.td,{children:"Write contract"}),(0,n.jsxs)(t.td,{children:["Implement method send Contract transaction, similar to ",(0,n.jsx)(t.a,{href:"https://polkadot.js.org/docs/api-contract/start/contract.tx",children:"api-contract-tx"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"5."}),(0,n.jsx)(t.td,{children:"Test"}),(0,n.jsx)(t.td,{children:"Including all the unit tests mentioned above"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"6."}),(0,n.jsx)(t.td,{children:"Example"}),(0,n.jsx)(t.td,{children:"Provide some simple examples of using this lib"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"7."}),(0,n.jsx)(t.td,{children:"Packagist"}),(0,n.jsxs)(t.td,{children:["Submit to ",(0,n.jsx)(t.a,{href:"https://packagist.org/",children:"Packagist"})," for composer to use"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"8."}),(0,n.jsx)(t.td,{children:"Github action"}),(0,n.jsx)(t.td,{children:"Auto Test when new commit"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,n.jsx)(t.p,{children:"This milestone still lacks support for smart contract verification, there is no better solution at present, and will be supported after research"})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>c});var n=s(96540);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);