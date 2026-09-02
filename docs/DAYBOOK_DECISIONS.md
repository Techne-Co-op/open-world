# Daybook · decisions

Decisions taken on the Daybook documents, each with who took it, when, and where it was said. The delivered artifacts — the PRD, the specification, the reader's instructions, the prototype, and the schema companion — are held verbatim in this repository by default, and a decision that would edit one says so and names the edit. This file is where a decision gets an address; otherwise the next revision of each artifact carries it.

Nothing here adopts anything. Adoption of the instruments these decisions touch remains the members' and the board's.

---

## D-01 · The reader holds no write grant

**Decided by** Todd Youngblood, 2026-08-31, in `#open-world` on the relay (`9c5baca4f505b15ba27f22e1d8f8e07106c13716a7d9cdc0b21285e3b1c08e2b`), choosing option (a) of two put to him.

**The question.** The specification and the schema companion give the machine reader its own row in `agents` with a `class` of `machine`, and row-level security permitting it to write inference kinds into `events` under its own `agent_id`. That is a write grant held by an instrument.

**The ground.** The authority map, AM v0.1 at `techne.coop/commons/authority-map/`, refuses it twice and by name:

> §3, Law X · NC — *The instrument Nou appears nowhere in this map. It holds no role and no grant; it answers under scoped impersonation of the asking member.*

> §7 — *no instrument holds a write grant of its own … the runtime instrument writes nothing, drafts everything, and reads as the member it serves.*

And PRD §2 decides what to do about it: *a capability the map does not ground is a stop card, not a feature.*

**The decision.** The reader writes nothing. A staged inference lives outside `events` until a member acts on it. On a member's act the row that enters `events` is the member's, written under the member's `agent_id`, carrying the reader's proposal and its stated reasons as provenance in the body. No `class` column, no machine role, no machine RLS grant, and no amendment to the authority map is required to build the Daybook.

**Why this rather than amending the map.** Amendment would be the first grant of standing to a non-human writer in this estate — an act on the open A-03 question, belonging to the board and not to an application. It is also the weaker version of the same promise. *The member has the last word* enforced as a fence around a machine writer is a narrower claim than *nothing enters the record without a member act*, which is what this decision makes true.

**AM v0.1's own mark is Drafted**, and it carries a live status conflict with the legal index at its §1a. This decision cites the published text and inherits that caveat.

### What D-01 changes in the next revision

1. **Machine-writable kinds: none.** Three sentences currently say otherwise and are replaced.

   - Specification §7 — *The machine agent may write **only inference kinds***
   - Schema companion, grammar header — *the machine class may write only the dashed three*
   - Schema companion, inference detail pane — *The machine class may write only inference kinds*

   All three become: **The reader writes nothing. Every row in `events` is written by a member, and the member's last word is that fact rather than a constraint on a machine writer.** This closes open ledger item 9.

2. **`inference.proposed` leaves the event grammar.** Nineteen kinds become eighteen. A proposal is a staging shape, not a record; it becomes a record only as the body of the member's `inference.confirmed` or `inference.corrected`.

3. **A refused proposal must survive its refusal.** Because proposals no longer append, `inference.corrected` carries the rejected proposal and the reader's reasons verbatim in its body. Otherwise J3's instruction — *a member's refusal of a forming proposal is a correction; keep it and lower the pattern's standing* — leaves no trace in the record, and the curriculum loses exactly the signal the specification calls strongest.

4. **`thread.forming` and `disagreement.noted` are staging shapes, not kinds.** J3 and J6 stop crossing: the reader stages both and writes neither. This closes open ledger item 10 and the J5 half of the crossing recorded in the addendum.

5. **No `class` column on `agents`.** This also clears the collision with AM v0.1 §3, which holds membership class on the membership row and appointments in `role_grants`.

6. **Dashed still means proposed by the machine** — it now marks something staged and not yet in the record at all, which is a stronger reading of the same visual rule, not a weaker one.

### What D-01 does not settle

- **Where a staged inference lives.** Outside `events` is a boundary, not a location. Session-scoped in the client, a staging store outside the record classes, or something else is an open design question, and it is new — this decision created it. Added to the open ledger as item 12.
- **Open ledger item 11, the record class of a correction, is untouched and gets harder.** Under scoped impersonation the reader reads only as the member it serves, so its curriculum can only ever be that member's own corrections. *Whose judgment trained it* is answerable one member at a time. That is a reads question; D-01 is a writes decision and does not reach it.

---

## D-02 · Three corrections, and the verbatim hold released for them

**Taken by** Nou, 2026-08-31, under Todd Youngblood's instruction in `#open-world` to work through the remaining list. No judgment in any of the three; each is a factual correction to a delivered artifact.

Until now every delivered artifact was held exactly as received, with findings recorded beside them rather than fixed in them. That hold is released for these three edits and no others. The originals remain recoverable by their recorded hashes: the prototype at `48063b7e…c13af`, the specification at `5f4c50c7…1a8ed`, the reader's instructions at `7c3ba8dd…c8813`, the schema companion at `4bc04fda…c7b55`.

1. **`docs/DAYBOOK_PRD.md`** — reference implementation named `daybook-beta-v2.html`; the delivered and canonical file is `daybook-beta-v3.html`. Corrected.

2. **`prototypes/daybook-beta-v3.html`** — the seed uses real members' first names against invented entries, wagers and a disagreement. A line now stands in the rail foot on every view: *Demonstration seed. Every entry, wager, question and disagreement below is invented for this prototype. The names are real members of the cooperative; none of the writing attributed to them is theirs.*

   Labeled rather than renamed, deliberately. The risk was a reader mistaking invented entries for the record, and a label answers that directly while keeping the demonstration's texture — a room of people who actually know each other. If the names should go instead, that is a one-line change and a different decision.

3. **`docs/DAYBOOK_BETA.md` §9** — the honest-seams paragraph said a service worker is not present. True of the prototype, not of the repository: `sw.js` is tracked at the root and caches the shell, never the record. The sentence now says which is which and that the build adopts the existing one rather than writing a second.

---

## D-03 · Where a staged inference lives

**Decided by** Todd Youngblood, 2026-08-31, in `#open-world` (`0ddf709087acac0dbac2e9d990f7232956a9e260cc33eac72ce004f863ec2ca8`), on the proposal put to him.

D-01 said a staged inference lives outside `events` and left the location open, which was the question D-01 created. It is now answered.

**A staged inference lives under the asking member's own identity, in a staging relation that is not a record class.** No `address`. No append discipline — rows are updated and freely deleted. Row-level security is self-only: a member sees their own staging and nobody else's, including stewards. The member's own session writes the row, running as that member, so the writer is the member and not the reader.

**What this preserves.** No grant appears anywhere for a non-human. Not a role, not a `class`, not even the definer-function custody arrangement AM v0.1 §7 permits for service paths — the Daybook does not need to reach for it. The reader reads as the member it serves, proposes to that member's screen, and the only hand that touches the database is the member's own.

**The beta is unchanged.** Persistence is in-memory in the prototype, which is the same shape with a shorter life. Nothing about D-03 asks the beta to grow a backend.

**What it costs.** One schema addition, which is not nothing. It rides as a flagged IM addendum on the §9 precedent, where `auth_user_id` and `role_grants` were carried openly rather than slipped in. That precedent is the right one and the object is a milder one: an addendum granting nothing to a non-human is a different animal from the one D-01 refused.

Open ledger item 12 closes.

---

## D-04 · The curriculum claim narrowed to what is true, and the wider question filed

**Decided by** Todd Youngblood, 2026-08-31, same message as D-03: *A now, file B.*

**A, taken.** The specification §3 and the schema companion both promised that *whose judgment trained it* stays a query, not a mystery. Under scoped impersonation that is false as written: a member reads as themselves, so they can audit what trained the reader on their own writing and no one else's. Both sentences now say that, and both name the wider question as filed rather than answered. Edited under the hold released in D-02; the delivered hashes stand as the record of what arrived.

**B, filed.** Whether corrections may be disclosed across members while the entries they concern stay private is a question for the authority map, not for this application. It has a real argument on both sides — AM v0.1 §2 says the default runs toward disclosure to members, and a correction's reasons are about the reader's behavior rather than the member's content; against that, a correction quotes the writing it corrects. It needs an anchor and a human. Filed as `Techne-Co-op/techne.coop` issue #273.

**C stands where it was.** The Rereading room already discloses the correction distribution at every close, which is aggregate disclosure and needs no decision.

Open ledger item 11 narrows to B and leaves this repository.

---

## D-05 · D-01 applied to the artifacts

**Instructed by** Todd Youngblood, 2026-08-31, in `#open-world` (`87076c3549e4fc6c51b04393d6f53a294f6c7062e04407471d286c6cf326054c`): *Please apply D-01 to the artifacts now.*

D-01 recorded its changes and deferred them to a next revision. D-02 and D-04 then edited artifacts directly, which left the false sentences standing while smaller ones were fixed. That inconsistency sat on the load-bearing claims, so it is closed here. The verbatim hold is released across the four artifacts for D-01's changes; the delivered hashes remain the record of what arrived.

**`docs/DAYBOOK_BETA.md`** — `agents` loses `class` and the reader loses its row, with the authority map §3 cited for where class actually lives. `inference.proposed` leaves the event-kind list, eighteen remain. `body` now states that a correction carries the proposal it rejected. The `about_event_id` chain drops its inference leg. §6's dashed/solid rule now reads *staged and not in the record at all* against *decided and it is*. §7's row-level-security paragraph is rewritten: the reader writes nothing, and the member's last word is not a fence around a machine writer.

**`docs/DAYBOOK_PRD.md`** — the reader's persona row and principle 3 rewritten to match.

**`docs/READERS_INSTRUCTIONS.md`** — §Powers: the reader is not a row and holds no grant. J1 stages a proposal that is not an event and has no kind. The stop-card story no longer says *only inference kinds pass*, because nothing of the reader's passes. The curriculum story carries the D-04 narrowing and the rejected proposal.

**`prototypes/daybook-beta-v3.html`** — the engine, not only the prose. The reader is no longer an agent row. A `staged` store sits beside `events` with no agent, no kind, no address, and a free drop. Seeded proposals and the pen's stand-in classifier stage rather than append. `latestAssertion` reads proposals from staging and decisions from the record. Confirming and correcting write the member's own row carrying the proposal in its body, then unstage. The forming-thread naming and refusal paths do the same. The raw-log inspector now contains no machine-authored row, and says so.

**`prototypes/daybook-schema-v1.html`** — nineteen kinds become eighteen; the dashed chip is relabelled a staged proposal and marked *not a kind*; the `agents` relation loses `class` and its detail cites §3 and §7; the pipeline diagram shows staging outside the record; the constraint pane says there is no machine writer.

**Verified, not assumed.** Both prototypes were driven headless after the change. The beta: nine entries render, staged proposals still render dashed, confirming and correcting both work and land in the record, the threads view and the rereading room open, the raw log contains no `inference.proposed` and no reader-authored row, no JavaScript errors. The companion: all panes open, no errors.

**Not touched.** The prototype's Method page still says a mature thread can be shared as a project. That is open ledger item 5, it is the members' to settle, and an earlier draft of this change edited it before the overreach was caught and reverted.

---

## D-06 · The seed's voices are invented, and the log gains its door to the record

**Taken by** a build agent (Claude Fable 5.1) on 2026-09-02, under Todd Youngblood's direction as relayed by Nou (the steward's message of 2026-09-02, 15:58 UTC: move to the workflow in `#open-world` and the repository). No judgment on any instrument. Three edits to the served artifact, each reversible by one revert, each named here so it has an address.

1. **The seed is renamed, not only labelled.** D-02 chose a label over a rename while `/daybook/` was unserved. PR #3 made it a served route, and both AGENTS.md MARK and the dependency order's flag said that before that point the seed is relabelled on its face or the names are changed. The five voices are now Ines, Bram, Cass, Lior and Wren, invented; the foot says so and no longer says the names are members. Pronouns in the seed's prose and in the People view are they/them. D-02 anticipated this in its own words: *if the names should go instead, that is a one-line change and a different decision.* This is that decision.

2. **The engine reads and appends through one seam.** `store.select()` chooses an adapter once per page load; `store.append()` and `store.nameThread()` are the only doors into the log. In memory is the default, with the seed. Against the record, the page reads and appends `beta_events`, `beta_edges`, `beta_threads` and `beta_terms` (techne.coop `supabase/migrations/0040_daybook_beta.sql`, merged as PR #274; its header records that it was applied to the live CIS) as the signed-in member, and only when a session from the shell exists in this origin and `beta_events` answers to it. Every row carries the viewer's own `agent_id`; the reader still writes nothing (D-01, D-03). Nothing is shown as appended until the record has accepted it and returned the address; a refusal is printed in the rail's foot and nothing is written locally. The session's mode is printed in the foot on every view, in the record's hand.

3. **Naming a forming thread no longer edits an appended row.** The prototype set `body.thread` on each joined entry in place, which 0040's header names as the one client act its append-only trigger would refuse. Each joined entry now receives a compensating `inference.confirmed` carrying the thread in its proposal, which is what `latestAssertion` already read.

**Verified, not assumed.** Driven headless in three sessions: in memory (seed renders, the pen appends with an address and a staged proposal, confirmation resolves, a forming thread is named and the log holds `thread.named`, `thread.joined` and the compensating confirmation, no `inference.proposed`); against a faked record (the probe runs once, every request carries the shell's bearer, the pen posts the member's own row with no address and no `updated_at`, the mention edge hangs from the accepted row, the shown address is the record's, confirmation is the member's row about the entry by id, a reload hydrates from the record); and signed in with the relation missing (falls back to memory, says why, writes nothing outward). No JavaScript errors in any of the three. The live CIS was read once to confirm the relation exists and was not written to.

**Not changed.** Guest reading stays on the seed: anon reads nothing from the record (0040 revokes it), and whether a guest may read confirmed entries at all is open ledger item 3. No term is written from the pen; a word joins by use and the reader that would notice one is the stand-in. D-03's `beta_staging` relation is not used yet; staging remains session-scoped in the client.
