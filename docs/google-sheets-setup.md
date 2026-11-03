# Storing enquiry form submissions in Google Sheets

All website enquiry and brochure forms post to `/api/enquiry`. The API forwards each submission to
a Google Apps Script Web App bound to the target Google Sheet. Each row records the submitted
details, course, form source, and the page path where the form was submitted.

## 1. Prepare the sheet

Target sheet:
https://docs.google.com/spreadsheets/d/1tS-k8wVbUvIZiPCO5D5NMxWWuMXRaiGuY3j-1KGlYKo/edit

The script writes to the first sheet tab. Make sure row 1 has these headers in this order (the script
adds them automatically if the tab is empty):

```
Timestamp | Name | Email | Phone | Message | Course | Course Slug | Course Price | Form Source | Page URL | Page Path | Referrer URL
```

## 2. Add the Apps Script

In the sheet: **Extensions → Apps Script**, replace the contents of `Code.gs` with:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
  var data = JSON.parse(e.postData.contents)

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Timestamp',
      'Name',
      'Email',
      'Phone',
      'Message',
      'Course',
      'Course Slug',
      'Course Price',
      'Form Source',
      'Page URL',
      'Page Path',
      'Referrer URL',
    ])
  }

  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.name || '',
    data.email || '',
    data.phone || '',
    data.message || '',
    data.courseName || '',
    data.courseSlug || '',
    data.coursePrice ?? '',
    data.source || '',
    data.pageUrl || '',
    data.pagePath || '',
    data.referrerUrl || '',
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

Local development — `.env.local` is configured with the deployed webhook URL:

```
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
```

Production (Vercel/Netlify): add the same `GOOGLE_SHEETS_WEBHOOK_URL` environment variable in the
hosting dashboard and redeploy. `.env.local` is git-ignored and does not configure production.

The deployment URL must be copied into `GOOGLE_SHEETS_WEBHOOK_URL` in every environment where the
forms are used. Without it, `/api/enquiry` returns an error and does not report a successful
submission. The API also requires the webhook to return JSON containing `{ "success": true }` before
it redirects the user or starts the brochure download.

`Page URL` and `Page Path` are derived from the form submission's browser referrer, with query
parameters removed. `Form Source` identifies the form surface (for example, `ai-course-page` or
`career-launch-course-page`).
