
# Summary
This is a basic front end application that can display the results of a couple of API calls to the Anchore Engine REST API

## Supported methods
### Get All Images
The home page of the UI makes a query to the endpoint `/images` and displays the results of this call in a table.

Clicking on one of the rows will take the user to the Image Vulnerabilities page.

### Image Vulnerabilities
This page will make a call to the endpoint `/images/{imageDigest}/vuln/os` and will display the vulnerabilities of an image visualized in a table.

Clicking on a row in the table will open a new browser tab and take the user to an external website with details of the specific vulerability.

## Setup
### Environment variables
The build process of the frontend is reliant on the following environment variables being set.

e.g:
- export ANCHORE_CLI_URL=http://localhost:8228/v1
- export ANCHORE_CLI_USER=admin
- export ANCHORE_CLI_PASS=happy123

These values will ensure web requests will be able to authenticate and will go to the correct place.

### Running in Development
#### Anchore dependencies
There is a local docker compose (docker-compose.yml) that is derived from the(https://github.com/anchore/anchore-engine/blob/master/scripts/docker-compose/docker-compose.yaml)[file in the anchore dashboard repo]. Volumes in this file have been changed to be under the current users' folders.

If you do not have this running already then the npm script `anchore` can be used to start the app and the npm script `anchore:stop` can be used to stop the containers.

#### Web application
The web application can be started by using the `dev` npm script.

The file `server.es6.js` uses the `http-proxy-middleware` package to ensure that calls to the local web application under the url `/api` will be sent to the Anchore REST API.
### Running in production mode
The file `docker-compose.prod.yml` uses can be run with `docker-compose.yml` which will result in the web application being run behind nginx after being dockerized.

The npm script `start` is used to execute the website within it's container.

This can be run using the npm script `start:all` and stopped using the script `stop:all`.