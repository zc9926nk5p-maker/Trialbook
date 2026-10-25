# Trialbook

A phone-first companion for IGP dog training. Plan a session, run it with step-by-step reminders,
counters, timers and capture, then review progress later. Works for several dogs in one session.

- Exercise library for BH and IGP 1–3 (tracking, obedience, protection), editable
- Notes, photos, video and voice memos per exercise, with dictation
- Stopwatch and countdown timers (track ageing presets)
- Training calendar, weekly goals, streaks and practice nudges
- Dog profile photos, exercise diagrams, your own reference photos
- Colour themes and light/dark mode
- Installs to your phone's home screen and works offline

The exercise library follows the structure of the FCI IGP regulations (2025 revision) that Canadian clubs
trial under. Always check points, distances and variances against your club's current rulebook, and edit the
library to match. Protection work should only be done with a qualified helper.

## Host it on GitHub Pages

1. Create a new repository on GitHub (for example `trialbook`). Public is fine; Pages on private repos needs a paid plan.
2. Upload everything in this folder to the repository root (drag the files into the web page, or use git).
   Keep the `icons` folder and the `.nojekyll` file.
3. In the repository, open **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**,
   pick `main` and `/ (root)`, then Save.
4. After a minute your app is at `https://<your-username>.github.io/trialbook/`.

Using git instead:

```
git init
git add .
git commit -m "Trialbook"
git branch -M main
git remote add origin https://github.com/<your-username>/trialbook.git
git push -u origin main
```

## Install on your phone

- **iPhone (Safari):** open the link, tap Share, then **Add to Home Screen**.
- **Android (Chrome):** open the link, tap the menu, then **Install app** or **Add to Home screen**.

## Your data

Everything is stored in your browser on the device you use. Nothing is sent anywhere, and there is no account.

- Clearing the browser's site data deletes your data. On the **Dogs** tab, use **Download full backup** now and then. The Session tab reminds you when your last backup is two weeks old.
  The file includes notes, plans, photos, videos and voice memos. Use **Restore from file** to load it on this or another device.
- Each address is separate. If you move the app to a new address (for example a custom domain), restore your backup there.
- Dictation uses your browser's speech recognition and needs a connection. The microphone key on your phone keyboard also works.

## Updating

Replace `index.html` (and `sw.js` if it changed) in the repository. Open the app twice to pick up the new version.
If you change the files the app caches, bump the `V` version string at the top of `sw.js`.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole app (HTML, CSS and JavaScript in one file) |
| `sw.js` | Offline support |
| `manifest.webmanifest` | Home screen install details |
| `logo.svg`, `logo-mark.svg`, `favicon.svg` | Logo files |
| `icons/` | App icons |

## Licence

Add a licence file that suits you (for example MIT) before sharing the repository publicly.
