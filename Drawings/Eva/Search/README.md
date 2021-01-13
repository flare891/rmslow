# Eva File

Eva File will allow authorized users to search for files stored in IDL, the future IMS Data Lake, as well as the metadata about physical holdings stored at the warehouse.

# Eva File Components

- File Service API
- Object Storage
- Metadata Storage
- Eva Search UI

## Eva File UI

Source draw.io
here: [Draw.io Source](https://app.diagrams.net/#HRMSLowside%2Frmslow%2Fmaster%2FDrawings%2FEva%2FSearch%2FEva%20Search.drawio)

## Object/Metadata Store

The File service stores the actual digital object in a table in S3, while the metadata for that file is stored separately in a MySQL table.

The following information will be stored:

#### Metadata
```json5
{
  uuid: "a unique id",
  guide: "guide",
  classification: "",
  title: "",
  description: "",
  originating_org: "",
  data_steward: "",
  location: "",
  format: "",
  data_classification: "",
  rcs_values: ["", "", ... ],
  pii: "Yes/No",
  pii_type: "",
  system_of_record: "",
  assigned_imo: "",
  is_physical: "switch that tells if the document is currently only in physical form",
  on_hold: "switch for placing a document on hold", //perhaps unnecessary, just null out hold_type?
  hold_type: "",
  hold_case_number: "",
  hold_requesting_org: "",
  hold_justification: "",
  hold_supervisor: ""
}
```

#### File Object
```json5
{
  uuid: "a unique id for the object",
  guide: "guide",
  binary: "file blob"
}
```

## Eva File API
The File web service will be written in Java and hosted inside a EC2 Apache Tomcat instance.
The endpoints below will be open to use by systems that have registered their system certificates with the File service.

### Add File
```
ngimws/ns/file
RequestType = POST
RequestBody = Metadata POJO
RequestParam('file') = MultiPartFile file
```
* Adds new file to S3 & adds new Metadata record for that file

### Get File by Guide
```
ngimws/ns/file/{guide}
RequestType = GET
PathParamter = {guide}
```
* Get a specific file from the database

### Update Metadata by Guide
```
ngimws/file/{guide}
RequestType = UPDATE
RequestBody = Metadata POJO
```
* Updates a existing file's metadata

### Add Hold
```
ngim/file/hold/{guide}
RequestType = UPDATE
RequestParam = {guide}
```
* Add hold information to a file

### Remove Hold
```
ngim/file/hold/{guide}
RequestType = DELETE
RequestParam = {guide}
```
* Removes hold information from file

### Delete File by Guide
```
ngimws/file/{guide}
RequestType = DELETE
```
* Deletes from object table if exists, then also deletes associated metadata record.

### Search Metadata
```
ngimws/file/search
RequestType = GET
PathParameter = {query}
```
* Query is translated from ICQL, then sent to the File Service.
* Results are returned with both a status and a record array.

### Search Objects
```
ngimws/search/file/object
RequestType = GET
PathParameter = {query}
```
* Query is translated from ICQL, then sent to the File Service.
* Results are returned with both a status and a record array.

#### other notes
* what about P&L? I think I need an endpoint here, but what data goes into it? Would it also be stored on the file or elsewhere?

## Eva File Architecture:

Source draw.io
here: [Draw.io Source](https://app.diagrams.net/#HRMSLowside%2Frmslow%2Fmaster%2FDrawings%2FEva%2FArchitecture%2FMainArchitecture.drawio)
