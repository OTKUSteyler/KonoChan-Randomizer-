(function(i,r,s){"use strict";const c=async function(t){const e="https://konachan.com/post.json",o=t?"rating:explicit":"rating:safe",a=Math.floor(Math.random()*100);try{const n=await(await fetch(`${e}?tags=${o}&limit=1&page=${a}`)).json();return!Array.isArray(n)||n.length===0?null:n[0].file_url}catch(n){return console.error("[KonoChan Randomizer] Error fetching image:",n),null}},{sendBotMessage:d}=s.findByProps("sendBotMessage");let m=r.registerCommand({name:"konoSelf",displayName:"konoSelf",description:"Fetch a random image from KonoChan for yourself.",displayDescription:"Fetch a random image from KonoChan for yourself.",options:[{name:"nsfw",description:"Include NSFW content?",type:5,required:!1,displayName:"nsfw",displayDescription:"Include NSFW content?"}],execute:async function(t,e){const o=new Map(t.map(function(n){return[n.name,n]})).get("nsfw")?.value||!1,a=await c(o);if(!a){d(e.channel.id,"No image found. Try again later.");return}d(e.channel.id,`Here's your random image: ${a}`)},applicationId:"-1",inputType:1,type:1});const{sendBotMessage:l}=s.findByProps("sendBotMessage");let u=r.registerCommand({name:"konoSend",displayName:"konoSend",description:"Fetch a random image from KonoChan and send it to the channel.",displayDescription:"Fetch a random image from KonoChan and send it to the channel.",options:[{name:"nsfw",description:"Include NSFW content?",type:5,required:!1,displayName:"nsfw",displayDescription:"Include NSFW content?"}],execute:async function(t,e){const o=new Map(t.map(function(n){return[n.name,n]})).get("nsfw")?.value||!1;if(o&&!e.channel.nsfw_){l(e.channel.id,"This channel is not marked as NSFW. Use an NSFW channel instead.");return}const a=await c(o);if(!a){l(e.channel.id,"No image found. Try again later.");return}return{content:`: ${a}`}},applicationId:"-1",inputType:1,type:1});const f=function(){console.log("[KonoChan Randomizer] Plugin loaded!")},p=function(){m(),u(),console.log("[KonoChan Randomizer] Plugin unloaded!")};return i.onLoad=f,i.onUnload=p,i})({},vendetta.commands,vendetta.metro);
