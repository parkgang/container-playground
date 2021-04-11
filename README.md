# container-playground

CI/CD를 기반하여 생성된 container를 쉽게 테스트하기 위한 repo 입니다.

# Docker Command

```
# Build
docker build -t ghcr.io/ruddms936/container-playground/image:latest .
# Run
docker run --name node-test -d -p 5500:8080 ghcr.io/ruddms936/container-playground/image:latest
# Run (환경 변수 주입)
docker run --name node-test -d -p 5500:8080 -e ENV_TEST=docker_run ghcr.io/ruddms936/container-playground/image:latest
```
