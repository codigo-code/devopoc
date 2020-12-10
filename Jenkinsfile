pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        powershell 'npm build'
      }
    }

    stage('test') {
      steps {
        sh 'npm test'
      }
    }

  }
}