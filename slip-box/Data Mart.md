---
created: 20211130161918582
modified: 20211130171046149
title: Data Mart
---

- `areas:` [[Data Engineering]]

---

Dependent and Independent(of [Data Warehouse](#Data%20Warehouse)) data marts.

### Dependent

- Sources from Data Warehouse
- (Mostly) uniform data across marts
- Architecturally straightforward
- Many sources
- ETL from sources
- Probably large data volumes
- Dimensionally organized data

### Independent

- Sourced directly from applications and systems
- Little or no uniformity across marts
- "Spaghetti" architecture
- One or more sources
- ETL from sources
- Possibly large data volumes
- Dimensionally organized data
