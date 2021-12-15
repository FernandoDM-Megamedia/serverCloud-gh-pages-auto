# serverCloud

# serverCloud

Segunda parte 02 Github actions

Url de pruebas
https://fernandodm-megamedia.github.io/serverCloud-gh-pages-auto/#/

Se crea el fichero ci.yml con la siguiente estructura .-

### serverCloud-gh-pages-auto/.github/workflows/ci.yml

```yaml
# Continuos Deployment workflow
name: Continuos Deployment workflow

on:
  push:
    branches:
      - master

jobs: 
  cd: 
    runs-on: ubuntu-latest
    steps:
      - name: Clone repository
        uses: actions/checkout@v2
      - name: Use SSH key
        run: |
          mkdir -p ~/.ssh/
          echo "${{secrets.SSH_PRIVATE_KEY}}" > ~/.ssh/id_rsa
          sudo chmod 600 ~/.ssh/id_rsa
      - name: Git config
        run: |
          git config --global user.email "cd-user@my-app.com"
          git config --global user.name "cd-user"
      - name: Install
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy
        run: npm run deploy -- -r git@github.com:FernandoDM-Megamedia/serverCloud-gh-pages-auto.git
```
Se crean en la configutacion.-

SSH_PRIVATE_KEY
SSH_PUBLIC_KEY

Cada vez que se haga push sobre la rama master se despliega la aplicación en .-

https://fernandodm-megamedia.github.io/serverCloud-gh-pages-auto/#/

Nota se modifica el readme desde github y se mergea a master para ver la ejecución.

