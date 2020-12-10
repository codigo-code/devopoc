pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'npm build '
      }
    }

    stage('test') {
      steps {
        sh 'npm test'
      }
    }

  }
}