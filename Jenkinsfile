node {
  stage('build') {
         echo "Building..."
         openshiftBuild bldCfg: '${DEPLOYMENT_CONFIG}', showBuildLogs: 'true'
         openshiftTag destStream: '${IMAGESTREAM_NAME}', verbose: 'true', destTag: '$BUILD_ID', srcStream: '${IMAGESTREAM_NAME}', srcTag: 'latest'
         openshiftTag destStream: '${IMAGESTREAM_NAME}', verbose: 'true', destTag: 'dev', srcStream: '${IMAGESTREAM_NAME}', srcTag: 'latest'
  }
  stage('deploy-test') {
      input "Deploy to test?"
      openshiftTag destStream: '${IMAGESTREAM_NAME}', verbose: 'true', destTag: 'test', srcStream: '${IMAGESTREAM_NAME}', srcTag: '$BUILD_ID'
  }
  stage('deploy-prod') {
      input "Deploy to prod?"
      openshiftTag destStream: '${IMAGESTREAM_NAME}', verbose: 'true', destTag: 'prod', srcStream: '${IMAGESTREAM_NAME}', srcTag: '$BUILD_ID'
  }
}
