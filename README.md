Controle de LED via Firebase
Este projeto permite controlar o estado de um LED (ligado/desligado) utilizando o Firebase como backend. A aplicação web interage com o Firebase para alterar o estado do LED em tempo real, e o microcontrolador (como Arduino ou ESP32) é responsável por acionar o LED conforme o estado no banco de dados.

Funcionalidades
Controle do LED via interface web.
Atualização em tempo real do estado do LED usando Firebase.
Sincronização entre a interface web e o hardware (LED).
Componentes Necessários
1 x LED
1 x Resistor (330 ou 220 ohms)
1 x Microcontrolador (ESP32)
Fios e protoboard 
Fonte de alimentação (USB ou bateria)
Como Funciona
O estado do LED (ligado/desligado) é armazenado no Firebase.
A interface web permite ao usuário alterar o estado do LED.
O microcontrolador lê o estado do Firebase e controla o LED conforme o valor alterado.
