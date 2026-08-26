# The steward persona, intersected with the authority map

Drafted 2026-08-26 at the steward's direction (Buzz DM; techne.coop issue #253). **Draft — nothing here grants anything.** The [authority map (AM v0.1)](https://techne.coop/commons/authority-map/) governs; this document is a *presentation* of it for the open-world PWA, plus a named list of the places where the open-world concept wants more than the map currently grounds.

## The rule this document lives under

AM v0.1 §1: a build agent cites the map instead of inventing a permission. The map's visibility function is `visible(agent, record) = f(role, record class, governing §)` — structural, never an administrator's toggle. So a PWA persona is **not a role**. It is a lens over the roles the map already names (`patron_member`, `director`, `steward`, `applicant`, plus the §1.1 membership classes). The app renders what the CIS's row-level security already permits; it can narrow, never widen.

## What the map already says about the steward

AM v0.1 §3: the steward is *"the operational role the live reference names: a Board-authorized agent handling intake, gatherings, and attendance. Its ground is the Board's authority to authorize agents and name a membership liaison; the delegating resolution itself is not yet in the record."* Marked **Anticipated · Board resolution**.

That mark is the most important sentence in this document. Every steward capability below ultimately rides on a delegating resolution that does not yet exist. Building the persona dark is fine — offering it live to a person waits on that resolution, the same build-dark asymmetry as the guild critical path (issue #230).

## The steward persona: capability × anchor × status

| # | capability in the PWA | anchor | status |
|---|---|---|---|
| S1 | Member defaults: directory, agreements shelf, own record | Bylaws §2.9, Art. XVI, §18.1 (member defaults, AM §2) | **Grounded** — steward is also a member |
| S2 | Intake desk: see applications in progress, record process steps | AM §3 steward (intake); applicant self-view §1.2–1.3 | **Anticipated** — rides the delegating resolution |
| S3 | Admission itself | Bylaws §1.3.1(e): a human act of the Board, simple majority | **Never the persona's.** The desk presents; the Board decides. The app must render this boundary, not blur it |
| S4 | Gatherings and attendance: host, record attendance | AM §3 steward; policies `0023_gatherings_host_write_bound.sql`, `0024_events_scoped_insert_narrowed.sql` | **Grounded in policy**, resolution still anticipated |
| S5 | Designate a program or venture (the Project Triad's steward act) | T-08 `designate_program()` (`commons/treasury/0030_program_revenue.sql`), an overseer act by a named human; #guild-model note: "stewards designate programs and ventures" | **Grounded for programs** (T-08 applied to the live CIS 2026-08-26); *venture* designation has no rail yet — requires a new migration on the techne.coop estate |
| S6 | Curate the net work: feature, order, and shelve projects in the shared view | none — presentation-level only | **Grounded only if curation is client-side presentation.** The moment curation writes a shared record (a featured flag, an ordering row), it needs an anchor that does not exist |
| S7 | Direction rail: give and read direction | `0017_direction_rail.sql`, `0018_direction_desk.sql` | **Grounded** |
| S8 | Verification verdicts: record a walk's verdicts | `0030_verdict_rail.sql` | **Grounded** |
| S9 | Revenue reading: per-program tiers and folds | T-08/T-09; TREASURY-POLICY §7 | **Read grounded; write is the desk's**, and money movement is out entirely |
| S10 | Membership status change, capital accounts, money movement, schema change | Bylaws §5.x, Treasurer's office (§4.4), BP v2 Tier B | **Excluded.** Officer and Board ground, never the persona's |

## The other personas, for contrast

- **Guest** — no CIS role; sees the public estate and the open shelf of shared projects. May *offer* a project (which lands as a submission, not a record) and may begin the application path (`applicant`: own application and the instruments they would sign, nothing else — AM §3).
- **Participant** (community of practice / guild, the §1.1(c) hook) — member defaults of AM §2 per the map's reading, plus *share a project* as their own body of work. The Board-determination hook on §1.1(c) is still open, and Motion 3(b) of the 2026-08-19 board memo is the pending fix.
- **Member** (`patron_member`) — the full member defaults: directory, agreements, own record, own capital view; shares projects on the same rail as participants.
- **Nou** — per AM Law X · NC: appears nowhere in the map, holds no role; answers under scoped impersonation of the asking person. The PWA gets no service account.

## What the open-world concept asks for that the map does not yet ground

Named plainly so they become board or estate work rather than app defaults:

1. **The delegating resolution** for the steward role itself (AM §3, Anticipated). Gates S2 and S4 going live.
2. **A projects rail**: the table and RLS for "any participant may share a project" — who may insert, who may read across the membrane, whether a guest's offer is a row or a queue. This is the single biggest schema ask, and it belongs to the techne.coop estate as its own addressed piece.
3. **Venture designation** (S5's other half) — no rail exists.
4. **Shared curation records** (S6) if curation is to be common rather than client-side.
5. **§1.1(c) Board determination** for participants' governance reach — the Motion 3(b) question, already before the board in draft.

## Refs

AM v0.1 (`commons/authority-map/`); Bylaws v2.1; T-08 (`commons/treasury/0030_program_revenue.sql`); techne.coop issues #253, #230, #217; board memo `legal/board-memo-2026-08-19/`; #guild-model working note 2026-08-13 (the Open World Participation gap).
