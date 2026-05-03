# Final Reveal Site Setup Steps

## Step 1: Confirm backend has GET support

Your Apps Script must support this URL:

https://script.google.com/macros/s/AKfycbxX9tzOQ4gq5w7KoaQ8zIZt8CXyitdaRVDTH7sChYbq5xvmbDU9xfyxq-dftk7smYJD/exec?type=memories

Open it in a browser.

Expected response:

If no approved memories yet:
{"ok":true,"memories":[]}

If approved memories exist:
{"ok":true,"memories":[...]}

If you get an error, your Apps Script code still needs the doGet/getApprovedMemories function.

---

## Step 2: Approve memories in the Google Sheet

Open your Sheet.

Go to the Memories tab.

For any memory you want visible in the reveal, set:

approved = TRUE

Important:
- Memories with approved = FALSE will stay hidden.
- This is good because it lets you review before reveal.

---

## Step 3: Check photos

Go to the Photos tab.

Photos default to:

approved = TRUE

To hide a specific photo, set:

approved = FALSE

---

## Step 4: Deploy reveal site

Use the package:

don70_final_reveal_live_backend.zip

Upload to GitHub / Vercel as a separate project, for example:

don70-memories-journal.vercel.app

---

## Step 5: Test live connection

Open the reveal site.

At the top it should say one of these:

1. "Live archive connected — X approved memories loaded"
2. "No approved memories yet — showing sample layout"

If it shows sample layout:
- approve a memory in the Memories tab
- refresh the reveal site

---

## Step 6: Party day process

Before party:
- Review Memories tab.
- Set approved = TRUE for entries you want shown.
- Hide any photo by setting Photos.approved = FALSE.

On party day:
- Open the reveal site.
- Click Open Don’s Story.
- Use slideshow mode if displaying on a screen.

---

## Step 7: Recommended URLs

Invite site:
https://boarding-card-for-don.vercel.app

Memory direct link:
https://boarding-card-for-don.vercel.app/#memory-submit

Reveal site:
Use a new Vercel project, for example:
https://don70-memories-journal.vercel.app
