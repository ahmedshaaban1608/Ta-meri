#!/bin/bash

# Example FTP deployment
# Replace with your FTP credentials and paths
FTP_USERNAME="tameri@ta-meri.com"
FTP_PASSWORD="Tameri3600"
FTP_HOST="ftp.quranion.com"
REMOTE_DIR="/"

echo "Uploading files to cPanel via FTP..."
lftp -c "open -u $FTP_USERNAME,$FTP_PASSWORD $FTP_HOST; mirror -R dist $REMOTE_DIR"
