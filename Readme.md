**Local Kubernetes Deployment with Minikube - Quick Start Guide**

A comprehensive guide for deploying applications on a local Kubernetes cluster using Minikube. This guide provides step-by-step instructions for setting up Minikube, deploying applications, accessing them, and running tests in a local Kubernetes environment. Ideal for developers looking to quickly get started with Kubernetes development and testing on their local system.

**Getting Started**
These instructions will help you deploy the application on your local system using Minikube.

**Prerequisites**

Minikube
kubectl
Installation

**Start Minikube:**

minikube start

Here are the basic kubectl commands to interact with various Kubernetes resources:

**Get Resource(s):**

kubectl get <resource>: Get a list of resources of the specified type.
kubectl get <resource> <resource-name>: Get details of a specific resource.
kubectl get all: Get all resources in the current namespace.

**Describe Resource(s):**

kubectl describe <resource> <resource-name>: Get detailed information about a specific resource.
kubectl describe <resource>: Describe all resources of the specified type.

**Logs:**

kubectl logs <pod-name>: Get logs from a specific pod.
kubectl logs -f <pod-name>: Follow logs from a specific pod in real-time.

**ConfigMap:**

kubectl get configmap: List all ConfigMaps in the current namespace.
kubectl describe configmap <configmap-name>: Describe details of a specific ConfigMap.

**Pods:**

kubectl get pods: List all pods in the current namespace.
kubectl describe pod <pod-name>: Describe details of a specific pod.

**Services:**

kubectl get services: List all services in the current namespace.
kubectl describe service <service-name>: Describe details of a specific service.

**Deployment:**

kubectl get deployments: List all deployments in the current namespace.
kubectl describe deployment <deployment-name>: Describe details of a specific deployment.

**List:**

kubectl get <resource>: Get a list of resources of the specified type.
kubectl get all: Get all resources in the current namespace.

**Built With**

Kubernetes - Container orchestration platform
Minikube - Local Kubernetes cluster management tool
Docker - Containerization platform
kubectl - Kubernetes command-line tool
Vite - Fast, opinionated frontend build tool for modern web development
ReactJS - JavaScript library for building user interfaces
Node.js - JavaScript runtime environment
MySQL - Open-source relational database management system
Express.js - Web application framework for Node.js
Sequelize - Promise-based Node.js ORM for MySQL, PostgreSQL, SQLite, and more

**Authors**

Avneesh Dwivedi - Initial work - Avneesh Dwivedi GitHub Profile

**License**

This project is licensed under the MIT License - see the LICENSE.md file for details.
