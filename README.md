# container-playground

CI/CD를 기반하여 생성된 container를 쉽게 테스트 하기 위한 repo 입니다.

# Docker Command

```
docker build -t ruddms936/helloworld-github-action .

docker run --name node-test -d -p 5500:8080 ruddms936/helloworld-github-action

docker run --name node-test -d -p 5500:8080 -e ENV_TEST=docker_run ruddms936/helloworld-github-action
```
