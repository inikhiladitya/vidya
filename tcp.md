---
caption: Transmission Control Protocol
created: 20211010115832678
modified: 20211031193145335
title: TCP
---

- Transmission Control Protocol is a connection-oriented protocol.
- It is a reliable way to transport segments across the network.
  - If segment is dropped, protocol detects it and resends segments.
- Acknowledgements received for successful communications.
- Flow control through [Windowing](#Windowing)
- Used for all network data that needs to be assured to get to its destination.
- A Three way handshake
  - ![](https://cdn.jsdelivr.net/gh/zubayrrr/twiki/bin/image.bf3rel9qh7w.png)
