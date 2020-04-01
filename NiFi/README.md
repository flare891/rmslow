# Useful documentation
* https://guides.github.com/features/mastering-markdown/
* https://nifi.apache.org/

# Running NiFi locally
1. Download NiFi 1.11.4 binary release from: http://apache.mirrors.hoobly.com/nifi/1.11.4/nifi-1.11.4-bin.tar.gz
2. Untar the file to a location of your choice.
3. Add JAVA_HOME environment variable to your box.
4. Go to the /nifi-1.11.4/bin directory and start NiFi (On windows run the run-nifi.bat).
5. Go to http://localhost:8080/nifi/ to view the local running NiFi server.

# Configuring NiFi for your system
The "flow" that you see through the UI is coming from the flow.xml.gz located in the /conf directory of your local NiFi installation. 
To start using the one I have created take the file from flows
