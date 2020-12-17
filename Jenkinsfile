pipeline {
  agent any
  stages {
    stage('install') {
      steps {
        sh 'sh \'node -version\''
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