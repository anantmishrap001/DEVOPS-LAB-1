pipeline {
    agent any

    environment {
        IMAGE_NAME = "devops-lab1-app"
        CONTAINER_NAME = "devops-lab1-container"
    }

    stages {
        stage('Checkout Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/anantmishrap001/DEVOPS-LAB-1.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Stop Old Container') {
            steps {
                sh """
                if [ \$(docker ps -a -q -f name=${CONTAINER_NAME}) ]; then
                  docker stop ${CONTAINER_NAME}
                  docker rm ${CONTAINER_NAME}
                fi
                """
            }
        }

        stage('Run Docker Container') {
            steps {
                sh "docker run -d --name ${CONTAINER_NAME} -p 8080:3000 ${IMAGE_NAME}"
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
