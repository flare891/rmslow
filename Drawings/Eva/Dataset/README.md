# Eva Dataset

## Dataset Components

- Dataset UI
- Catalog Service
- Catalog Storage

## Data Store
The Catalog service stores dataset information in a MySQL table.

#### Metadata
```json5
{
  guide: "guide",
  classification: "",
  title: "",
  description: "",
  originating_org: "",
  data_steward: "",
  data_classification: "",
  locations: ["", ... ],
  formats: ["", ... ],
  rcs_values: ["", "", ... ],
  pii: "",
  system_of_record: ""
}
```
The locations and formats listed here are aggregated from the files associated to the dataset.
  
## API

### Create Dataset
```
ngimws/catalog
RequestType = POST
RequestBody = Catalog POJO
```
* Creates a new dataset

### Get Dataset by Guide
```
ngimws/catalog/{guide}
RequestType = GET
PathParamter = {guide}
```
* Get a specific dataset from the database

### Update Dataset by Guide
```
ngimws/catalog/{guide}
RequestType = UPDATE
RequestBody = Catalog POJO
```
* Updates a existing dataset

### Delete Dataset by Guide
```
ngimws/catalog/{guide}
RequestType = DELETE
```
* Deletes dataset

### Search Datasets
```
ngimws/catalog/search
RequestType = GET
PathParameter = {query}
```
* Returns search results for datasets. (This could also call the Holds service if you need to be able to search datasets via holds fields as well)

## Dataset UI

Source draw.io
here: [Draw.io Source](https://app.diagrams.net/?src=about#HRMSLowside%2Frmslow%2Fmaster%2FDrawings%2FEva%2FDataset%2FDataset.drawio)


## Eva Overarching Architecture:

Source draw.io
here: [Draw.io Source](https://app.diagrams.net/#HRMSLowside%2Frmslow%2Fmaster%2FDrawings%2FEva%2FArchitecture%2FMainArchitecture.drawio)
