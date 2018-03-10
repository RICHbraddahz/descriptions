FROM node:8.10

WORKDIR /amenities

RUN mkdir -p /amenities

COPY ./amenities

RUN npm install

EXPOSE 3001:3001

CMD ["npm", "start"]
