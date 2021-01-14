# Holds

This is a mechanism for allowing a user to place a hold on one or multiple documents at a time.

# Holds Components

- Hold datastore
- Hold service

## Holds UI
- Dashboard draw.io
here: [Draw.io Source](https://app.diagrams.net/?src=about#HRMSLowside%2Frmslow%2Fmaster%2FDrawings%2FHolds%2FHolds.drawio)

## Hold Store

The Hold service stores the hold information tied to a record.

The following information will be stored as a Hold record in the DB:

#### Metadata
```json5
{
  guide: "",
  hold_type: "",
  hold_case_number: "",
  hold_requesting_org: "",
  hold_justification: "",
  hold_supervisor: ""
}
```
Other information for the UI can be retrieved from the Dataset data.

## Eva Hold API
The Hold web service will be written in Java and hosted inside a EC2 Apache Tomcat instance.
The endpoints below will be open to use by systems that have registered their system certificates with the Hold service.

### Add Hold
```
ngimws/hold
RequestType = POST
RequestBody = Hold POJO
```
* Adds hold for a record

### Add Hold (batch)
```
ngimws/hold/batch
RequestType = POST
RequestBody = ArrayList<Hold POJO>  /  perhaps RequestBody = Catalog POJO?
```
* Adds multiple holds at once

### Note:
Had a thought here about whether or not we could have a button that applies holds to everything in a particular search result for files. Is this something a user might want?

### Get Hold by Guide
```
ngimws/hold/{guide}
RequestType = GET
PathParamter = {guide}
```
* Get a specific hold from the database

### Update Hold by Guide
```
ngimws/hold/{guide}
RequestType = UPDATE
RequestBody = Hold POJO
```
* Updates a existing hold

### Delete Hold by Guide
```
ngimws/hold/{guide}
RequestType = DELETE
```
* Deletes hold from DB (this should also clear the case number from the record referenced, if we decide to store that on the record)

### Search Holds
```
ngimws/hold/search
RequestType = GET
PathParameter = {query}
```
* returns set of records based on query

## Drawings
- Dashboard draw.io
here: [Draw.io Source](https://app.diagrams.net/?src=about#HRMSLowside%2Frmslow%2Fmaster%2FDrawings%2FHolds%2FHolds.drawio)
