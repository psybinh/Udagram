# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into three parts:
1. [The Simple Frontend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-frontend)
A basic Ionic client web application which consumes the RestAPI Backend. [Covered in the course]
2. [The RestAPI Backend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-restapi), a Node-Express server which can be deployed to a cloud service. [Covered in the course]
3. [The Image Filtering Microservice](https://github.com/udacity/cloud-developer/tree/master/course-02/project/image-filter-starter-code), the final project for the course. It is a Node-Express application which runs a simple script to process images. [Your assignment]

## Tasks

### Setup Node Environment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### Deploying your system
- Build project using `npm run build`
- Go to folder `cd wwww`
- Follow the process described in the course to `eb init` a new application and `eb create` a new environment to deploy your image-filter service! Don't forget you can use `eb deploy` to push changes.

### Project review

GitHub link https://github.com/andresaaap/Udagram-Your-Own-Instagram-on-AWS

Screenshots to prove: The project was deployed using the AWS Elastic Beanstalk CLI eb init, eb create, and eb deploy commands.

- Screenshot 2023-10-28 111532.png
- Screenshot 2023-10-28 111458.png
- Screenshot 2023-10-28 111656.png

Screenshots to prove: A screenshot of the elastic beanstalk application dashboard is included in a deployment_screenshot directory.

- Screenshot 2023-10-28 111919.png

An endpoint URL for a running elastic beanstalk deployment **http://image-filter-starter-code-dev22.us-east-1.elasticbeanstalk.com/**

- Test 1: **http://image-filter-starter-code-dev22.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Building92microsoft.jpg/375px-Building92microsoft.jpg**
- Test 2: **http://image-filter-starter-code-dev22.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Googleplex_HQ.jpg/375px-Googleplex_HQ.jpg**