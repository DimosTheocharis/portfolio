import { Injectable } from "@angular/core";
import { CertificateModel } from "src/app/Models/certificate/certificateModel";

@Injectable({
    providedIn: "root"
})
export class CertificateService {
    private certificatesData: CertificateModel[] = [
        {
            title: "Docker & Kubernetes: The Practical Guide [2024 Edition]",
            provider: "Udemy",
            description: "I purchased this course because i wanted to be able to understand the code in the dockerfiles of the projects \
             i was involved at my job. I also found interesting the ability to easily deploy my projects and set up environments that \
             include all the necessary dependencies to run the application.",
            courselink: "https://www.udemy.com/course/docker-kubernetes-the-practical-guide/learn/lecture/22166788",
            certificateLink: "https://1drv.ms/b/c/d4f8a9f78e44bb3b/EeTIyqRpsW1Jnaz33aHL3EUBn6hsC7o20Ghgc3nI8GnUpw?e=7e9kJU",
            completionDate: new Date(2024, 6, 12),
            knowledges: [
                "What is Docker and why we use it.",
                "What are containers and images and how to manage them.",
                "How to construct Dockerfiles (for node and python projects).",
                "What are volumes and bind mounts and how to use them to persist data.",
                "What are ENVs and ARGs and how to create and use them in order to access different values based on development or \
                 production stage",
                "What are networks and how to manage them in order to enable container-to-container communication.",
                "What is Docker Compose and how to write Docker Compose files in order to organise apps and orchestrate their containers \
                 and images. (for frontend, backend, database etc).",
                "What is Kubernetes and how we can use it to define the architecture of our deployment.",
                "Concepts such as Pods, Services, Deployments, Volumes, PV (Persistent Volumes), PVC (Persistent Volume Claims), \
                 Kubelet etc.",
                "What is Minikube and how to use it to simulate a local Kubernetes environment where its possible to run local Cluster \
                 (for basic node apps in the course)."
            ]
        }
    ]
}