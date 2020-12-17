pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'sh \'npm install\''
      }
    }

    stage('test') {
      steps {
        sh 'npm test'
      }
    }

  }
}