# Eva Search

Eva Search will allow authorized users to search for files stored in IDL, the future IMS Data Lake, as well as the metadata about physical holdings stored at the warehouse.

# Eva Search Components

- File Service API
- Object Storage
- Metadata Storage
- Eva Search UI

## Eva Search UI

Source draw.io
here: [Draw.io Source](https://app.diagrams.net/#HRMSLowside%2Frmslow%2Fmaster%2FDrawings%2FEva%2FSearch%2FEva%20Search.drawio)

## Eva Search API
The Search web service will be written in Java and hosted inside a EC2 Apache Tomcat instance.
The endpoints below will be open to use by systems that have registered their system certificates with the Search service.

Notes: 
* Each use of these API endpoints will also trigger a call to Enterprise Authentication. 
* Query syntax should follow ICQL structure and guidelines. 

### Search Catalog
```
ngimws/search/catalog
RequestType = GET
PathParameter = {query}
```
* Sends the raw ICQL query to the Catalog Service; translation of the query occurs there, based on whether the query is going to our own store or an external one.
* The respective queries are run against both our own Catalog store, and an external Customer Catalog store.
* Results are returned with both a status and a record array.

### Search Index
```
ngimws/search/index
RequestType = GET
PathParameter = {query}
```
* Query is translated from ICQL if necessary, then sent to an external Indexing service. 
* Results are returned with both a status and a record array.

### Search Metadata
```
ngimws/search/file/metadata
RequestType = GET
PathParameter = {query}
```
* Query is translated from ICQL to SQL, then sent to the File Service.
* Results are returned with both a status and a record array.

### Search Objects
```
ngimws/search/file/object
RequestType = GET
PathParameter = {query}
```
* Query is translated from ICQL, then sent to the File Service.
* Results are returned with both a status and a record array.


### File Service API
* CRUD Operations
* search Objects (endpoint for Search Service to call)
* search Metadata (endpoint for Search Service to call)
### Object Store
### Metadata Store

### Catalog Service API (Note: this has its own page, perhaps remove this section)
* CRUD Operations
* search Catalog (endpoint for Search; runs two searches - one against our own store, and sends one to external Customer Catalog Service)
### Catalog Store

## Eva Overarching Architecture:

Source draw.io
here: [Draw.io Source](https://app.diagrams.net/#HRMSLowside%2Frmslow%2Fmaster%2FDrawings%2FEva%2FArchitecture%2FMainArchitecture.drawio)
