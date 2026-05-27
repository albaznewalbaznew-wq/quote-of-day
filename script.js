const quotes = [
  { text: "العلم نور والجهل ظلام", author: "مثل عربي" },
  { text: "من جد وجد", author: "مثل عربي" },
  { text: "النجاح ليس نهائياً والفشل ليس قاتلاً", author: "تشرشل" },
  { text: "اقرأ باسم ربك الذي خلق", author: "القرآن الكريم" },
  { text: "الوقت كالسيف إن لم تقطعه قطعك", author: "مثل عربي" }
];

function newQuote() {
  const r = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').textContent = quotes[r].text;
  document.getElementById('author').textContent = '— ' + quotes[r].author;
}

newQuote();
