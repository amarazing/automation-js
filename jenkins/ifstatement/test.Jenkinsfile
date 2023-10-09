pipeline {
    agent any //refer to pipeline syntax for other config

    parameters {
        booleanParam(defaultValue: false, description: "Enable service?", name: "myBoolean")
    }

    stages {
        stage("Demo"){
            steps {
                script {
                    if(params.myBoolean == false){
                        currentBuild.result = "SUCCESS"
                        return
                    } 
                    else {
                        echo "booleanParam is set to: TRUE"
                    }
                }
            }
        }
    }
}
