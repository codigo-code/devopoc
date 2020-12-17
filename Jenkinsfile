pipeline {
  agent any
  stages {
    stage('install') {
      steps {
        sh '''cd  devopoc
ls '''
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