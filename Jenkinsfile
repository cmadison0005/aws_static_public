pipeline {
    agent any

    environment {
        IMAGE_NAME = "aws_static_public"
        IMAGE_TAG  = "1.0"
        REGISTRY   = ""
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build App') {
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
                  docker build -t $IMAGE_NAME:$IMAGE_TAG .
                '''
            }
        }
    }
}
