# open-world

A progressive web application for the **Open World Participation Framework** of RegenHub, LCA (Techne) — the same Common Information System that serves [techne.coop/intranet](https://techne.coop/intranet/), presented through a distinct, optimized UI/UX.

**Status: exploration. Nothing here is adopted, nothing is deployed, and no schema change is made from this repository.**

## The concept

Introduced by the steward in #guild-model (working note of 2026-08-13) and directed into this repository 2026-08-26: an *open world* where any participant in the community of practice can share their body of work as a unique project. Projects add to and form the **net work** — federated bodies of work — held in common with peers of the LCA: stewards, members, and guests.

The classification underneath is the **Project Triad**: a *project* is the open entry point; a *venture* is the same body of work read as an external relationship; a *program* is the same work read as an internal one. Any body of work can be all three at once. Stewards designate programs and ventures; any participant may share a project.

## The architecture premise

- **One information system.** The CIS (Supabase Postgres, RLS-governed) is the single source of truth. This app is a second door onto the same record — it invents no permission and holds no data of its own.
- **The authority map governs.** What any persona may see or do is `visible(agent, record) = f(role, record class, governing §)` per [techne.coop/commons/authority-map](https://techne.coop/commons/authority-map/). A capability this app wants that the map does not ground is a stop card, not a feature.
- **PWA first, possibly PWA only** (issue [#253](https://github.com/Techne-Co-op/techne.coop/issues/253)): one codebase, installable, no store presence. The app caches its shell and never the record — the halt has to win over offline.

## The stamps surface

The member view carries a **Stamps** section: a prepaid service credit, metered against a published rate card the way a post office franks a letter. It shows a stamp book, a rate card of five service classes, and the plain-language account of what the instrument is.

**Its honesty rule: the section reads nothing and shows no number.** The credit schema does not exist in the CIS. Four migrations are drafted and none are applied, because what they wait on is not code but three human answers (whether the cooperative hosts members' mail at all, whether the board grants the carve-out that lets a member see a number about themselves, and whether counsel reads Colorado's gift-card escheat statute as blocking the sale of a credit). So the whole section renders from one literal object in the shell, every unit is null, every rate is unpriced, and the marks are dashed and hollow per the estate's proposed-not-built convention, with a legend saying so. The one place an example appears it is labelled *example* in the interface itself, not in a tooltip.

Two design positions are carried from the credit work and are not this repository's to re-open: a standing is a **fold over events with no stored balance anywhere**, and a member sees **only their own** standing, never a comparison. The trust rule is printed on the surface: *your stamp standing is computed from your own acts and is never comparative.*

Working record: techne.coop issue [#196](https://github.com/Techne-Co-op/techne.coop/issues/196) and the stop card in front of migrations 0031 through 0034.

## The Daybook

The steward's stated near-term goal for this work is a **public beta of the Daybook**: one shared, append-only journal the cooperative writes into plainly and reads seven ways, where a machine-class reader proposes structure and a member always has the last word. Its PRD is [`docs/DAYBOOK_PRD.md`](docs/DAYBOOK_PRD.md), delivered by the steward on 2026-08-31 and held here verbatim (sha256 `b3bef074…c1339`).

**It is Draft v0, unadopted, for the Wednesday room.** The PRD says so on its own face and this repository does not upgrade it. Plans against it are ordered by systems dependency and never by time estimate, per the steward's direction: [`docs/DAYBOOK_DEPENDENCY_ORDER.md`](docs/DAYBOOK_DEPENDENCY_ORDER.md).

The PRD names four companion artifacts as governing behavior — the prototype (canonical), `DAYBOOK_BETA.md`, `READERS_INSTRUCTIONS.md`, and schema v0. The prototype is here: [`prototypes/daybook-beta-v3.html`](prototypes/daybook-beta-v3.html), delivered 2026-08-31 (sha256 `48063b7e…c13af`). It is a single self-contained page that reads and writes nothing — no `fetch`, no `localStorage`, no database client — and it carries the seven readings, the pen, the reader stand-in, Rereading, the Method page, the raw-record inspector, the guest view, and the cord. The PRD header still names `daybook-beta-v2.html`; the delivered file is **v3** and, being canonical for behavior, wins.

The specification is here too: [`docs/DAYBOOK_BETA.md`](docs/DAYBOOK_BETA.md), beta v3, delivered 2026-08-31 (sha256 `5f4c50c7…1a8ed`). Its §3 **is** the schema — five tables, nineteen event kinds, an explicit list of what is deliberately not a table — so "schema v0" was never a separate missing document. Its §5 adds the design system, whose one load-bearing rule is semantic rather than decorative: *the serif is the human voice, the mono is the record's grammar.*

And the reader's governance: [`docs/READERS_INSTRUCTIONS.md`](docs/READERS_INSTRUCTIONS.md), v3, delivered 2026-08-31 (sha256 `7c3ba8dd…c8813`). Eight journeys, each closing with its instruction verbatim, and a gathered list of refusals. The reader holds **exactly one power, to propose**; the staging function is the membrane where a machine proposal becomes a member act or becomes nothing; any capability outside `inference.*` is a halt with the stop card surfaced, with no retries and no reformulations to fit through.

**The artifact set is complete** apart from *The Second Generation*, which is method-history rather than behavior. Two crossings were found on the delivered set and are reported in the dependency document rather than resolved here — the largest being that the reader is instructed to stage two event kinds (`thread.forming`, `disagreement.noted`) that appear in neither the schema nor its own `inference.*` boundary.

The prototype in `prototypes/` still carries real members' first names on its invented seed, labelled as such (D-02). The served route at `/daybook/` does not: its seed voices are invented people (D-06), and signed in at the shell it reads and appends the record's `beta_` relations under the member's own name, in memory otherwise. See the dependency document for what that closes and what remains a stop card.

Note also that `techne.coop/daybook/` already publishes a *book* of that name — the launch weekend, verbatim, binding nothing. The instrument in this PRD shares its name and lineage and is a different object; which of the two the app is a door onto is an open question in the dependency document.

## Documents

- [`docs/DAYBOOK_PRD.md`](docs/DAYBOOK_PRD.md) — the Daybook public-beta PRD, as delivered by the steward
- [`docs/DAYBOOK_BETA.md`](docs/DAYBOOK_BETA.md) — the Daybook beta v3 specification, including the schema (§3)
- [`docs/READERS_INSTRUCTIONS.md`](docs/READERS_INSTRUCTIONS.md) — governance of the machine-class reader, in journeys
- [`docs/DAYBOOK_DEPENDENCY_ORDER.md`](docs/DAYBOOK_DEPENDENCY_ORDER.md) — the Daybook build order, by systems dependency
- [`docs/JOURNEYS_AND_STORIES.md`](docs/JOURNEYS_AND_STORIES.md) — critical member and steward journeys and stories
- [`docs/STEWARD_PERSONA.md`](docs/STEWARD_PERSONA.md) — the steward persona and its permissions set, intersected with the authority map
- [`CONTRIBUTORS.md`](CONTRIBUTORS.md) / [`AGENTS.md`](AGENTS.md) — how to work here

## Provenance

Originating direction: Todd Youngblood (Ventures & Operations Steward), Buzz DM, 2026-08-26. Artifact-driven build directed in Buzz #open-world, 2026-08-31: the steward supplies artifacts, the repository and its documents are updated against each, plans are set against the beta goal and ordered by systems dependency rather than by time. This is pre-adoption work, developed with other officers and members of the board. Related record: techne.coop issues [#253](https://github.com/Techne-Co-op/techne.coop/issues/253) (the app articulation and PRD), [#217](https://github.com/Techne-Co-op/techne.coop/issues/217) (the two bodies), [#247](https://github.com/Techne-Co-op/techne.coop/issues/247) (the message bus), and the guild critical path filed on [#230](https://github.com/Techne-Co-op/techne.coop/issues/230).
