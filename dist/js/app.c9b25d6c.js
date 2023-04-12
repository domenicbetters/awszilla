(function(){"use strict";var e={259:function(e,a,n){var t=n(963),s=n(252);const o={id:"app"};function r(e,a,n,t,r,i){const l=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s.Wm)(l)])}var i={name:"App",components:{}},l=n(744);const c=(0,l.Z)(i,[["render",r]]);var u=c,d=n.p+"img/godzilla.61d3b45c.jpg";const m={class:"bady"},h=(0,s._)("h1",null,"AWSZILLA",-1),p=(0,s._)("button",null,"EC2 Instance Grid Flash Cards",-1),f=(0,s._)("button",null,"EC2 Flash Cards",-1),g=(0,s._)("button",null,"AWS Batch Flash Cards",-1),y=(0,s._)("button",null,"AWS Beanstalk Flash Cards",-1),w=(0,s._)("a",{href:"https://dos.zone/player/?bundleUrl=https%3A%2F%2Fcdn.dos.zone%2Fcustom%2Fdos%2Fdoom.jsdos?anonymous=1%27)"},[(0,s._)("button",null,"DOOM")],-1),b=(0,s._)("button",null,"AWS Lambda Flash Cards",-1),v=(0,s._)("button",null,"AWS Serverless Application repo Flash Cards",-1),k=(0,s._)("button",null,"AWS Fargate Flash Cards",-1),C=(0,s._)("div",{class:"imgbox"},[(0,s._)("img",{src:d})],-1);function F(e,a,n,t,o,r){const i=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",m,[h,(0,s._)("div",null,[(0,s.Wm)(i,{to:{name:"EC2Grid"}},{default:(0,s.w5)((()=>[p])),_:1}),(0,s.Wm)(i,{to:{name:"EC2Flash"}},{default:(0,s.w5)((()=>[f])),_:1}),(0,s.Wm)(i,{to:{name:"batchflash"}},{default:(0,s.w5)((()=>[g])),_:1}),(0,s.Wm)(i,{to:{name:"BeanstalkFlash"}},{default:(0,s.w5)((()=>[y])),_:1}),w,(0,s.Wm)(i,{to:{name:"LambdaFlash"}},{default:(0,s.w5)((()=>[b])),_:1}),(0,s.Wm)(i,{to:{name:"ServerlessARFlash"}},{default:(0,s.w5)((()=>[v])),_:1}),(0,s.Wm)(i,{to:{name:"FargateFlash"}},{default:(0,s.w5)((()=>[k])),_:1})]),C])}var W={name:"MainMenu"};const S=(0,l.Z)(W,[["render",F]]);var _=S;const A=(0,s._)("button",null,"Back to Main Menu",-1),T=(0,s._)("h1",null,"Catagories of EC2 Instance Classes",-1),E={class:"main-body"},M={class:"type-column"},B=(0,s._)("h1",null,"General Purpose",-1),D={class:"type-column"},I=(0,s._)("h1",null,"Compute Optimized",-1),z={class:"type-column"},O=(0,s._)("h1",null,"Memory Optimized",-1),H={class:"type-column"},L=(0,s._)("h1",null,"Accelerated Computing",-1),Y={class:"type-column"},j=(0,s._)("h1",null,"Storage Optimized",-1);function P(e,a,n,t,o,r){const i=(0,s.up)("router-link"),l=(0,s.up)("EC2Card");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(i,{to:{name:"MainMenu"}},{default:(0,s.w5)((()=>[A])),_:1}),T,(0,s._)("div",E,[(0,s._)("div",M,[B,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.gpitems,(e=>((0,s.wg)(),(0,s.j4)(l,{key:e.name,instance:e},null,8,["instance"])))),128))]),(0,s._)("div",D,[I,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.CPitems,(e=>((0,s.wg)(),(0,s.j4)(l,{key:e.name,instance:e},null,8,["instance"])))),128))]),(0,s._)("div",z,[O,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.MOitems,(e=>((0,s.wg)(),(0,s.j4)(l,{key:e.name,instance:e},null,8,["instance"])))),128))]),(0,s._)("div",H,[L,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.ACitems,(e=>((0,s.wg)(),(0,s.j4)(l,{key:e.name,instance:e},null,8,["instance"])))),128))]),(0,s._)("div",Y,[j,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.SOitems,(e=>((0,s.wg)(),(0,s.j4)(l,{key:e.name,instance:e},null,8,["instance"])))),128))])])],64)}var N=n(577);const q={class:"flip-card"},x={class:"flip-card-inner"},K={class:"flip-card-front"},R={class:"flip-card-back"},Z={class:"inst-name"};function G(e,a,n,t,o,r){return(0,s.wg)(),(0,s.iD)("div",q,[(0,s._)("div",x,[(0,s._)("div",K,[(0,s._)("h4",null,(0,N.zw)(n.instance.desc),1)]),(0,s._)("div",R,[(0,s._)("h1",Z,(0,N.zw)(n.instance.name),1)])])])}var J={name:"EC2Card",props:{instance:Object}};const U=(0,l.Z)(J,[["render",G],["__scopeId","data-v-37ce6a8d"]]);var Q=U,X={name:"MainMenu",components:{EC2Card:Q},data(){return{gpitems:[{name:"A1",desc:"Suited for scale-out and Arm based workloads"},{name:"T2",desc:"Small web servers and DBs"},{name:"M4",desc:"Balance of compute, memory, and network resources"}],CPitems:[{name:"C4",desc:"Optimized for compute-intensive workloads"},{name:"C5",desc:"Optimized for compute-intensive workloads with choice of processors"},{name:"C5n",desc:"High compute applications (including HPC workloads)"}],MOitems:[{name:"R4",desc:"Optimized for memory-intensive application"},{name:"X1",desc:"Optimized for large-scale, enterprise-class and in-memory applications"},{name:"z1d",desc:"Offer both high compute capacity and high memory footprint"}],ACitems:[{name:"P2",desc:"Intended for general-purpose GPU compute applications"},{name:"G3",desc:"Optimized for graphics-intensive applications"},{name:"F1",desc:"Customizable hardware acceleration with field programmable gate arrays"}],SOitems:[{name:"H1",desc:"Up to 16 TB of HDD-based local storage, deliver high disk throughput"},{name:"I3",desc:"Non-volatile memory express SSD-backed storage optimized for low latency, very high random I/O performance"},{name:"D2",desc:"Up to 48 TB of HDD-based local storage, deliver high disk throughput"}]}}};const V=(0,l.Z)(X,[["render",P]]);var $=V;const ee=(0,s._)("button",null,"Back to Main Menu",-1),ae=(0,s._)("h1",null,"EC2 Flash Cards",-1),ne={class:"main-body"};function te(e,a,n,t,o,r){const i=(0,s.up)("router-link"),l=(0,s.up)("FlashCard");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(i,{to:{name:"MainMenu"}},{default:(0,s.w5)((()=>[ee])),_:1}),ae,(0,s._)("div",ne,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.gpitems,(e=>((0,s.wg)(),(0,s.j4)(l,{key:e.name,instance:e},null,8,["instance"])))),128))])],64)}const se={class:"flip-card"},oe={class:"flip-card-inner"},re={class:"flip-card-front"},ie={class:"flip-card-back"};function le(e,a,n,t,o,r){return(0,s.wg)(),(0,s.iD)("div",se,[(0,s._)("div",oe,[(0,s._)("div",re,[(0,s._)("h4",null,(0,N.zw)(n.instance.desc),1)]),(0,s._)("div",ie,[(0,s._)("h4",null,(0,N.zw)(n.instance.name),1)])])])}var ce={name:"EC2Card",props:{instance:Object},data(){return{}}};const ue=(0,l.Z)(ce,[["render",le],["__scopeId","data-v-9cb8cbd8"]]);var de=ue,me=JSON.parse('[{"name":"Elastic Compute Cloud","desc":"What does EC2 stand for?"},{"name":"Yes","desc":"Can EC2 instances scale up and down automatically based on traffic?"},{"name":"False","desc":"True or false.  You have to invest in the hardware for EC2"},{"name":"True","desc":"True or false. You can launch as many instances as you want."},{"name":"The processor and memory of your EC2 instance","desc":"What constitutes an instance type"},{"name":"Elastic Block Storage","desc":"What does EBS stand for."},{"name":"It is the block level storage assigned to your single EC2 instance","desc":"What is EBS?"},{"name":"Yes","desc":"Do EBS volumes persist independently from running EC2?"},{"name":"General Purpose SDD, Provisioned IOPS SDD, Troughput optimized Hard Disk Drive, Cold Hard Disk Drive, Magnetic","desc":"Name the five types of EBS storage."},{"name":"Instance Store is the ephemeral block level storage for the EC2 isntance","desc":"What is Instance Store?"},{"name":"Amazon Machine Image","desc":"What does AMI stand for?"},{"name":"It decides the OS, installs dependencies, libraries, data of your EC2 instance.","desc":"What does AMI do?"},{"name":"True","desc":"True or false.  Multiple instance with the same configuration can be launched from a single AMI."},{"name":"Security groups acts as a virtual firewall for your EC2 Instances.","desc":"What is a security group"},{"name":"False, the do decide those things.","desc":"True or false.  Security groups do not decide the port and kind of traffic allowed."},{"name":"Security groups are active at the instance level whereas NACLs are active at the subnet level. ","desc":"What\'s the difference between security groups and Network ACLs"},{"name":"False, Security groups can only allow but can\'t deny the rules.","desc":"True or false.  Security groups can both allow and deny the rules."},{"name":"No, it is considered stateful","desc":"Is a security group considered stateless?"},{"name":"True","desc":"True or false.  By default, in the outbound rule all traffic is allowed and needs to define the inbound rules."},{"name":"Consists of a private and public key.  It\'s a set of credential used to gain access to an instance.","desc":"What is a key pair?"},{"name":"Your EC2 instance","desc":"Where is the public key attached?"},{"name":"True","desc":"True or false.  The private key stays with you and you will only gain access to your instance if the keys match."},{"name":"A tag is a key-value name you assign to your AWS resources","desc":"What is a tag?"},{"name":"They are a great way to organize your resources","desc":"How can tags benefit you?"}]'),he={name:"EC2Flash",components:{FlashCard:de},data(){return{gpitems:me}}};const pe=(0,l.Z)(he,[["render",te]]);var fe=pe;const ge=(0,s._)("button",null,"Back to Main Menu",-1),ye=(0,s._)("h1",null,"AWS Batch Flash Cards",-1),we={class:"main-body"};function be(e,a,n,t,o,r){const i=(0,s.up)("router-link"),l=(0,s.up)("FlashCard");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(i,{to:{name:"MainMenu"}},{default:(0,s.w5)((()=>[ge])),_:1}),ye,(0,s._)("div",we,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.gpitems,(e=>((0,s.wg)(),(0,s.j4)(l,{key:e.name,instance:e},null,8,["instance"])))),128))])],64)}var ve=JSON.parse('[{"name":"It allows you to run thousands of computing jobs in the AWS platform.","desc":"What is AWS Batch?"},{"name":"Yes","desc":"Is AWS Batch a managed service?"},{"name":"True","desc":"True or False.  Batch dynamically maintains the optimal compute resources like CPU and memory based on the volume of submitted jobs."},{"name":"EC2 and AWS Fargate","desc":"Where can Batch execute work loads?"},{"name":"They are the fundamental applications running on EC2 machines in containerised form.","desc":"What are AWS Batch jobs"},{"name":"They define how the job is meant to be run, like the associated IAM role. vCPU requirements, and container properties.","desc":"What are the job defenitions?"},{"name":"False, they reside in the job queue where they wait to be scheduled.","desc":"True or false.  Jobs reside in the Job Bucket"},{"name":"Each job queue is linked to a computing environment which in itself contains the EC2 instance to run containerized applicaitons.","desc":"What are compute environments?"},{"name":"Managed and unmanaged","desc":"What are the two types of Batch Environments?"},{"name":"For managed, the user gives min and max CPU and an EC2 isntance type and AWS runs it on their behalf.  For unmanaged, you must have your own ECS agent","desc":"What\'s the difference between managed and unmanaged Batch Environments?"},{"name":"True","desc":"True or False.  The scheduler maintains the execution of jobs submitted to the queue as time and dependencies."},{"name":"Fargate","desc":"Use ________ if you want to run the application without getting into EC2 infrastructure details.  Let the AWS batch manage it."},{"name":"EC2","desc":"Which should you use if you want to get into machine specifications like memory, cpu, and gpu"},{"name":"False.  They are faster on start up as there is no time lag in scale-out operations compared to EC2","desc":"True or False.  Jobs running on Fargate are slower on startup."},{"name":"No, but you will pay for the resources like EC2 that you use.  ","desc":"Is there a charge to use Batch?"}]'),ke={name:"BatchFlash",components:{FlashCard:de},data(){return{gpitems:ve}}};const Ce=(0,l.Z)(ke,[["render",be]]);var Fe=Ce;const We=(0,s._)("button",null,"Back to Main Menu",-1),Se=(0,s._)("h1",null,"AWS BeanStalk Flash Cards",-1),_e={class:"main-body"};function Ae(e,a,n,t,o,r){const i=(0,s.up)("router-link"),l=(0,s.up)("FlashCard");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(i,{to:{name:"MainMenu"}},{default:(0,s.w5)((()=>[We])),_:1}),Se,(0,s._)("div",_e,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.gpitems,(e=>((0,s.wg)(),(0,s.j4)(l,{key:e.name,instance:e},null,8,["instance"])))),128))])],64)}var Te=JSON.parse('[{"name":"Beanstalk is a compute service for deploying and scaling applications developed in many popular languages. ","desc":"What is Amazon Elastic Beanstalk?"},{"name":"Developers can focus on writing code and don\'t need to worry about the underlying infrastructure required to run the application.","desc":"How does Beanstalk benefit developers?"},{"name":"Yes","desc":"Is Beanstalk the best way to deploy your application in the fastest and simplest way possible."},{"name":"False, it does.","desc":"True or false.  Beanstalk has no interface or dashboard to monitor your appliction."},{"name":"True","desc":"True or false.  Beanstalk gives you the flexibility to choose resources such as EC2 along with the pricing options which suit your needs."},{"name":"Worker environment and Web tier environment","desc":"Which two types of environments does Beanstalk support?"},{"name":"This application hosted on the web server environment handles the HTTP and HTTPS requests from the user.","desc":"What does a web tier environment do?"},{"name":"True","desc":"True or False. In regards to Web Tier, when beanstalk launches an environment, it automatically assigns various resources to run the app successfully."},{"name":"A request is recieved from the user via Route53.  Then ELB distributes the request among the various EC2 instances of the auto scaling gorup.","desc":"How does the Elastic Load Balancer work with-in the web tier environment?"},{"name":"False, autoscaling will automatically add or remove EC2 instances base on the load in Beanstalk","desc":"True or False.  Beanstalk will not be able to autoscale your application."},{"name":"Host Manager is a software component inside your EC2 instance that is responsible for log file generation, monitoring, and events in the instance.","desc":"In regards to the web tier environment, what is host manager?"},{"name":"A worker is a background process that helps applications for handling heavy resource and time-intensive operations.","desc":"What is a worker environment?"},{"name":"false","desc":"True or false.  The worker environment is not responsible for databse cleanup."},{"name":"It installs a daemon","desc":"What does beanstalk install on every EC2 instance autoscaling group in the worker environment?"},{"name":"It pulls requests from the sqs queue and executes the task based on the message recieved.","desc":"What does the Daemon do in the worker environment?"},{"name":"No, it will delete it.","desc":"Will SQS save the message after execution?"},{"name":"It will retry to send the message.","desc":"What will SQS do if it fails to execute a message task?"},{"name":".Net, Docker, GlassFish, Go, Java, Node.js, Python, Ruby, Tomcat","desc":"List all the platforms supported by Beanstalk."},{"name":"Deployment will start taking place in all instances at the same time.  All your instances will be out of service for a short duration.","desc":"What is the all at once deployment model?"},{"name":"Deploy the new verion in batches; this way one group will run the old version of the application so there is no downtime.","desc":"What is a rolling deployment?"},{"name":"With additional batch, Beanstalk provisions an additional group of instances to compensate for the updating ones.","desc":"What\'s the difference between rolling and rolling with additional batch?"},{"name":"False, the new version is deployed to a seperate group of instances.","desc":"True or False.  When using immutable deployment, the new version is deployed to the same group of instances and the update is immutable."},{"name":"The new version is deployed to a seperate group of instances and the incoming traffic is split between the old ones and the new ones.","desc":"How does a traffic splitting deployment work?"},{"name":"True","desc":"True or False.  Beanstalk is free to use but you will still need to pay for all the underlying resources it uses and creates such as the EC2 instances and ELB."}]'),Ee={name:"BeanstalkFlash",components:{FlashCard:de},data(){return{gpitems:Te}}};const Me=(0,l.Z)(Ee,[["render",Ae]]);var Be=Me;const De=(0,s._)("button",null,"Back to Main Menu",-1),Ie=(0,s._)("h1",null,"AWS Lambda Flash Cards",-1),ze={class:"main-body"};function Oe(e,a,n,t,o,r){const i=(0,s.up)("router-link"),l=(0,s.up)("FlashCard");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(i,{to:{name:"MainMenu"}},{default:(0,s.w5)((()=>[De])),_:1}),Ie,(0,s._)("div",ze,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.gpitems,(e=>((0,s.wg)(),(0,s.j4)(l,{key:e.name,instance:e},null,8,["instance"])))),128))])],64)}var He=JSON.parse('[{"name":"Lambda is a serverless compute service through which you can run your code without provisioning any servers.","desc":"What is AWS Lambda"},{"name":"False.  It can automatically scale when the request count increases.","desc":"True or False.  Lambda only runs code when needed but can not automatically scale when the request count increases."},{"name":"It follows the pay per use principle.  There is no charge when the code is not running.","desc":"Lambda follows which pay principle?"},{"name":"True","desc":"True or False.  Lambda allows you to run your code for any application or backend service with zero administration."},{"name":"True","desc":"True or False.  Lambda can run code in response to events such as a change in your S3 bucket."},{"name":"Amazon API gateway","desc":"What can you use to run code in response to HTTP requests?"},{"name":"Serverless computing is a method of providing backend services on a pay per use basis.","desc":"What is serverless computing?"},{"name":"False.  You are not responsible for the underlying infrastructure.","desc":"True or False.  You will still need to worry about the underlying infrastructure when using serverless computing."},{"name":"Your code.","desc":"What is the one thing you are responsible for when using Lambda?"},{"name":"EC2 or Beanstalk.","desc":"What can you use instead if you want to manage your compute resources?"},{"name":"True","desc":"True or False.  There is a level of abstraction which means you cannot log into the server or customize the runtime."},{"name":"A function is a block of code.","desc":"What is a Lambda function."},{"name":"Yes.","desc":"Can you upload your code in the form of single or multiple funcitons?"},{"name":"As a zip file or from an S3 bucket","desc":"How else can you upload your code?"},{"name":"Amazon Cloudwatch","desc":"how can you view function metrics that Lambda automatically monitors?"},{"name":"A layer is a container/archive which contains additional code such as libraries, dependencies, or custom runtimes.","desc":"What is a Lambda Layer?"},{"name":"Five","desc":"How many layers does Lambda allow in a function?"},{"name":"Yes.","desc":"Are layers immutable?"},{"name":"False.  A new version will be added when you publish a new layer.","desc":"True or False. The version remains the same even when you publish a new layer."},{"name":"Private","desc":"Layers by default are made public or private?"},{"name":"an event is an entity that invokes a function.","desc":"What is a Lambda Event?"},{"name":"Synchronous","desc":"Lambda supports synchronous or asynchronous invocation of lambda functions?"},{"name":"Dynamo DB, SQS, SNS, cloudwatch events, API gateway, AWS IoT, Kinesis, and Cloudwatch logs.","desc":"What sources can Lambda use as an event?"},{"name":"Node.js, Go, Java, Python, Ruby","desc":"What languages are supported in Lambda?"},{"name":"It is a feature of CloudFront which allows you to run your code closer to the locaiton of users of your application.","desc":"What is Lambda@edge?"},{"name":"It improves performance and reduces latency","desc":"What is the main benefit of lambda@edge"},{"name":"CDN","desc":"Lambda@edge runs your code in response to the event created by the _______________"},{"name":"Charges are calculated based on the number of requests for the functipm executed in a particular duration.","desc":"How does Lambda pricing work?"},{"name":"per 100-millisecond basis","desc":"How is the Lambda pricing duration calculated"},{"name":"Yes, it includes 1 million free requests per month and 400,000 gb-seconds of compute time per month.","desc":"Does the Free tier include any lambda usage?"}]'),Le={name:"LambdaFlash",components:{FlashCard:de},data(){return{gpitems:He}}};const Ye=(0,l.Z)(Le,[["render",Oe]]);var je=Ye;const Pe=(0,s._)("button",null,"Back to Main Menu",-1),Ne=(0,s._)("h1",null,"AWS Serverless Application Repository Flash Cards",-1),qe={class:"main-body"};function xe(e,a,n,t,o,r){const i=(0,s.up)("router-link"),l=(0,s.up)("FlashCard");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(i,{to:{name:"MainMenu"}},{default:(0,s.w5)((()=>[Pe])),_:1}),Ne,(0,s._)("div",qe,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.gpitems,(e=>((0,s.wg)(),(0,s.j4)(l,{key:e.name,instance:e},null,8,["instance"])))),128))])],64)}var Ke=JSON.parse('[{"name":"It is a managed repo for serverless applications.  It is used by organizations and indie developers to store and share resusable applications.","desc":"What is the AWS serverless application repository?"},{"name":"Alexa Skills, chatbots, IoT, and real-time media processing.","desc":"What are some examples of applications SAR has from various publishers?"},{"name":"True","desc":"True or False.  All applications provided by AWS come under MIT open source license."},{"name":"False.  Apps by other users fall under open source initiative (OSI)","desc":"True or False.  All applications made available by other users fall under MIT open source licensing."},{"name":"True","desc":"True or False.  All apps published on SAR are carefuly examined by AWS for the correct set of permissions so that the customer knows which apps can be accessed."},{"name":"AWS CodePipeline","desc":"How can you link github with Serverless application repository?"},{"name":"Describe the applicaiton using AWS SAM, package it using CLI, and publish via CLI or SDK or console.","desc":"What steps do you take before publishing to SAR?"},{"name":"Yes","desc":"Can applications be shared within all accounts of AWS Organizations?"},{"name":"No","desc":"Can applications be shared across other Organizations?"},{"name":"AWS Lambda","desc":"You can intigrate AWS Serverless Application Repository with what?"},{"name":"The application can be downloaded and with the API Gateway it can trigger the lambda funciton.","desc":"How does Lambda integration work?"},{"name":"No, but you are charged for the resources used in the application.","desc":"Are you charged for this service?"}]'),Re={name:"ServerlessARFlash",components:{FlashCard:de},data(){return{gpitems:Ke}}};const Ze=(0,l.Z)(Re,[["render",xe]]);var Ge=Ze;const Je=(0,s._)("button",null,"Back to Main Menu",-1),Ue=(0,s._)("h1",null,"AWS Fargate Flash Cards",-1),Qe={class:"main-body"};function Xe(e,a,n,t,o,r){const i=(0,s.up)("router-link"),l=(0,s.up)("FlashCard");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(i,{to:{name:"MainMenu"}},{default:(0,s.w5)((()=>[Je])),_:1}),Ue,(0,s._)("div",Qe,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.gpitems,(e=>((0,s.wg)(),(0,s.j4)(l,{key:e.name,instance:e},null,8,["instance"])))),128))])],64)}var Ve=JSON.parse('[{"name":"AWS fargate is a serverless compute service that is used for containers by Amazon Elastic Container Service and Amazon Elastic Kubernetes Service.","desc":"What is AWS Fargate?"},{"name":"It eliminates the tasks required to provision, configure, or scale groups of virtual machines to run containers.","desc":"What does Fargate allow you to eliminate?"},{"name":"CPU and memory requirements.","desc":"What must you specify when to set up a container in Fargate?"},{"name":"False.  it does not support all the task defenition parameters available in ECS.  Only a few are valid for fargate tasks with some limitations.","desc":"True or False.  Fargate supports all the same task definition parameters that are available in ECS tasks."},{"name":"Scheduling native kubernetes pods onto fargate.","desc":"Kubernetes can be integrated with AWS Fargate by using controllers.  What are these controllers responsible for?"},{"name":"True","desc":"True or false.  Security groups for pods in EKS can not be used when pods are running on Fargate."},{"name":"Amazon EFS volumes for persistent storage and Ephemeral storage for non persistent storage.","desc":"What two storage types are supported for Fargate tasks?"},{"name":"It allows them to focus on building and operating the application rather than focusing on securing, scaling, patching, and managing servers.","desc":"How does Fargate benefit a developer?"},{"name":"Yes","desc":"Does fargate automatically scale the compute environment that matches the resource requirements for the container?"},{"name":"True","desc":"True or False. Fargate provides built in integrations with other AWS services like CloudWatch Container Insights."},{"name":"Charges are applied for the amount of vCPU and memory consumed by the containerized applications.","desc":"How are pricing charges applied?"},{"name":"False. Fargate\'s savings plans provide savings up to 50% in exchange for one or three year long term commitments.","desc":"True or False.  There is no discount based on length of commitment to Fargate."},{"name":"No, additional charges will be applied if containers are used with other services.","desc":"Will it be free to use Fargate containers with other AWS services?"}]'),$e={name:"FargateFlash",components:{FlashCard:de},data(){return{gpitems:Ve}}};const ea=(0,l.Z)($e,[["render",Xe]]);var aa=ea,na=n(201);const ta=[{path:"/",redirect:{name:"MainMenu"}},{path:"/awszilla",name:"MainMenu",component:_},{path:"/awszilla/ec2grid",name:"EC2Grid",component:$},{path:"/awszilla/ec2flash",name:"EC2Flash",component:fe},{path:"/awszilla/batchflash",name:"batchflash",component:Fe},{path:"/awszilla/beanstalkflash",name:"BeanstalkFlash",component:Be},{path:"/awszilla/lambdaflash",name:"LambdaFlash",component:je},{path:"/awszilla/serverlessarflash",name:"ServerlessARFlash",component:Ge},{path:"/awszilla/fargateflash",name:"FargateFlash",component:aa}],sa=(0,na.p7)({history:(0,na.PO)(),routes:ta});var oa=sa;const ra=(0,t.ri)(u);ra.use(oa),ra.mount("#app")}},a={};function n(t){var s=a[t];if(void 0!==s)return s.exports;var o=a[t]={exports:{}};return e[t](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(a,t,s,o){if(!t){var r=1/0;for(u=0;u<e.length;u++){t=e[u][0],s=e[u][1],o=e[u][2];for(var i=!0,l=0;l<t.length;l++)(!1&o||r>=o)&&Object.keys(n.O).every((function(e){return n.O[e](t[l])}))?t.splice(l--,1):(i=!1,o<r&&(r=o));if(i){e.splice(u--,1);var c=s();void 0!==c&&(a=c)}}return a}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[t,s,o]}}(),function(){n.d=function(e,a){for(var t in a)n.o(a,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){n.p="/awszilla/"}(),function(){var e={143:0};n.O.j=function(a){return 0===e[a]};var a=function(a,t){var s,o,r=t[0],i=t[1],l=t[2],c=0;if(r.some((function(a){return 0!==e[a]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(l)var u=l(n)}for(a&&a(t);c<r.length;c++)o=r[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},t=self["webpackChunkawszilla"]=self["webpackChunkawszilla"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(259)}));t=n.O(t)})();
//# sourceMappingURL=app.c9b25d6c.js.map