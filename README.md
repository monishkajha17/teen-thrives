<br>
<div align="center">
    <div >
        <img width="200px" src="https://firebasestorage.googleapis.com/v0/b/gsc23-12e94.appspot.com/o/members%2Fheadhome_square.png?alt=media&token=96a55b42-7c9f-4e68-b41f-d986efe79c01" alt=""/>
    </div>
    <div>
            <h3><b>TeenThrives</b></h3>
            <p><i>Rhythm of Wellness, Teen Thrives, where Every Teen Belongs and Thrives</i></p>
    </div>      
</div>
<br>
<h1 align="center">TeenThrives</h1>

![HeadHome](assets/headhome.png)

**Teen Thrives: Empowering Teens for Well-being and Growth**

Teen Thrives is dedicated to empowering teenagers to navigate the challenges of adolescence with confidence and resilience. Our platform offers personalized support, resources, and a supportive community to promote mental health and well-being among teens.


## Problem Statement

<br/>
<blockquote align='center'>
<h3>“

"1 in 3 teenagers experience symptoms of anxiety."

\- National Institute of Mental Health

</h3>
</blockquote>
<br/>

Teenagers lack accessible and supportive platforms tailored to their unique challenges, leading to feelings of isolation and hindering their ability to seek help. There's a critical need for a comprehensive online platform providing personalized support and resources to promote their mental health and well-being.

## 🎥 &nbsp;Demo Video

<a href="https://youtu.be/peDNWLrffIQ"><img src="./assets/demo-video-thumbnail.png" /></a>

> Video Link: https://youtu.be/peDNWLrffIQ

## 🛠️ &nbsp;Key Functionalities

![Key Functionalities](assets/key-functionalities.jpg)

### 1. Community Interface

Join a vibrant community where **`teenagers`** can connect, share achievements, and find support in a positive and understanding environment.

### 2. CBT Bot for Mental Health

Engage with our Cognitive Behavioral Therapy (CBT) bot for personalized conversations, mental health monitoring, and receive comprehensive reports to support your well-being journey.

### 3. Educational Blog Section

Dive into our blog section covering various topics, from physical changes to mental health, providing valuable insights and guidance for teenagers.

### 4. Weekly Learnings
Discover and absorb essential weekly learnings crafted to address the unique challenges and experiences of teenagers, promoting holistic growth.

### 5. Professional Guidance
Benefit from evidence-based therapeutic content and suggestions provided by mental health professionals, ensuring credible and reliable guidance.

<a href="https://raw.githubusercontent.com/GSC23-HeadHome/HeadHome/main/assets/user-flow-diagram.png">
<img src="./assets/user-flow-diagram.png" target="_blank" />
</a>
<br />

> Click image to enlarge.

This user flow diagram gives an overview of the communication flows between the various stakeholders through HeadHome.

## 🎯 &nbsp;UN's Sustainable Development Goals & Targets

### SDG 3: Good Health and Well-Being (Target: 3.6)

![SDG3](assets/SDG3.png)

HeadHome directly addresses the issue of **dementia wandering**.

Wandering episodes can bring danger to patients such as traffic incidents, with no way to contact their caregivers. Thus, caregivers might feel the need to micromanage their patients, causing significant caregiver stress.

HeadHome can help these patients by providing clear and simple instructions on the wearable to guide the patient home. It also sends alerts to their caregiver whenever they need help, removing the need for constant tracking and monitoring.


## 👨🏻‍💻 &nbsp;Technology Stack

<div align="center">
<kbd>
<img src="./assets/icons/Flutter.png" height="60" />
</kbd>
<kbd>
<img src="./assets/icons/Dart.png" height="60" />
</kbd>
<kbd>
<img src="./assets/icons/Firebase.png" height="60" />
</kbd>
<kbd>
<img src="./assets/icons/Go.png" height="60" />
</kbd>
<kbd>
<img src="./assets/icons/Gin.png" height="60" />
</kbd>
<kbd>
<img src="./assets/icons/GCP.png" height="60" />
</kbd>
<kbd>
<img src="./assets/icons/Maps.png" height="60" />
</kbd>
<kbd>
<img src="./assets/icons/Arduino.png" height="60" />
</kbd>
<kbd>
<img src="./assets/icons/ESP32.png" height="60" />
</kbd>
</div>
<div align="center">
<h4>Flutter | Dart | Firebase | Go | Gin | Google Cloud Platform | Google Maps Platform | Arduino | ESP32</h4>
</div>

## ☁️ &nbsp;Enterprise Cloud Architecture & Services

<a href="https://raw.githubusercontent.com/GSC23-HeadHome/HeadHome/main/assets/cloud-architecture.png">
<img src="./assets/cloud-architecture.png" target="_blank" />
</a>
<br />

> Click image to enlarge.

### 1. Presentation Layer

**Users** of HeadHome will directly interact with the Presentation Layer, namely the HeadHome wearable built with **Arduino & ESP32**, as well as the HeadHome mobile application built with **Flutter & Dart**. Any business or computational logic is abstracted onto the serverless backend hosted on **Cloud Run**. With Cloud Run's auto-scaling and load balancing capabilities, in the event of more traffic, our backend is able to seamlessly scale horizontally to meet the growing demands of the application. Due to the flexibility and versatility of Cloud Run, an external load balancer in the form of Google's **Cloud Load Balancing** could be tapped on to deploy our backend to multiple regions and further reduce latencies and downtime.

**For more information:**

HeadHome hardware wearable: [Link](https://github.com/GSC23-HeadHome/HeadHome-Hardware)

HeadHome frontend mobile application: [Link](https://github.com/GSC23-HeadHome/HeadHome-App)

HeadHome backend: [Link](https://github.com/GSC23-HeadHome/HeadHome-Backend)

### 2. CI/CD Pipeline

For **developers**, the HeadHome project comes with a fully integrated CI/CD pipeline equipped with auto-deployment from **Github**. Any code changes to the [HeadHome Backend Repository](https://github.com/GSC23-HeadHome/HeadHome-Backend) will be automatically mirrored onto **Google Cloud Source Repositories** and containerised to **Artifact Registry** via **Cloud Build**. Coupled with **Secret Manager**, the backend container is deployed serverless via **Cloud Run**.

### 3. Backend Services & Storage Layer

Many miscellaneous backend and storage services abstracted and handled via **Google Cloud**, as detailed below.

| Google Cloud Service     | Purpose & Use                                                                                 |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| Google Maps Platform     | Directions API to display route back home & Maps SDK to display map on the mobile application |
| Firebase Cloud Messaging | Handles push notifications to caregivers                                                      |
| Firebase Authentication  | Handles all authentication related painpoints                                                 |
| Firebase Storage         | Stores profile assets for the frontend application                                            |
| Firebase Cloud Firestore | Main production database for all business storage purposes                                    |

### 4. Analysis Layer

![looker dashboard](./assets/looker-dashboard.png)

For **business stakeholders** who are looking to gather critical business intelligence, such as the amount of resources required for each geographical area, the data from our **Cloud Firestore** database is streamed to **Google BigQuery**, and pumped to **Looker Studio** as a business intelligence monitoring platform.

### 5. Operations Layer

![cloud monitoring dashboard](./assets/cloud-monitoring-dashboard.png)

For **business stakeholders** looking to gather operational metrics, HeadHome comes with an Operations Layer including **Cloud Monitoring** and **Cloud Logging**. These Google Cloud Platform services are integral to gain a more holistic profiling of our users and a better understanding of our services internally via uptime checks and alerts.

# Getting Started

[Flutter `(Version 2.19.2+)`](https://docs.flutter.dev/get-started/install) must be installed to run this application.

Detailed instructions on how to run the application can be found [here](https://github.com/GSC23-HeadHome/HeadHome-App/blob/main/README.md#getting-started).

## 👥 &nbsp;Contributors

| <a href="https://github.com/chayhuixiang"></a> | <a href="https://github.com/changdaozheng"></a> | <a href="https://github.com/Trigon25"></a> | <a href="https://github.com/ongjx16"></a> |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div align="center"><h3><b><a href="https://github.com/chayhuixiang">Monishka Jha</a></b></h3><p><i>Indira Gandhi Delhi Technical University for Women</i></p></div>                                                                               | <div align="center"><h3><b><a href="https://github.com/changdaozheng">Ekta Roy</a></b></h3></a><p><i>Indira Gandhi Delhi Technical University for Women</i></p></div>                                                                          |



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
