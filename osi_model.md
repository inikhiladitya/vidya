---
created: 20210926141234636
modified: 20211031193143712
title: OSI Model
---

OSI stands for Open Systems Interconnection, developed in 1977 by the International Organization for Standardization(ISO).

- ISO 7498 is for the standard, OSI model.
- OSI Model can also be referred to as OSI Stack.

---

OSI model doesn't always accurately describe how networks actually operate (some things can operate at multiple layers of the OSI model), our networks today operate on the [TCP/IP](#TCP%2FIP) model but OSI model was the standard to describe how all and any network can possibly operate.

OSI model serves as a reference model:

- To categorize functions of the network into particular layer(s).
- To compare technologies across different manufacturers.
- To understand how to best communicate with that device, how to troubleshoot it etc.

The OSI model has 7 layers:

<table>
<tbody>
<tr class="odd">
<td>Layer 7</td>
<td><a href="#Application%20Layer%20-%20OSI" class="tc-tiddlylink tc-tiddlylink-resolves">Application Layer - OSI</a></td>
</tr>
<tr class="even">
<td>Layer 6</td>
<td><a href="#Presentation%20Layer%20-%20OSI" class="tc-tiddlylink tc-tiddlylink-resolves">Presentation Layer - OSI</a></td>
</tr>
<tr class="odd">
<td>Layer 5</td>
<td><a href="#Session%20Layer%20-%20OSI" class="tc-tiddlylink tc-tiddlylink-resolves">Session Layer - OSI</a></td>
</tr>
<tr class="even">
<td>Layer 4</td>
<td><a href="#Transport%20Layer%20-%20OSI" class="tc-tiddlylink tc-tiddlylink-resolves">Transport Layer - OSI</a></td>
</tr>
<tr class="odd">
<td>Layer 3</td>
<td><a href="#Network%20Layer%20-%20OSI" class="tc-tiddlylink tc-tiddlylink-resolves">Network Layer - OSI</a></td>
</tr>
<tr class="even">
<td>Layer 2</td>
<td><a href="#Data%20Link%20Layer%20-%20OSI" class="tc-tiddlylink tc-tiddlylink-resolves">Data Link Layer - OSI</a></td>
</tr>
<tr class="odd">
<td>Layer 1</td>
<td><a href="#Physical%20Layer%20-%20OSI" class="tc-tiddlylink tc-tiddlylink-resolves">Physical Layer - OSI</a></td>
</tr>
</tbody>
</table>

The mnemonic we can use to remember is: "**P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way\!"

At different layers, data/information is called by different names:

![](https://cdn.jsdelivr.net/gh/zubayrrr/twiki/bin/image.iz2iin5lz3o.png)

The mnemonic to remember the data types in the OSI model is: "**D**on't **S**ome **P**eople **F**orget **B**irthdays?"

---

using [Wireshark](#Wireshark) to analyze traffic.
