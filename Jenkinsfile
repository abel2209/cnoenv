#!groovy
def utils
def currentBranch
def repository

node{

	stage('Checkout') {
			branch = "master"
			repository = "helloapp"
			git branch: "${branch}", credentialsId: "git", url: "https://github.com/abel2209/helloapp.git"
		
	}


	stage('Android Build') {

					WORKSPACE="C:/Users/Akash/AppData/Local/Jenkins/.jenkins/workspace/finaltry"
					bat $WORKSPACE
					CNObuild-android.bat "${environment}" "${version}" "${BUILD_ID}"
				
			}
		
}

