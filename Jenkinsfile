pipeline {
  environment {
    registry = 'solwin/neodevops'
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
  agent any
  tools { nodejs 'node' }
    stages {
      stage('Cloning Git') {
        steps {
          git 'https://github.com/codigo-code/devopoc'
        }
      }
      stage('install') {
        steps {
          sh 'npm install'
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
      stage('Building image') {
        steps {
          script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
          
          }
        }
      }

      stage('Deploy Image') {
      steps {
        script {
          /* groovylint-disable-next-line NestedBlockDepth */
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push("$BUILD_NUMBER")
            dockerImage.push('latest')
          }
        }
      }
      }
    }
}
