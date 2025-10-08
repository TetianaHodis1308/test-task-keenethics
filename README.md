# Resume Generator

Простий веб-додаток, який формує коротке резюме у форматі `.docx` на основі анкети користувача.

## Deploy:

- Frontend:
Фронтенд побудований за допомогою Vite + React і задеплойований на GitHub Pages.
[Demo](https://tetianahodis1308.github.io/test-task-keenethics/)

- Backend:
Бекенд написаний на Node.js + Express і розгорнутий на Render.com.
[Публічна URL-адреса бекенду](https://test-task-keenethics.onrender.com)

## Функціонал

- Заповнення форми з даними (ім’я, посада, місто, навички, досвід тощо)
- Генерація файлу `.docx` з резюме на основі введених даних
- Завантаження сформованого файлу
- Мінімальна валідація на бекенді


## Технічний стек

- Frontend: React + Tailwind
- Backend: Node.js + Express
- Формат файлу: .docx (генерується за допомогою бібліотеки `docx`)


## Локальний запуск

1. Клонування репозиторію:
bash :
 - git clone https://github.com/TetianaHodis1308/test-task-keenethics.git
- cd test-task-keenethics


2. Встановлення залежностей: 
- Для бекенду:
    - cd backend
    - npm install

- Для фронтенду:
    - cd ../frontend
    - npm install

3. Запуск серверної частини
    - cd ../backend
    - node index.js

За замовчуванням сервер запуститься на порту 8081.

4. Запуск фронтенду
  - cd ../frontend
  - npm run dev
