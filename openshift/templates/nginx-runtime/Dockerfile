FROM nginx:mainline
COPY ./s2i/bin/ /tmp/s2i/bin
LABEL io.openshift.s2i.scripts-url=image:///tmp/s2i/bin
COPY nginx.conf.template /etc/nginx/conf.d/nginx.conf
RUN chmod -R 0777 /tmp /var /run /etc /mnt
EXPOSE 8080
USER 104
