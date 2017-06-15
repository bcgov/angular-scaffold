pipeline {
    agent any
    tools {
        nodejs 'NodeJS-V8.x'
    }
    stages {
        stage("Checkout") {
            steps {
                checkout scm
            }
        }
        stage ('Build Tools') {
            steps {
                sh 'npm install -g @angular/cli'
            }
        }
        stage('Install') {
            steps {

                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
