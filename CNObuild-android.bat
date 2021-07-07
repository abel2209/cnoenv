ENVIRONMENT=$2
VERSION_NUMBER=$3
BUILD_NUMBER=$3

WORKSPACE="C:/Users/Akash/AppData/Local/Jenkins/.jenkins/workspace/finaltry"

cd $WORKSPACE/devops/AwesomeProject

rmdir "node_modules" /S /Q
npm install
echo "Android: Starting Build"

cd $WORKSPACE/devops/AwesomeProject/android
gradlew clean

if [[ "${ENVIRONMENT}" = 'prod' ]]; then	
	dir $WORKSPACE/devops/AwesomeProject 
    	bat ENVFILE=.env.production gradlew assembleRelease

fi

if [[ "${ENVIRONMENT}" = 'dev']]; then
	dir $WORKSPACE/devops/AwesomeProject
    	bat ENVFILE=.env.dev gradlew assembleRelease

fi

if [[ "${ENVIRONMENT}" = 'qa']]; then
	dir $WORKSPACE/devops/AwesomeProject
    	bat ENVFILE=.env.qa gradlew assembleRelease

fi

if [[ "${ENVIRONMENT}" = 'staging']]; then
	dir $WORKSPACE/devops/AwesomeProject
    	bat ENVFILE=.env.staging gradlew assembleRelease

fi

echo "Android: Completed Build"
