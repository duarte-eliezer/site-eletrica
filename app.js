
// CONFIGURAÇÃO DO WHATSAPP

const numeroWhatsApp = https://wa.me/5553991016682;

const mensagem = "Olá! Gostaria de solicitar um orçamento para um serviço elétrico.";

const botaoWhatsApp = document.getElementById("whatsapp");

botaoWhatsApp.href =
    `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

botaoWhatsApp.target = "_blank";
