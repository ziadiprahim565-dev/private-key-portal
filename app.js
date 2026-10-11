
const ACCESS_KEY = "1#7@12/12::W:32/_A5.Zz::22Ex114mQ";
const TRANSACTION_NUMBER = "396654428266653";

const MAIN_MESSAGE = `اهلا بكم في مشفر
يرجي دفع المديونيه التي وصلت قيمتها حتي الان الي 2869.84$ وادخال رقم العمليه حتي يتم استلام البينات المخزنه لدينا.`;

const FINAL_MESSAGE = "[ضع النص الصغير الأخير هنا لاحقًا]";

const get = (id) => document.getElementById(id);

const ids = ["key", "message", "transaction", "final"];
const bars = [...document.querySelectorAll(".progress i")];

function show(id) {
  ids.forEach((pageId, index) => {
    const page = get(pageId);
    if (page) page.classList.toggle("active", pageId === id);
  });

  bars.forEach((bar, index) => {
    bar.classList.toggle("on", index <= ids.indexOf(id));
  });
}

// عرض الرسالة مع تلوين المبلغ بالأزرق
const messageElement = get("mainmessage");

if (messageElement) {
  messageElement.replaceChildren();

  const parts = MAIN_MESSAGE.split("2869.84$");
  messageElement.append(document.createTextNode(parts[0]));

  const amount = document.createElement("span");
  amount.className = "highlight-amount";
  amount.textContent = "2869.84$";
  messageElement.append(amount);

  messageElement.append(
    document.createTextNode(parts.slice(1).join("2869.84$"))
  );
}

if (get("finalmessage")) {
  get("finalmessage").textContent = FINAL_MESSAGE;
}

// التحقق من المفتاح
get("keyform")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const error = get("keyerror");
  if (get("keyinput").value === ACCESS_KEY) {
    error.textContent = "";
    get("keyinput").value = "";
    show("message");
  } else {
    error.textContent = "المفتاح غير صحيح. راجع الكتابة وحاول مرة أخرى.";
  }
});

// الانتقال بين الصفحات
get("review")?.addEventListener("click", () => show("transaction"));
get("backkey")?.addEventListener("click", () => show("key"));
get("backmessage")?.addEventListener("click", () => show("message"));

// التحقق من رقم العملية
get("transform")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const error = get("transerror");
  if (get("transinput").value === TRANSACTION_NUMBER) {
    error.textContent = "";
    get("transinput").value = "";
    show("final");
  } else {
    error.textContent = "رقم العملية غير صحيح. حاول مرة أخرى.";
  }
});

// العودة للبداية
get("restart")?.addEventListener("click", () => {
  get("keyinput").value = "";
  get("transinput").value = "";
  get("keyerror").textContent = "";
  get("transerror").textContent = "";
  show("key");
});
