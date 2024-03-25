FROM nginx

ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

RUN ls -l
COPY packages/docs/build /build
COPY docker/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]