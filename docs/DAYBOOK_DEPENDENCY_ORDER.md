# The Daybook: build order by systems dependency

Drafted 2026-08-31 by a build agent at the steward's direction (Buzz, #open-world). **Status: Draft. Nothing here is adopted.** It sequences [`DAYBOOK_PRD.md`](DAYBOOK_PRD.md) — Draft v0, unadopted, for the Wednesday room — and nothing in it grants a permission, applies a migration, or commits the room to a date.

**The ordering rule, from the steward:** plans are set against the beta goal and ordered by *systems dependencies*, never by estimates of time. So this document has no dates, no durations, and no sequence numbers implying a calendar. It has layers. A layer is buildable when everything it stands on exists; a layer whose foundation is a human answer is a stop card, not a task.

## The two kinds of blocker

Distinguishing them is the whole use of this document.

- **Technical dependency** — B needs A to exist in code or in the record. Resolvable here, by building A.
- **Authority dependency** — B needs a person or a body to answer. Not resolvable here at any effort. Per AGENTS.md STOP, it is filed against the techne.coop estate and waited on. The Stamps surface is the worked example already in this repo: four drafted, unapplied migrations behind three human answers.

The PRD's own stop cards (§8) are authority dependencies with one exception: §8.6, the mobile bar's ranking, is a values confirmation the room can give in a sitting.

## Layer 0 · The artifacts that specify behavior

Everything below depends on documents this repository does not yet hold. The PRD names four companions as governing:

| Artifact | Role per the PRD | In this repo |
|---|---|---|
| the prototype | reference implementation; **canonical for behavior** | **yes** — `prototypes/daybook-beta-v3.html` |
| `DAYBOOK_BETA.md` | the specification | **yes** — `docs/DAYBOOK_BETA.md` |
| schema v0 | the event shape | **yes** — it is `DAYBOOK_BETA.md` §3, unchanged since v0 |
| `READERS_INSTRUCTIONS.md` | agent governance for the machine-class reader | no |
| *The Second Generation* | the method register | no (method-history, not behavior) |

`DAYBOOK_PRD.md` (this repo, verbatim as delivered, sha256 `b3bef074…c1339`) is the first artifact. The second is the prototype, delivered 2026-08-31 (sha256 `48063b7e…c13af`).

**Version note.** The PRD's header names `daybook-beta-v2.html` as the reference implementation. What was delivered is **v3**, described by the steward as updated from v2. The prototype is canonical for behavior, so where the two disagree the file wins and the PRD header is stale by one version. That is recorded, not corrected: the PRD is held verbatim as delivered.

**What the prototype settles.** Read at the delivered file, it is a single self-contained page, 1,057 lines, no `fetch`, no `XMLHttpRequest`, no `localStorage`, no Supabase client — in-memory exactly as PRD §5 Out says. It carries the seven views as hash routes (`journal`, `people`, `threads`, `open`, `gather`, `words`, `share`), the A/D walk over them, the left rail tiered as §5 describes (daily / the readings / yours / a system foot), the Rereading room, the Method page, the raw-record inspector, a guest-view toggle, and the cord. Event kinds visible in the seed include `entry.written`, `inference.proposed`, `inference.confirmed`, and `question.owned`. So layers 2 through 4 now have a behavioral reference and are buildable; **only `DAYBOOK_BETA.md`, `READERS_INSTRUCTIONS.md` and schema v0 remain outstanding at this layer.**

**What the specification settles.** `DAYBOOK_BETA.md` (beta v3, delivered 2026-08-31, sha256 `5f4c50c7…1a8ed`) carries the schema in §3 — so *schema v0 is not a missing artifact; it is that section, and the spec says it is unchanged since v0*. It gives five tables (`agents`, `events`, `edges`, `threads`, `terms`), a closed list of nineteen event kinds, an explicit **deliberately-not-tables** list, each of the seven readings written as a fold in §4, and a design system in §5 whose one load-bearing rule is semantic: **serif is the human voice, mono is the record's grammar.** Spot-checked against the prototype and consistent: `Libre Baskerville` and `IBM Plex Mono` both present, `prefers-reduced-motion` honored, `setPointerCapture` for drag-dismiss, a skeleton state, and an inline web-app manifest.

**With this, layers 2 through 6 are specified.** The remaining layer-0 gap is `READERS_INSTRUCTIONS.md` alone, which governs the reader — so layer 5's live model call is still the only step lacking its governing document.

**One correction to layer 1, from §7.** The spec is more specific than the PRD: the `agents` table takes a **class** column with the value `machine`, and *the reader is a row there, not an exception*. That is precise enough to name the ask exactly. It is a CIS schema addition and a new RLS policy — restricting one agent class to writing only the four inference kinds — and this repository changes no schema (AGENTS.md STOP). The stop card is therefore: **does the authority map ground a machine class of agent, and if not, what grounds it?** Filed against the estate, not decided here. Everything the spec claims about "the member has the last word" being a database constraint rather than a UI promise depends on that answer.

**A seam worth naming.** §9 says a service worker with shell-only caching *is not yet present* in the prototype. This repository already ships one (`sw.js`, registered from `index.html`) under the rule that the shell may cache and the record never does. When the Daybook is wired into this app, the prototype's seam closes by adopting the app's existing service worker, not by writing a second one.

**One flag under AGENTS.md MARK.** The prototype's seed data uses the first names of real members of the cooperative — Todd, Aaron, Kevin, Lucien, Jo — attached to invented entries, wagers, and disagreements. In an in-memory prototype that writes nowhere this is harmless, and it is illustrative in the way a walkthrough wants. It stops being harmless the moment this page is served anywhere a reader could mistake it for the record. Before layer 7, either the seed is relabelled on its face or the names are changed.

## Layer 1 · The authority map's reading of the Daybook

The PRD asserts `visible(agent, record) = f(role, record class, governing §)` over four personas and a **machine class** that may write only inference kinds (§3). Two things must be true before any surface is built against it:

1. The map must ground a **machine class of agent** that can stage events and cannot confirm them. If it does not, this is a stop card against the estate, not a UI decision.
2. The PRD's §4.3 claim — *the member's last word is a database constraint (RLS on the machine class), not a UI promise* — is a schema and policy assertion. This repository does not change schema (AGENTS.md STOP). It can only render a constraint that already exists, or render its absence honestly.

Depends on: layer 0. Blocked by: the map, and any gap in it is filed as an issue on the estate.

## Layer 2 · The event log and its addresses

The PRD's §4.2 is the load-bearing architectural claim: one append-only events table, permanent §-addresses assigned at append, every screen a fold, `updated_at` nowhere. Nothing in the seven readings can be honest before this exists, because each reading *is* a fold.

Two independent sub-dependencies:

- **In the CIS** — the events table, its RLS, and the address allocator. Estate work, gated by layer 1, and per the PRD §9.3 it is a rollout step, not a prerequisite for the prototype.
- **In this app** — the fold functions over an in-memory log, which is what the prototype already does per §5 Out ("CIS persistence and sync … in-memory in the prototype").

**The consequence for ordering:** the seven readings can be built against the in-memory log without waiting on the CIS. The reverse is not true. This is the largest available parallelism in the plan, and it is the reason the prototype is canonical.

## Layer 3 · The pen, and staging

The pen (one-gesture capture, mention detection with member confirmation, address at append) depends on layer 2's append and addressing, and on nothing else. The **staging function** — proposals that commit only on a member act — depends on layer 1's machine class being real, or on being rendered as visibly proposed with no commit path at all.

Ordering note: the pen precedes the reader. A reader with nothing to read is untestable; entries without a reader are already useful.

## Layer 4 · The seven readings

Journal, People, Threads, The Open, Gatherings, Words, Your Share. Each is a fold, so each depends on layer 2 and on the pen for input. Between them the dependencies are thin, which makes this the widest layer.

Two carry extra weight:

- **Your Share** renders a standing, which per §4.4 is *a fold over one's own events, seen only by its subject — unqueryable for anyone else, not merely unshown*. That is the same position the Stamps surface carries: a fold, never a stored balance, never comparative. Unqueryability is an RLS property, so this reading's honesty depends on layer 1, not on this app's markup.
- **Words** is both the lexicon and the reader's inspectable dictionary, so it depends on the reader's vocabulary existing (layer 5) to be complete, but is buildable as a lexicon first.

## Layer 5 · The reader

A word-pattern stand-in ships in the beta; the live model call, governed by `READERS_INSTRUCTIONS.md`, replaces it (§5 Out, §9.2). The stand-in depends on layers 2 through 4. The live reader additionally depends on `READERS_INSTRUCTIONS.md` existing (layer 0) and on the machine class being grounded (layer 1). Reasons and staging are unchanged across the swap, which is what makes the stand-in a real dependency step rather than a throwaway.

## Layer 6 · Rereading, and the co-evolution watch

The self-review room folds recent entries against inferences and discloses the correction distribution at every close. Depends on the reader having produced inferences (layer 5) and on corrections being events (layer 2). **Peer rereading is out of the beta and consent-gated**; its consent event's scope field is PRD §8.2, an open question before the room.

## Layer 7 · The guest surface and the public edge

Guest routes are the same routes, map-evaluated for the guest role (§5). Depends on layer 1 grounding what a guest may read, and on §8.3 — whether forming threads are visible to guests — being answered rather than assumed. The public edge (§9.5) additionally depends on serving `app.techne.coop`: the repository's `CNAME` names that host, and as of 2026-08-31 it does not resolve, so nothing is served from this repository yet.

## Layer 8 · Share as a project

The Triad offer from a thread, by reference, entries as provenance. **This beta stops at the authority-map stop card** (PRD §5), and PRD §8.4 — what "share as a project" may create in the CIS from this door — is unanswered. It is also the same projects rail that `docs/JOURNEYS_AND_STORIES.md` Journey 1 names as a rail that does not exist. One gap, two documents.

The specification's §7 states the linkage more definitely than the PRD does — *threads are proto-projects*, shared **by reference, not by copy**, the CIS project record pointing at the thread and the thread's entries becoming its provenance, with venture and program remaining steward designations the Daybook only displays. It then carries its own warning in the same breath: pressure-test this against the STANDING constraint before treating it as settled. By-reference is the load-bearing half of that claim, because it is what keeps the append-only log the single source and the project record a pointer.

## What is not blocked on anything

Buildable now, against the in-memory log, once layer 0 delivers the prototype and the specification: the raw-log inspector, the Method page, the navigation shell of §5 (left rail on web, four-plus-pen bottom bar on mobile), the hash routing, and the keyboard walk. These are shell, they cache like shell, and the halt still wins over offline.

## The open ledger

Carried from PRD §8 without resolution, because none of them are this repository's to resolve:

1. Threads as proto-projects, pressure-tested against the STANDING constraint.
2. The peer-rereading consent event's scope field, in the map's terms.
3. Guest visibility of forming threads.
4. What "share as a project" may create in the CIS from this door.
5. The exit question: what an append-only record owes a person who leaves.
6. The mobile bar's ranking, as a chosen values statement.

Plus two this document adds, from reading the PRD against this repository's constraints:

7. **Whether the authority map grounds a machine class at all**, and if not, where that stop card is filed.
8. **Where the Daybook lives, and its relation to the book of the same name.** The PRD grounds itself in `/commonplace`, `/daybook`, and `open-world`. But `techne.coop/daybook/` is already published and is a *finished book* — the launch weekend, seven sittings, forty-two entries, verbatim, binding nothing. The instrument in this PRD is a *living, append-only journal for everyone*. They share a name and a lineage and they are not the same object. Whether the instrument is a surface of this PWA, a sibling app on the same CIS, or the living end of the estate's own shelf changes layers 2 and 7 materially, and it has not been answered. The PRD's own §9.5 gestures at it — *the Commonplace's living end* — without settling it.
