---
title: "Expert dans l'automatisation et l'échange de données"
permalink: /fr
excerpt: "Expert dans l'automatisation et l'échange de données"
header:
  #image: /assets/images/sf.png
  overlay_image: /assets/images/sf.png
  overlay_filter: 0.55 # same as adding an opacity of 0.5 to a black background
  #caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
  cta_label: "More Info"
  #cta_url: "https://unsplash.com"
---

<a name="web-cloud-api"></a>
### Web, Cloud, APIs
*Connectez-vous à vos clients, transférez vos besoins de traitement et de stockage dans le cloud, automatisez grâce à des API.*

Que vous ayez besoin d'une solution simple mais robuste pour <b>partager des fichiers</b> avec vos collaborateurs et/ou clients, ou que vous cherchiez à <b>moderniser votre offre</b> et améliorer vos processus en déployant des <b>objets connectés (IoT)</b> chez vos clients, je vais architecturer, implémenter, déployer et opérer des solutions sécurisées, résilientes et évolutives qui vous aideront à développer votre business. Je vous assisterai également dans la migration de vos solutions existantes ou le déploiement de nouvelles solutions dans le cloud (Amazon Web Services, Google Cloud Platform, Microsoft Azure, Exoscale ou d'autres) afin de <b>diminuer vos coûts</b> en comparaison à la mise en place et à l'exploitation de votre propre infrastructure. 

<a name="data"></a>
### Data, Analytics

*Cassez les silos, amassez des données, analysez-les et découvrez de nouvelle opportunités.*

Je vous aiderai à <b>consolider les données venant des multiples systèmes</b> de votre entreprise qui fonctionnent de manière isolée (silos), de telle manière que vous puissiez exploiter ces données et développer de nouvelles fonctionnalités. Je vous permettrai de prendre des <b>décisions stratégiques basées sur des faits</b> grâce à vos données qui sont aujourd'hui sous-exploitées.

<a name="automation"></a>
### CI/CD, DevOps, Containers

*Déverouillez le potentiel des vos équipes système et de développement et fournissez ainsi d'avantage de valeur à vos clients, plus rapidement.*

Les outils ont leur importance: je vous aiderai à utiliser au mieux des outils tels que <b>GitHub</b>, <b>BitBucket</b>, <b>GitLab</b>, <b>Jenkins</b>, <b>Docker</b>, <b>Kubernetes</b>, <b>Grafana</b>, <b>Prometheus</b> ou d'autres. Mais surtout je <b>coacherai vos équipes</b> pour les amener à avoir <b>l'état d'esprit</b> qui vous permettra de réellement améliorer votre productivité et d'ainsi mieux servir vos clients. J'analyserai vos pipelines de développement et votre environment de production afin de vous recommander des améliorations et je les implémenterai pour vous si vous le souhaitez.

### Languages de programmation

*Java, Scala, Python, PHP, JavaScript, Bash, SQL,...*

Je développerai des nouvelles solutions, adapterai des solutions existantes ou travaillerai sur un prototype, <b>en autonomie ou en collaboration avec votre équipe</b>, en utilisant une variété de languages de programmation parmi les plus utilisés dans l'industrie.

### Open source

*Mettez à profit le potentiel des logiciels open source.*

Je vous aiderai à utiliser des technologies open source, que cela soit des <b>solutions utilisateurs finales</b> telles que OwnCloud pour le partage de fichiers ou des <b>outils/librairies</b> tels que ceux fournis par la fondation Apache pour développer vos propres solutions. Je vous guiderai également sur le chemin menant à rendre vos propres logiciels open source.

### Projets

Une sélection de projects sur lesquels j'ai travaillé:

<div class="projectContainer2">
<div class="projectTitle">Big Data Platform</div>

<div class="projectIntro"><b>Ingénieur big data senior</b> au sein de l'équipe développant et exploitant la plateforme big data d'une grande entreprise de télécom.</div>

<div class="projectDesc">Cette plateforme big data <b>self-service</b> est composée de quatre composants: <b>Hadoop</b> (<b>HDFS</b>, <b>YARN</b>, <b>Hive</b> en particulier), <b>Kafka</b>, <b>Kubernetes</b> et une interface graphique. Elle offre aux "data scientists" de l'entreprise une infrastructure big data self-service sécurisée qu'ils n'ont pas pas besoin de maintenir eux-mêmes mais qui fournit tous les outils dont ils ont besoin pour leurs cas d'utilisations spécifiques (par ex. <b>Spark</b> streaming jobs exécutés sur YARN, requêtes Hive sur des données stockées dans HDFS, excécution d'applications <b>Kafka Connect</b> sur Kubernetes,...). De plus, l'infrastructure fournit toutes les garanties requises en terme de <b>sécurité</b> pour permettre l'exploitation de données personnelles sensibles (audit, classification des données, contrôle des accès, cryptage des données).
Le côté self-service de la plateforme est rendu possible grâce à des <b>microservices Dockerizés</b> implémentés en <b>Java</b> qui souscrivent à des topics Kafka et <b>réagissent à des événements</b> (exemple d'événement: un utilisateur demande de l'espace disque HDFS additionnel au travers de l'interface graphique) afin d'appliquer les changements nécessaires (appliquer le quota HDFS pour reprendre le même exemple).</div>
</div>

<div class="projectContainer1">
<div class="projectTitle">Plateforme De Localisation Nouvelle Génération</div>

<div class="projectIntro"><b>Architecte et ingénieur principal</b> lors du développement d'une plateforme de localisation nouvelle génération pour une grande multinationale américaine.</div>

<div class="projectDesc">Cette plateforme de localisation est composée de <b>microservices</b> permettant à des <b>équipes distribuées géographiquement</b> de travailler indépendamment. Chaque microservice est assemblé comme une image <b>Docker</b>. La plupart des microservices sont implémentés en <b>Scala</b> et utilisent <b>Akka</b>. Le microservice responsable de l'identification et de la réutilisation des unités de traduction existantes utilise <b>Cassandra</b> pour stocker des dizaines de millions de traductions et les récupérer de manière optimale de sorte à rendre la traduction temps réel possible. Tous les microservices sont déployés sur un cluster <b>Mesos/Marathon</b>. La communication de service à service se fait de manière asynchrone au travers de messages, en utilisant <b>RabbitMQ</b> (messages sérialisés avec <b>Avro</b>). Le code source est dans <b>GitHub</b> et <b>Jenkins</b> ("pipeline plugin" en particulier) est utilisé pour la réalisation du <b>CI/CD</b>.</div>
</div>

### Contact
[contact@pf80.ch](mailto:contact@pf80.ch)