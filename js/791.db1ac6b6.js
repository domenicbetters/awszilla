"use strict";(self["webpackChunkawszilla"]=self["webpackChunkawszilla"]||[]).push([[791],{9791:function(e){e.exports=JSON.parse('[{"name":"Beanstalk is a compute service for deploying and scaling applications developed in many popular languages. ","desc":"What is Amazon Elastic Beanstalk?"},{"name":"Developers can focus on writing code and don\'t need to worry about the underlying infrastructure required to run the application.","desc":"How does Beanstalk benefit developers?"},{"name":"Yes","desc":"Is Beanstalk the best way to deploy your application in the fastest and simplest way possible."},{"name":"False, it does.","desc":"True or false.  Beanstalk has no interface or dashboard to monitor your appliction."},{"name":"True","desc":"True or false.  Beanstalk gives you the flexibility to choose resources such as EC2 along with the pricing options which suit your needs."},{"name":"Worker environment and Web tier environment","desc":"Which two types of environments does Beanstalk support?"},{"name":"This application hosted on the web server environment handles the HTTP and HTTPS requests from the user.","desc":"What does a web tier environment do?"},{"name":"True","desc":"True or False. In regards to Web Tier, when beanstalk launches an environment, it automatically assigns various resources to run the app successfully."},{"name":"A request is recieved from the user via Route53.  Then ELB distributes the request among the various EC2 instances of the auto scaling gorup.","desc":"How does the Elastic Load Balancer work with-in the web tier environment?"},{"name":"False, autoscaling will automatically add or remove EC2 instances base on the load in Beanstalk","desc":"True or False.  Beanstalk will not be able to autoscale your application."},{"name":"Host Manager is a software component inside your EC2 instance that is responsible for log file generation, monitoring, and events in the instance.","desc":"In regards to the web tier environment, what is host manager?"},{"name":"A worker is a background process that helps applications for handling heavy resource and time-intensive operations.","desc":"What is a worker environment?"},{"name":"false","desc":"True or false.  The worker environment is not responsible for databse cleanup."},{"name":"It installs a daemon","desc":"What does beanstalk install on every EC2 instance autoscaling group in the worker environment?"},{"name":"It pulls requests from the sqs queue and executes the task based on the message recieved.","desc":"What does the Daemon do in the worker environment?"},{"name":"No, it will delete it.","desc":"Will SQS save the message after execution?"},{"name":"It will retry to send the message.","desc":"What will SQS do if it fails to execute a message task?"},{"name":".Net, Docker, GlassFish, Go, Java, Node.js, Python, Ruby, Tomcat","desc":"List all the platforms supported by Beanstalk."},{"name":"Deployment will start taking place in all instances at the same time.  All your instances will be out of service for a short duration.","desc":"What is the all at once deployment model?"},{"name":"Deploy the new verion in batches; this way one group will run the old version of the application so there is no downtime.","desc":"What is a rolling deployment?"},{"name":"With additional batch, Beanstalk provisions an additional group of instances to compensate for the updating ones.","desc":"What\'s the difference between rolling and rolling with additional batch?"},{"name":"False, the new version is deployed to a seperate group of instances.","desc":"True or False.  When using immutable deployment, the new version is deployed to the same group of instances and the update is immutable."},{"name":"The new version is deployed to a seperate group of instances and the incoming traffic is split between the old ones and the new ones.","desc":"How does a traffic splitting deployment work?"},{"name":"True","desc":"True or False.  Beanstalk is free to use but you will still need to pay for all the underlying resources it uses and creates such as the EC2 instances and ELB."}]')}}]);