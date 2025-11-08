# 🚀 Deploy a Netlify - Pasos Rápidos

## Tu repositorio está listo:
**https://github.com/SebastianGR-FC/dev-notes-blog**

## Pasos para Deploy en Netlify:

### 1. Ve a Netlify
Abre: https://app.netlify.com

### 2. Importa tu proyecto
- Click en **"Add new site"** (arriba a la derecha)
- Selecciona **"Import an existing project"**
- Click en **"Deploy with GitHub"**
- Autoriza Netlify si te lo pide

### 3. Selecciona tu repositorio
- Busca y selecciona: **SebastianGR-FC/dev-notes-blog**
- Netlify detectará automáticamente Next.js

### 4. Configuración (debería estar automática)
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- Click en **"Deploy site"**

### 5. ¡Listo! 🎉
Tu sitio estará disponible en:
```
https://[nombre-aleatorio].netlify.app
```

## Después del Deploy:

1. **Comparte tu metadata URL** en el chat del evento:
   ```
   https://[tu-sitio].netlify.app/api/metadata.json
   ```

2. **Verifica los endpoints**:
   - Metadata: `https://[tu-sitio].netlify.app/api/metadata.json`
   - Files List: `https://[tu-sitio].netlify.app/api/files.json`
   - Individual Note: `https://[tu-sitio].netlify.app/api/notes/2024-01-15-initial-setup`

3. **Actualiza tu información** (si aún no lo hiciste):
   - Edita `lib/metadata.ts` con tu información real
   - Haz commit y push:
     ```bash
     git add lib/metadata.ts
     git commit -m "Update profile information"
     git push
     ```
   - Netlify redeployará automáticamente

## Notas:
- Los deploys son automáticos cuando haces push a `main`
- El archivo `netlify.toml` ya está configurado
- Tu código está en: https://github.com/SebastianGR-FC/dev-notes-blog

