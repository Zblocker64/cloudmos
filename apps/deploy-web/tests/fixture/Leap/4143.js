"use strict";(self.webpackChunk_leap_cosmos_extension=self.webpackChunk_leap_cosmos_extension||[]).push([[4143],{126563:(X,T,t)=>{t.d(T,{Z:()=>G});var v=t(564510),N=t(339279),g=t.n(N),b=t(726089),Z=t(360431),k=t.n(Z),e=t(121273),I=t.n(e),P=t(593723),O=t(94608),j=t(389320),p=t(372149),w=t(508181),l=t(378268),Y=t(673708),s=t(202784),F=t(14080),U=t(15815),R=t(712878);const J=async({address:M,lcdUrl:W,chain:z})=>{try{return{balances:(await(0,v.F$d)({baseURL:W,method:"get",url:`/cosmos/bank/v1beta1/balances/${M}`})).data.balances??[],chain:z}}catch(D){return(0,b.Tb)(D),{balances:[],chain:z}}};function $({cosmosAddress:M,id:W,onClick:z,isExistingAddress:D,isChosen:K,hidden:q,showDerivationPath:H=!1,...B}){const V=(0,p.p)(),Q=(0,s.useRef)(new AbortController),{isLoading:d,error:u,data:a}=(0,Z.useQuery)({queryKey:[M],refetchOnWindowFocus:!1,refetchOnReconnect:!0,queryFn:async()=>{const{words:n}=I().decode(M),h=Object.values(V).filter(m=>!m.beta&&!j.CM.includes(m.chainId)).map(m=>{const x=I().encode(m.addressPrefix,n),f=(0,v.PqN)(V,m.key,!1);return f?J({address:x,lcdUrl:f,chain:m.key}):Promise.reject(new Error("No rest endpoint"))}),o=await Promise.allSettled(h),i=[];return o.forEach(m=>{if(m.status==="fulfilled"){const{balances:x,chain:f}=m.value;x.length>0&&x.some(({amount:A})=>Number(A)>0)&&i.push(f)}}),i}}),E=(0,U.l)()?w.r.Misc.CompassCopied:w.r.Misc.CheckBox,r=(0,s.useMemo)(()=>D?w.r.Misc.CheckCircle:K?E:w.r.Misc.CheckBoxOutlineBlank,[E,K,D]);(0,s.useEffect)(()=>{const n=Q.current;return()=>n.abort()},[]);const y=(0,s.useMemo)(()=>(0,Y.getWalletIconAtIndex)(W),[W]);return u&&(0,b.Tb)(u),s.createElement("div",{className:`rounded-xl w-[360px] shrink-0 ${q?"hidden":""}`},s.createElement(N.OnboardCard,{imgSrc:y,title:"Wallet "+(W+1),subTitle:s.createElement("div",{className:"flex items-center gap-2 mb-1"},H&&s.createElement(O.Z,{size:"xs",className:"font-medium py-1 px-[6px] rounded bg-gray-200 dark:bg-gray-800"},"0/'0/1"),(0,R.Hn)(M)),isRounded:!1,size:"lg",onClick:z,iconSrc:r,className:`w-full rounded-t-lg ${!d&&!a?"rounded-b-lg":""}`,...B}),!(0,U.l)()&&!u&&s.createElement(s.Fragment,null,s.createElement("div",{className:"h-[1px] bg-gray-100 dark:bg-gray-600"}),s.createElement("div",{className:"w-[360px] bg-white-100 dark:bg-gray-900 px-6 py-2 rounded-b-lg"},d?s.createElement(F.Z,{className:"light:bg-gray-200 bg-gray-800 z-0"}):a&&s.createElement("div",{className:"flex rounded-b-lg"},s.createElement("div",{className:"flex items-center"},a.slice(0,3).map(n=>s.createElement("img",{key:n,src:(0,l.getChainImage)(n),className:"block w-5 h-5 rounded-full shadow ml-1.5"})),a.length>3&&s.createElement(s.Fragment,null,s.createElement(P.Z,{content:s.createElement("li",{className:"list-none space-y-3 w-full"},a.slice(3).map(n=>s.createElement("ul",{key:n,className:"flex"},s.createElement("img",{src:(0,l.getChainImage)(n),className:"block w-5 h-5 rounded-full shadow mr-3"}),s.createElement(O.Z,{size:"sm",className:"capitalize"},v.oCA[n]?.chainName??n))))},s.createElement("div",{className:"relative cursor-pointer"},s.createElement(O.Z,{size:"xs",className:"ml-2 font-bold bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-sm inline-block p-[2px]"},"+",a.length-3))))),s.createElement(O.Z,{size:"sm",className:"ml-4 text-gray-600 dark:text-gray-300"},"Funds on ",a.length," network",a.length>1?"s":"")))))}const G=$},884143:(X,T,t)=>{t.r(T),t.d(T,{default:()=>Q});var v=t(564510),N=t(395362),g=t(339279),b=t(133525),Z=t(840575),k=t(244876),e=t(202784),I=t(410289),P=t(610675),O=t(642706),j=t(554023),p=t(15815),w=t(892742),l=t(94608);const s=({incrementStep:d})=>e.createElement(w.Z,null,e.createElement("div",{className:"p-5 flex flex-col justify-center h-full"},e.createElement("div",{className:"bg-gray-900 dark:bg-gray-100 rounded-[16px] mb-4 h-[36px] w-[36px] flex flex-col justify-center text-center"},e.createElement("div",{style:{fontSize:20},className:"material-icons-round dark:text-gray-900 text-gray-100"},"lock")),e.createElement(l.Z,{size:"xxl",className:"font-bold"},"Forgot your password?"),e.createElement(l.Z,{size:"md",color:"text-gray-500 dark:text-gray-300 mb-[32px]"},"Clear your data and restore your wallet using your recovery phrase"),e.createElement(l.Z,{size:"md",color:"text-gray-500 dark:text-gray-300 mb-[16px]"},"We won\u2019t be able to recover your password as it\u2019s stored securely only on your computer."),e.createElement(l.Z,{size:"md",color:"text-gray-500 dark:text-gray-300"},"To recover the wallet you will have to clear you data which will delete your current wallet and recovery phrase from this device, along with the list of accounts you\u2019ve curated. After that you can restore you wallet using your recovery phrase"),e.createElement("div",{className:"flex w-full shrink mt-[44px]"},e.createElement(g.Buttons.Generic,{size:"normal",color:P.w.cosmosPrimary,onClick:d},"Clear data and restore using recovery phrase"))));var F=t(208847),U=t(965784),R=t(508181);const $=({incrementStep:d,setMnemonicAtRoot:u})=>{const[a,E]=(0,e.useState)(""),[r,y]=(0,e.useState)(""),n=i=>{E(""),y(i)},h=()=>(E(""),U.W.validateSeedPhrase((0,O.Z)(r))?!0:(E("Invalid recovery phrase."),!1)),o=async()=>{h()&&(u(r),d())};return e.createElement(w.Z,null,e.createElement("div",{className:"flex flex-col min-h-full px-5 pb-5 pt-[15%]"},e.createElement("div",{className:"bg-gray-900 dark:bg-gray-100 rounded-[16px] mb-4 h-[36px] w-[36px] flex flex-col justify-center text-center"},e.createElement("div",{style:{fontSize:20},className:"material-icons-round dark:text-gray-900 text-gray-100"},"lock")),e.createElement(l.Z,{size:"xxl",className:"font-bold"},"Enter recovery phrase"),e.createElement(l.Z,{size:"md",color:"text-gray-500 dark:text-gray-300"},"To restore your wallet enter your recovery phrase"),e.createElement("div",{className:"mx-auto w-[360px] my-[10px]"},e.createElement(F.W,{onChangeHandler:n,isError:!!a,heading:""})),a&&e.createElement(l.Z,{size:"sm",color:"text-red-300 mx-auto my-0"},a),e.createElement("div",{className:"w-[360px] h-auto rounded-xl dark:bg-gray-900 bg-white-100 flex items-center p-[10px] mx-auto mt-[10px]"},e.createElement("img",{className:"mr-[16px]",src:R.r.Misc.Warning}),e.createElement("div",{className:"flex flex-col gap-y-[2px]"},e.createElement(l.Z,{size:"sm",className:"tex font-black font-bold"},"Recommended security practice:"),e.createElement(l.Z,{size:"sm",color:"text-gray-400"},"Type out recovery phrase instead of pasting it"))),e.createElement("div",{className:"flex w-full shrink mt-[10px] pt-5"},e.createElement(g.Buttons.Generic,{size:"normal",color:P.w.cosmosPrimary,onClick:()=>{r!==""&&o()},style:{opacity:`${r===""?"0.4":"1"}`,background:P.w.cosmosPrimary}},"Restore Wallet"))))};var G=t(294184),M=t.n(G),W=t(126563);function z({onProceed:d,accountsData:u,selectedIds:a,setSelectedIds:E}){const[r,y]=(0,e.useState)(!1),n=()=>y(i=>!i),h=(0,e.useMemo)(()=>u.map(({address:i,index:m})=>{const x=a[m];return e.createElement(W.Z,{key:m,id:m,hidden:r?!1:m>=2,cosmosAddress:i,isChosen:x,isExistingAddress:!1,onClick:()=>{E(f=>({...f,[m]:!x}))}})}),[u,a,E,r]),o=Object.values(a).some(i=>i);return e.createElement("div",{className:"flex flex-row space-x-5"},e.createElement("div",{className:"flex flex-col w-[408px]"},e.createElement("div",{className:"flex flex-row gap-x-[12px]"},e.createElement("img",{src:R.r.Misc.WalletIconWhite}),e.createElement(l.Z,{size:"xxl",className:"font-medium"},"Select wallets")),e.createElement(l.Z,{size:"lg",color:"text-gray-600 dark:text-gray-400",className:"font-light mb-[32px]"},"If you have used multiple accounts in your wallet, you can choose to import them here."),e.createElement("div",{className:"flex flex-col space-y-4 overflow-y-auto",style:{maxHeight:"calc(100vh - 28rem)"}},h),e.createElement("div",{className:"mt-4"},r?e.createElement("button",{title:"Show Less",className:M()("outline-none pr-2 rounded font-bold focus:ring-1 flex items-center justify-around space-x-2",{"focus:ring-mainChainTheme-400":!(0,p.l)(),"text-mainChainTheme-400":!(0,p.l)(),"focus:ring-compassChainTheme-400":(0,p.l)(),"text-compassChainTheme-400":(0,p.l)()}),onClick:n},e.createElement("span",{className:"material-icons-round"},"expand_less"),e.createElement("span",null,"Show Less Wallets")):e.createElement("button",{title:"Show More",className:M()("outline-none pr-2 rounded font-bold focus:ring-1 flex items-center justify-around space-x-2",{"focus:ring-mainChainTheme-400":!(0,p.l)(),"text-mainChainTheme-400":!(0,p.l)(),"focus:ring-compassChainTheme-400":(0,p.l)(),"text-compassChainTheme-400":(0,p.l)()}),onClick:n},e.createElement("span",{className:"material-icons-round dark:text-white-100 text-gray-800"},"expand_more"),e.createElement("span",null,"Show More Wallets"))),e.createElement("div",{className:"pt-[32px]"}),e.createElement(g.Buttons.Generic,{disabled:!o,color:P.w.cosmosPrimary,onClick:()=>{o&&d()}},"Proceed")),e.createElement("div",null,e.createElement("div",{className:"shrink flex-col gap-y-[4px] w-[408px] p-[32px] rounded-lg border-[1px] dark:border-gray-800 border-gray-200"},e.createElement(l.Z,{size:"lg",className:"font-medium text-gray-600 dark:text-gray-200"}," ","Which wallets are displayed here?"),e.createElement(l.Z,{size:"md",color:"text-gray-600 dark:text-gray-400 mb-[32px]"}," ","Only wallets with transactions are imported."),e.createElement(l.Z,{size:"lg",className:"font-medium text-gray-600 dark:text-gray-200"}," ","Can I edit wallet details?"),e.createElement(l.Z,{size:"md",color:"text-gray-600 dark:text-gray-400"},"You can rename, add or remove wallets at any time."))))}const D=z;var K=t(967112);const H=({loading:d,resetPassword:u})=>{const[a,E]=(0,e.useState)(""),[r,y]=(0,e.useState)(""),[n,h]=(0,e.useState)(null),[o,i]=(0,e.useState)({pass1:"",pass2:""}),m=async c=>{if(c){const C=(0,K.j)(c);h(C)}else h(null)};(0,e.useEffect)(()=>{const c=setTimeout(()=>{m(a)},200);return()=>{clearTimeout(c)}},[a]);const x=!!o.pass1||!!o.pass2||!a.length||!r.length,f=(0,e.useCallback)(c=>(i({pass1:"",pass2:""}),c.length<8?(i(C=>({...C,pass1:"Password must be at least 8 characters"})),!1):!0),[]),A=()=>a!=r?(i(c=>({...c,pass2:"Passwords do not match"})),!1):!(o.pass1||o.pass2||!f(a)),_=c=>{c.preventDefault(),A()&&u(a)};return e.createElement(w.Z,null,e.createElement("div",{className:"flex flex-col h-full pt-[25%]"},e.createElement("div",{className:"mx-5 bg-gray-900 dark:bg-gray-100 rounded-[16px] mb-4 h-[36px] w-[36px] flex flex-col justify-center text-center"},e.createElement("div",{style:{fontSize:20},className:"material-icons-round dark:text-gray-900 text-gray-100"},"lock")),e.createElement(l.Z,{size:"xxl",className:"font-bold px-5"},"Choose a password"),e.createElement(l.Z,{size:"md",color:"text-gray-500 dark:text-gray-300 mb-[32px] px-5"},"Use this password to unlock your wallet"),e.createElement("form",{onSubmit:_,className:"relative grid grid-cols-1 gap-y-[20px] mx-auto"},e.createElement(g.Input,{type:"password",placeholder:"Enter password",className:"pr-100",isErrorHighlighted:!!o.pass1||!!o.pass2,onChange:c=>{i(C=>({...C,pass1:""})),E(c.target.value)}}),n!==null&&e.createElement("div",{className:"absolute flex justify-center items-center top-[1px] right-[10px] w-[80px] h-[45px] bg-white-100 dark:bg-gray-900"},n===4&&e.createElement(l.Z,{size:"md",color:"text-green-600 dark:text-green-300 px-5 font-bold"},"Strong"),n===3&&e.createElement(l.Z,{size:"md",color:"text-orange-500 dark:text-orange-300 px-5 font-bold"},"Medium"),n<3&&e.createElement(l.Z,{size:"md",color:"text-red-300 dark:text-red-300 px-5 font-bold"},"Weak")),o.pass1&&e.createElement(l.Z,{size:"sm",color:"text-red-300"},o.pass1),e.createElement(g.Input,{type:"password",placeholder:"Re-enter password",isErrorHighlighted:!!o.pass2,onChange:c=>{i(C=>({...C,pass2:""})),y(c.target.value)}}),o.pass2&&e.createElement(l.Z,{size:"sm",color:"text-red-300"},o.pass2),e.createElement("div",{className:"w-full h-auto rounded-xl dark:bg-gray-900 bg-white-100 flex items-center p-[16px] pr-[21px]"},e.createElement("img",{className:"mr-[16px]",src:R.r.Misc.Warning}),e.createElement("div",{className:"flex flex-col gap-y-[2px]"},e.createElement(l.Z,{size:"sm",className:"font-black"},"Recommended security practice:"),e.createElement(l.Z,{size:"xs",color:"text-gray-400"},"Always choose a strong password"))),e.createElement("div",{className:"w-full shrink mt-[25px] flex flex-row justify-center"},e.createElement(g.Buttons.Generic,{size:"normal",type:x?"button":"submit",color:P.w.cosmosPrimary,style:{opacity:`${x||d?"0.4":"1"}`,background:P.w.cosmosPrimary},disabled:d},d?"Recovering Wallet...":"Recover Now")))))},B=4,Q=()=>{const d=(0,I.s0)(),u=(0,Z.ck)(),[a,E]=(0,e.useState)(""),[r,y]=(0,e.useState)(1),[n,h]=(0,e.useState)([]),[o,i]=(0,e.useState)({}),[m,x]=(0,e.useState)(!1),f=k.w.useImportMultipleWalletAccounts(),{removeAll:A}=k.w.useRemoveWallet(),_=(0,e.useCallback)(async S=>{const L=(0,O.Z)(S),ee=(0,p.l)()?"seiTestnet2":"cosmos",ae=await N.Kn.getWalletsFromMnemonic(L,5,v.oCA[ee].bip44.coinType,v.oCA[ee].addressPrefix);h(ae)},[]),c=(0,e.useCallback)(()=>{r+1<=B?y(r+1):d("/onboardingSuccess")},[d,r]),C=(0,e.useCallback)(()=>{r<=B&&r-1>0?y(r-1):d("/")},[d,r]),te=(0,e.useCallback)(async S=>{x(!0),u(S),await A(),a&&S&&(await f({mnemonic:a,password:S,selectedAddressIndexes:Object.entries(o).filter(([,L])=>L).map(([L])=>parseInt(L)),type:"import"}),c()),x(!1)},[f,c,a,A,o,u]);return(0,e.useEffect)(()=>{r===3&&_(a).catch(S=>(0,j.e)("Fetching Wallet Accounts",S.message))},[_,a,r]),e.createElement(b.Z,{titleComponent:e.createElement("div",{className:"flex flex-row w-[836px] items-center justify-between align-"},e.createElement(g.Buttons.Back,{isFilled:!0,onClick:C}),e.createElement(g.ProgressBar,{color:P.w.cosmosPrimary,currentStep:r,totalSteps:B}),e.createElement("div",null))},e.createElement("div",{className:"absolute top-0 flex h-full w-1/2 z-5 justify-center"},r===1&&e.createElement("div",{className:"self-center"},e.createElement(s,{incrementStep:c})),r===2&&e.createElement("div",{className:"self-center"},e.createElement($,{incrementStep:c,setMnemonicAtRoot:E})),r===3&&e.createElement("div",{className:"mt-32"},e.createElement(D,{accountsData:n,onProceed:c,selectedIds:o,setSelectedIds:i})),r===4&&e.createElement("div",{className:"self-center"},e.createElement(H,{resetPassword:te,loading:m}))))}},967112:(X,T,t)=>{t.d(T,{j:()=>k});var v=t(775667),N=t(610054),g=t(310693),b=t(756658);const Z={dictionary:{...N.Z.dictionary,...b.Z.dictionary,...g.Z.dictionary},graphs:N.Z.adjacencyGraphs,useLevenshteinDistance:!0,translations:b.Z.translations};v.Mu.setOptions(Z);const k=e=>(0,v.tu)(e).score}}]);
