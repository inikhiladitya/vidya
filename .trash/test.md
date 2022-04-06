
<% (await tp.file.create_new(tp.file.find_tfile("nouns"),  false)).basename %>

<% await tp.file.move("/archive" + "/" + tp.file.title) %>