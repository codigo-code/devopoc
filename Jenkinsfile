pipeline {
  environment {
    registry = 'solwin/neodevops'
    registryCredential = 'DockerHub'
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
        post {
          success {
            echo 'funciono bien!'
          }
          failure {
            echo 'se envia un correo xq fallo'
          }
        }
      }
  

     stage('Building local image') {
        steps {
            
        script {
          
              // sh '/usr/local/bin/npm install'
              // dockerImage = docker.build registry + ":$BUILD_NUMBER"
              sh """
                  
                  docker build -t $registry:$BUILD_NUMBER .
              """
          }
        }
        post{
          success{
            echo 'funciono bien :)'
          }
          failure {
            echo 'rompio por todos lados :('
          }
        }
     }

      // stage('Deploy Image and push on DockerHub') {
      //   steps {
      //     script {
           
      //         // docker.withRegistry( "https://index.docker.io/v1", registryCredential ) {
      //         //   def image = docker.build("$registry:$BUILD_NUMBER")
      //         //   image.push()
      //           // dockerImage.push("latest")
      //           // dockerImage.push("${env.BUILD_ID}")

      //         }
      //     }
      //     success{
      //       echo "push"
      //     }
      //     failure {
      //       echo "error ver log"
      //     }
      //   }
      // }

      stage('Check vulnerability') {
        steps{
          script{
            sh """
                trivy $registry:$BUILD_NUMBER
               """
          }
        }
      }

      stage('Apply Kubernetes pod') {
        steps{
          script{
            sh """
                oc apply -f pod.yaml

            """
          }
        }
      }

      stage('Apply Kubernetes service') {
        steps{
          script{
            sh """
                oc apply -f service.yaml

            """
          }
        }
      }


      
    }
}