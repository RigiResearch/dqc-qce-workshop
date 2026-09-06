# DQC 2026 — Workshop website

Website for **Distributed Quantum Computing: Alliances, Sandboxes & Emerging Opportunities**
(`WKS-740-QDC-QECS`), a half-day workshop at
[IEEE Quantum Week 2026](https://qce.quantum.ieee.org/2026/) —
Thursday, September 17, 2026, Metro Toronto Convention Centre, Toronto.

Organized by the [Quantum Software Consortium](https://www.qscc.ca) together with IBM Quantum.

Static HTML/CSS/JS — no build step, no dependencies.

---

## Updating the program

**Edit [`program.js`](program.js) and nothing else.** Sessions, times, speakers, organizers and
topics all live there; the page is rendered from that file. Save, refresh, done.

| I want to…                       | Do this in `program.js`                                       |
| -------------------------------- | ------------------------------------------------------------- |
| Change a session's time          | Edit `start` / `end` in that `SESSIONS` entry                  |
| Add or remove a talk             | Add/delete an object in that session's `talks` array           |
| Add a session                    | Copy a whole `SESSIONS` block and edit it                      |
| Mark a slot as not yet filled    | Leave out `speaker` — it renders as "To be announced"          |
| Fill in a speaker later          | Add `speaker`, `affiliation`, and `title` when you have them   |
| Add an abstract for a talk       | Add `abstract` to that talk — optional, and collapsed by default |
| Add a speaker bio                | Add `bio` to that talk — same idea, shown as its own toggle    |
| Show a start time for every talk | Set `showTalkTimes: true` (times are computed from `mins`)     |
| Change the room, venue, links    | Edit the fields at the top of `WORKSHOP`                       |
| Remove the "preliminary" banner  | Set `programNote: ""`                                          |

Talk fields (all optional except `mins`):

```js
{
  speaker: "Jane Doe",                // omit -> "To be announced"
  affiliation: "University of Toronto",
  title: "Title of the talk",         // shown when known
  topic: "Short topic",               // fallback when the title isn't known
  abstract: `Full abstract text.`,    // omit -> no abstract shown
  bio: `Speaker biography.`,          // omit -> no bio shown
  kind: "invited",                    // "invited" or "paper"
  paper: "1848",                      // paper number, for kind: "paper"
  mins: 22,                           // slot length, talk + questions
  note: "Session to be confirmed"     // small caveat chip
}
```

### Abstracts and bios

Both are optional and independent — add either, both, or neither. A talk that has one
shows a small **Abstract** / **Bio** toggle under its title, collapsed by default so the
program stays scannable; talks without them look exactly as they do today. Back-ticks let
the text span several lines, and a blank line starts a new paragraph:

```js
{
  speaker: "Jane Doe",
  affiliation: "University of Toronto",
  title: "Title of the talk",
  kind: "invited",
  mins: 22,
  abstract: `First paragraph. Single line breaks are ignored, so wrap the
  text however is comfortable to read in this file.

  Leave a blank line to start a second paragraph.`,
  bio: `Jane Doe is a professor of ... Same formatting rules as the abstract.`
}
```

The **Speakers** section is generated automatically from the talks — you never edit it directly.

## Preview locally

Open `index.html` in a browser, or:

```bash
python3 -m http.server 8000
```

then visit <http://localhost:8000>.
