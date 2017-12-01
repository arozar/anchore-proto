
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
there is a local docker compose that comes from ....
volumes changed to be under the current users' folders.
### Running in production
