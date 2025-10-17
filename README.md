# Next stripe ecommerce

> E-commerce em Next.js & Stripe (Beats) é um projeto de e-commerce simples construído com Next.js, TypeScript e Tailwind, focado em fones da Beats. A aplicação inclui um carrinho de compras e integração de pagamento com Stripe Checkout.

### Página de produtos
<img width="400" alt="next-stripe-ecommerce-products" src="https://github.com/user-attachments/assets/37134dc3-c310-4007-9733-95a4f67568a0" />

### Página de pagamento pela Stripe
<img width="400" height="646" alt="next-stripe-ecommerce-checkout" src="https://github.com/user-attachments/assets/99259f9a-c99f-4ca2-9cfe-97b19641024c" />


### Tecnologias:

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-5469d4?style=for-the-badge&logo=stripe&logoColor=ffffff)

### 🚀 Guia Rápido de Instalação
1. Instale as dependências/pacotes do projeto:

```Bash
npm install
```

2. Para configurar as variáveis de ambiente, crie um arquivo .env na raiz do projeto e adicione suas chaves do Stripe.

```.env
STRIPE_SECRET_KEY="sk_test_..." # <sua própria chave privada (secret key) da plataforma da stripe>
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

3. Inicie o servidor de desenvolvimento:

```Bash
npm run dev
```

### 💳 Testando o Pagamento
Use os dados de cartão de teste do Stripe (disponibilizados na documentação) para simular um pagamento na página de checkout.

- E-mail: teste@teste.com
- Nome: teste
- Cartão Teste: 5200828282828210
- Data de Expiração: Qualquer data futura (ex: 12/30)
- CVC: Qualquer número (ex: 123)
