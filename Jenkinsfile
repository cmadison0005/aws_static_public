pipeline {
    agent { docker { image 'node:22.18.0-alpine3.22' } }
    stages {
        stage('install dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('build') {
            sh 'npm run build'
        }
    }
}