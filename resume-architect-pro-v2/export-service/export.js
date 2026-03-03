
import puppeteer from "puppeteer";

const version = process.argv[2] || "balanced";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:5173", { waitUntil: "networkidle0" });

  await page.pdf({
    path: `resume-${version}.pdf`,
    format: "A4",
    printBackground: true
  });

  await browser.close();
})();
