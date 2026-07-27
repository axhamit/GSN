# Storing enquiry form submissions in Google Sheets

Form submissions from `EnrollmentForm` are posted to `/api/enquiry`, which forwards them to a
Google Apps Script Web App bound to a Google Sheet.

## 1. Prepare the sheet

Target sheet:
https://docs.google.com/spreadsheets/d/1SVddjQRHf3oQbtD5Kll18rav_DILUOl9XneEJ_77gEI/edit

Add this header row in row 1:

```
Timestamp | Name | Email | Phone | Message | Course | Course Price | Source
```

## 2. Add the Apps Script

In the sheet: **Extensions → Apps Script**, replace the contents of `Code.gs` with:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
  var data = JSON.parse(e.postData.contents)

  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.name || '',
    data.email || '',
    data.phone || '',
    data.message || '',
    data.courseName || '',
    data.coursePrice || '',
    data.source || '',
  ])

  return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(
    ContentService.MimeType.JSON
  )
}
```

## 3. Deploy it

**Deploy → New deployment → Web app**

- Execute as: **Me**
- Who has access: **Anyone**

Copy the resulting `https://script.google.com/macros/s/.../exec` URL.

## 4. Configure the app

Local development — create `.env.local`:

```
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
```

Production (Vercel/Netlify): add `GOOGLE_SHEETS_WEBHOOK_URL` as an environment variable and redeploy.

Without this variable, `/api/enquiry` returns a 500 and the form shows an error, so the value must be
set in every environment where the form is used.
