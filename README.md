# Ping Pong paso a paso

Este proyecto ya tiene una base funcional. Ahora vas a aprender con pasos muy claros.

## 1. Instala las dependencias

Ejecuta en la terminal:

```bash
pip install -r requirements.txt
```

## 2. Ejecuta la app

```bash
python app.py
```

Luego abre la URL que te muestre Flask.

## 3. Revisa la estructura

- [app.py](app.py): inicia Flask.
- [templates/index.html](templates/index.html): define la página y el canvas.
- [static/game.js](static/game.js): contiene la lógica del juego.
- [static/style.css](static/style.css): da estilo a la interfaz.

## 4. Cambios que puedes hacer tú

1. Cambia los colores de fondo y de la pelota.
2. Aumenta la velocidad de la pelota.
3. Haz que las paletas sean más altas o más anchas.
4. Agrega un sonido al golpear la pelota.
5. Implementa una pantalla de "Game Over".

## 5. Siguiente reto

Intenta modificar una sola cosa a la vez. Por ejemplo:

- cambia `paddleSpeed` para que las paletas se muevan más rápido;
- cambia `ballRadius` para que la pelota sea más grande;
- cambia `fillStyle` para personalizar el diseño.

Si quieres, el siguiente paso es agregar un modo de un jugador contra la computadora.

