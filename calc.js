/* ===== EASY SETTINGS: change these if the Sacco's rules are different ===== */
var LOANS = {
  emergency:   { name: "Emergency loan",    rate: 5 },
  development: { name: "Development loan",  rate: 2 },
  school:      { name: "School fees loan",  rate: 2 }
};
var RATE_PERIOD = "month";   // "month" = rate is charged each month, "year" = rate is per year
var METHOD = "reducing";     // "reducing" = interest on the balance left, "flat" = interest on the full amount
var MAX_MONTHS = 60;
/* ========================================================================= */
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var sel = $("loan-type"), amt = $("loan-amount"), mon = $("loan-months"), out = $("calc-result"), err = $("calc-error");
  if (!sel) return;
  function money(n) { return "KES " + Math.round(n).toLocaleString("en-KE"); }
  function showRate() {
    var l = LOANS[sel.value];
    $("rate-note").textContent = l.name + ": " + l.rate + "% per " + RATE_PERIOD + ", " +
      (METHOD === "reducing" ? "on the reducing balance." : "flat on the amount borrowed.");
  }
  function calc() {
    var l = LOANS[sel.value], P = parseFloat(amt.value), n = parseInt(mon.value, 10);
    err.textContent = ""; out.hidden = true;
    if (!(P > 0)) { err.textContent = "Please enter the amount you want to borrow."; amt.focus(); return; }
    if (!(n >= 1 && n <= MAX_MONTHS)) { err.textContent = "Please enter a repayment period from 1 to " + MAX_MONTHS + " months."; mon.focus(); return; }
    var r = l.rate / 100 / (RATE_PERIOD === "year" ? 12 : 1), pay, total;
    if (METHOD === "flat") {
      var i = P * (l.rate / 100) * (RATE_PERIOD === "year" ? n / 12 : n);
      total = P + i; pay = total / n;
    } else {
      pay = r === 0 ? P / n : P * r / (1 - Math.pow(1 + r, -n));
      total = pay * n;
    }
    $("r-pay").textContent = money(pay);
    $("r-int").textContent = money(total - P);
    $("r-tot").textContent = money(total);
    $("r-sum").textContent = l.name + " of " + money(P) + " over " + n + (n === 1 ? " month" : " months") + ".";
    out.hidden = false;
  }
  sel.addEventListener("change", function () { showRate(); out.hidden = true; });
  $("calc-form").addEventListener("submit", function (e) { e.preventDefault(); calc(); });
  showRate();
})();
