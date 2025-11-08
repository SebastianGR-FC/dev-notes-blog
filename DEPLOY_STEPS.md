# Pasos para Deploy

## 1. Instalar Vercel CLI (si no lo tienes)
```bash
npm i -g vercel
```

## 2. Login en Vercel
```bash
vercel login
```

## 3. Deploy
```bash
vercel
```

Sigue las instrucciones:
- ¿Set up and deploy? **Y**
- ¿Which scope? (elige tu cuenta)
- ¿Link to existing project? **N**
- ¿What's your project's name? (elige un nombre o presiona Enter)
- ¿In which directory is your code located? **./** (Enter)

## 4. Deploy a producción
```bash
vercel --prod
```

## 5. Después del deploy

1. Copia la URL que te da Vercel (algo como `https://tu-proyecto.vercel.app`)

2. Actualiza la metadata si aún no lo hiciste:
   - Edita `app/api/metadata.json/route.ts` con tu información real
   - Haz commit y push si usas Git
   - O haz un nuevo deploy: `vercel --prod`

3. Comparte tu metadata URL en el chat del evento:
   ```
   https://tu-proyecto.vercel.app/api/metadata.json
   ```

## Opción B: GitHub Integration

1. Crea un repositorio en GitHub
2. Haz push de tu código:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin [tu-repo-url]
   git push -u origin main
   ```
3. Ve a [vercel.com](https://vercel.com)
4. Click en "New Project"
5. Importa tu repositorio de GitHub
6. Vercel detectará automáticamente Next.js
7. Click en "Deploy"

## Verificar Endpoints

Después del deploy, verifica estos endpoints:

- ✅ Metadata: `https://tu-proyecto.vercel.app/api/metadata.json`
- ✅ Files List: `https://tu-proyecto.vercel.app/api/files.json`
- ✅ Individual Note: `https://tu-proyecto.vercel.app/api/notes/2024-01-15-initial-setup`

Todos deben devolver JSON válido con CORS habilitado.

