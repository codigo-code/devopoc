pipeline {
  environment {
    registry = 'solwin/neodevops'
    registryCredential = 'dockerhub'
    dockerImage = ''
    KUBECONFIG = '~/.kube/config'
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
           try{
              // sh '/usr/local/bin/npm install'
              // dockerImage = docker.build registry + ":$BUILD_NUMBER"
              sh """
                  docker image -a 
                  docker build -t $registry:$BUILD_NUMBER .
              """
            }catch(err){
              echo err.getMessage()
            }
          
          }
          
          
        }
      }

      // stage('Deploy Image') {
      //   steps {
      //     script {
      //       try{
      //         docker.withRegistry( '', registryCredential ) {
      //           dockerImage.push("latest")
      //           dockerImage.push("${env.BUILD_ID}")

      //         }

      //       }catch(err){
      //         echo err.getMessage()
      //       }
      //     }
      //   }
      // }
      stage('Apply Kubernetes files') {
        steps{
          script{
            echo "subiendo a la nube de openshift"
          }
        }
      }
    }
}