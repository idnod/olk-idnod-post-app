# 🚀 Instrucciones para Ver tu Página de Enlaces

## ✅ **El servidor está funcionando correctamente**

Tu página de enlaces está disponible en:

### 🌐 **URLs Disponibles:**

1. **Página Principal**: `http://localhost:1313/`
2. **Página de Prueba**: `http://localhost:1313/test.html`

## 🎨 **Características Implementadas:**

### ✅ **Diseño Moderno**
- Header con tu nombre a la izquierda y foto a la derecha
- Gradientes y efectos de cristal (glassmorphism)
- Animaciones suaves y efectos hover

### ✅ **Links Interactivos**
- **Click en el nombre del link**: Te lleva directamente a la web
- **Click en el ícono de información**: Abre un modal con descripción e imagen
- Efectos visuales impresionantes

### ✅ **Modales Informativos**
- Modal con imagen a la izquierda y descripción a la derecha
- Botón "Visitar" para ir al enlace
- Animaciones de entrada y salida

## 🔧 **Cómo Personalizar:**

### 1. **Cambiar tu información** en `config.toml`:
```toml
[params]
  author = "Tu Nombre"
  description = "Tu descripción"
  profileImage = "/images/profile.jpg"
```

### 2. **Agregar nuevos links** en `config.toml`:
```toml
[[params.links]]
id = "mi-nuevo-link"
title = "Mi Nuevo Link"
description = "Descripción del link"
url = "https://ejemplo.com"
icon = "fab fa-github"
image = "/images/mi-imagen.jpg"
```

### 3. **Agregar tus imágenes** en `static/images/`:
- `profile.jpg` - Tu foto de perfil (120x120px)
- `github.jpg`, `linkedin.jpg`, etc. - Imágenes para los modales

## 🎯 **Funcionalidades:**

- **Responsive**: Se ve perfecto en móviles y desktop
- **Animaciones**: Transiciones suaves y efectos hover
- **Modales**: Información detallada de cada link
- **Iconos**: Sistema de iconos de Font Awesome
- **Deploy Automático**: GitHub Actions ya configurado

## 🚀 **Para Desplegar:**

1. **Haz commit y push** a tu repositorio
2. **GitHub Pages** se desplegará automáticamente
3. **Tu página estará disponible** en `https://lherc.github.io/olk-lherc-post-app/`

## 📱 **Prueba la Página:**

1. **Abre tu navegador**
2. **Ve a**: `http://localhost:1313/`
3. **Interactúa** con los links y modales
4. **Disfruta** de los efectos visuales

¡Tu página de enlaces está lista y funcionando perfectamente! 🎉
