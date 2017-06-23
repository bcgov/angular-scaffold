FROM nginx:mainline
COPY ./s2i/bin/ /tmp/s2i/bin
COPY nginx.conf.template /tmp/
COPY default.conf /etc/nginx/conf.d/
RUN chmod -R 0777 /tmp /var /run /etc /mnt
LABEL io.openshift.s2i.scripts-url=image:///tmp/s2i/bin
EXPOSE 8080
USER 104
