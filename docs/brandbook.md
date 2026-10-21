# SKILL: Lux Kitchen — Brand Book
> Повний бренд-бук для бренду **Lux Kitchen** (@luxmebli_zakaz, Тернопіль)
> Версія 1.0 · Травень 2026
> Використовувати при: написанні текстів сайту, постів, генерації коду (CSS/Tailwind), дизайн-рішеннях, контент-плануванні, будь-якій роботі з брендом.
 
---
 
## 1. ІДЕНТИЧНІСТЬ БРЕНДУ
 
### Місія
Робити кухні, які живуть 20+ років — без компромісів у матеріалах, без сюрпризів у ціні, без анонімності у відповідальності.
 
### Позиціонування
**Авторський преміум** — не масовий виробник, не безликий завод. Конкретна людина з конкретними стандартами. Кухня як архітектурний об'єкт у домі клієнта.
 
### Унікальна торгова пропозиція (УТП)
«Єдина кухня на замовлення в Тернополі, де засновник особисто відповідає за кожен проєкт, ціна фіксована в договорі, а матеріали — підтверджені сертифікатами.»
 
### Цільова аудиторія
- **Первинна:** Жінки 28–48 років, Тернопіль та область
- Домовласниці / молоді сім'ї, що роблять ремонт або переїздять
- Дохід: вище середнього (сімейний бюджет від 80 000 грн/міс)
- Цінності: якість назавжди, прозорість, довіра до конкретної людини
- Болі: страх переплатити, страх затримки, страх «як у всіх»
- **Вторинна:** Чоловіки 32–55, підприємці, які платять за кухню як подарунок або інвестицію в нерухомість
### Бренд-архетип
**Майстер (Craftsman)** — поєднання з архетипом **Правителя** у стосунках «засновник→клієнт». Не продавець, а архітектор рішення.
 
### 3 принципи бренду
1. **Специфіка замість слоганів** — «Blum SERVO-DRIVE» замість «якісна фурнітура»
2. **Засновник у кадрі** — ім'я, обличчя, особиста відповідальність
3. **Ціна до підпису, а не після** — прозорий кошторис як стандарт, а не виняток
---
 
## 2. КОЛЬОРОВА ПАЛІТРА
 
### Основні кольори (Dark Premium System)
 
| Назва токена | HEX | RGB | Застосування |
|---|---|---|---|
| `--color-bg` | `#070707` | 10, 10, 10 | Головний фон сайту / темні секції |
| `--color-surface` | `#0E0D0B` | 17, 17, 16 | Карточки, секції на темному фоні |
| `--color-surface-2` | `#161410` | 28, 26, 23 | Другорядні поверхні, hover-стани |
| `--color-border` | `#221E15` | 42, 37, 32 | Роздільники, рамки елементів |
 
### Акцентні кольори (Gold System)
 
| Назва токена | HEX | RGB | Застосування |
|---|---|---|---|
| `--gold-hot` | `#F7C300` | 196, 162, 101 | Головний акцент: кнопки, підкреслення, іконки |
| `--color-gold-light` | `#D4B97A` | 212, 185, 122 | Hover-стан золота, підсвітки |
| `--color-gold-dark` | `#9A7A45` | 154, 122, 69 | Активний стан, pressed |
| `--color-gold-muted` | `#6B5333` | 107, 83, 51 | Субтильні деталі, тіні акценту |
 
### Текстові кольори
 
| Назва токена | HEX | Застосування |
|---|---|---|
| `--color-text-primary` | `#F5F0E8` | Основний текст на темному фоні |
| `--color-text-secondary` | `#A09278` | Підзаголовки, мета-інформація |
| `--color-text-muted` | `#6B6055` | Плейсхолдери, disabled-стани |
| `--color-text-inverse` | `#070707` | Текст на світлому фоні / кнопках |
 
### Системні кольори
 
| Назва токена | HEX | Застосування |
|---|---|---|
| `--color-white` | `#FFFFFF` | Текст на gold-кнопках |
| `--color-cream` | `#F8F4EE` | Світлі секції (про нас, матеріали) |
| `--color-success` | `#4A7C59` | Підтвердження форм, гарантія |
| `--color-error` | `#8B3A3A` | Помилки форм |
 
### CSS Custom Properties (для Next.js/Tailwind)
```css
:root {
  /* Background */
  --color-bg: #070707;
  --color-surface: #0E0D0B;
  --color-surface-2: #161410;
  --color-border: #221E15;
 
  /* Gold Accent */
  --gold-hot: #F7C300;
  --gold: #E0A800;
  --gold-soft: #B07C00;
  --gold-muted: #6A4A00;
  --gold-dim: #2E2000;
  --color-gold-light: #D4B97A;
  --color-gold-dark: #9A7A45;
  --color-gold-muted: #6B5333;
 
  /* Text */
  --color-text-primary: #F5F0E8;
  --color-text-secondary: #A09278;
  --color-text-muted: #6B6055;
  --color-text-inverse: #070707;
 
  /* System */
  --color-white: #FFFFFF;
  --color-cream: #F8F4EE;
  --color-success: #4A7C59;
  --color-error: #8B3A3A;
}
```
 
### Tailwind конфіг (tailwind.config.js)
```js
colors: {
  'lux-bg': '#070707',
  'lux-surface': '#0E0D0B',
  'lux-surface-2': '#161410',
  'lux-border': '#221E15',
  'lux-gold': '#C4A265',
  'lux-gold-light': '#D4B97A',
  'lux-gold-dark': '#9A7A45',
  'lux-cream': '#F8F4EE',
  'lux-text': '#F5F0E8',
  'lux-text-2': '#A09278',
  'lux-text-3': '#6B6055',
}
```
 
### Правила використання кольорів
- **Золото — для ключових дій і акцентів.** Не більше 10–15% площі екрану.
- **Фон завжди темний** у hero, portfolio, про нас. Світлий (`--color-cream`) — лише для секцій матеріалів, FAQ, порівнянь.
- **Ніколи не поєднувати** gold on gold або dark text on dark bg без достатнього контрасту (мін. 4.5:1 WCAG AA).
- **Градієнти:** дозволені тільки vertical (top → bottom) з темним фоном; ніяких кольорових градієнтів.
---
 
## 3. ТИПОГРАФІКА
 
### Шрифтові стеки
 
| Роль | Шрифт | Вага | Стиль |
|---|---|---|---|
| **Display / Hero** | Playfair Display | 300–400 (Light/Regular) | Серіфний, витончений |
| **Headings (H1–H3)** | Playfair Display | 500–600 | Uppercase або Sentence case |
| **Body / UI** | Inter | 400–500 | Гротеск, нейтральний |
| **Labels / Caps** | Inter | 600–700 | ALL CAPS, letter-spacing: 0.12em |
| **Monospace (ціни, цифри)** | Inter / tabular-nums | 400–500 | цифрові дані |
 
### Шкала розмірів (rem/px)
 
```css
/* Display — Hero заголовки */
--text-display: clamp(3rem, 8vw, 7rem);        /* 48–112px */
--text-display-sm: clamp(2.25rem, 5vw, 4.5rem); /* 36–72px */
 
/* Headings */
--text-h1: clamp(2rem, 4vw, 3.5rem);           /* 32–56px */
--text-h2: clamp(1.5rem, 3vw, 2.5rem);         /* 24–40px */
--text-h3: clamp(1.25rem, 2vw, 1.75rem);       /* 20–28px */
 
/* Body */
--text-body-lg: 1.125rem;   /* 18px */
--text-body: 1rem;           /* 16px */
--text-body-sm: 0.875rem;    /* 14px */
 
/* Labels */
--text-label: 0.75rem;       /* 12px, CAPS */
--text-caption: 0.6875rem;   /* 11px, CAPS */
```
 
### Правила типографіки
- **Hero H1:** Playfair Display, Light (300), дуже великий, з трекінгом -0.02em
- **Section headings:** Playfair Display, 500, UPPERCASE, letter-spacing 0.04em
- **Body text:** Inter, Regular, line-height 1.65
- **Labels і бейджі:** Inter Bold, CAPS, letter-spacing 0.12em, gold або muted color
- **Ціни:** Inter, tabular-nums, Semi-Bold, gold accent
### Завантаження шрифтів (Next.js)
```js
import { Playfair_Display, Inter } from 'next/font/google';
 
export const playfair = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-display',
});
 
export const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-body',
});
```
 
---
 
## 4. ЛОГОТИП І АЙДЕНТИКА
 
### Логотип — концепція
**Lux Kitchen** — два рівні:
- **Lux** — великими літерами, Playfair Display, Light, letter-spacing розширений
- **Kitchen** — нижче або поруч, Inter, Regular або Light, значно менший (50–60% від Lux)
- Опціонально: тонка горизонтальна лінія між словами або під Lux (1px, gold)
### Варіанти логотипу
| Варіант | Застосування |
|---|---|
| **Повний (Lux Kitchen)** | Хедер сайту, OG-image, документи |
| **Монограма (LK)** | Favicon, аватар IG, іконка застосунку |
| **Вертикальний стек** | Друкована продукція, документи |
| **Водяний знак** | Накладання на фото портфоліо |
 
### Охоронне поле логотипу
Мінімальний відступ навколо логотипу = висота літери «L» у слові «Lux».
 
### Заборонено для логотипу
- Розтягувати або стискати
- Змінювати кольори за межами затверджених варіантів
- Накладати на строкатий фон без підкладки
- Використовувати тіні, обводки, 3D-ефекти
### Кольорові варіанти логотипу
| Фон | Логотип |
|---|---|
| Темний (#070707) | Крем (#F5F0E8) або Gold (#C4A265) |
| Золотий (#C4A265) | Темний (#070707) |
| Білий/Крем (#F8F4EE) | Темний (#070707) або Gold (#C4A265) |
 
---
 
## 5. ГОЛОС БРЕНДУ (BRAND VOICE)
 
### Характер голосу
**Впевнений майстер** — говорить як людина, яка знає свою справу. Не продає — пояснює. Не хвалиться — демонструє.
 
### Тональні параметри
 
| Параметр | Lux Kitchen | НЕ Lux Kitchen |
|---|---|---|
| Специфічність | «Blum SERVO-DRIVE, 50 кг навантаження» | «якісна фурнітура» |
| Прозорість | «від 850 $/п.м. у преміум-комплектації» | «ціна за запитом» |
| Особистість | «Я — [Ім'я], і я особисто перевіряю кожну кухню» | «наша компанія» |
| Інженерна точність | «Fenix — матова поверхня, антибактеріальна» | «стильні фасади» |
| Теплота | «Ця кухня — для сімейних сніданків на 20 років» | «функціональне рішення» |
 
### Мова комунікації
- **Основна мова:** Українська (всі тексти сайту, пости, підписи)
- **Дозволено:** Англійські терміни для матеріалів (Fenix, Alvic, HPL) — без перекладу
- **Заборонено:** Суржик, канцеляризми («здійснити замовлення», «надати послугу»)
### Приклади голосу в дії
 
**Hero CTA:**
✅ «Кухня з Blum та Fenix — від 850 $/п.м. Без сюрпризів після підписання»
❌ «Замовте якісну кухню за доступною ціною»
 
**Про нас:**
✅ «Я будую кухні, які я сам хотів би мати вдома. Кожен шов, кожна петля — під моїм контролем.»
❌ «Наша компанія на ринку меблів вже багато років»
 
**Переваги:**
✅ «Blum SERVO-DRIVE — 100 000 циклів. Це 27 років щоденного використання»
❌ «Ми використовуємо тільки найкращу фурнітуру»
 
**Ціни:**
✅ «Базова комплектація — від 650 $/п.м.: EGGER корпус, AGT фасад, Blum петлі. Що саме входить — в таблиці нижче.»
❌ «Ціни залежать від комплектації. Дзвоніть для розрахунку.»
 
### Ключові фрази бренду (seed phrases)
```
— Один проєкт — один архітектор
— Дата монтажу в договорі
— Fenix / Alvic / Blum — не слова, а сертифікати
— Я особисто відповідаю
— Кухня на 20+ років
— Прозорий кошторис до підпису
— Без посередників — ми виробляємо самі
```
 
---
 
## 6. UI-КОМПОНЕНТИ
 
### Кнопки
 
```css
/* Primary Button — CTA */
.btn-primary {
  background: var(--color-gold);
  color: var(--color-text-inverse);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.875rem 2rem;
  border-radius: 2px; /* мінімальний округлення — luxury стиль */
  border: none;
  transition: background 0.2s ease;
}
.btn-primary:hover {
  background: var(--color-gold-light);
}
 
/* Secondary Button — outline */
.btn-secondary {
  background: transparent;
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
  /* решта як .btn-primary */
}
.btn-secondary:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
}
 
/* Ghost Button — dark sections */
.btn-ghost {
  background: transparent;
  color: var(--color-gold);
  border: 1px solid var(--color-gold-muted);
}
```
 
### Картки проєктів (Project Card)
```css
.project-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  overflow: hidden;
  transition: border-color 0.2s ease;
}
.project-card:hover {
  border-color: var(--color-gold-muted);
}
.project-card__label {
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
}
.project-card__title {
  font-family: var(--font-display);
  font-size: 1.375rem;
  font-weight: 500;
  color: var(--color-text-primary);
}
```
 
### Секційна структура (Section Anatomy)
Кожна секція має:
1. **Section label** — маленький uppercase label з gold акцентом (напр: `◆ ПОРТФОЛІО`)
2. **Section heading** — Playfair Display
3. **Body content**
4. **CTA або навігація**
```css
.section-label {
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-gold);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.section-label::before {
  content: '◆';
  font-size: 0.5rem;
}
```
 
### Розмітка сітки (Grid System)
```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
@media (min-width: 768px) {
  .container { padding: 0 3rem; }
}
@media (min-width: 1280px) {
  .container { padding: 0 4rem; }
}
 
/* Section spacing */
--section-gap: clamp(5rem, 10vw, 9rem);
```
 
### Форми і inputs
```css
.form-input {
  background: var(--color-surface-2);
  border: 1px solid var(--color-border);
  border-radius: 2px;
  color: var(--color-text-primary);
  padding: 0.875rem 1rem;
  font-family: var(--font-body);
  font-size: 0.9375rem;
  transition: border-color 0.2s ease;
}
.form-input:focus {
  outline: none;
  border-color: var(--color-gold);
}
.form-input::placeholder {
  color: var(--color-text-muted);
}
```
 
### Тег бейдж (матеріали, стилі)
```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.625rem;
  border: 1px solid var(--color-border);
  border-radius: 2px;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
}
.badge--gold {
  border-color: var(--color-gold-muted);
  color: var(--color-gold);
}
```
 
### Роздільники
```css
/* Тонка золота лінія */
.divider-gold {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--color-gold-muted) 30%,
    var(--color-gold-muted) 70%,
    transparent
  );
}
 
/* Стандартний темний роздільник */
.divider {
  height: 1px;
  background: var(--color-border);
}
```
 
---
 
## 7. ФОТОГРАФІЧНИЙ СТИЛЬ
 
### Принципи зйомки
1. **Природне світло** + штучне підсвічування як доповнення
2. **Темний фон** або нейтральний (бетон, штукатурка, дерево) — без яскравих шпалер
3. **Деталі кадру:** фурнітура крупним планом, текстура матеріалу, шов між фасадами
4. **Люди в кадрі** — живий стиль, не постановочний (рання кава, ранок на кухні)
5. **Перед/після** завжди під одним кутом та освітленням
### Ракурси для портфоліо
| Ракурс | Призначення |
|---|---|
| Широкий (весь простір) | Hero-фото проєкту |
| 3/4 (кут, перспектива) | Картка проєкту |
| Деталь (петля, ручка, шов) | Instagram Reels, матеріали |
| З людиною (хазяйка/хазяїн) | Відгуки, соц. докази |
| До/Після (split view) | Кейси на сайті |
 
### Обробка (пресет)
- **Тон:** тепло-нейтральний (не холодний синій, не надмірно теплий жовтий)
- **Тіні:** глибокі, не чорні (зберігати деталь у тінях)
- **Highlights:** стриманий, без пересвіту
- **Насиченість:** -5 до -10 від нейтрального (елегантна стриманість)
- **Grain:** мінімальний (додає характер на великих планах)
---
 
## 8. INSTAGRAM / СОЦМЕРЕЖІ
 
### Профіль (@luxmebli_zakaz)
- **Bio:** [Ім'я засновника] · Кухні на замовлення · Тернопіль
  Blum · Fenix · Alvic · Від [X]$/п.м.
  📩 DM або посилання → [сайт]
- **Highlight обкладинки:** монохромні, dark, підписані CAPS (КЕЙСИ / ЦІНИ / МАТЕРІАЛИ / ПРО НАС / ВІДГУКИ)
### Сітка контенту (3-колонний ритм)
| Пост 1 | Пост 2 | Пост 3 |
|---|---|---|
| Проєкт (широкий) | Деталь/матеріал | Засновник / процес |
 
### Формати контенту
| Формат | Частота | Мета |
|---|---|---|
| Reels «процес» | 2/тиж | Охоплення, довіра |
| Карусель «кейс» | 1/тиж | Конверсія, SEO |
| Статичне фото проєкту | 2/тиж | Естетика профілю |
| Сторі «засновник» | 3–5/тиж | Зв'язок, довіра |
| Reels «матеріал» | 1/2 тиж | Освіта, відмінність |
 
### Підпис (Caption Framework)
```
Рядок 1: Гачок — конкретний факт або питання
Рядок 2–3: (пустий для розриву)
Основний текст: 2–4 речення. Специфічно. Без кліше.
Детальна інформація: матеріали, фурнітура, розмір
.
.
#кухнінazamovlennya #тернопіль #luxkitchen #кухніблюм #кухніфенікс #мебліназамовлення
```
 
---
 
## 9. МАТЕРІАЛЬНА СИСТЕМА (референс для текстів)
 
### Затверджені матеріали бренду
 
**Фасади:**
| Матеріал | Бренд | Позиціонування |
|---|---|---|
| HPL / Fenix NTM | Arpa Industriale (Італія) | Матова антибактеріальна поверхня, nano-tech |
| Alvic 3D Acrylic | Alvic (Іспанія) | Глянець преміум-класу, стійкий до подряпин |
| Шпон дуба/горіха | European veneer | Натуральне дерево, унікальна текстура |
| Фарбований МДФ | — | Будь-який колір RAL/NCS, матовий/глянець |
 
**Фурнітура:**
| Бренд | Продукт | Перевага |
|---|---|---|
| Blum (Австрія) | SERVO-DRIVE, TANDEMBOX, CLIP top BLUMOTION | 100 000+ циклів, безшумне закриття |
| Hettich (Германія) | ArciTech, InnoTech | Альтернатива Blum у тій же якості |
 
**Корпусні матеріали:**
- EGGER / Kronospan — ламінована ДСП E1 (низькі емісії)
- HDF задні стінки (замість картону)
**Стільниці:**
- Компакт-пластик (12–20 мм) — водостійкість 100%
- Кварцовий камінь (Silestone, Caesarstone)
- Кераміка (Dekton, Sapienstone) — стійкість до температур
---
 
## 10. ЗАБОРОНЕНО ДЛЯ БРЕНДУ
 
- ❌ Слова: «якісний», «доступний», «надійний», «індивідуальний підхід» без конкретики
- ❌ Stock-фото кухонь (не власне виробництво)
- ❌ Шрифти: Comic Sans, Helvetica Neue Condensed, будь-який декоративний «золотий» шрифт
- ❌ Яскраві кольори (червоний, синій, зелений) у брендових матеріалах
- ❌ Текст «зателефонуйте для уточнення ціни» без хоча б орієнтиру
- ❌ Аноніміть: публікації без підпису засновника або команди
- ❌ Емодзі в заголовках на сайті
- ❌ Зображення без авторських прав або без дозволу клієнта
---
 
## 11. QUICK REFERENCE ДЛЯ CLAUDE
 
При роботі з будь-яким завданням для Lux Kitchen:
 
**Кольори → завжди:** `#070707` фон, `#C4A265` gold акцент, `#F5F0E8` текст  
**Шрифти → завжди:** Playfair Display (display), Inter (body)  
**Голос → завжди:** специфічно, прозоро, від першої особи засновника  
**Мова → завжди:** Українська  
**Матеріали → завжди:** Blum, Fenix, Alvic як маркери преміуму  
**CTA → завжди:** конкретна дія + орієнтир ціни або терміну  
**Заборонено → завжди:** «якісний», «надійний», «зателефонуйте» без ціни
 
---
 
*Бренд-бук Lux Kitchen v1.0 · @luxmebli_zakaz · Тернопіль · Травень 2026*
*Оновлювати при зміні палітри, шрифтів, стратегії або УТП*