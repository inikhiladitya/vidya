---
created: 2022-02-24
title: test
tags:
  - goal
Type: 
Progress: 0
Target: 1
Reason: test
Timespan:  1 Week
draft: true
---

- Bar: `$= dv.view('progress-bar', {file: 'test'})`
- Projects: `$= const projects = dv.page('test').file.inlinks.where(p => { const mp = dv.page(p.path); return mp.tags?.includes('project') && mp.status === 'In Progress'}); if (projects.length > 0) { dv.header(4, projects.length > 1 ? "Projects" : "Project"); dv.list(projects) }`

***

## What does success look like? What are the key results?
- 


## Related core values
- 

## Projects to make this happen
### Ideas
- 

### Created projects
```dataviewjs
const pages = dv.current().file.inlinks.where(p => dv.page(p.path).tags?.includes('project'));

dv.table(["Project", "Status"], pages.map(p => {
	const page = dv.page(p.path); 
	return [page.file.link, page.status]
}));
```


