
"use strict";

const ACCESS_KEY = "1#7@12/12::W:32/_A5.Zz::22Ex114mQ";
const TRANSACTION_NUMBER = "396654428266653";

const MAIN_MESSAGE =
  "اهلا بكم في مشفر\n" +
  "يرجي دفع المديونيه التي وصلت قيمتها حتي الان الي 2869.84$ وادخال رقم العمليه حتي يتم استلام البينات المخزنه لدينا.";

const FINAL_MESSAGE = "تم المسح بنجاح";

const $ = (id) => document.getElementById(id);
const ids = ["key", "message", "transaction", "final"];

function show(id) {
  ids.forEach((name, index) => {
    const panel = $(name);
    if (panel) panel.classList.toggle("active", name === id);

    const bar = document.querySelectorAll(".progress i")[index];
    if (bar) bar.classList.toggle("on", index <= ids.indexOf(id));
  });
}

const main = $("mainmessage");
if (main) {
  main.replaceChildren();
  const text = MAIN_MESSAGE.split("2869.84$");
  main.append(document.createTextNode(text[0]));

  const amount = document.createElement("span");
  amount.className = "highlight-amount";
  amount.textContent = "2869.84$";
  main.append(amount);

  if (text.length > 1) {
    main.append(document.createTextNode(text.slice(1).join("2869.84$")));
  }
}

if ($("finalmessage")) {
  $("finalmessage").textContent = FINAL_MESSAGE;
}

$("keyform")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = $("keyinput");
  const error = $("keyerror");
  if (!input || !error) return;

  if (input.value === ACCESS_KEY) {
    error.textContent = "";
    input.value = "";
    show("message");
  } else {
    error.textContent = "المفتاح غير صحيح. حاول مرة أخرى.";
  }
});

$("review")?.addEventListener("click", () => show("transaction"));
$("backkey")?.addEventListener("click", () => show("key"));
$("backmessage")?.addEventListener("click", () => show("message"));

$("transform")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = $("transinput");
  const error = $("transerror");
  if (!input || !error) return;

  if (input.value === TRANSACTION_NUMBER) {
    error.textContent = "";
    input.value = "";
    show("final");
  } else {
    error.textContent = "رقم العملية غير صحيح. حاول مرة أخرى.";
  }
});

$("restart")?.addEventListener("click", () => {
  ["keyinput", "transinput"].forEach((id) => {
    if ($(id)) $(id).value = "";
  });
  ["keyerror", "transerror"].forEach((id) => {
    if ($(id)) $(id).textContent = "";
  });
  show("key");
});

show("key");
