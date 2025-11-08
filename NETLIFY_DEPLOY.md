# Deploy a Netlify

## Opción 1: Netlify CLI (Recomendado)

### 1. Instalar Netlify CLI
```bash
npm install -g netlify-cli
```

### 2. Login en Netlify
```bash
netlify login
```

### 3. Inicializar el proyecto
```bash
netlify init
```

Sigue las instrucciones:
- **Create & configure a new site** → Sí
- **Team** → Elige tu equipo
- **Site name** → (opcional, o presiona Enter para nombre aleatorio)
- **Build command** → `npm run build` (o Enter si detecta automáticamente)
- **Directory to deploy** → `.next` (o Enter si detecta automáticamente)

### 4. Deploy
```bash
netlify deploy --prod
```

## Opción 2: GitHub Integration (Más fácil)

### 1. Sube tu código a GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin [tu-repo-url]
git push -u origin main
```

### 2. Ve a Netlify
1. Ve a [app.netlify.com](https://app.netlify.com)
2. Click en **"Add new site"** → **"Import an existing project"**
3. Conecta tu repositorio de GitHub
4. Netlify detectará automáticamente Next.js
5. Configuración automática:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Click en **"Deploy site"**

### 3. Configuración adicional (opcional)
En la configuración del sitio en Netlify:
- **Site settings** → **Build & deploy** → **Environment variables**
  - Puedes agregar `NEXT_PUBLIC_BASE_URL` con tu URL de Netlify si lo necesitas

## Después del Deploy

1. Tu sitio estará disponible en: `https://[tu-sitio].netlify.app`

2. **Actualiza la metadata** si aún no lo has hecho:
   - Edita `lib/metadata.ts` con tu información real
   - Haz commit y push
   - Netlify redeployará automáticamente

3. **Comparte tu metadata URL** en el chat del evento:
   ```
   https://[tu-sitio].netlify.app/api/metadata.json
   ```

## Verificar Endpoints

Después del deploy, verifica estos endpoints:

- ✅ Metadata: `https://[tu-sitio].netlify.app/api/metadata.json`
- ✅ Files List: `https://[tu-sitio].netlify.app/api/files.json`
- ✅ Individual Note: `https://[tu-sitio].netlify.app/api/notes/2024-01-15-initial-setup`

Todos deben devolver JSON válido con CORS habilitado.

## Notas

- Netlify usa el plugin `@netlify/plugin-nextjs` para soportar Next.js correctamente
- El archivo `netlify.toml` ya está configurado
- Los deploys son automáticos cuando haces push a la rama principal (si usas GitHub integration)

