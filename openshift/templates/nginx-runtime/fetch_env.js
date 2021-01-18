function fetch_config_endpoint(r) {
  // CONFIG_ENDPOINT_HOST and CONFIG_ENDPOINT_PORT are names of the
  // environment variables injected by kubernetes.  The actual values
  // of those environment variables contain the IP and port
  var endpoint = "http://";
      endpoint += process.env[process.env.CONFIG_ENDPOINT_HOST] 
      endpoint += ":" 
      endpoint += process.env[process.env.CONFIG_ENDPOINT_PORT];

  return endpoint;
}
