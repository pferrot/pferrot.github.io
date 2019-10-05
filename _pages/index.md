---
permalink: /
excerpt: "Expert in building secure, scalable, elastic and resilient distributed systems"
header:
  #image: /assets/images/sf.png
  overlay_image: /assets/images/sf.png
  overlay_filter: 0.6 # same as adding an opacity of 0.5 to a black background
  #caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
  cta_label: "More Info"
  #cta_url: "https://unsplash.com"
---

<a name="web-cloud-api"></a>
### Web, Cloud, APIs
*Connect with your customers, offload your processing/storage needs to the cloud, enable automation through APIs.*

I will architect, build, deploy and operate secure, resilient and scalable solutions that will help you grow your business. I will assist you in leveraging public cloud providers (Amazon Web Services, Google Cloud Platform, Microsoft Azure, Exoscale and others) to save time and money compared to setting up and operating your own infrastructure. 

<a name="data"></a>
### Data, Analytics

*Break silos, collect data, analyse it and uncover new business opportunities.*

I will help you bring data coming from siloed systems/applications together so you can explore consolidated datasets and build new features. I will enable you to become a data company and therefore make better decisions based on facts. 

<a name="automation"></a>
### CI/CD, DevOps, Containers

*Unlock your dev and system teams’ full potential and provide more value to your customers, quicker.*

I will analyse your development pipeline and production environment, recommend enhancements and implement them for you.

### Programming languages

*Java, Scala, Python, PHP, JavaScript, Bash, SQL,...*

I will develop new solutions, refactor existing ones or work on a proof of concept, working in autonomy or with your team, in a variety of programming languages.

### Projects

A selection of projects I worked on:

<div class="projectContainer2">
<div class="projectTitle">Big Data Platform</div>

<div class="projectIntro"><b>Senior big data engineer</b> in the team building and operating the self-service big data platform of a large telco company.</div>

<div class="projectDesc">This <b>self-service</b> big data platform is composed of four core components: <b>Hadoop</b> (<b>HDFS</b>, <b>YARN</b>, <b>Hive</b> in particular), <b>Kafka</b>, <b>Kubernetes</b> and a UI. It offers data scientists in the company a secure self-service big data infrastructure that they do not need to maintain themselves but that provides the necessary tools for them to implement their specific use cases (e.g. <b>Spark</b> streaming jobs running on YARN, Hive queries for data stored on HDFS, running <b>Kafka Connect</b> applications on Kubernetes,...). Also, the infrastructure provides all the necessary guarantees in terms of <b>security</b> to deal with sensitive personal information (auditing, classification of data, fine grained access control, data encryption).
The self-service side of things is essentially made possible thanks to <b>Dockerized microservices</b> implemented in <b>Java</b> that subscribe to Kafka topics and <b>react to events</b> (example event: a data scientist requests additional HDFS quota in the UI) to apply the necessary changes (apply HDFS quota to take the same example).</div>
</div>

<div class="projectContainer1">
<div class="projectTitle">Next Gen Localization Platform</div>

<div class="projectIntro"><b>Architect and lead engineer</b> on the development of the next generation localization platform for a large american multinational software corporation.</div>

<div class="projectDesc">This localization platform is composed of a number of <b>microservices</b>, enabling <b>geographically distributed teams</b> to work independently and efficiently. Each microservice is packaged as a <b>Docker</b> image. Most microservices implemented in <b>Scala</b>, using <b>Akka</b>. The microservice in charge of identifying and reusing existing translation units is using <b>Cassandra</b> to store tens of millions of translation units and retrieve them efficiently in order to allow real-time translation. All microservices are reployed on a a <b>Mesos/Marathon</b> cluster. Service-to-service communication through messages, using <b>RabbitMQ</b> as message broker (serialized with <b>Avro</b>). Source code in <b>GitHub</b>, <b>CI/CD</b> thanks to <b>Jenkins</b> (pipeline plugin in particular).</div>
</div>

### Contact
[contact@pf80.ch](mailto:contact@pf80.ch)