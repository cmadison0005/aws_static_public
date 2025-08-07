pipeline {
    agent any

    environment {
        REGISTRY   = "docker.io"
        IMAGE_NAME = "cmadison0005/aws_static_public"
        IMAGE_TAG  = "${BUILD_NUMBER}"
    }

    stages {        

        stage('Build App') {
            agent {
                docker { image 'node:22-bullseye' }
            }
            steps {
                sh '''
                  npm ci
                  npm run build
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                  docker build -t $REGISTRY/$IMAGE_NAME:$IMAGE_TAG .
                '''
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'cmadison0005-dockerhub', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                sh '''
                    echo "$DOCKER_PASSWORD" | docker login $REGISTRY -u "$DOCKER_USERNAME" --password-stdin
                    docker push $REGISTRY/$IMAGE_NAME:$IMAGE_TAG
                '''
                }
            }
        }
    }
}
