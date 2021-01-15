# Holds

This is a mechanism for allowing a user to place a hold on one or multiple documents at a time.

# Holds Components

- Holds UI
- Hold datastore
- Hold service

## Holds UI
- Dashboard draw.io
here: [Draw.io Source](https://app.diagrams.net/?src=about#HRMSLowside%2Frmslow%2Fmaster%2FDrawings%2FHolds%2FHolds.drawio)

## Hold Store

There are two ways this could be accomplished: 
- Method 1: Hold is placed on a system query, query/queries executed to determine which documents are on hold, separate lookup for held / locked documents
- Method 2: Hold is placed on the documents themselves

Method 1:

The Hold service stores the hold information tied to a record.

The following information represents a single Hold:

#### Metadata
```json5
{
  system: "",
  queries: [
    {
      query: "",
      enabled: true/false
    }
    ...
  ],
  holdCaseNumber: "",
  holdRequestingOrg: "",
  holdJustification: "",
  holdSupervisor: ""
}
```

As for what is stored in the actual database, there are two tables: one that stores the hold case information, then another lookup table for the documents.

### Hold Case table record:
```
  id
  case_number
  system_name
  query
  requesting_org
  justification
  supervisor
```

### Document Lookup table record:
```
  id
  case_number (FK)
  doc_guide
```

Method 2:

Single Hold per document:

#### Metadata
```json5
{
  guide: "",
  holdType: "",
  holdCaseNumber: "",
  holdRequestingOrg: "",
  holdJustification: "",
  holdSupervisor: ""
}
```
Other information for the UI can be retrieved from the Dataset data.

All holds are stored in one table in this method, as it is done on a per-document basis.

## Eva Hold API
The Hold web service will be written in Java and hosted inside a EC2 Apache Tomcat instance.
The endpoints below will be open to use by systems that have registered their system certificates with the Hold service.

### Add Hold
```
ngimws/hold
RequestType = POST
RequestBody = Hold POJO
ResponseType = Hold POJO
```
* Adds hold for a record
* Returns record added (to be opened)

### Get Hold by Guide
```
ngimws/hold/{guide}
RequestType = GET
PathParamter = {guide}
ResponseType = Hold POJO
```
* Get a specific hold from the database

### Get Documents by Hold Case #
```
ngimws/hold/docs/{guide}
RequestType = GET
PathParamter = {guide}
ResponseType = ArrayList<File Pojo>
```
* Get a specific hold from the database

### Update Hold by Guide
```
ngimws/hold/{guide}
RequestType = UPDATE
RequestBody = Hold POJO
ResponseType = Hold POJO
```
* Updates a existing hold
* Returns updated hold

### Delete Hold by Guide
```
ngimws/hold/{guide}
RequestType = DELETE
ResponseType = Response wrapper with status 200/500/etc
```
* Deletes hold from DB
* Removes all holds from lookup table associated with the given hold #

### Search Holds
```
ngimws/hold/search
RequestType = GET
PathParameter = {query}
ResponseType = ArrayList<Hold POJO>
```
* returns set of records based on query

## Drawings
- Dashboard draw.io
here: [Draw.io Source](https://app.diagrams.net/?src=about#HRMSLowside%2Frmslow%2Fmaster%2FDrawings%2FHolds%2FHolds.drawio)

----------------------------------------------------------------------------

Additional notes on Method 2:

## Eva Hold API
The Hold web service will be written in Java and hosted inside a EC2 Apache Tomcat instance.
The endpoints below will be open to use by systems that have registered their system certificates with the Hold service.

Some small differences here from the above:

### Add Hold (batch)
```
ngimws/hold/batch
RequestType = POST
RequestBody = ArrayList<Guide # Strings>
```
* Adds multiple holds at once

### Delete Hold by Guide
```
ngimws/hold/{guide}
RequestType = DELETE
```
* Deletes hold from DB (this should also clear the case number from the record referenced, if we decide to store that on the record)
