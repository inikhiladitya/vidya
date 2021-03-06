---
created: 20211122182350619
modified: 20211122183348255
title: Spark Cluster Managers
---

- `areas:` [[Apache Spark]]

---

### Spark Standalone mode

- By default applications submitted to the standalone mode cluster will run in FIFO order and each application will try to use all available nodes.
- Which basically means you'll have multiple nodes and you'd have one master node running and the other nodes will be Spark Worker processes running.
- It'll not be a distributed file system since it is a standalone mode, it'll rely on external sources to get data or the file system of the node where the data is stored. (the processes will happen across the worker nodes)

### Apache Mesos

- Apache Mesos is an open-source project to manage computer clusters and can also run [hadoop](#hadoop) applications.

### hadoop YARN/Apache YARN

- Apache YARN is the cluster resource manager of hadoop 2.
- Spark can run on YARN.

### Kubernetes

- Kubernetes is an open-source system for automating, deployment, scaling and management of containerized applications.
