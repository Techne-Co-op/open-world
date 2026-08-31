# Daybook · decisions

Decisions taken on the Daybook documents, each with who took it, when, and where it was said. The delivered artifacts — the PRD, the specification, the reader's instructions, the prototype, and the schema companion — are held verbatim in this repository and are not edited to match. This file is where a decision gets an address; the next revision of each artifact carries it.

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
