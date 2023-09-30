#!/bin/bash

# Example FTP deployment
# Replace with your FTP credentials and paths
FTP_USERNAME="${FTP_USERNAME}"
FTP_PASSWORD="${FTP_PASSWORD}"
FTP_HOST="${FTP_HOST}"
REMOTE_DIR="${REMOTE_DIR}"

echo "Uploading files to cPanel via FTP..."
lftp -c "set ssl:verify-certificate no; open -u $FTP_USERNAME,$FTP_PASSWORD $FTP_HOST; mirror -R dist/ta-meri/* $REMOTE_DIR"
