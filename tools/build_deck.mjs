import fs from 'node:fs/promises';
import path from 'node:path';
import {Presentation, PresentationFile} from '@oai/artifact-tool';
import {pathToFileURL} from 'node:url';
const SKILL_DIR=process.env.ARTIFACT_SKILL_DIR;
if(!SKILL_DIR) throw new Error('Set ARTIFACT_SKILL_DIR to the installed presentations skill directory.');
const {finalizePresentation,resolvePresentationFont}=await import(pathToFileURL(path.join(SKILL_DIR,'container_tools/artifact_tool_utils.mjs')));
const workspaceDir=process.cwd();
const root=workspaceDir;
const FONT=resolvePresentationFont();
console.log('Design font',FONT);
const p=Presentation.create({slideSize:{width:1280,height:720}});
const C={paper:'#F3F1E7',ink:'#14362D',muted:'#50665B',green:'#2F7760',mint:'#B9DDC9',gold:'#D6AE61',line:'#C5CCC1',dark:'#102A24',white:'#FFFFFF'};
function shape(s,x,y,w,h,fill,geo='rect',stroke='none'){return s.shapes.add({geometry:geo,position:{left:x,top:y,width:w,height:h},fill,line:{fill:stroke,width:stroke==='none'?0:1,style:'solid'}})}
function txt(s,text,x,y,w,h,size=24,color=C.ink,bold=false){let t=shape(s,x,y,w,h,'none','textbox');t.text=text;t.text.style={typeface:FONT,fontSize:size,color,bold};return t;}
function base(title,number,dark=false){let s=p.slides.add();s.background.fill=dark?C.dark:C.paper;const color=dark?C.paper:C.ink;txt(s,title,64,50,1150,96,42,color,true);shape(s,64,161,1152,2,dark?'#416255':C.line);txt(s,'STAGE I CONCEPT / NO PRODUCT IMPLEMENTATION',64,674,1000,22,14,dark?C.mint:C.muted);txt(s,String(number).padStart(2,'0'),1166,674,50,22,14,dark?C.mint:C.muted);return s;}
function note(s,text){s.speakerNotes.text=text;}
function line(s,x,y,w,color=C.line){shape(s,x,y,w,1,color);}
function row(s,n,title,body,y){txt(s,n,68,y,80,60,n.length>2?24:34,C.green,true);txt(s,title,156,y,995,44,27,C.ink,true);txt(s,body,156,y+49,1000,74,23,C.muted);}
function cols(s,items,y=220){const w=340;items.forEach((a,i)=>{let x=64+i*406;txt(s,a[0],x,y,w,48,30,C.green,true);txt(s,a[1],x,y+70,w,230,25,C.ink);});}
function box(s,label,x,y,w,h,fill=C.mint,size=24,color=C.ink){shape(s,x,y,w,h,fill);txt(s,label,x+20,y+18,w-40,h-30,size,color,true);}
function linkbar(s,text,y=618){txt(s,text,64,y,1152,40,17,C.muted);}
const home='https://contest.bhuntr.com/tw/39jg9vimiynrhlksze/home/';
const repo='https://github.com/mkhsu2002/OnDemand-World-Observatory';
{
 let s=base('OnDemand World\nObservatory',1,true);
 txt(s,'Context-conditioned short video\nfor every observation-page opening',64,248,740,128,34,C.paper);
 txt(s,'M.K. Hsu\nCreator AI / Battlefield Lightning / Global Online Track',64,460,1010,92,24,C.mint);
 txt(s,'28 October 2026',64,586,600,32,21,C.gold);
 // An original flat observation-window diagram, with editable geometry.
 shape(s,902,242,250,250,'none','ellipse','#608C76');shape(s,940,280,174,174,'none','ellipse','#608C76');
 shape(s,884,365,286,2,C.gold);shape(s,1026,224,2,286,C.gold);txt(s,'NEW\nMOMENT',960,321,160,90,27,C.paper,true);
 note(s,'New proposal and interface drafts only. No generated-on-open prototype or hardware result. Author credit M.K. Hsu. Product definition from author instruction, 28 Oct 2026. Official track: '+home);
}
{
 let s=base('Repeat visits need fresh moments',2);
 cols(s,[['Creator','A rich world setting and reference art already exist. Manually writing every new scene takes effort.'],['Visitor','A fixed gallery repeats the same moments. An open-ended prompt editor asks the visitor to do the work.'],['Proposed value','A new observation on opening, bounded by the creator’s world rules and visual identity.']]);
 txt(s,'Initial customer hypothesis: independent worldbuilding creators and small IP teams',64,567,1130,60,26,C.green,true);
 note(s,'Problem and customer hypotheses, not completed interviews or measured market demand. No market size or competitor benchmark claimed. See docs/proposal-en.md sections 2 and 8.');
}
{
 let s=base('The proposed observation flow',3);
 const a=[['01','Open page'],['02','Compose scenario'],['03','Generate clip'],['04','Play new result']];
 a.forEach(([n,t],i)=>{let x=64+i*297;txt(s,n,x,221,240,80,54,C.green,true);txt(s,t,x,320,254,90,27,C.ink,true);if(i<3)shape(s,x+250,263,40,3,C.gold);});
 txt(s,'Domain + eligible species + time + climate + approved reference images',64,464,1145,80,29,C.ink);
 txt(s,'Fast generation is the intended experience. Backend and latency remain unvalidated.',64,584,1145,55,24,C.muted);
 note(s,'Every opening intends a new request and new clip. This is an episodic video experience. No 3D, 2.5D, WebGL or persistent simulation engine. No implemented flow exists.');
}
{
 let s=base('Creator-defined context and constraints',4);
 row(s,'01','World facts','One domain, approved species, visual references and prohibited events.',211);
 row(s,'02','Context snapshot','Creator-defined fictional time and climate in the first version.',359);
 row(s,'03','Coherence checks','Reject unsupported species or conditions before requesting a video.',507);
 note(s,'Proposed method. Live weather would require a later data source and timestamp. Context does not claim scientific prediction or continuously evolving ecosystem state.');
}
{
 let s=base('A written example',5,true);
 txt(s,'FICTIONAL WETLAND / DAWN / MIST',64,212,1080,44,23,C.gold,true);
 txt(s,'One approved wading bird takes two slow steps\nbeside reeds. Gentle ripples cross still water.',64,285,1135,132,37,C.paper,true);
 txt(s,'Prompt direction: preserve the reference anatomy and habitat.\nUse a fixed wide camera, subtle motion and no additional species.',64,463,1120,100,26,C.mint);
 txt(s,'Hand-authored sample. No model output, generated clip or measured result.',64,598,1120,44,22,C.gold);
 note(s,'Example drafted for this proposal, not AI inference output. Reference asset approval is pending. No generation job was executed. See examples/scenario.json and examples/result.json.');
}
{
 let s=base('Proposed software and hardware architecture',6);
 box(s,'Browser\nOpen / status / playback',64,215,304,119);
 box(s,'Host coordinator\nDomain and references',470,215,340,119);
 box(s,'Scenario / prompt\nUGen300 hypothesis',914,215,302,119,C.green,24,C.white);
 shape(s,368,272,102,3,C.gold);shape(s,810,272,104,3,C.gold);
 box(s,'New clip + manifest\nProvenance and labels',64,431,405,124);
 box(s,'Video backend\nUnselected / unvalidated',573,431,643,124,'#E4D6B6');
 shape(s,469,491,104,3,C.gold);shape(s,1064,334,3,97,C.gold);
 txt(s,'The device contribution and the video-generation backend require separate validation.',64,592,1138,52,24,C.muted);
 note(s,'Architecture draft only. Evaluate context interpretation and scenario/prompt construction on UGen300 / Hailo-10H. Host orchestration remains necessary. Do not infer all-local execution or device video capability. Confirm split eligibility with organizer. '+home);
}
{
 let s=base('UGen300 evaluation scope',7);
 cols(s,[['Candidate role','Context interpretation and constrained scenario / prompt construction using a supported Hailo-10H model.'],['Compatibility gate','Confirm received device, host OS, drivers, memory and model runtime. USB versus M.2 selection remains pending.'],['Evidence needed','Actual device operation, model versions, reproducible logs and separate timings for every pipeline stage.']]);
 txt(s,'No UGen300 video, latency, power or deployment result exists today.',64,567,1120,68,27,C.green,true);
 note(s,'Vendor describes Hailo-10H and LLM/VLM model categories. This does not establish workload compatibility. USB page: https://www.asus.com/tw/motherboards-components/ai-accelerator/ugen/ugen300-usb-8g/ accessed 28 Oct 2026. Form warns fixed hardware choice. Stage II requires actual UGen300 operation: '+home);
}
{
 let s=base('Prior work and new application scope',8);
 txt(s,'Prior public material',64,213,525,55,30,C.green,true);txt(s,'New proposal work',686,213,525,55,30,C.green,true);
 txt(s,'K’s Hunting Log\nHabitat imagery, species setting\nand pre-existing video clips\n\nSeparate Studio product\nStory-to-world authoring context',64,288,525,265,26,C.ink);
 txt(s,'Page-open observation design\nContext and constraint interface\nHand-authored payload examples\nHardware evaluation plan\nProposal, slides and video script',686,288,525,265,26,C.ink);
 txt(s,'No Studio code copied. Disclosure does not establish originality eligibility.',64,591,1145,56,24,C.muted);
 note(s,'K prior concept: https://k-hunting-log.icareu.tw/journey/ accessed 28 Oct 2026. Agentic-Life-World-Zero / Agentic-Life-World-Studio is another product. Originality attachment includes similar public works by the same author. Written organizer clarification is pending.');
}
{
 let s=base('What exists today',9);
 row(s,'YES','Reviewable application materials','Proposal, editable deck, draft schemas, written examples and a source register.',211);
 row(s,'NO','Operating product implementation','No scenario model, video adapter, generated-on-open page or deployed service.',359);
 row(s,'NO','Hardware and performance evidence','No UGen300 integration, device-generated video, latency or power measurements.',507);
 note(s,'The GitHub repository is a proposal and interface-draft repository, not complete prototype source. Contract checks verify internal consistency only. Local concept media uses prior K footage and is excluded from Git.');
}
{
 let s=base('Commercial hypothesis and pilot',10);
 txt(s,'First buyer',64,218,345,50,29,C.green,true);txt(s,'Independent creators\nand small IP teams\nwith established worlds',64,289,345,170,27,C.ink);
 txt(s,'First use case',468,218,345,50,29,C.green,true);txt(s,'An observation page\nlinked from an existing\nworld or story site',468,289,345,170,27,C.ink);
 txt(s,'Possible model',872,218,344,50,29,C.green,true);txt(s,'Creator subscription\nplus metered video use\nor observation credits',872,289,344,170,27,C.ink);
 line(s,64,510,1152);txt(s,'Measure cost per playable clip, retries, visitor return intent and creator effort.',64,546,1120,72,28,C.ink,true);
 note(s,'All customer and pricing statements are hypotheses. No customers, revenue, validated pricing or market-size claims. Unit-cost planning equation and assumptions are in docs/proposal-en.md section 8. No paid service started.');
}
{
 let s=base('Proposed validation and acceptance gates',11);
 cols(s,[['Coherence','20 context combinations × 5 requests. Review species, reference identity and forbidden events.'],['Performance','Measure context, device prompt inference, video backend and total time-to-play separately.'],['User value','Proposed study: 5 creators and 10 visitors. Compare fixed clips with labeled variations.']]);
 txt(s,'Proposed gates: complete provenance, no unapproved species in accepted prompts, honest failures',64,548,1150,88,27,C.green,true);
 note(s,'These are proposed test sizes and gates, not completed studies. p50 and p95 latency, memory, energy boundaries, failures and retries to be collected after implementation. No numeric benchmark exists.');
}
{
 let s=base('Stage II development plan',12);
 const a=[['06–13 Nov','Device and model\ncompatibility baseline'],['14–20 Nov','Context, constraints\nand device prompt step'],['21–27 Nov','Eligible video backend\nand playback integration'],['28 Nov–04 Dec','Evaluation, actual device\ncapture and final evidence']];
 a.forEach(([date,body],i)=>{let y=205+i*103;txt(s,date,64,y,280,48,28,C.green,true);txt(s,body,388,y,800,84,27,C.ink);if(i<3)line(s,64,y+93,1152);});
 note(s,'Proposed plan, not performed work. Official Stage II 6 Nov–4 Dec 2026 and Global Online final deadline 4 Dec. Shortlist 2 Nov per 12 Oct amendment: https://contest.bhuntr.com/tw/39jg9vimiynrhlksze/article/4484/ accessed 28 Oct 2026. Backend cost/rights and split eligibility remain gates.');
}
{
 let s=base('Eligibility and rights decisions',13);
 row(s,'01','Prior public and similar works','The consent warranty includes similar public works by the same author. No old-material exemption is confirmed.',211);
 row(s,'02','Asset and model permissions','Rights must support the organizer’s use, including commercial use and sublicensing for winning work.',359);
 row(s,'03','Owner-only agreement and signature','The author must review perpetual award licensing and name, likeness and voice terms before signing.',507);
 note(s,'Official home section IX and downloaded unsigned rights/portrait consent form accessed 28 Oct 2026. Organizer confirmation pending. No agreement accepted or signature performed. Similarity disclosure alone does not cure ineligibility.');
}
{
 let s=base('Stage I review package and next steps',14,true);
 txt(s,'Review-ready',64,215,470,55,31,C.gold,true);txt(s,'14-page English proposal\nDraft interfaces and examples\nEnglish concept video script\nSource and rights register',64,287,540,225,28,C.paper);
 txt(s,'Owner completion',688,215,500,55,31,C.gold,true);txt(s,'Eligibility and asset clearance\nLegal/contact fields and hardware\nSigned consent PDF\nJudge access and video link',688,287,520,225,28,C.paper);
 txt(s,repo,64,558,1150,45,21,C.mint);
 txt(s,'Private repository. No product source implementation yet.',64,610,1140,35,21,C.mint);
 note(s,'Repository is private and contains proposal materials, not a complete implemented product. Official home '+home+' and amendment accessed 28 Oct 2026. Full source register: sources/official-source-register.md. Scoring: innovation 30, commercial feasibility 35, practical value 25, storytelling 10. Deadline 28 Oct 17:00 Asia/Taipei. Live form PDF limit 15 MB, video optional discrepancy recorded.');
}
await fs.mkdir(workspaceDir+'/.build/slides',{recursive:true});
await fs.mkdir(root+'/deliverables',{recursive:true});
for(const [i,s] of p.slides.items.entries()){
 const blob=await p.export({slide:s,format:'png',scale:1});
 await fs.writeFile(workspaceDir+`/.build/slides/slide-${String(i+1).padStart(2,'0')}.png`,new Uint8Array(await blob.arrayBuffer()));
}
await fs.writeFile(workspaceDir+'/.build/deck-montage.webp',new Uint8Array(await(await p.export({format:'webp',montage:true})).arrayBuffer()));
const candidatePath=workspaceDir+'/.build/candidate.pptx';
await (await PresentationFile.exportPptx(p)).save(candidatePath);
console.log('Rendered and exported 14 slides');
const finalPath=root+'/deliverables/OnDemand-World-Observatory-Proposal-rebuilt.pptx';
const result=await finalizePresentation({workspaceDir,candidatePath,finalPath,
 pythonExecutable:process.env.RUNTIME_PYTHON,
 integrityValidatorPath:SKILL_DIR+'/container_tools/inspect_presentation_package_integrity.py',
 layoutValidatorPath:SKILL_DIR+'/container_tools/inspect_presentation_layout_geometry.py',
 layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-bullet-geometry','--validate-heading-fit'],
 explicitTotalSlideCount:14,requiredNativeTableOwnerSlides:[],requiredNativeChartOwnerSlides:[],
 fontPolicy:{basis:'design',families:[FONT]},verifyArtifactToolImport:true,
 receiptPath:workspaceDir+'/.build/presentation-validation.json'});
console.log(JSON.stringify(result));
