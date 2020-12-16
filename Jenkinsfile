pipeline {
  agent any
  stages {
    stage('install') {
      steps {
        sh 'sudo npm install'
      }
    }

    stage('build') {
      steps {
        sh 'npm build'
      }
    }

    stage('test') {
      steps {
        sh 'npm test'
      }
    }

  }
}