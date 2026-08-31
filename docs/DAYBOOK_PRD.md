# PRD · The Daybook (public beta)

**A collective journaling instrument for the cooperative's shared memory**

| | |
|---|---|
| Status | Draft v0 · unadopted · for the Wednesday room |
| Reference implementation | `daybook-beta-v3.html` (single file; the prototype is canonical for behavior) |
| Companion documents | `DAYBOOK_BETA.md` (specification) · `READERS_INSTRUCTIONS.md` (agent governance) · schema v0 · *The Second Generation* register |
| Grounded in | techne.coop `/commonplace` · `/daybook` · `open-world` · the authority map |
| Author | Todd Youngblood, with machine assistance, labeled as such |
| Date | August 2026 · Boulder, Colorado |

---

## 1 · Purpose

Give the cooperative one shared, append-only journal that members write into plainly, and that everyone can read seven ways — for people, for shared work, for open obligations, for gatherings, for language, and for their own part. A background reader proposes structure; a member always has the last word. The result the co-op should get: when someone asks *why did we decide this, who said so, and what did we learn*, the answer is one address away, and nobody had to be the historian.

## 2 · Problem

Most tools remember *for* you (notes, wikis, chat logs) and a few remember *about* you (analytics, CRMs). Almost nothing lets a group remember **together** in a way that holds up under dispute. The co-op's memory today is scattered across chat, documents, and heads; citation means "I think we discussed this somewhere"; structure requires a librarian nobody is; and attribution drifts toward whoever writes the summary. The register's first-generation lesson applies: institutional memory is an instrument, not a byproduct — and a record that can be silently rewritten cannot testify.

## 3 · Who it serves

Aligned to the participation ladder and the authority map. Every capability is `visible(agent, record) = f(role, record class, governing §)`; a capability the map does not ground is a stop card, not a feature.

| Persona | What the Daybook is to them |
|---|---|
| **Member** | The pen and all seven readings. Writes, confirms, corrects, names threads, holds questions, seals wagers, files contests, rereads. |
| **Guest** | The reading surface: confirmed entries and named threads, no machinery, no pen. Reading is the free side of the threshold; writing is what membership is. |
| **Steward** | Everything a member has, plus Triad designations (venture/program) made in the CIS and displayed here. |
| **The reader (machine)** | Not an agent row and not a database role. It **writes nothing**: it stages proposals to the asking member's own screen and storage, and the member's act is what enters the record. Governed entirely by `READERS_INSTRUCTIONS.md`, and bounded by D-01. |

## 4 · Principles (the constraints that are the product)

1. **One information system.** The CIS is the single source of truth; the Daybook is a door, not a database. It invents no permission and holds no data of its own. The app caches its shell, never the record.
2. **The log is the journal.** One growing events table with permanent §-addresses; every state on every screen is a fold over it. No `updated_at` exists anywhere.
3. **Staged vs decided is the whole machine vocabulary.** Dashed means staged by the reader, with reasons in member-legible terms, and not in the record at all; solid means a member decided and it is. The member's last word is not a fence around a machine writer but the plain fact that nothing enters the record without a member's act.
4. **Composition, never a score.** Nothing ranks, sums, or compares members. A standing is a fold over one's own events, seen only by its subject — unqueryable for anyone else, not merely unshown.
5. **The system explains itself once** — tutorial and Method page — and stays quiet in the main views.
6. **The cord is standing, not support.** "Something is wrong with how we're working" files a contest, under the member's name, into the same record.

## 5 · Scope — the beta

### In

- **The pen.** One-gesture capture from anywhere; mention detection with member confirmation; entries receive permanent addresses at append.
- **The reader loop.** Type and thread proposals with reasons; confirm and correct (correction invites a reason); all of it staged events per the staging function — nothing commits without a member act.
- **Seven readings.** Journal (with a by-day lens), People (relationships from mentions, profiles in four strands), Threads (member-named; forming proposals; naming and refusal both logged), The Open (questions with owners, wagers with sealed terms, contests before the room), Gatherings (coming, and what each held one left in the record), Words (the lexicon, which is also the reader's inspectable dictionary), Your Share (the viewer's own fold, including the treasury's patronage rendering).
- **Rereading.** The self-review room: recent entries beside the reader's inferences; confirmations weighted low, corrections-with-reasons high; correction distribution disclosed at every close.
- **The record itself.** A raw-log inspector, one tap from the Method page and footer — the audit made visible.
- **Guest mode.** The same routes, map-evaluated for the guest role.
- **Share as a project.** From a thread, the Triad offer — by reference, entries as provenance — stopping at the authority-map stop card in this beta.

### Navigation (beta v2)

One pane, two shapes. **Web (≥880px):** a left rail tiered by frequency — *daily* (Journal, Threads, The Open + open count), *the readings* (People, Gatherings, Words), *yours* (Your Share, Rereading), a system foot (Method, the record, guest, mode, the cord's permanent web home); details open in a right panel beside the record. **Mobile (<880px):** a bottom bar of four — Journal · Threads · ✎ · Open · More — with the pen raised at center, reachable from every view; details open as bottom sheets; the cord lives inside the composer. Every view is a hash route; the back gesture closes sheets before leaving views. A/D walk views; N opens the pen; Esc releases.

> The mobile bar is a values statement: thumbs on shared work and open obligations, not self-reflection. Confirm this ranking in the room before treating it as settled.

### Out (this beta)

Live model classification (a word-pattern stand-in ships; the live reader replaces it). CIS persistence and sync (in-memory in the prototype). Peer rereading (described, consent-gated to the close, not built). Per-address routes (views route; addresses copy). Thread merge/split UI. Curation/shelving into the Commonplace. Project creation past the stop card.

### Never (deliberate refusals, carried from the catalog)

No feed. No notifications. No progress tracking or personal-trajectory dashboard. No admin panel. No engagement metrics — excluded by name. No search-as-navigation replacing citation.

## 6 · Requirements as journeys

Per the standing rule, each story is feature-complete only when actionable three ways: **(1) GUI, (2) natural language / agent-supported, (3) hotkeys + forms.** The beta ships (1) complete, (3) partial (A/D, N, Esc, Enter), (2) as the reader's staging surface; full natural-language entry actions ("file this as a contest against §12") are the live-reader milestone.

- **Write.** As a member, I write plainly from anywhere in one gesture; the entry appears immediately with its address; structure arrives afterward as a proposal, never as a form.
- **Judge.** As a member, I see the reader's reasons in my own terms, and confirming or correcting costs the same gesture. My correction, with my reasons, is kept under my name.
- **Weave.** As a member, people appear in my Connections only because writing wove us; opening anyone shows what's between us and how the record holds them — never a rank.
- **Name.** As a member, I name a forming thread in our words or refuse it; either act is logged and teaches the reader. Unthreaded writing rests respectably.
- **Owe.** As a member, I see everything holding a future — owned questions, sealed wagers, filed contests — aging visibly but never nagging. Resolution is my entry, with warrant.
- **Meet.** As a member, I see what's coming to the room and what every held gathering left in the record; a demo's promises stay auditable after the applause.
- **Reread.** As a member, I review my own recent entries against the reader's inferences when I choose; skipping costs nothing and produces nothing; the distribution of whose corrections trained the reader is said plainly at the close.
- **Contest.** As a member, the cord is at most two gestures from any screen; using it files a contest with my standing, into the same record.
- **Read (guest).** As a guest, I meet the record as a calm book — confirmed entries, named threads, no machinery — and the tutorial tells me writing is what membership is.

## 7 · Success, measured carefully

Per §3, the measure is examined by members **before** it is used, and engagement metrics are excluded by name. Proposed for member examination, not adopted here:

- **The record testifies.** In the room, disputes about "what did we decide / who said" are settled by address rather than by memory. (Observed in closes, not counted by the app.)
- **The loop stays honest.** Correction rate neither collapses to zero (members stopped looking) nor stays noisy after months (the reader isn't learning); the distribution of correcting voices does not concentrate further over time.
- **The pen stays free.** Entry language does not measurably flatten toward machine-legibility (the co-evolution watch, reported to the close as a finding about the reader).
- **The threshold works.** Guests read; some cross. (The crossing is a membership fact in the CIS, not an app metric.)

## 8 · Open questions and stop cards

1. **Threads as proto-projects** must be pressure-tested against the STANDING constraint before the Triad linkage is treated as settled.
2. **Peer rereading's consent event** — what its scope field enumerates, in the map's terms. (The room, week 36.)
3. **Guest visibility of forming threads** — grounded by the map, or not shown.
4. **What "share as a project" may create in the CIS from this door.**
5. **The exit question**, inherited from §4 of the register: what an append-only record owes a person who leaves. The schema keeps it answerable in one place; the answer stays before the members.
6. **The mobile bar's ranking** — confirm as a chosen values statement.

## 9 · Rollout

1. **Now** — walk the prototype in the Wednesday room; adopt or contest this PRD by member act.
2. **Live reader** — replace the stand-in with the model call governed by `READERS_INSTRUCTIONS.md`; reasons and staging unchanged.
3. **CIS persistence** — events to Supabase under RLS per the authority map; shell-only caching; the halt wins over offline.
4. **Member beta** — members only, alongside the close; rereading cadence set by the room.
5. **The public edge** — guest routes on the open web; the Commonplace's living end.

---

**Provenance.** Drafted August 2026 with machine assistance and labeled as such. Behavior is specified by the running prototype and `DAYBOOK_BETA.md`; agent governance by `READERS_INSTRUCTIONS.md`; method-history by *The Second Generation*. The groupings, rankings, and measures proposed here are interpretive and contestable by address. Nothing is adopted until the members act, and the full documents govern.
