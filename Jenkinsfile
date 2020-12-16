pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh '''pipeline {
    agent { docker { image \'node:14-alpine\' } }
    stages {
        stage(\'build\') {
            steps {
                sh \'npm --version\'
            }
        }
    }
}'''
        }
      }

    }
  }