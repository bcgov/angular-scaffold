FROM nginx:mainline
COPY ./s2i/bin/ /usr/libexec/s2i
LABEL io.openshift.s2i.scripts-url=image:///usr/libexec/s2i
COPY nginx.conf.template /etc/nginx/conf.d/nginx.conf
RUN chmod -R 0777 /tmp /var /run /etc /mnt
EXPOSE 8080
USER 104
