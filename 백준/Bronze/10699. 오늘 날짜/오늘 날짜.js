let today = new Date();
const kst = today.getTime() + 9 * 60 * 60 * 1000;
const today_kst = new Date(kst);

console.log(
  today_kst.getFullYear() +
    "-" +
    (today_kst.getMonth() + 1 < 9
      ? "0" + (today_kst.getMonth() + 1)
      : today_kst.getMonth() + 1) +
    "-" +
    (today_kst.getDate() < 9 ? "0" + today_kst.getDate() : today.kst.getDate())
);
