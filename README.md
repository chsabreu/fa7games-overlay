# fa7herTV overlay

Overlay para OBS (Browser Source) da live do fa7herTV. Página estática em 1920x1080 com marca, webcam dentro da moldura e faixa com o nome do jogo.

## Como funciona

- **No navegador** (o site): aparece um painel para trocar o nome do jogo, a webcam e a posição.
- **No OBS** (fonte Navegador): o painel some e fica só o overlay, com fundo transparente.
- A webcam passa por efeitos no próprio navegador: zoom que segue o rosto, desfoque do fundo (IA do MediaPipe) e correção de cor (brilho, cor, tom quente). Ajuste pelos controles do painel.
- As mudanças feitas no site chegam na hora ao overlay da live pelo **OBS WebSocket**. Os dois se conectam sozinhos e tentam de novo a cada 5 s. Quando o overlay do OBS abre, ele pede ao site o estado atual.

## Configuração no OBS (uma vez)

1. **Ferramentas → Configurações do servidor WebSocket → Ativar servidor WebSocket** (porta 4455). Copie a senha em "Mostrar informações de conexão".
2. Adicione uma fonte **Navegador** com a URL `https://fa7games-overlay.vercel.app/?senha=SUA_SENHA`, 1920x1080.
3. A webcam vem do site: deixe o site aberto no navegador (com a câmera ligada). Ele manda o vídeo para os overlays do OBS por WebRTC, combinado pelo OBS WebSocket. Não precisa de parâmetro no OBS. No Chrome, desative a Economia de memória para o site, para a aba não ser descartada.
4. No site, digite a mesma senha no painel. O status deve mostrar **OBS conectado**.

A senha fica salva só no navegador (localStorage) e na URL da fonte do OBS, nunca no código.

## Deploy

Projeto estático, sem build. A Vercel publica o conteúdo de `app/` (ver `vercel.json`).
