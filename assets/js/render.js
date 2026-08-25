/* ==========================================================================
   DQC 2026 — renderer
   Reads WORKSHOP / SESSIONS / ORGANIZERS / TOPICS from program.js and builds
   the page. You should not need to touch this file to update the workshop.
   ========================================================================== */

(function () {
  "use strict";

  /* --------------------------- small helpers ---------------------------- */
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  const toMinutes = (hhmm) => {
    const m = /^(\d{1,2}):(\d{2})$/.exec(String(hhmm || "").trim());
    return m ? (+m[1]) * 60 + (+m[2]) : null;
  };

  const toClock = (mins) =>
    String(Math.floor(mins / 60)).padStart(2, "0") + ":" + String(mins % 60).padStart(2, "0");

  const initials = (name) => {
    const parts = String(name).replace(/\(.*?\)/g, "").trim().split(/\s+/);
    const first = parts[0] || "";
    const last = parts.length > 1 ? parts[parts.length - 1] : "";
    return ((first[0] || "") + (last[0] || "")).toUpperCase();
  };

  /* ------------------- static fields from WORKSHOP ---------------------- */
  function fillMeta() {
    document.querySelectorAll("[data-w]").forEach((node) => {
      const value = WORKSHOP[node.dataset.w];
      if (value != null && value !== "") node.textContent = value;
    });

    document.querySelectorAll("[data-w-href]").forEach((node) => {
      const value = WORKSHOP[node.dataset.wHref];
      if (value) node.setAttribute("href", value);
    });

    const contact = document.getElementById("contact-link");
    if (contact && WORKSHOP.contactEmail) {
      contact.href = "mailto:" + WORKSHOP.contactEmail;
      contact.textContent = WORKSHOP.contactEmail;
    }

    document.title =
      WORKSHOP.shortTitle + " — " + WORKSHOP.title + " @ " + WORKSHOP.conferenceName;
  }

  /* ------------------------------ topics -------------------------------- */
  function renderTopics() {
    const list = document.getElementById("topics");
    if (!list || typeof TOPICS === "undefined") return;
    TOPICS.forEach((t) => list.appendChild(el("li", null, t)));
  }

  /* ----------------------------- program -------------------------------- */
  function renderTalk(talk, clock) {
    const row = el("li", "talk" + (talk.speaker ? "" : " is-tba"));

    /* when: a computed start time, or the length of the slot */
    const when = el("div", "talk-when");
    if (WORKSHOP.showTalkTimes && clock != null) {
      when.textContent = toClock(clock) + (talk.mins ? "–" + toClock(clock + talk.mins) : "");
    } else if (talk.mins) {
      when.textContent = talk.mins + " min";
    }
    row.appendChild(when);

    /* who + what */
    const body = el("div", "talk-body");
    const name = el("div", "talk-name");
    if (talk.speaker) {
      name.appendChild(document.createTextNode(talk.speaker));
      if (talk.affiliation) name.appendChild(el("span", "talk-aff", talk.affiliation));
    } else {
      name.textContent = "To be announced";
    }
    body.appendChild(name);

    const detail = talk.title || talk.topic;
    if (detail) body.appendChild(el("p", "talk-topic", detail));
    if (talk.note) body.appendChild(el("span", "talk-note", talk.note));
    row.appendChild(body);

    /* tag */
    const isPaper = talk.kind === "paper";
    const tag = el(
      "span",
      "talk-tag" + (isPaper ? " is-paper" : ""),
      isPaper ? (talk.paper ? "Paper " + talk.paper : "Paper") : "Invited"
    );
    row.appendChild(tag);

    return row;
  }

  function renderSessions() {
    const root = document.getElementById("schedule");
    if (!root || typeof SESSIONS === "undefined") return;

    SESSIONS.forEach((session) => {
      const card = el("article", "session");
      card.id = (session.label || "session").toLowerCase().replace(/[^a-z0-9]+/g, "-");

      const head = el("header", "session-head");
      if (session.label) head.appendChild(el("span", "session-label", session.label));
      if (session.start) {
        head.appendChild(
          el("span", "session-time", session.start + (session.end ? " – " + session.end : ""))
        );
      }
      if (session.title) head.appendChild(el("h3", "session-title", session.title));
      if (session.summary) head.appendChild(el("p", "session-summary", session.summary));
      card.appendChild(head);

      const list = el("ul", "talks");
      let clock = toMinutes(session.start);
      (session.talks || []).forEach((talk) => {
        const start = toMinutes(talk.time);
        if (start != null) clock = start;              // an explicit time resets the clock
        list.appendChild(renderTalk(talk, clock));
        if (clock != null && talk.mins) clock += talk.mins;
      });
      card.appendChild(list);
      root.appendChild(card);

      if (session.breakAfter) {
        const b = session.breakAfter;
        const gap = el("div", "gap");
        const time = [b.start, b.end].filter(Boolean).join(" – ");
        gap.appendChild(el("span", null, time ? b.label + " · " + time : b.label));
        root.appendChild(gap);
      }
    });
  }

  /* ----------------------------- speakers ------------------------------- */
  function renderSpeakers() {
    const grid = document.getElementById("speakers-grid");
    if (!grid || typeof SESSIONS === "undefined") return;

    const seen = new Set();
    let openSlots = 0;

    SESSIONS.forEach((session) => {
      (session.talks || []).forEach((talk) => {
        if (!talk.speaker) { openSlots++; return; }
        const key = talk.speaker.toLowerCase();
        if (seen.has(key)) return;
        seen.add(key);

        const item = el("li", "speaker");
        item.appendChild(el("span", "avatar", initials(talk.speaker)));
        const meta = el("div");
        meta.appendChild(el("div", "speaker-name", talk.speaker));
        if (talk.affiliation) meta.appendChild(el("div", "speaker-aff", talk.affiliation));
        item.appendChild(meta);
        grid.appendChild(item);
      });
    });

    if (openSlots > 0) {
      grid.appendChild(
        el(
          "li",
          "speaker is-more",
          openSlots === 1 ? "1 more speaker to be announced" : openSlots + " more speakers to be announced"
        )
      );
    }
  }

  /* ---------------------------- organizers ------------------------------ */
  function renderOrganizers() {
    const grid = document.getElementById("organizers-grid");
    if (!grid || typeof ORGANIZERS === "undefined") return;

    ORGANIZERS.forEach((person) => {
      const item = el("li", "organizer");
      item.appendChild(el("div", "o-name", person.name));
      if (person.affiliation) item.appendChild(el("div", "o-aff", person.affiliation));
      if (person.focus) item.appendChild(el("p", "o-focus", person.focus));
      grid.appendChild(item);
    });
  }

  /* -------------------------------- go ---------------------------------- */
  function init() {
    if (typeof WORKSHOP === "undefined") {
      console.error("program.js did not load — the page cannot be rendered.");
      return;
    }
    fillMeta();
    renderTopics();
    renderSessions();
    renderSpeakers();
    renderOrganizers();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
