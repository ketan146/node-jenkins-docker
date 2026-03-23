pipeline {
    agent any

    stages {

        stage('DEBUG') {
            steps {
                sh 'echo WORKING_PIPELINE'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myapp .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker rm -f myapp-container || true
                docker run -d -p 3000:3000 --name myapp-container myapp
                '''
            }
        }
    }
}
