FROM nginx:mainline
COPY nginx.conf.template /etc/nginx/conf.d/nginx.conf
RUN chmod -R 0777 /tmp /var /run /etc /mnt
EXPOSE 8080
USER 104
