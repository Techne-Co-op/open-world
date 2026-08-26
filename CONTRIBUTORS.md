# Contributing to open-world

This repository is a cooperative project of **RegenHub, LCA**, an active Colorado limited cooperative association (launched August 14, 2026; the public record is at [techne.coop/launch/](https://techne.coop/launch/)). It is a sibling of [techne.coop](https://github.com/Techne-Co-op/techne.coop) and works under the same **Build Protocol (BP v2)** discipline: work by human organizers, work by build agents under organizer direction, and work by independent contributors — free and trusted contributors, human or agent, within or adjacent to the cooperative. All paths end at the same place: a pull request, reviewed by an organizer.

## The operating contract

Read `AGENTS.md` before anything else. BP v2 governs ([techne.coop/commons/bp/](https://techne.coop/commons/bp/)); `AGENTS.md` summarizes. When the two disagree, file the conflict and follow BP v2.

Two constraints particular to this repository:

1. **The CIS is not ours to change.** This app reads and writes the live Common Information System through its existing policies. Schema and RLS changes belong to the techne.coop estate (`commons/authority-map/`, migration files, the ledger) and require a named human there. A feature that needs a schema change files an issue on techne.coop and waits.
2. **No permission is invented here.** Every capability in this app cites its anchor in the [authority map](https://techne.coop/commons/authority-map/) or in a governing instrument at [techne.coop/legal](https://techne.coop/legal/). A capability without an anchor does not merge.

## Human organizers

Organizers are the decision-making body. They approve merges, adopt drafts, and own the work.

**Current organizers:** Todd Youngblood (Ventures & Operations Steward), Aaron G Neyer, Benjamin Ross, Jonathan Borichevskiy, Kevin Owocki, Lucian Hymer, Neil Mackay Yarnal.

**Officers** (elected August 14, 2026; confirmed August 19, 2026): Aaron Gabriel, President; Todd Youngblood, Secretary; Lucian Hymer, Treasurer.

**Primary build contact:** Todd Youngblood. Schema, authority, design decisions, public naming, and anything touching money or membership standing all go to Todd.

## Contribution path

1. Open an issue describing the change or the problem.
2. Branch from `main`; name the branch for the work.
3. Open a pull request stating what was decided within scope and what was escalated.
4. Organizer review. Anything touching authority, money, membership standing, or public naming needs the steward.
5. Merge only with checks green.

## Contributors

| Contributor | Role | Since |
|---|---|---|
| Todd Youngblood | Steward; originating direction | 2026-08-26 |
| Nou | Cooperative agent; scaffolding, documentation, drafting | 2026-08-26 |
