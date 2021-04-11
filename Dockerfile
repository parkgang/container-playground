FROM node

WORKDIR /tmp

# 환경 변수 값이 정상적으로 전달되는지 확인하기 위한 변수입니다.
ENV ENV_TEST ENV_UNDEFINED

COPY ./ ./

CMD [ "node", "app.js"]