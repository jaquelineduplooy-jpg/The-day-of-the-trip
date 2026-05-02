/**
 * Don 70 Forever Scrapbook backend
 *
 * HOW TO USE:
 * 1. Create a Google Sheet called "Don 70 Memories".
 * 2. Add headers in row 1:
 *    createdAt | name | message | photo | type
 * 3. Go to Extensions -> Apps Script.
 * 4. Paste this file.
 * 5. Deploy -> New deployment -> Web app.
 * 6. Execute as: Me.
 * 7. Who has access: Anyone.
 * 8. Copy the Web App URL.
 * 9. Paste that URL into index.html:
 *    CONFIG.MEMORY_ENDPOINT = "YOUR_WEB_APP_URL";
 */

const SHEET_NAME = "Sheet1";

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    sheet.appendRow([
      body.createdAt || new Date().toISOString(),
      body.name || "",
      body.message || "",
      body.photo || "",
      body.type || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const rows = sheet.getDataRange().getValues();
  const headers = rows.shift();

  const data = rows.map(row => {
    const obj = {};
    headers.forEach((h, i) => obj[h] = row[i]);
    return obj;
  });

  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
