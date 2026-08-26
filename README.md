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

## Documents

- [`docs/JOURNEYS_AND_STORIES.md`](docs/JOURNEYS_AND_STORIES.md) — critical member and steward journeys and stories
- [`docs/STEWARD_PERSONA.md`](docs/STEWARD_PERSONA.md) — the steward persona and its permissions set, intersected with the authority map
- [`CONTRIBUTORS.md`](CONTRIBUTORS.md) / [`AGENTS.md`](AGENTS.md) — how to work here

## Provenance

Originating direction: Todd Youngblood (Ventures & Operations Steward), Buzz DM, 2026-08-26. Related record: techne.coop issues [#253](https://github.com/Techne-Co-op/techne.coop/issues/253) (the app articulation and PRD), [#217](https://github.com/Techne-Co-op/techne.coop/issues/217) (the two bodies), [#247](https://github.com/Techne-Co-op/techne.coop/issues/247) (the message bus), and the guild critical path filed on [#230](https://github.com/Techne-Co-op/techne.coop/issues/230).
