pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        bat 'npm build'
      }
    }

    stage('test') {
      steps {
        sh 'npm test'
      }
    }

  }
}