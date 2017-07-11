# Get community edition of nodejs v6.x
FROM centos/nodejs-6-centos7

# Change to root for install
USER root

# Copy repo for google-chrome
COPY google-chrome.repo /etc/yum.repos.d/google-chrome.repo

# Add Chrome for headless testing
RUN yum install -y google-chrome-stable

# Back to user account
USER 1001
