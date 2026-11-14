# fa7herTV overlay

Overlay para OBS (Browser Source) da live do fa7herTV. Página estática em 1920x1080 com marca, moldura da câmera e faixa de nome.

## Uso no OBS

1. Adicione uma fonte **Navegador** (Browser Source).
2. Aponte para a URL publicada (Vercel) ou para o arquivo local `app/index.html`.
3. Defina 1920x1080.

A sincronização da webcam usa o OBS WebSocket local (`ws://127.0.0.1:4455`). A senha é digitada no painel e fica salva só no navegador (localStorage), nunca no código.

## Deploy

Projeto estático, sem build. Na Vercel, importe o repositório e faça deploy; o conteúdo de `app/` é publicado (ver `vercel.json`).
