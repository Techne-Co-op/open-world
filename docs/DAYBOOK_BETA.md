# The Daybook

**A collective journaling instrument — public beta specification**

| | |
|---|---|
| Version | beta v3 · unadopted, undeployed |
| Running artifact | `daybook-beta-v3.html` (single file; the prototype is canonical for behavior) |
| Companions | `READERS_INSTRUCTIONS.md` v3 · `DAYBOOK_PRD.md` · schema v0 · *The Second Generation* register |
| Grounded in | techne.coop `/commonplace` · `/daybook` · `open-world` · the authority map |
| Date | August 2026 · Boulder, Colorado |

One journal, read seven ways. Everything enters through the pen; nothing is ever edited or erased. A background reader proposes; a member always disposes.

**What changed in v3.** The schema and every loop are unchanged. This revision is the interface: typography made semantic (§5), three honest elevations, one orchestrated motion moment, the address rendered as a frank, and the native-feel mechanics current PWA practice calls for — drag-dismiss, drafts, skeletons, scroll restoration, installability.

---

## 1 · What it is, in one paragraph

Most tools remember *for* you, and a few remember *about* you. Almost nothing lets a group remember *together* in a way that holds up under dispute. The Daybook is a shared, append-only journal where members write plainly, a machine reader proposes what each entry was and what it continues, and the member has the last word. Its promise is not productivity but trustworthiness of memory over time: when someone asks *why did we decide this, who said so, and what did we learn*, the answer is one address away, and nobody had to be the historian.

**What it is not.** Not a project tracker, not a wiki (wikis edit in place), not an AI workspace — machine-drafted text is a labeled provenance class, never the author.

---

## 2 · Three inherited commitments

Taken as constraints, not choices, from the open-world articulation:

1. **One information system.** The CIS (Supabase Postgres, RLS-governed) is the single source of truth. The Daybook is a second door onto the same record — it invents no permission and holds no data of its own. The app caches its shell and never the record.
2. **The authority map governs.** `visible(agent, record) = f(role, record class, governing §)`. A capability the map does not ground is a stop card, not a feature.
3. **A standing is a fold** over events, with no stored balance anywhere, seen only by its own subject.

To which the Daybook adds, from the register: **the log is the journal, and every state is a fold over it.**

---

## 3 · The schema

One growing table; everything else is identity, vocabulary, or computation. *(Unchanged since v0 except as D-01 and D-03 amend it: no `class` on `agents`, and `inference.proposed` is a staging shape rather than an event kind.)* In the CIS these relations carry a `beta_` prefix (techne.coop `supabase/migrations/0040_daybook_beta.sql`) and are not record classes: nothing in them is cited by an instrument or adopted, and the whole surface drops in one statement.

### agents
*Home: CIS. The Daybook adds nothing.*

| field | meaning |
|---|---|
| `id · name` | as the CIS holds them. Membership class lives on the membership row and appointments in `role_grants`, per the authority map §3. **The reader is not a row here** — it holds no role and no grant (D-01). |

### events — *the one growing table*

| field | meaning |
|---|---|
| `id · at · agent_id` | who, when. **No `updated_at` exists** — rows are never edited; corrections are new rows. |
| `kind` | the event grammar (below) |
| `body` | entry text, or the payload the kind needs — the reader's proposal and its reasons carried as provenance, sealed criteria as a hash, a warrant. A correction carries the proposal it rejected, verbatim, so a refusal survives its refusal. Reasons stored in member-legible terms, never only a score. |
| `about_event_id` | confirmation or correction → entry, resolution → wager. The chain is the audit. |
| `address` | the citable §-address, assigned at append, permanent. |

**Event kinds.** `entry.written` · `inference.confirmed` · `inference.corrected` · `thread.named` · `thread.joined` · `thread.merged` · `thread.split` · `thread.rested` · `wager.sealed` · `wager.resolved` · `question.owned` · `question.resolved` · `contest.filed` · `gathering.held` · `demo.promised` · `demo.reported` · `rereading.held` · `curation.shelved`

### edges

| field | meaning |
|---|---|
| `from_event · rel · to` | `mentions` (event → agent, resolved or proposed) · `cites` (event → event address) |

### threads

| field | meaning |
|---|---|
| `id · name · named_by` | a row exists only once a member names it. **No state column** — alive, dormant, and membership are folds. A forming thread is not here at all; it is only a staged inference, which is not in `events` either until a member acts on it. |

### terms

| field | meaning |
|---|---|
| `term · first_event_id` | a word joins by use. Voices, counts, and spread are folds; shared vs one-voice is computed, never assigned. |

### Deliberately not tables

Obligations (The Open is a fold). Balances and shares. Thread state. Notification queues. Training weights — the reader's curriculum *is* the correction events, so "what trained it on my writing" stays a query, not a mystery. Scoped impersonation means each member can answer that of their own record and no one else's; whether corrections are disclosed more widely than the entries they concern is a question for the authority map, filed and not assumed.

---

## 4 · The seven readings, as folds

| View | The fold |
|---|---|
| **Journal** | `entry.written` joined to its latest inference chain — latest assertion wins for display; every prior assertion remains. |
| **People** | `mentions` edges folded pairwise around the viewer; profiles fold one agent's events into four strands (Language, Artifacts, Methodology, Training). |
| **Threads** | threads joined to membership events; forming = staged thread inferences, rendered dashed and read from staging, not from the record. |
| **The Open** | the unresolved: owned-not-resolved questions, sealed-not-resolved wagers, filed-not-carried contests. |
| **Gatherings** | `gathering.held`, `demo.promised`/`demo.reported`, with what each left = events whose about-chain roots in it. |
| **Words** | terms folded with usage counts and distinct voices. |
| **Your Share** | the viewer's own events folded. RLS makes any other member's share **unqueryable, not merely unshown**. |

Plus three modes and one edge: **Rereading**, **The Method**, **the Cord**, and **Guest reading** — the same routes, map-evaluated for the guest role.

---

## 5 · The design system (new in v3)

### Typography is provenance

The one rule the rest follows: **the serif is the human voice; the mono is the record's grammar.**

| Voice | Set in | Carries |
|---|---|---|
| Human | Libre Baskerville | entries, names, thread names, navigation, buttons, section heads, timestamps, all prose |
| Record / machine | IBM Plex Mono | §-addresses, event-kind chips, the reader's stated reasons, sealed criteria hashes, the raw log |

Mono is never used as decorative small-caps chrome. A member can therefore *see* which layer of the system is speaking, and the type reinforces the dashed/solid distinction rather than merely coexisting with it. The Method page and the tutorial state this rule in plain words, so it is teachable rather than merely tasteful.

### The frank

The §-address renders as a small pressed mark — bordered, slightly rotated, sitting in the hanging margin on wide screens and inline on narrow ones. It stamps on with a spring settle at the moment of append, and copies on tap with a brief "copied" whisper. It is the interface's one flourish: functionally the copy/link affordance, and the felt expression of append-permanence. (It degrades to a plain address by removing one animation and one transform, should the room find it too much.)

### Three elevations, and one moment of motion

Surfaces: **the page** (flat), **the pane** (layered shadow; 14px top radius as a mobile sheet), **the pen** (the only other shadow). Radii stay near-zero as brand; three elevations replace what was a uniformly flat broadsheet.

The entire motion budget goes to the loop that *is* the product: entry settles in → "reading…" shimmers → the proposal arrives (dashed chip springs in) → confirmation resolves dash to solid with a brief ink-set. One orchestrated moment rather than scattered micro-interactions. All motion respects `prefers-reduced-motion`.

### Navigation

One pane, two shapes. **Web (≥880px):** a left rail tiered by frequency — *daily* (Journal, Threads, The Open + open count), *the readings* (People, Gatherings, Words), *yours* (Your Share, Rereading), a system foot (Method, the record, guest, mode, the cord's permanent web home); details open in a right panel beside the record. **Mobile (<880px):** a bottom bar of four — Journal · Threads · ✎ · Open · More — with the pen raised at center and reachable from every view; details open as bottom sheets; the cord lives inside the composer. Every view is a hash route; the back gesture closes sheets before leaving views. A/D walk views; N opens the pen; Esc releases.

> The mobile bar is a values statement: thumbs on shared work and open obligations, not self-reflection. Confirm this ranking in the room before treating it as settled.

### Native-feel mechanics

Drag-to-dismiss sheets (pointer capture, ~90px threshold). Drafts survive navigation and reopening. Skeleton rows on cold start. Per-view scroll restoration. Web-app manifest, standalone display, and a theme-color that follows the light/dark switch. Safe-area insets. Touch targets at the 30–48px floor, visible focus rings, contrast checked in both modes.

### Deliberately avoided

The current generated-design fingerprint: Inter or unchosen system sans; indigo-to-purple gradients; uniform rounded card kits under one soft grey shadow; tracked all-caps eyebrow labels above every heading; mono used as generic small-label chrome; middle-dot meta strings as decoration; scattered hover and reveal micro-interactions. Where any of those patterns appear here they appear *semantically* — mono for the record's grammar, middle dots as record punctuation inside mono strings.

---

## 6 · Interface principles

- **Capture is one gesture.** One box. The grammar arrives afterward as a proposal, never as a form to fill.
- **Dashed means staged by the reader and not yet in the record at all; solid means a member decided and it is.** With the type rule, this is the whole visible vocabulary of the machine layer.
- **The reader shows its reasons** — the citation, the shared word, the person, the timing — never a score.
- **The system explains itself once**, in the tutorial and the Method page, and stays quiet in the main views.
- **Addresses are first-class.** The frank copies; citation bears weight because addresses never move.
- **Composition, never a score.** Nothing ranks, sums, or compares — in People, in Words, or in Your Share.
- **The cord is always reachable.** At the rail's foot on web; inside the pen on mobile, which places contesting inside writing.

### Not built, deliberately

No feed. No notifications. No progress tracking or personal-trajectory dashboard. No admin panel. No engagement metrics — excluded by name. No search-as-navigation replacing citation.

---

## 7 · Alignment to the Triad and the authority map

**Threads are proto-projects.** A thread is the Daybook-scale body of work: it gathers, a member names it, people and obligations accrue. When one matures, a participant shares it into the open world as a **project** — the Triad's open entry point — *by reference, not by copy*: the project record in the CIS points at the thread, and the thread's entries become the project's provenance. **Venture** (external relationship) and **program** (internal one) remain steward designations made in the CIS; the Daybook displays them. The net work is the federation of what began as threads.

> *Open question:* threads-as-proto-projects should be pressure-tested against the STANDING constraint before it is treated as settled.

**The map applied as row-level security.** A guest reads confirmed entries and named threads. A member writes events and folds their own share. **The reader writes nothing.** Every row in `events` is written by a member under their own `agent_id`, so "the member has the last word" is not a fence around a machine writer but the plain fact that nothing enters the record without a member's act. A staged inference lives under the asking member's own identity in a staging relation that is not a record class — no address, no append, self-only — and becomes a record only when the member confirms or corrects it (D-01, D-03). Stewards carry Triad designations.

**Known stop cards.** (1) Whether guest reading includes forming threads. (2) Where peer rereading's consent boundary sits in the map's terms. (3) What a "share as a project" act may create in the CIS from this door.

---

## 8 · The training loop

Every act of review is one gesture that trains two learners, and the log is the curriculum.

- A **confirmation** is weak signal (reflex-tapping is indistinguishable from judgment).
- A **correction** is strong signal — a label with the right answer attached.
- A **member's explicit inference about their own entry**, with reasons, is the strongest: a label with the thinking attached.

Safeguards stated in the interface rather than buried in policy: corrections outweigh agreements; the reader may never make agreeing easier than being right; the correction distribution by agent is disclosed at every rereading close. Peer rereading is consent-gated and rooted in the Wednesday close, never ambient.

Full agent governance: `READERS_INSTRUCTIONS.md`.

---

## 9 · Prototype status

The running artifact implements the schema literally: an in-memory `events` log with ~35 seeded rows, every view computed as a genuine fold. Working: entry capture with mention resolution, reader proposals with reasons, confirm and correct paths, forming-thread naming and refusal, the rereading room with live correction distribution, the raw-log inspector, guest mode, the cord, the share-as-project stop card, routes with back-gesture handling, drag-dismiss sheets, drafts, skeletons, and installability.

**Honest seams.** The classifier is a word-pattern stand-in for the live model call. Persistence in the prototype is in-memory; the served build (`/daybook/`) reads and appends through one seam, in memory by default and against the CIS `beta_` relations when signed in at the shell and the relation answers (D-06). A service worker (shell-only caching) is not present in the prototype — the `open-world` repository already ships one that caches the shell and never the record, and the build adopts that one rather than writing a second. Peer rereading is described but not built. §-addresses copy but are not yet individually routed. And the register's own unresolved question passes through unanswered: *what an append-only record owes a person who leaves* — the schema's only contribution is keeping it answerable in one place, with the decision before the members.

---

**Provenance.** Drafted August 2026 with machine assistance and labeled as such. The event-kind vocabulary, the seven-view grouping, the design system's semantic type rule, and the threads-as-proto-projects reading are interpretive and contestable by address. Nothing is adopted, nothing is deployed, and no schema change is made from this document. The full documents govern.
