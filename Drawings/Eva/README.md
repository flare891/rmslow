# Eva

What: 

The collection of services known as EVA is a sort of information hub - a landing zone to see high-level statistics for datasets and files, as well as a place to manage the collection of datasets and their object members. It serves as a way for users to conduct CUD operations on datasets and file object metadata, search current datasets and files, and view metrics and user-relevant tasks from a dashboard that can then route the user to the appropriate system for those tasks. Actions related to datasets and their files can subsequently trigger updates in other relevant systems such as RCS or RMM.
As long as the services operate in the appropriate domains, the locations of the individual services themselves is unimportant; operational cohesion between the services is of greater importance.

Why: 
-in progress-

How:
- Various systems and repos can send records (in a particular message format) to ingest and data processing queues (AWS SQS)
- A Nifi instance in the appropriate domain picks up the records from the queues
- if required, the records are run against a set of rules to determine the appropriate RCS value (Rules Engine)
- A user can also create / update datasets from the EVA UI itself, as well as add files and update metadata 
- Newly processed data are kept in their appropriate datastore (P&L information, Metadata, Object, or Catalog storage)
- There are also some ubiquitous service calls throughout this process (GUIDE, enterprise authentication)

## Components

- Catalog/Dataset
- Dashboard
- Object Search
- Digitzation
- Metrics

## EVA Drawings
- Architecture draw.io
here: [Draw.io Source](https://app.diagrams.net/?src=about#HRMSLowside%2Frmslow%2Fmaster%2FDrawings%2FEva%2FArchitecture%2FMainArchitecture.drawio)

- Dashboard draw.io
here: [Draw.io Source](https://app.diagrams.net/?src=about#HRMSLowside%2Frmslow%2Fmaster%2FDrawings%2FEva%2FDashboard%2FDashboard.drawio)
- Dataset draw.io
here: [Draw.io Source](https://app.diagrams.net/?src=about#HRMSLowside%2Frmslow%2Fmaster%2FDrawings%2FEva%2FDataset%2FDataset.drawio)

- Digitization draw.io
here: [Draw.io Source](https://app.diagrams.net/#HRMSLowside%2Frmslow%2Fmaster%2FDrawings%2FEva%2FDigitization%2FEva%20Digitization.drawio)

- Object Search draw.io
here: [Draw.io Source](https://app.diagrams.net/#HRMSLowside%2Frmslow%2Fmaster%2FDrawings%2FEva%2FSearch%2FEva%20Search.drawio)
