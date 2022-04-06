---
created: 20211130161032385
modified: 20211130185616875
tags:
  - data-engineering
title: Data Warehouse Architecture
---

### Centralized [[Data Warehouse]]

- A single data warehousing environment, rather than one made up of multiple components.
- Ideally, it should be your default or "go to" architecture
- Single Database
- Obvious advantage: One stop shopping(of data)
- High cross-org cooperation
- High data governance
- Ripple effects
- Emphasis on "enterprise" (EDW)
  - Relational
  - Specialized Database (DWing appliances)

### Component Based

- Decomposition
- Mix and match technology
- "Bolt together" components
- Overcome org. challenges
- Often inconsistent data
- Difficult to cross-integrate
  - Architected would contain
  - DW + DMs
- Or simply DMs only
- DW Bus all DMs follow "Conformed Dimensions"
- Non-Architected
  - Federated EDW

See also: [Data Mart](#Data%20Mart)
