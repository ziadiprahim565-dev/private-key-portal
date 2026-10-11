
"use strict";

// بيانات الواجهة التجريبية
const ACCESS_KEY = "1#7@12/12::W:32/_A5.Zz::22Ex114mQ";
const TRANSACTION_NUMBER = "396654428266653";

const MAIN_MESSAGE = `أهلاً بكم في مشفر
هذه واجهة تجريبية لعرض رسالة خاصة.
المبلغ الظاهر أدناه مثال توضيحي وليس مطالبة مالية حقيقية: 2869.84$`;

const FINAL_MESSAGE = "تم المسح بنجاح";

const get = (id) => document.getElementById(id);

const pageIds = ["key", "message", "transaction", "final"];
const bars = [...document.querySelectorAll(".progress i")];

// عرض الصفحة وتحديث شريط التقدم
function show(pageId) {
  pageIds.forEach((id, index) => {
    const page = get(id);
    if (page) {
      page.classList.toggle("active", id === pageId);
    }

    if (bars[index]) {
      bars[index].classList.toggle(
        "on",
        index <= pageIds.indexOf(pageId)
      );
    }
  });
}

// عرض الرسالة مع تلوين المبلغ
function renderMainMessage() {
  const element = get("mainmessage");
  if (!element) return;

  element.replaceChildren();

  const amountText = "2869.84$";
  const parts = MAIN_MESSAGE.split(amountText);

  parts.forEach((part, index) => {
    if (part) {
      element.append(document.createTextNode(part));
    }

    if (index < parts.length - 1) {
      const amount = document.createElement("span");
      amount.className = "highlight-amount";
      amount.textContent = amountText;
      element.append(amount);
    }
  });
}

// عرض العبارة النهائية
function renderFinalMessage() {
  const element = get("finalmessage");
  if (element) {
    element.textContent = FINAL_MESSAGE;
  }
}

// التحقق من المفتاح
get("keyform")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = get("keyinput");
  const error = get("keyerror");

  if (!input || !error) return;

  if (input.value === ACCESS_KEY) {
    error.textContent = "";
    input.value = "";
    show("message");
  } else {
    error.textContent =
      "المفتاح غير صحيح. راجع الكتابة وحاول مرة أخرى.";
  }
});

// التنقل بين الصفحات
get("review")?.addEventListener("click", () => {
  show("transaction");
});

get("backkey")?.addEventListener("click", () => {
  show("key");
});

get("backmessage")?.addEventListener("click", () => {
  show("message");
});

// التحقق من رقم العملية التجريبي
get("transform")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = get("transinput");
  const error = get("transerror");

  if (!input || !error) return;

  if (input.value === TRANSACTION_NUMBER) {
    error.textContent = "";
    input.value = "";
    show("final");
  } else {
    error.textContent =
      "رقم العملية غير صحيح. حاول مرة أخرى.";
  }
});

// العودة إلى البداية
get("restart")?.addEventListener("click", () => {
  const keyInput = get("keyinput");
  const transactionInput = get("transinput");
  const keyError = get("keyerror");
  const transactionError = get("transerror");

  if (keyInput) keyInput.value = "";
  if (transactionInput) transactionInput.value = "";
  if (keyError) keyError.textContent = "";
  if (transactionError) transactionError.textContent = "";

  show("key");
});

// تشغيل الواجهة
renderMainMessage();
renderFinalMessage();
show("key");
