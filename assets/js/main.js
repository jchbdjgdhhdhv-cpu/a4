(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
var E=[['minaudi&egrave;re or box clutch','Something rigid and polished. Black tie is the time for the most special bag you own.'],['envelope or frame clutch','Elegant but not louder than the couple. Avoid white or cream.'],['envelope clutch with a hidden chain','Neat for the table, and the chain frees your hands later.'],['wristlet or pouch on a chain','Hands-free for dancing; zip or kiss-lock to keep things in.'],['structured leather envelope','Smart and understated; fits a phone and cardholder easily.'],['raffia, straw or pleated pouch','Light, summery textures in soft colours.']];
var CO=[['gold or a bold jewel tone','A metallic or a strong colour lifts all-black.','#D4AF37'],['nude, soft gold or a pastel','Gentle contrast keeps the look fresh.','#D9B99B'],['black, nude or metallic','Let the dress lead; a neutral clutch balances it.','#1B1B1B'],['metallic, or cream for contrast','Metals sit beautifully against cool colours.','#C0C0C0'],['a solid colour from the print','Pick one shade from the pattern.','#0F5E4E'],['plain satin or matte black','Do not compete with the sparkle.','#2A2A2A']];
var MT=['gold','silver','gold or silver to taste'];
var me=$('mt-e');if(me){var mc=$('mt-c'),mm=$('mt-m');function mt(){var e=E[+me.value],c=CO[+mc.value],m=MT[+mm.value],col=c[2];if(+mc.value===0||+mc.value===3){col=+mm.value===1?'#C0C0C0':'#D4AF37';}
  $('mt-o').innerHTML='<div class="sw" style="background:'+col+'"></div><h3>A '+e[0]+'</h3><p>'+e[1]+'</p><ul><li><b>Colour:</b> '+c[0]+'. '+c[1]+'</li><li><b>Hardware:</b> '+m+', to match your jewellery.</li></ul>';}
 [me,mc,mm].forEach(function(x){x.addEventListener('change',mt);});mt();}
var cb=[].slice.call(document.querySelectorAll('.cl-items input'));if(cb.length){var fp=$('ft-p');function ft(){var n=0;cb.forEach(function(c){if(c.checked)n+=+c.value;});var ph=+fp.value;n+=ph;var lv=n<=6?0:n<=10?1:n<=14?2:3,S=[['A small minaudi&egrave;re or wristlet','A tiny case works for these few things.'],['An envelope or frame clutch','A standard clutch closes comfortably.'],['A large envelope or soft pouch','Look for an inside width of at least 20&ndash;24 cm.'],['Too much for a clutch','Leave something in a coat pocket, or choose a small shoulder bag.']],cap=[8,11,15,18][Math.min(lv,3)],pct=Math.min(1,n/18);
  var f=$('fill'),h=140*pct;f.setAttribute('y',200-h);f.setAttribute('height',h);f.setAttribute('fill',lv===3?'#A33':'#D4AF37');$('cap').setAttribute('y1',200-140*(cap/18));$('cap').setAttribute('y2',200-140*(cap/18));
  $('ft-o').innerHTML='<strong>'+S[lv][0]+'</strong><p>'+S[lv][1]+(ph===2&&lv<3?' Check the inside width fits your phone.':'')+'</p>';}
 cb.forEach(function(c){c.addEventListener('change',ft);});fp.addEventListener('change',ft);ft();}
})();
