---
created: 20211122155539233
modified: 20211122203249294
title: DAG
---

- `areas:` [[Apache Spark]]

---

Directed Acyclic Graph

Spark has a DAG scheduler in the background which is tracking the transformations and steps which is part of your applications.

It is the scheduling layer of the Spark Architecture that implements stage-oriented scheduling and eliminates that hadoop [MapReduce](#MapReduce) multistage execution model.

If you're processing data using Spark applications in a Spark platform(whether standalone or in a hadoop cluster), for every step you do as part of your application, it creates an [RDD](#RDD), it becomes part of your DAG. The DAG scheduler is already aware of what steps are involved in DAG hence it comes up with a plan for executing the all the steps within the DAG. <span class="underline">If only and only if an action is invoked.</span>

Check <https://data-flair.training/blogs/dag-in-apache-spark/>
