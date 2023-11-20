"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[61060],{23827:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=a(87462),n=(a(67294),a(3905));a(8209);const l={},r="Polkadot NFT Portfolio Tracker by Liisa - MVP",o={unversionedId:"applications/LiisaPortfolioTracker",id:"applications/LiisaPortfolioTracker",title:"Polkadot NFT Portfolio Tracker by Liisa - MVP",description:"- Team Name: Liisa",source:"@site/applications/LiisaPortfolioTracker.md",sourceDirName:"applications",slug:"/applications/LiisaPortfolioTracker",permalink:"/applications/LiisaPortfolioTracker",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/LiisaPortfolioTracker.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Architecture",id:"architecture",level:3},{value:"Technologies",id:"technologies",level:3},{value:"1) Node.js",id:"1-nodejs",level:4},{value:"2) Bubble.io",id:"2-bubbleio",level:4},{value:"3) React.js",id:"3-reactjs",level:4},{value:"Components",id:"components",level:3},{value:"1) Data Source (Subsquid)",id:"1-data-source-subsquid",level:4},{value:"2) Data Enrichment",id:"2-data-enrichment",level:4},{value:"3) Database",id:"3-database",level:4},{value:"4) Frontend",id:"4-frontend",level:4},{value:"5) Bubble.io plug-ins",id:"5-bubbleio-plug-ins",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Similar projects:",id:"similar-projects",level:4},{value:"What makes us different is:",id:"what-makes-us-different-is",level:4},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Bernardo",id:"bernardo",level:4},{value:"Paulo",id:"paulo",level:4},{value:"Kerim",id:"kerim",level:4},{value:"Guilherme",id:"guilherme",level:4},{value:"Alexandre",id:"alexandre",level:4},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview",level:3},{value:"Milestone 1 \u2014 On-chain data collection, indexing and calculations",id:"milestone-1--on-chain-data-collection-indexing-and-calculations",level:3},{value:"Milestone 2 \u2014 Portfolio tracker front-end implementation",id:"milestone-2--portfolio-tracker-front-end-implementation",level:3},{value:"Mockups",id:"mockups",level:2},{value:"Portfolio Overview",id:"portfolio-overview",level:3},{value:"NFTs page",id:"nfts-page",level:3},{value:"Individual item page",id:"individual-item-page",level:3},{value:"Collections page",id:"collections-page",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"polkadot-nft-portfolio-tracker-by-liisa---mvp"},"Polkadot NFT Portfolio Tracker by Liisa - MVP"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Team Name:")," Liisa"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Payment Address:")," 0x096a685Bfd75c3998CFC4c70177e17ee6b582B0A"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,n.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,n.kt)("p",null,"Liisa operates as a multi-chain NFT data analytics platform, engineered to empower collectors and investors in making proficient, data-driven decisions. "),(0,n.kt)("p",null,"This project consists of the development of a custom-built portfolio tracker, explicitly devised for NFTs within the Polkadot blockchain network, catering to the specificities of NFT investment strategies."),(0,n.kt)("p",null,"Within the Substrate/Kusama/Polkadot/Web 3 ecosystem, Liisa intends to emerge as a central supplier of granular NFT analytics, distinguishing itself with a user interface tailored to meet the specific requirements of NFT investors."),(0,n.kt)("p",null,"The portfolio tracker is designed to accommodate the diverse needs of a broad user base, ranging from active traders to long-term investors and collectors. It pioneers innovative metrics that drive the NFT infrastructure forward, thereby promoting a robust and data-enriched investment environment."),(0,n.kt)("h3",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/LiisaNFT/W3F-Grants-Program/assets/139144686/5ded60b3-0409-44fb-a619-b47c0c6e7de7",alt:"Architecture New"})),(0,n.kt)("h3",{id:"technologies"},"Technologies"),(0,n.kt)("h4",{id:"1-nodejs"},"1) Node.js"),(0,n.kt)("p",null,"Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. It allows developers to use JavaScript to write command line tools and for server-side scripting, enabling the development of fast and scalable network applications. Node.js is event-driven and non-blocking, which makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices."),(0,n.kt)("p",null,"Within the context of the project, the following packages are used:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Axios: Axios is an npm package for making HTTP requests in Node.js, simplifying API calls."),(0,n.kt)("li",{parentName:"ul"},'pg: The "pg" package connects Node.js applications to PostgreSQL databases, enabling efficient data retrieval and manipulation.'),(0,n.kt)("li",{parentName:"ul"},"Polkadot.js: Polkadot.js simplifies connecting and interacting with the Polkadot ecosystem"),(0,n.kt)("li",{parentName:"ul"},"Squid SDK: Squid SDK is a set of tools and libraries to efficiently query the Archive data, transform, enrich and persist into the target store. Squid SDK projects are called squids.")),(0,n.kt)("h4",{id:"2-bubbleio"},"2) Bubble.io"),(0,n.kt)("p",null,"Bubble.io is a visual development platform designed to democratize the process of creating web applications. It enables users, even without traditional coding skills, to build complex web applications through a user-friendly interface. Its features include visual programming capabilities, database management tools, a design editor, API integration, and hosting solutions. Essentially, Bubble.io is part of the no-code movement, which allows rapid digital product creation and innovation without requiring deep technical expertise."),(0,n.kt)("h4",{id:"3-reactjs"},"3) React.js"),(0,n.kt)("p",null,"React.js, often simply called React, is an open-source JavaScript library developed by Facebook for building user interfaces. It allows developers to create reusable UI components and manage the state of an application efficiently. React operates on a virtual DOM, which optimizes rendering by minimizing direct manipulation of the actual DOM and by batching multiple changes together. This results in improved performance and a more seamless user experience. React's component-based architecture and its emphasis on declarative programming make it easier to understand, maintain, and scale applications."),(0,n.kt)("h3",{id:"components"},"Components"),(0,n.kt)("h4",{id:"1-data-source-subsquid"},"1) Data Source (Subsquid)"),(0,n.kt)("p",null,"The project aims to create a system to extract and process event data and metadata related to NFTs within the Polkadot ecosystem. The focus is on building flexible and modular data ingestion mechanisms to accommodate different APIs with minimal code changes, using Node.js components for reusability and scalability. "),(0,n.kt)("p",null,"To expedite development, the team will initially integrate with the Subsquid API, which is well-documented, robust and  opensource, and provides extensive data for selected protocols like Astar (ERC721, ERC1155, PSP34, PSP37), Basilisk (Uniques pallet), Efinity (ERC-721, ERC-1155), Moonbeam (ERC-721, ERC-1155) and Moonriver (ERC-721, ERC-1155). This initial integration will serve two main purposes: to quickly progress towards a working MVP and to serve as a practical example for future developers looking to extend the system with other data sources in the long term."),(0,n.kt)("h4",{id:"2-data-enrichment"},"2) Data Enrichment"),(0,n.kt)("p",null,"Our backend serves as a vital nexus between supported blockchain protocols and valuable metrics we generate for user wallets and NFT collections. It involves three key activities: crafting and executing API queries, initiating timed triggers, and developing computational algorithms for metrics computation. We create and execute precise API queries to extract event data from Subsquid for protocols such as Astar (ERC721, ERC1155, PSP34, PSP37), Basilisk (Uniques pallet), Efinity (ERC-721, ERC-1155), Moonbeam (ERC-721, ERC-1155), and Moonriver (ERC-721, ERC-1155). This enables the continuous refresh of our system with recent blockchain events pertinent to the monitored NFT collections and user wallets. "),(0,n.kt)("p",null,"Our backend employs timed triggers to initiate queries to Subsquid at predefined intervals, ensuring we maintain an up-to-date snapshot of relevant blockchain events. Incoming event data, acquired via timed or event-driven triggers, is processed using specially designed computational algorithms. These algorithms generate key performance indicators (KPIs) and metrics for both user wallets and NFT collections, capturing the most essential insights. The calculated metrics are persistently stored in our database, ensuring their continuous availability for subsequent retrieval, analysis, and the provision of comprehensive insights into users' wallets and NFT collections."),(0,n.kt)("p",null,"All the code for data enrichment will be opensource so that more developers in the ecosystem can leverage our processes for retrieving NFT data from Subsquid API and wallets, as well as creating NFT metrics."),(0,n.kt)("h4",{id:"3-database"},"3) Database"),(0,n.kt)("p",null,"We will be utilizing PostgreSQL as our database management system to store and manage all data. PostgreSQL is an advanced open-source relational database management system that offers a broad range of powerful features. As our choice of infrastructure provider, we will be deploying PostgreSQL on Google Cloud Platform (GCP)."),(0,n.kt)("h4",{id:"4-frontend"},"4) Frontend"),(0,n.kt)("p",null,"We've chosen React.js for our frontend development, due to its open-source nature, and also with the intention of open-sourcing our own platform. This aligns with our commitment to enriching the Polkadot ecosystem, enabling more developers to leverage, adapt, and expand upon our work. React's component-driven approach ensures efficient and modular development, especially vital for our analytics platform. This decision guarantees adaptability for our MVP phase and scalability for expansive growth"),(0,n.kt)("h4",{id:"5-bubbleio-plug-ins"},"5) Bubble.io plug-ins"),(0,n.kt)("p",null,"While our frontend for the Portfolio Tracker MVP will be developed using React.js, we recognize the importance of our broader platform's integration with Bubble.io. Hence, we will develop open-source plug-ins for Bubble.io, enabling connections to the selected wallets: Subwallet, Parity signer, Polkadot-js, Fearless wallet, Nova Wallet, and Talisman. These plug-ins, built using Node.js, will empower users to log in using their wallets and facilitate retrieving NFT ownership data for portfolio metrics computation. By open-sourcing these plug-ins, we aim to enhance the no-code community's access to the Polkadot ecosystem. Regarding the integration of React with Bubble.io plugins: While React itself doesn't natively support Bubble.io plugins, we can create a bridge using APIs or webhooks. "),(0,n.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,n.kt)("p",null,"Upon delving deeper into the NFT portfolio tracking landscape within the Polkadot ecosystem, it's evident that while some platforms have incorporated NFT capabilities, they largely remain as extensions of their primary token and DeFi services. Our solution, on the other hand, is purpose-built for NFTs, offering a dedicated platform tailored for the nuanced requirements of NFT enthusiasts and investors."),(0,n.kt)("p",null,"As we look ahead, we're keen on forging strategic collaborations with NFT-centric parachains, such as Unique Network, and various NFT marketplaces. Such partnerships will not only amplify the Liisa portfolio tracker's functionality\u2014through the integration of off-chain data\u2014but also bolster their services by synergizing with our advanced analytical tools."),(0,n.kt)("h4",{id:"similar-projects"},"Similar projects:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Nansen Portfolio"),(0,n.kt)("li",{parentName:"ul"},"De.Fi"),(0,n.kt)("li",{parentName:"ul"},"Coinstats")),(0,n.kt)("h4",{id:"what-makes-us-different-is"},"What makes us different is:"),(0,n.kt)("p",null,"While platforms like Nansen and Coinstats have made significant strides in the broader crypto space, their focus is primarily on tokens, leaving Polkadot NFTs out of their purview. Meanwhile, the De.Fi platform's emphasis in this domain is still emerging. This observation underscores a distinctive opportunity in the Polkadot ecosystem: the need for a specialized NFT portfolio tracker, a niche we are poised to occupy."),(0,n.kt)("p",null,"In the absence of direct parallels, our differentiation can be better understood when juxtaposed with existing wallet services from a technical perspective."),(0,n.kt)("p",null,"Technical Differentiation:\n1) Users receive an all-encompassing summary, highlighted by our unique Portfolio Scorecard, which evaluates liquidity, volatility, and NFT diversification.\n2) Our platform goes beyond static visuals, offering dynamic filtering and sorting capabilities based on salient metrics such as sales and estimated value, resulting in a blend of technical robustness and user engagement.\n3) Every NFT token is accompanied by a wealth of insights, ranging from its rarity rank within a collection to a meticulous activity log detailing all related transactions.\n4) An aggregated perspective on NFT assets per collection is provided, supplemented with intuitive search features and dynamic filtering, presenting users with an innovative lens to evaluate collection performance."),(0,n.kt)("p",null,"In essence, our initiative pioneers novel metrics, visualization techniques, and deep dives into the NFT realm, setting a precedent in the Polkadot ecosystem."),(0,n.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,n.kt)("h3",{id:"team-members"},"Team members"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Bernardo Silva: Team Leader, Co-Founder & CEO at Liisa"),(0,n.kt)("li",{parentName:"ul"},"Paulo Peixoto: Lead Developer, Full-stack developer, Co-Founder & CTO at Liisa"),(0,n.kt)("li",{parentName:"ul"},"Kerim Caner T\xfcmkaya: Backend developer, Data Engineer at Liisa"),(0,n.kt)("li",{parentName:"ul"},"Guilherme Leit\xe3o: Backend developer, Junior Developer at Liisa"),(0,n.kt)("li",{parentName:"ul"},"Alexandre Collignon: UX/UI designer, Head of Marketing & Community at Liisa")),(0,n.kt)("h3",{id:"contact"},"Contact"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Name:")," Bernardo Silva"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,n.kt)("a",{parentName:"li",href:"mailto:bernardo@liisa.io"},"bernardo@liisa.io")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Website:")," ",(0,n.kt)("a",{parentName:"li",href:"http://www.liisa.io"},"www.liisa.io"))),(0,n.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Registered Address:")," Rua Jos\xe9 Henriques Coelho 3, 6C, 2770-103, Pa\xe7o de Arcos, Lisboa, Portugal"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," V\xedrgula Pragm\xe1tica LDA, VAT: PT517151006")),(0,n.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,n.kt)("h4",{id:"bernardo"},"Bernardo"),(0,n.kt)("p",null,"As Liisa's co-founder and CEO, Bernardo Silva leads a pioneering company leveraging big data for insightful NFT investor decisions. His leadership roots back to Deloitte, managing business consultations and cost-saving initiatives. His strategic role in an EU Digital Transformation Project and the launch of Portugal's largest Energy provider's loyalty program spotlight his tech project management prowess. His time at IKEA Portugal birthed a robust in-store capacity planning framework based on predictive analytics. An Industrial and Civil Engineering graduate, his focus lies in data-driven decision making in Web 3, with a proven ability in steering innovative projects and entrepreneurial initiatives."),(0,n.kt)("h4",{id:"paulo"},"Paulo"),(0,n.kt)("p",null,"Paulo Peixoto, Co-founder and CTO of Liisa, is an experienced technical leader with a rich background in full-stack development and specialized proficiency in blockchain data APIs and stream APIs, having experience with EVM NFT data. His expertise has been instrumental in developing Liisa's NFT trading analytics platform, embedding AI into backend processes and extracting and analyzing both real-time and historical NFT data. Formerly at Rainplan, he spearheaded a team to design a unique platform connecting real estate owners with government incentives. His further technical acumen was demonstrated at Updone as a co-founder, where he designed and implemented a custom-made CRM. In his roles at Loxo, Remi, Hardcopy, and MyMedCard, Paulo improved app performance, amplified system analytics, and led solution development. With a CertHE in Banking, Corporate Finance, and Securities from the University of Bedfordshire, Paulo skillfully combines technical mastery with financial knowledge."),(0,n.kt)("h4",{id:"kerim"},"Kerim"),(0,n.kt)("p",null,"Kerim Caner T\xfcmkaya is an accomplished Senior Data Scientist at Liisa, specializing in leveraging AI models to extract valuable insights from NFT data. With a profound mastery of data science and a diverse technological skill set, Kerim excels in machine learning, data analysis, and Python programming. Additionally, he possesses advanced cloud engineering skills, effectively utilizing platforms such as Cloudera, GCP, and AWS. Throughout his career, Kerim has made significant contributions in the field of data science. Notably, at Hepsiburada, he applied his expertise in demand and risk modeling, while at Allianz T\xfcrkiye, he developed machine learning projects for the banking sector. Kerim's repertoire includes proficiency in Pyspark, Hive, Impala, SQL, R, and GCP, enabling him to tackle complex challenges across various industries."),(0,n.kt)("h4",{id:"guilherme"},"Guilherme"),(0,n.kt)("p",null,"Guilherme, Junior Backend Developer at Liisa, is a distinguished Computer Science graduate from Instituto Superior T\xe9cnico in Lisbon. He stands out with his exceptional academic performance, particularly in areas such as Object-Oriented Programming, Machine Learning, and Distributed Systems. His notable projects include implementing a multi-connection File System, a user-friendly crypto mobile app, and an online currency distributed system, demonstrating profound skills in Python, Java, and C/C++. His contribution to the development of Liisa's NFT trading analytics platform underpins his extensive expertise. Guilherme's versatility, combined with his commitment to every phase of project execution, emphasizes his exceptional technical competence."),(0,n.kt)("h4",{id:"alexandre"},"Alexandre"),(0,n.kt)("p",null,"Alexandre Collignon is a professional with expertise in product design and experience in the NFT market. As the Head of Marketing and Community at Liisa, he engages with NFT traders daily and understands their needs and preferences. With a background in digital marketing and experience as a Digital and Technology Consultant at EY and Accenture, Alexandre brings a strategic and innovative approach to product design. He has led the development of AI-enabled platforms, resulting in efficiency gains for major industry players. Alexandre's past experiences in front-end development enhance his ability to create intuitive and engaging designs. With his understanding of the NFT market and experience as a trader, Alexandre aims to elevate Liisa's product design and deliver value to the community."),(0,n.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,n.kt)("p",null,"Source codes will reside in"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/LiisaNFT"},"https://github.com/LiisaNFT"))),(0,n.kt)("p",null,"For further reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/paulogustavopeixoto"},"https://github.com/paulogustavopeixoto")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/guilhermeleitao2002"},"https://github.com/guilhermeleitao2002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kerimtumkaya"},"https://github.com/kerimtumkaya")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/alexcollignon"},"https://github.com/alexcollignon"))),(0,n.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/bernardo-silva-631149161/"},"https://www.linkedin.com/in/bernardo-silva-631149161/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/pauloassispeixoto/"},"https://www.linkedin.com/in/pauloassispeixoto/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/kerim-caner-tumkaya/"},"https://www.linkedin.com/in/kerim-caner-tumkaya/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/guilherme-leit%C3%A3o-47bb27192/"},"https://www.linkedin.com/in/guilherme-leit%C3%A3o-47bb27192/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/alexandre-collignon/"},"https://www.linkedin.com/in/alexandre-collignon/"))),(0,n.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,n.kt)("p",null,"Our team has brought the first iteration of the portfolio tracker mockups to fruition (please see them below in the Mockups section)."),(0,n.kt)("p",null,"In a proactive endeavor to understand and address the data-related challenges of building the MVP, we have exchanged several emails and engaged in multiple meetings with the Parity team. Through these communications, we ensured technical feasibility of the proposed approach and refined the data approach and mockups to better match the ecosystems' needs."),(0,n.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 5 months"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  2.25"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Costs:")," 30,000 USDC")),(0,n.kt)("h3",{id:"milestone-1--on-chain-data-collection-indexing-and-calculations"},"Milestone 1 \u2014 On-chain data collection, indexing and calculations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated duration:")," 2.5 months"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:"),"  2.5"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 17,000 USDC")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0a."),(0,n.kt)("td",{parentName:"tr",align:null},"License"),(0,n.kt)("td",{parentName:"tr",align:null},"All code will be open-sourced under Apache 2.0 license.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0b."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation includes Inline Code Documentation, Configuration Documentation, Readme file. Documentation on the modular design of Subsquid API calls is included.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0c."),(0,n.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,n.kt)("td",{parentName:"tr",align:null},"The code will have unit-test coverage (min. 50%) to ensure functionality and robustness. In the guide, we will describe how to run these tests")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0d."),(0,n.kt)("td",{parentName:"tr",align:null},"Docker"),(0,n.kt)("td",{parentName:"tr",align:null},"Provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1a."),(0,n.kt)("td",{parentName:"tr",align:null},"Modular Subsquid API calls"),(0,n.kt)("td",{parentName:"tr",align:null},"Design and implement API queries to extract event data from the Subsquid API for the supported protocols and the respective token standards and/or pallets: Astar (ERC721, ERC1155, PSP34, PSP37), Basilisk (Uniques pallet), Efinity (ERC-721, ERC-1155), Moonbeam (ERC-721, ERC-1155) and Moonriver (ERC-721, ERC-1155). The design will be modular to allow easy replacement with different APIs. This will be developed using Node.js.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1b."),(0,n.kt)("td",{parentName:"tr",align:null},"Timed-Triggers"),(0,n.kt)("td",{parentName:"tr",align:null},"Establish timed triggers to initiate queries to the Subsquid API at predetermined intervals, subsequently refreshing the associated events database with the most recent data. This will be developed using Node.js on the main code and will use cronjobs on the cloud to set the triggers.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1c."),(0,n.kt)("td",{parentName:"tr",align:null},"User-initiated Triggers"),(0,n.kt)("td",{parentName:"tr",align:null},"Implement event-driven triggers that are activated upon user interactions with the application, specifically upon insertion of a wallet address. This will initiate Subsquid API queries and subsequently update the associated events database with the retrieved data. This will be developed using Node.js.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2a."),(0,n.kt)("td",{parentName:"tr",align:null},"Open-sourced Computational algorithms"),(0,n.kt)("td",{parentName:"tr",align:null},"Design and implement computational algorithms that, upon activation of either event-driven or timed triggers and the consequent receipt of new event data, will produce key performance indicators (KPIs) and metrics for both user wallets and NFT collections. The calculated metrics will subsequently be stored persistently in the database for subsequent analysis and retrieval. This code will be open-sourced and developed using Node.js.")))),(0,n.kt)("h3",{id:"milestone-2--portfolio-tracker-front-end-implementation"},"Milestone 2 \u2014 Portfolio tracker front-end implementation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2.5 month"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:"),"  2.0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 13,000 USD")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,n.kt)("td",{parentName:"tr",align:null},"License"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation includes Inline Code Documentation, Configuration Documentation, Readme file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,n.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,n.kt)("td",{parentName:"tr",align:null},"The code will have unit-test coverage (min. 50%) to ensure functionality and robustness. In the guide, we will describe how to run these tests")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,n.kt)("td",{parentName:"tr",align:null},"Docker"),(0,n.kt)("td",{parentName:"tr",align:null},"Provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,n.kt)("td",{parentName:"tr",align:null},"Article"),(0,n.kt)("td",{parentName:"tr",align:null},"Write a Medium article that explains the work done as part of the grant.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1a."),(0,n.kt)("td",{parentName:"tr",align:null},"Bubble.io wallet plugins"),(0,n.kt)("td",{parentName:"tr",align:null},"Design and engineer custom Bubble.io plugins for the selected wallets. The plugins will be architected to integrate wallet log-in (signature) into our front-end application interface. The plugins will be published on the Bubble.io marketplace and made freely available to the wider developer community. Selected wallets: Subwallet, Parity signer, Polkadot-js, Fearless wallet, Nova Wallet, Talisman. This will be developed using Javascript.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1b."),(0,n.kt)("td",{parentName:"tr",align:null},"Wallet address transmission"),(0,n.kt)("td",{parentName:"tr",align:null},"Implement a front-end authentication module that captures and transmits wallet addresses from the user sign-in process to our backend. The transmission activates event-driven triggers, initiating Subsquid  API queries for relevant event data retrieval. This will be developed using Node.js and React.js.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2a."),(0,n.kt)("td",{parentName:"tr",align:null},"Dashboard Structure Implementation"),(0,n.kt)("td",{parentName:"tr",align:null},"Utilizing provided mockups as the architectural blueprint, implement the user interface for the application dashboard. This involves arranging key performance indicators (KPIs) and various data visualization elements according to the predefined design. This will be developed using React.js.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2b."),(0,n.kt)("td",{parentName:"tr",align:null},"Dynamic Dashboard Values"),(0,n.kt)("td",{parentName:"tr",align:null},"Implement a real-time data binding mechanism that retrieves and displays updated portfolio data from the database, activated by event-driven triggers as defined in 1b. This will be achieved using a websocket client connected to our PostgreSQL Database.")))),(0,n.kt)("h2",{id:"mockups"},"Mockups"),(0,n.kt)("h3",{id:"portfolio-overview"},"Portfolio Overview"),(0,n.kt)("p",null,"The homepage of the portfolio provides a quick and insightful summary of the user's NFT holdings, including key features such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Overview Metrics: Displaying estimated portfolio value, revenue from NFT sales, spending on NFT purchases, realized profit-and-loss, and unrealized profit-and-loss;"),(0,n.kt)("li",{parentName:"ul"},"Portfolio Scorecard: Assessing liquidity, volatility, and diversification of the NFT portfolio;"),(0,n.kt)("li",{parentName:"ul"},"Portfolio Evolution Chart: Visualizing the historical value evolution of the NFT portfolio;"),(0,n.kt)("li",{parentName:"ul"},"Inventory Chart: Illustrating the relative value distribution of each NFT holding."),(0,n.kt)("li",{parentName:"ul"},"Collection Highlights: Ranking collections in the user\u2019s wallet based on top gainers, top losers, and recent purchases.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/LiisaNFT/W3F-Grants-Program/assets/139144686/ae122745-4d96-4c2a-86af-a8bc8230f63a",alt:"Portfolio tracker #1 (1)"})),(0,n.kt)("h3",{id:"nfts-page"},"NFTs page"),(0,n.kt)("p",null,"The NFTs page offers users a technical and visually engaging interface to view their NFT collection:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"NFT Images: Displaying artwork and associated metadata for each token;"),(0,n.kt)("li",{parentName:"ul"},"Token Metrics: Showing estimated value, acquisition price, unrealized PNL, and 24-hour sales for each collection;"),(0,n.kt)("li",{parentName:"ul"},"Filtering and Sorting: Allowing users to sort and filter NFTs based on metrics like collection sales and estimated value.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/LiisaNFT/W3F-Grants-Program/assets/139144686/ca77234f-dba4-4ede-8860-981d958ba3fd",alt:"Portfolio_tracker_2_1"})),(0,n.kt)("h3",{id:"individual-item-page"},"Individual item page"),(0,n.kt)("p",null,"The individual item page allows users to delve into the comprehensive details of each NFT from their collection, providing a technical and in-depth analysis of the specific token."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"NFT Images: Showcasing artwork and associated metadata."),(0,n.kt)("li",{parentName:"ul"},"Token Metrics: Providing estimated value, last sale price, unrealized PNL, acquisition date, and rarity rank within the collection."),(0,n.kt)("li",{parentName:"ul"},"Historical Chart: Visualizing sales history and estimated value evolution over different timeframes."),(0,n.kt)("li",{parentName:"ul"},"Activity Table: Logging all events related to the NFT, including sales, transfers, and minting.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/LiisaNFT/W3F-Grants-Program/assets/139144686/9ce0f425-3e2e-4901-9bd5-d68817afc3b4",alt:"Portfolio tracker #3 (1)"})),(0,n.kt)("h3",{id:"collections-page"},"Collections page"),(0,n.kt)("p",null,"The collections page provides users with an aggregated view of their NFT holdings by collection, allowing them to assess collection performance and its impact on their portfolio."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Metrics per Collection: Includes NFTs owned, sales floor and % change for a timeframe, total invested value, estimated value, unrealized PNL, and collection volume."),(0,n.kt)("li",{parentName:"ul"},"Filters and Sort: Users can compare values in native tokens or dollars, select timeframes, and sort the table by various metrics."),(0,n.kt)("li",{parentName:"ul"},"Search: Quick search bar filters the table dynamically as the user types, facilitating collection analysis."),(0,n.kt)("li",{parentName:"ul"},"This page offers a concise and efficient way for users to evaluate the performance and contribution of each NFT collection in their portfolio")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/LiisaNFT/W3F-Grants-Program/assets/139144686/12288478-21f2-4fab-9269-dfdc20693ed8",alt:"Portfolio tracker #4 (1)"})),(0,n.kt)("h2",{id:"future-plans"},"Future Plans"),(0,n.kt)("p",null,"Immediate Plans in the timeline includes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"User testing and improvements to the portfolio tracker"),(0,n.kt)("li",{parentName:"ul"},"Integrating the portfolio tracker as part of the Liisa multi-chain NFT analytics platform"),(0,n.kt)("li",{parentName:"ul"},"Integrate NFTs from the supported protocols in the Liisa multi-chain NFT analytics platform")),(0,n.kt)("p",null,"Our Roadmap includes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"User-defined alerts for NFT events"),(0,n.kt)("li",{parentName:"ul"},"Integration with NFT marketplaces for off-chain data querying, specifically marketplace listings and bids"),(0,n.kt)("li",{parentName:"ul"},"Integration of AI models for NFT valuations"),(0,n.kt)("li",{parentName:"ul"},"Development of a mobile application"),(0,n.kt)("li",{parentName:"ul"},"Integration of additional protocols"),(0,n.kt)("li",{parentName:"ul"},"Token tracking")),(0,n.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?"),"\nFrom talking to the Parity Team"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"What work has been done so far?"),"\nWe have developed and deployed the Liisa NFT analytics platform, currently supporting ETH and MATIC NFTs, including both off-chain and on chain data visualizations and KPIs"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Are there are any teams who have already contributed (financially) to the project?"),"\nYes, our Incubator and VC"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Have you applied for other grants so far?"),"\nNo"))}p.isMDXComponent=!0}}]);