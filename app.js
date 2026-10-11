// ضع نص الرسالة والنص الأخير هنا عندما ترسلهما.
const ACCESS_KEY = "1#7@12/12::W:32/_A5.Zz::22Ex114mQ";
const TRANSACTION_NUMBER = "396654428266653";
const MAIN_MESSAGE = "[ضع الرسالة التي سترسلها هنا لاحقًا]";
const FINAL_MESSAGE = "[ضع النص الصغير الأخير هنا لاحقًا]";
document.getElementById("mainmessage").textContent=MAIN_MESSAGE;
document.getElementById("finalmessage").textContent=FINAL_MESSAGE;
const ids=["key","message","transaction","final"], bars=[...document.querySelectorAll(".progress i")];
function show(id){ids.forEach((x,i)=>{document.getElementById(x).classList.toggle("active",x===id);bars[i].classList.toggle("on",i<=ids.indexOf(id))})}
document.getElementById("keyform").addEventListener("submit",e=>{e.preventDefault();const err=document.getElementById("keyerror");if(document.getElementById("keyinput").value===ACCESS_KEY){err.textContent="";document.getElementById("keyinput").value="";show("message")}else err.textContent="المفتاح غير صحيح. راجع الكتابة وحاول مرة أخرى."});
document.getElementById("review").onclick=()=>show("transaction");
document.getElementById("backkey").onclick=()=>show("key");
document.getElementById("backmessage").onclick=()=>show("message");
document.getElementById("transform").addEventListener("submit",e=>{e.preventDefault();const err=document.getElementById("transerror");if(document.getElementById("transinput").value===TRANSACTION_NUMBER){err.textContent="";document.getElementById("transinput").value="";show("final")}else err.textContent="رقم العملية غير صحيح. حاول مرة أخرى."});
document.getElementById("restart").onclick=()=>{["keyinput","transinput"].forEach(id=>document.getElementById(id).value="");["keyerror","transerror"].forEach(id=>document.getElementById(id).textContent="");show("key")};
