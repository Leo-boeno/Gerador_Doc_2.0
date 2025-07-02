# Estrutura de CSS - Tema Azul e Branco

Este diretório contém todos os estilos do projeto organizados de forma modular para evitar interferências entre componentes.

## Estrutura de Arquivos

```
styles/
├── theme.css          # Variáveis CSS e tema principal
├── base.css           # Estilos base e reset
├── components.css     # Componentes comuns (botões, formulários, etc.)
├── main.css           # Arquivo principal que importa todos os estilos
└── README.md          # Esta documentação
```

## Tema de Cores

### Cores Principais
- **Primary Blue**: `#1e3a8a` - Azul principal para títulos e elementos importantes
- **Secondary Blue**: `#3b82f6` - Azul secundário para botões e links
- **Light Blue**: `#60a5fa` - Azul claro para hover e estados
- **Very Light Blue**: `#dbeafe` - Azul muito claro para fundos

### Cores Neutras
- **White**: `#ffffff` - Branco puro
- **Off White**: `#f8fafc` - Branco suave para fundos
- **Light Gray**: `#e2e8f0` - Cinza claro para bordas
- **Gray**: `#64748b` - Cinza médio para texto secundário
- **Dark Gray**: `#334155` - Cinza escuro para texto principal

### Cores de Estado
- **Success Green**: `#10b981` - Verde para sucesso
- **Error Red**: `#ef4444` - Vermelho para erros
- **Warning Orange**: `#f59e0b` - Laranja para avisos

## Como Usar

### 1. Importar no Componente
```css
/* No arquivo CSS do seu componente */
@import '../../styles/theme.css';

.meu-componente {
  background-color: var(--white);
  color: var(--primary-blue);
  border: 1px solid var(--light-gray);
}
```

### 2. Usar Classes Utilitárias
```jsx
<div className="card hover-lift">
  <h2 className="text-blue">Título</h2>
  <button className="btn btn-primary">Botão</button>
</div>
```

### 3. Usar Variáveis CSS
```css
.meu-estilo {
  background-color: var(--secondary-blue);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-medium);
  transition: all var(--transition-normal);
}
```

## Classes Utilitárias Disponíveis

### Cores
- `.text-blue` - Texto azul principal
- `.text-blue-light` - Texto azul claro
- `.bg-blue` - Fundo azul principal
- `.bg-blue-light` - Fundo azul claro
- `.bg-blue-very-light` - Fundo azul muito claro
- `.border-blue` - Borda azul

### Espaçamento
- `.mb-1`, `.mb-2`, `.mb-3`, `.mb-4` - Margem inferior
- `.mt-1`, `.mt-2`, `.mt-3`, `.mt-4` - Margem superior

### Alinhamento
- `.text-center` - Texto centralizado
- `.text-left` - Texto à esquerda
- `.text-right` - Texto à direita

### Animações
- `.fade-in` - Animação de fade in
- `.slide-in` - Animação de slide in
- `.hover-lift` - Efeito de elevação no hover

## Componentes CSS Disponíveis

### Formulários
- `.form-group` - Grupo de formulário
- `.form-label` - Label de formulário
- `.form-input` - Input de texto
- `.form-select` - Select dropdown
- `.form-textarea` - Área de texto

### Botões
- `.btn` - Botão base
- `.btn-primary` - Botão primário (azul)
- `.btn-secondary` - Botão secundário (cinza)
- `.btn-success` - Botão de sucesso (verde)
- `.btn-danger` - Botão de perigo (vermelho)
- `.btn-sm` - Botão pequeno
- `.btn-lg` - Botão grande

### Cards
- `.card` - Card base
- `.card-header` - Cabeçalho do card
- `.card-title` - Título do card

### Alertas
- `.alert` - Alerta base
- `.alert-success` - Alerta de sucesso
- `.alert-error` - Alerta de erro
- `.alert-warning` - Alerta de aviso
- `.alert-info` - Alerta informativo

### Listas
- `.list` - Lista base
- `.list-item` - Item da lista

## Responsividade

O tema inclui breakpoints responsivos:
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Mobile Small**: < 480px

## Manutenção

Para adicionar novas cores ou variáveis:
1. Edite `theme.css`
2. Atualize esta documentação
3. Teste em todos os componentes

Para adicionar novos componentes:
1. Crie o CSS no arquivo apropriado
2. Importe no `main.css` se necessário
3. Documente aqui

## Benefícios da Estrutura Modular

1. **Isolamento**: Cada componente tem seu próprio CSS
2. **Manutenibilidade**: Fácil de encontrar e modificar estilos
3. **Consistência**: Tema unificado em todo o projeto
4. **Performance**: CSS otimizado e organizado
5. **Escalabilidade**: Fácil de adicionar novos componentes 