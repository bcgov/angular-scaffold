node {
  // Edit your app's name below
  def APP_NAME = 'angular-scaffold'

  // You shouldn't have to edit these if you're following the conventions
  def BUILD_CONFIG = APP_NAME + '-build'
  def IMAGESTREAM_NAME = APP_NAME

  stage('build') {
         echo "Building: " + BUILD_CONFIG
         openshiftBuild bldCfg: BUILD_CONFIG, showBuildLogs: 'true'
         openshiftTag destStream: IMAGESTREAM_NAME, verbose: 'true', destTag: '$BUILD_ID', srcStream: IMAGESTREAM_NAME, srcTag: 'latest'
         openshiftTag destStream: IMAGESTREAM_NAME, verbose: 'true', destTag: 'dev', srcStream: IMAGESTREAM_NAME, srcTag: 'latest'
  }
  stage('deploy-test') {
      input "Deploy to test?"
      openshiftTag destStream: IMAGESTREAM_NAME, verbose: 'true', destTag: 'test', srcStream: IMAGESTREAM_NAME, srcTag: '$BUILD_ID'
  }
  stage('deploy-prod') {
      input "Deploy to prod?"
      openshiftTag destStream: IMAGESTREAM_NAME, verbose: 'true', destTag: 'prod', srcStream: IMAGESTREAM_NAME, srcTag: '$BUILD_ID'
  }
}
