# Get community edition of nodejs v6.x
FROM centos/nodejs-6-centos7

# Change to root for install
USER root

# Add Chrome for headless testing
RUN yum install google-chrome-stable

# Back to user account
USER 1001
