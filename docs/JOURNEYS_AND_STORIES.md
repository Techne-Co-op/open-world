# Journeys and stories for the open-world PWA

Drafted 2026-08-26 by a Fable 5 build agent at the steward's direction (Buzz DM). **Status: Draft. Nothing here is adopted, nothing grants anything, and no journey below creates a permission.** The authority map (AM v0.1, `techne.coop/commons/authority-map/`) governs; every claim about the record cites its anchor there, in Bylaws v2.1, in the guild critical path (issue #230), or in a numbered issue. Where the open-world concept wants more than the record grounds, the journey says so in its status line instead of pretending.

## How to read this document

Each journey carries four parts: a narrative in plain prose, numbered stories in the usual form, acceptance notes a builder can test against, and a status line. The status line is the honest part. It says one of: **traversable today** (the CIS rails exist and the map grounds them), **gated** (built or buildable dark, waiting on a named gate: G1, G2, G3, or the steward's delegating board resolution), or **needs a rail that does not exist** (a stop card under AGENTS.md STOP; the ask is filed against the techne.coop estate, never built here first).

Personas are lenses over authority-map roles, never new roles (STEWARD_PERSONA.md; AGENTS.md MARK). The four in play: **guest** (no CIS role), **participant** (the §1.1(c) Community Participant hook), **member** (`patron_member`), **steward** (AM §3 appointment, Anticipated pending the delegating board resolution). The app renders what row-level security already permits; it can narrow, never widen (AM v0.1 §1).

---

## Journey 1 · A guest arrives, explores the net work, offers a first project

### Narrative

Someone finds the open world with no account and no CIS role. They can read the public estate: the site, the published instruments, the annual benefit report (Bylaws Art. XV), and the open shelf of shared projects, the net work, insofar as the record ever publishes it. They browse bodies of work, see how projects federate, and understand that they could add their own. When they are ready, they offer a project: a name, a description, the shape of their practice. Under the steward persona document that offer "lands as a submission, not a record" (STEWARD_PERSONA.md, guest persona).

But the map is strict here. The `anon` role reads nothing in the database; the public surface is the website, per Art. XV (AM §5 caption). And the guest posture settled by the steward's direction of 2026-08-17 says a guest performs no CRUD (AM, the guest posture note under the 0024 draft). So the guest's read of the net work must come from a published surface, not a database query, and the guest's offer has no write surface in the CIS at all today. Whether an offer is a row, a queue, or an email is exactly the projects-rail question STEWARD_PERSONA.md names as the single biggest schema ask (its gap list, item 2).

### Stories

1. As a guest, I read the public estate and the published presentation of the net work without an account, so that I can understand the cooperative before identifying myself.
2. As a guest, I browse shared projects and see who holds them and how they connect, so that I can find peers in the community of practice.
3. As a guest, I offer a first project (name, description, my practice), so that my body of work can enter the net work when someone entitled to receive it does so.
4. As a guest, I see plainly that my offer is a submission awaiting a person, not a live record, so that the boundary between the public ring and the record stays legible.

### Acceptance notes

- The guest surface makes no authenticated or anonymous database read; net-work content shown to guests is published build output (Art. XV posture, AM §5 caption).
- No guest action writes to the CIS. If an offer intake exists at all before the projects rail, it must run outside the record and say so on its face.
- The guest can always find the application path (Bylaws §1.2) and the guild join path (B4, `way-guild`) from this surface, even while those are gated.

**Status: partly traversable, partly a rail that does not exist.** Reading the public estate is traversable today. Browsing the net work and offering a project both need the projects rail, which does not exist and belongs to the techne.coop estate (STEWARD_PERSONA.md gap 2). The steward's 2026-08-13 note names this squarely: the open-world ecosystem is not yet written into the published build.

---

## Journey 2 · Guest to guild participant: choose a tier, pay, enter the guild

### Narrative

A guest decides to participate. They reach the fifth way at `/commons/join/` (`way-guild`, build step B4) and choose a tier: $10, $25, $100, or $200 monthly, every tier the same doors, dues never capital (guild critical path §5; the Guild Participation Terms). They pay through a Stripe checkout whose price is a named, lookup-keyed instrument price (`guild_10_monthly` and kin), never an amount invented at the session (critical path §3; TREASURY §7). The webhook lands as `money.received` through the T-02 intake edge function, idempotent on the rail reference (B5). The session carries their CIS agent id as `participant_agent_id` and never a `member_id`, because a guild participant is not admitted as a member; that separation is the point of Motion 3(b)'s §1.1(c) fix (critical path §3). They enter the guild as a participant: member defaults of AM §2 per the map's reading of §1.1(c), plus share-a-project when that rail exists.

None of this can happen today. No price may be offered until Motion 2 carries at a lawfully convened meeting (gate G1); the payment seam waits on TREASURY-POLICY adoption and T-02 (gate G2); reach past Colorado waits on counsel (gate G3). This is the gap the steward named on 2026-08-13: the path is not traversable because the payment step is not wired in. The useful asymmetry holds here: everything below G1 can be built dark, so adoption opens a door rather than starting a project (critical path §4).

### Stories

1. As a guest, I compare the four tiers and see that every tier opens the same doors, so that my choice is about patronage, not access.
2. As a guest, I pay my chosen tier through a checkout whose price comes from the instrument in force, so that what I am charged is the adopted number and not a typed one.
3. As a new participant, my payment lands in the record as `money.received` exactly once, so that the treasury reading and my standing agree.
4. As a new participant, I enter the guild without being called a member, so that the record never claims an admission the Board has not made (Bylaws §1.3.1(e)).
5. As a participant, I see my tier, my payment history as it concerns me, and how to change or stop my dues, so that leaving is as legible as arriving (own-record ground, §18.1).

### Acceptance notes

- Checkout uses lookup-keyed prices with `metadata.program=techne.coop` and `metadata.plan_key` in `guild_10 | guild_25 | guild_100 | guild_200` (B1, B3).
- The session carries `participant_agent_id`, never `member_id` (critical path §3).
- The intake function reads the price from the instrument, never from the session, and is idempotent on the rail reference (B5).
- The tier fold appears at `/intranet/revenue/` through T-09 with no new code, because tier names match product names exactly (B7).
- The whole path is present in the build and switched off until G1; the app must render the gate honestly, not a broken checkout.

**Status: gated on G1 (offering any price), G2 (the payment seam), and G3 (anyone outside Colorado).** B1 and B3 additionally need a Stripe write key or a human at the dashboard (critical path §4, credential blocker).

---

## Journey 3 · Participant to provisional member (90-day trial) to patron member

### Narrative

The steward's concept says participation reaches everyone, guest, ecosystem contributor, virtual guild member, and all are eligible for provisional membership under a 90-day trial (steward's working note, 2026-08-13, #guild-model, as directed into this repository 2026-08-26). In the app, a participant who wants membership begins the application path: they write their own application and their signature on the instruments they would sign, and see nothing else (`applicant`, AM §3; Bylaws §1.2, §1.3.1(d)). The steward's desk manages intake (Journey 5). Admission is a human act of the Board, simple majority (Bylaws §1.3.1(e)), and membership takes effect per §1.3.3. On admission the person's lens widens to the full member defaults (Journey 4), written by the lifecycle rail with the acting human recorded (AM §6, lifecycle writes; Bylaws §1.7, §1.8).

The honest note: the phrase "provisional member" and the 90-day trial appear in the steward's concept but not in Bylaws v2.1 or AM v0.1 as read for this document. The classes the record grounds are §1.1(a) through (d) plus `applicant`. A trial period, if it is to be a state the record holds, is either a reading of the applicant state, a Board policy under the §1.1(c) determination hook (the Motion 3(b) question, STEWARD_PERSONA.md gap 5), or a bylaws matter. This document does not decide which; it names the gap so it becomes board work rather than an app default.

### Stories

1. As a participant, I begin a membership application from inside the app and see my own application and the instruments I would sign, and nothing else, so that the applicant boundary of AM §3 holds.
2. As an applicant, I sign the instruments myself, so that my signature is my own act in the record (Bylaws §1.3.1(d), §2.8).
3. As an applicant in the trial period, I see how far along my 90 days are and what remains, so that the trial is a shared clock and not a private one.
4. As an applicant, I learn the Board's decision through the record, so that admission arrives as the Board's act and not as an app state change.
5. As a newly admitted patron member, my lens widens to the member defaults on the effective date, so that §1.3.3 and what I can see agree.

### Acceptance notes

- The application path uses the existing rails: `apply_for_membership` and `sign_agreement` are definer functions in the live schema (AM, the 0025 writers reading); the app adds presentation only.
- Membership transitions are written by directors or the steward with the automaton trigger enforcing legality (AM §6, lifecycle writes); the app never writes a transition itself.
- Any trial-clock display is derived from dates already in the applicant's own record; the app invents no trial state.

**Status: the applicant leg is traversable today; the trial framing is gated on a Board determination.** The 90-day provisional trial has no ground in the map or the bylaws as read; it waits on the §1.1(c) determination (Motion 3(b), board memo 2026-08-19) or another Board act. Entry into this journey from the guild also inherits Journey 2's gates.

---

## Journey 4 · A member shares and tends a body of work, and reads the record they are entitled to

### Narrative

A patron member lives in the app day to day. They read the directory, alphabetical and electronic, because the membership list is a member right (Bylaws §2.9, §1.13). They read the agreements shelf, because distribution of the instruments is owed to them (Art. XVI) and the duty to abide presumes the right to read (§1.2.9). They read their own record: membership, signatures, applications, events, registrations, attendance, and the capital fold over their own events (§18.1; §6.2.1 for the tax view of self). They keep a profile card that they alone write, with the email cell moving only through `profile_email()` on their own visibility choice (AM §5 caption; B-06 addendum). And on the open-world side, they share a project, their body of work, into the net work on the same rail as participants (STEWARD_PERSONA.md, member persona), and tend it: update it, connect it, let it be read across the membrane the projects rail defines.

### Stories

1. As a member, I read the directory and other members' profile cards, so that I can find and reach my peers (§2.9).
2. As a member, I read every governing instrument on the agreements shelf, so that I know the rules I live under (Art. XVI).
3. As a member, I read my own record in full, including my capital fold, so that my standing is never a mystery to me (§18.1, §5.1).
4. As a member, I write my own profile and choose my email's visibility, so that my self-description stays mine (B-06).
5. As a member, I share a project as my body of work, so that my practice joins the net work.
6. As a member, I tend my project over time, so that the net work stays a live commons rather than an archive.
7. As a member, I see gatherings and register or cancel for myself, so that my presence is my own act (§2.1, §2.7).

### Acceptance notes

- Stories 1 through 4 and 7 render existing RLS cells only (AM §5 matrix; §6 policy families); the app adds no policy.
- Stories 5 and 6 have no table and no policy behind them; until the projects rail lands on the techne.coop estate they can exist only as clearly marked simulation, and simulated data never writes back to live records (AGENTS.md MARK).
- The record itself is never cached; only the shell is (README; issue #253).

**Status: the member defaults are traversable today; share-and-tend needs the projects rail, which does not exist** (STEWARD_PERSONA.md gap 2).

---

## Journey 5 · Steward at the intake desk

### Narrative

The steward opens the desk and sees applications in progress: who has applied, what they have signed, which process steps stand open. They record the steps that are theirs to record and prepare what the Board needs to decide. The desk presents; it never decides. Admission is a human act of the Board, simple majority (Bylaws §1.3.1(e)), and the app must render that boundary rather than blur it (STEWARD_PERSONA.md S3). There is no admit button anywhere in this persona; there is a "ready to present" state and a place where the Board's decision, once made and recorded through the lifecycle rail, becomes visible.

The steward role itself is Anticipated: a Board-authorized agent handling intake, gatherings, and attendance, whose delegating resolution is not yet in the record (AM §3). The desk can be built dark; offering it live to a person waits on that resolution (STEWARD_PERSONA.md S2 and the build-dark asymmetry).

### Stories

1. As a steward, I see the queue of applications in progress with their signatures and open steps, so that no applicant stalls unseen (AM §3, intake; STEWARD_PERSONA.md S2).
2. As a steward, I record an intake process step with myself as the acting human, so that the record shows who did what (Laws VI and X posture, AM §7).
3. As a steward, I mark an application ready for the Board, so that the Board receives a complete presentation and nothing else.
4. As a steward, I see the Board's admission decision only after the Board has made it, so that the desk and the decision never merge (Bylaws §1.3.1(e)).

### Acceptance notes

- No control in the desk can change a membership state; lifecycle writes belong to directors and the steward only through the automaton-guarded rail, and admission itself only to the Board (AM §6; STEWARD_PERSONA.md S3, S10).
- The desk is dark until the delegating resolution exists; the app shows the Anticipated mark rather than hiding the persona.

**Status: gated on the steward's delegating board resolution** (AM §3, Anticipated; STEWARD_PERSONA.md gap 1). Buildable dark today.

---

## Journey 6 · Steward designates a program or a venture from a shared project

### Narrative

This is the triad act. A body of work enters as a project, the open entry point. The steward, reading it as an internal relationship, designates it a program; reading it as an external relationship, designates it a venture. Any body of work can be all three at once (README, the concept; #guild-model note: "stewards designate programs and ventures").

For programs the rail exists: `designate_program()` (T-08, `commons/treasury/0030_program_revenue.sql`), an overseer act by a named human, applied to the live CIS on 2026-08-26 (STEWARD_PERSONA.md S5; critical path §2). The app can present that act. For ventures there is no rail at all; venture designation requires a new migration on the techne.coop estate (STEWARD_PERSONA.md S5 and gap 3). And the connection from a shared project to either designation presumes the project exists as a record, which is again the projects rail.

### Stories

1. As a steward, I read a shared project and its history before designating anything, so that the triad act is a judgment about real work (S1 member defaults; the record's own history).
2. As a steward, I designate a program from a body of work through `designate_program()`, recorded as my act by name, so that the internal reading enters the treasury registry (T-08; STEWARD_PERSONA.md S5).
3. As a steward, I see the program's named tiers and revenue readings after designation, so that the internal reading and the money reading stay one record (T-08, T-09; STEWARD_PERSONA.md S9, read only).
4. As a steward, I designate a venture from a body of work, so that the external reading enters the record. (No rail; this story is filed, not built.)
5. As any participant, I see when my project has been designated a program or a venture, so that the triad is legible from the project's own page.

### Acceptance notes

- Story 2 presents the existing overseer function; the app does not reimplement it and does not widen who may call it.
- Story 4 is a stop card until the estate carries a venture migration (AGENTS.md STOP: schema).
- Story 5 depends on the projects rail for the project side of the link.
- Curation of the shared view (feature, order, shelve) stays client-side presentation only; the moment it writes a shared record it needs an anchor that does not exist (STEWARD_PERSONA.md S6, gap 4).

**Status: program designation is grounded today (T-08); venture designation needs a rail that does not exist; the project end of both needs the projects rail.** The steward act itself also rides the Anticipated delegating resolution for its live offering (AM §3).

---

## Journey 7 · Steward: gatherings and attendance, the direction rail, the verification walk

### Narrative

Three grounded steward practices, presented through one persona. The steward hosts gatherings and records attendance, which serves quorum and the record of presence (AM §6, gather paths; Bylaws §2.1, §2.7; policies `0023_gatherings_host_write_bound.sql` and `0024_events_scoped_insert_narrowed.sql`; STEWARD_PERSONA.md S4). The steward gives and reads direction on the direction rail (`0017_direction_rail.sql`, `0018_direction_desk.sql`; S7). And the steward records a verification walk's verdicts on the verdict rail (`0030_verdict_rail.sql`; S8), so that what was checked and what was found is in the record rather than in a memory.

### Stories

1. As a steward, I schedule and host a gathering, so that the calendar members see is the calendar that happens (§2.1; policy 0023).
2. As a steward or host, I record attendance at a gathering, so that quorum and presence rest on the record (§2.7; AM §6, gather paths).
3. As a member, I register or cancel for myself and only myself, so that presence stays a personal act (AM §6).
4. As a steward, I give direction on the direction rail and read the direction I have given, so that operational guidance has one home (0017, 0018).
5. As a steward, I walk a verification and record each verdict as mine, so that a claim of "checked" always names the checker (0030 verdict rail).

### Acceptance notes

- All five stories render existing policies; the app narrows presentation and adds no write the policies do not already permit.
- The 0023/0024 narrowings (membership tests in WITH CHECK) are part of the ground; the app must not depend on the pre-narrowing width (AM, findings and drafts section).

**Status: grounded in policy today; offering the persona live still rides the Anticipated delegating resolution** (STEWARD_PERSONA.md S4; AM §3).

---

## Journey 8 · The halt: what every persona experiences when the system is stopped

### Narrative

The app caches its shell and never the record; the halt has to win over offline (README architecture premise; issue #253; AGENTS.md REPO). When the CIS is halted, or the person's session cannot reach it, every persona gets the same honest experience: the shell loads, the chrome is present, and every place a record would appear says plainly that the record is not available, with when it was last reachable. Nothing stale is shown as if it were current. A guest notices least, because the guest surface is the published build. A member sees their shell and no directory, no agreements content served from the record, no own-record view. A steward sees the desk's frame and no queue, and can record nothing, because there is nothing to record into. No writes queue up for replay; an act that did not reach the record did not happen, which is what keeps the halt a halt rather than a delay.

### Stories

1. As any person, when the system is halted I see clearly that it is halted and when the record was last reachable, so that I never mistake a cached shell for the record.
2. As a member offline, I can open the app and read only what the public build carries, so that offline convenience never becomes a private copy of the record.
3. As a steward during a halt, I can prepare nothing that silently writes later, so that every act in the record happened when the record says it did.
4. As a builder, I can verify that no service worker cache ever contains record data, so that the premise is testable rather than aspirational (issue #253).

### Acceptance notes

- Service worker caches shell assets only; record responses carry no-store semantics and the app enforces it besides.
- No offline write queue, no optimistic UI over record writes, no background sync of record data.
- The halt state is a designed screen, not an error page.

**Status: traversable by construction; this journey gates the build itself rather than being gated.** Any feature that cannot survive the halt posture is redesigned or dropped (issue #253).

---

## Journeys deliberately not designed

Three journeys are left out on purpose, per AGENTS.md STOP and STEWARD_PERSONA.md S10, so their absence is a decision and not an oversight.

**Money movement.** Choosing a tier and seeing one's own payment history are in Journey 2; moving money, refunds, custody, capital accounts, and membership billing changes are the Treasurer's office and the Board (Bylaws §4.4, §5.x; STEWARD_PERSONA.md S10). The app reads revenue where the map grounds a read (S9) and moves nothing.

**Admission decisions.** There is no journey in which any app persona admits, suspends, or terminates anyone. Admission is the Board's human act (§1.3.1(e)); suspension and termination are Board process with notice and hearing (§1.8). The desk presents (Journey 5), and that is the whole of it.

**A public ring or non-member public chat surface.** The guest posture is settled: `anon` reads nothing in the database, a guest performs no CRUD, and public events are held on Luma, not here (AM §5 caption and the guest posture note). Public names, push notification, and any agent-initiated contact are stop cards (AGENTS.md STOP). A public conversational surface would need grounds that do not exist and is not designed here.

---

## Gates and dependencies

| journey | traversable today? | what unblocks the rest |
|---|---|---|
| 1 · Guest explores, offers a project | public estate only | the projects rail on the techne.coop estate (STEWARD_PERSONA.md gap 2); the net work written into the published build |
| 2 · Guest to guild participant | no | G1 (Motions 1 and 2, board memo 2026-08-19) to offer any price; G2 (TREASURY-POLICY, T-02) for the seam; G3 (counsel) beyond Colorado; a Stripe write key or a human for B1/B3 |
| 3 · Participant to provisional to patron member | applicant leg yes | §1.1(c) Board determination (Motion 3(b)) or another Board act to ground the 90-day trial; Journey 2's gates for guild entry; Board vote per §1.3.1(e) for each admission |
| 4 · Member reads and tends | member defaults yes | the projects rail for share-and-tend |
| 5 · Steward intake desk | build-dark only | the steward's delegating board resolution (AM §3, Anticipated) |
| 6 · Designate program / venture | program act grounded (T-08) | a venture migration on the estate (gap 3); the projects rail for the project link; the delegating resolution to offer the persona live; an anchor for any shared curation record (gap 4) |
| 7 · Gatherings, direction, verification | grounded in policy | the delegating resolution to offer the persona live |
| 8 · The halt | yes, by construction | nothing; it constrains everything else (issue #253) |

## Sources

README.md and AGENTS.md of this repository; docs/STEWARD_PERSONA.md; the guild critical path (PLANS/GUILD_CRITICAL_PATH.md, filed on issue #230); AM v0.1 (`techne.coop/commons/authority-map/`); Bylaws v2.1; T-08 (`commons/treasury/0030_program_revenue.sql`); policies 0017, 0018, 0023, 0024, 0030 as cited; board memo `legal/board-memo-2026-08-19/`; the steward's #guild-model working note of 2026-08-13; techne.coop issues #253, #230, #217, #247.
