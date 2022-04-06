---
created: 20211122161536414
modified: 20211122210729474
title: Spark Architecture
---

- `areas:` [[Apache Spark]]

---

Apache Spark uses a master-slave(technically, although it can also run in standalone mode) architecture that consists of a driver, that runs on a master node and multiple executors which run across the worker nodes in the cluster.

It can work with different clustering technologies such as Apache Mesos, [YARN](#YARN). It can also work as standalone.

Master Node has a driver program; this driver program internally has SparkContext.

The Spark code behaves as a driver program and creates a SparkContext, which is gateway to all the Spark functionalities.

Driver program interacts with cluster manager(SparkContext, the entry point, takes the request to the cluster manager).

Cluster manager in terms of YARN is the `ResourceManager`

Spark application runs as independent set of processes on a cluster.

The driver program and SparkContext takes care of the job execution within the cluster.

A job is split into multiple tasks that are distributed over the worker node.

When an [RDD](#RDD) is created in SparkContext, it can be distributed across various nodes.

Worker nodes are slaves that run different tasks.

---

Spark Architecture is based on 2 important abstractions:

### [RDD](#RDD)

Resilient Distributed Datasets

Spark Core is embedded with RDDs, an immutable fault-tolerant(like files in [HDFS](#HDFS)), distributed collection of objects that can be operated on in parallel.

It where the data will be loaded(or existing for processing), it can exist for shorter amount of time.

- RDDs are the fundamental units of data in Apache Spark that are split into partitions and can be executed on different nodes of a cluster. Implicit, lazy in nature, created whenever you use a method of SparkContext or when you do a transformation on an existing RDD or a dataset.
- Each dataset in an RDD is divided into logical memory partitions that may be computed on different nodes of a cluster.
- By default every RDD has 2 partitions, which can be customized while creating RDDs.
- The more partitions you've the better the parallel processing.
- RDDs are automatically split into partitions and can be executed upon different nodes by different taks in parallel, in-memory.

There are mainly two operations that can be peformed on an RDD

### Transformation

- These are operations (such as map, filter, join, union) that are peformed on an RDD that yields as new RDD containing the result.
- They return a pointer to a new RDD. The original RDD cannot be changed. Spark is "lazy" and nothing will be executed unless an action is invoked.
- It isn't necessarily reproducing a new set of data or RDD, but is a new "state". Think of it as step(s) in a program telling Spark how to get new data and what to do with it.
- **Resilience** is the ability to retrace steps from the beginning.

### Actions

- These are operations (reduce, first, count, collect, count, take save-as) that return a value after running a computation on an RDD.
- They return values and force the transformations to actually take place.

See also: [DAG](#DAG)

### [DAG](#DAG)

Directed Acyclic Graph

Spark has a DAG scheduler in the background which is tracking the transformations and steps which is part of your applications.

It is the scheduling layer of the Spark Architecture that implements stage-oriented scheduling and eliminates that hadoop [MapReduce](#MapReduce) multistage execution model.

If you're processing data using Spark applications in a Spark platform(whether standalone or in a hadoop cluster), for every step you do as part of your application, it creates an [RDD](#RDD), it becomes part of your DAG. The DAG scheduler is already aware of what steps are involved in DAG hence it comes up with a plan for executing the all the steps within the DAG. <span class="underline">If only and only if an action is invoked.</span>

Check <https://data-flair.training/blogs/dag-in-apache-spark/>

![](https://raw.githubusercontent.com/zubayrrr/twiki/main/bin/image.muzlc82nhqb.png)

See also: [Spark Cluster Managers](#Spark%20Cluster%20Managers)
