pipeline {
    agent any

    environment {
        IMAGE_NAME = "devops-lab1-app"
        CONTAINER_NAME = "devops-lab1-container"
    }

    stages {
        stage('Checkout Repository') {
            steps {
                // Explicitly use the main branch
                git branch: 'main', url: 'https://github.com/anantmishrap001/DEVOPS-LAB-1.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}")
                }
            }
        }

        stage('Stop Old Container') {
            steps {
                script {
                    def exists = sh(script: "docker ps -a -q -f name=${CONTAINER_NAME}", returnStdout: true).trim()
                    if (exists) {
                        sh "docker stop ${CONTAINER_NAME}"
                        sh "docker rm ${CONTAINER_NAME}"
                    }
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh "docker run -d --name ${CONTAINER_NAME} -p 8081:3000 ${IMAGE_NAME}"
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully ✅'
        }
        failure {
            echo 'Pipeline failed ❌'
        }
    }
}
