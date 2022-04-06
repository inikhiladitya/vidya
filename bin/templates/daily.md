---
created: <%tp.date.now()%>
title: <%tp.date.now()%>
tags:
  - journal
draft: true
mood: <%tp.system.suggester(["🟪️","🟦️","🟩️","🟨️","🟧️","🟥️"],["🟪️","🟦️","🟩️","🟨️","🟧️","🟥️"], false, "Mood")%>
---

## On This Day: [[<%tp.date.now("YYYY-MM-DD", -365)%>]]

---

## Notes Created Today

```dataview
TABLE tags
FROM ""
WHERE file.ctime.year = [[<%tp.file.title%>]].file.ctime.year ANDfile.ctime.month = [[<%tp.file.title%>]].file.ctime.month AND file.ctime.day = [[<%tp.file.title%>]].file.ctime.day
SORT file.name
```

---

[[<% tp.date.yesterday("YYYY-MM-DD") %>]] <== <button class="date_button_today">Today</button> ==> [[<% tp.date.tomorrow("YYYY-MM-DD") %>]]

#### Hey Zubayr, Whats On Your Mind? 

##### Goals

- [ ]

---

<%* if (tp.date.now("M-D") == "1-1") { %>
- [ ] Make Yearly Note
<%* } _%>
<%* if (tp.date.now("D") == 1) { %>
- [ ] Make Monthly Note
<%* } _%>
<%* if (tp.date.now("ddd") == "Sun") { %>
- [ ] Make Weekly Note
<%* } _%>

<%tp.file.cursor(7)%>