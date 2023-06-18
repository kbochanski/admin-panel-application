
 #!/bin/bash  

: '
Script to run app w/o Docker.
'

# Run backend
curl --request POST \
  --url http://localhost:3030/users \
  --header 'content-type: application/json' \
  --header 'user-agent: vscode-restclient' \
  --data '{"email": "admin@manager.io","password": "secret"}'